export function calculatePosition(toast, anchor, position, viewport, preferredPosition = 'top') {
    const anchorRect = typeof anchor === 'function' ? anchor().getBoundingClientRect() : anchor.getBoundingClientRect();
    const toastRect = toast.getBoundingClientRect();
    const gap = 12;
    const safeMargin = 20; // Add safe margin from viewport edges
    const isMobile = window.innerWidth <= 768;

    // Calculate available space above and below anchor
    const spaceAbove = anchorRect.top;
    const spaceBelow = viewport.height - anchorRect.bottom;

    // Determine if preferred position is possible
    const usePreferred = preferredPosition === 'top' ? 
        spaceAbove >= toastRect.height : 
        spaceBelow >= toastRect.height;

    // Use preferred position if possible, otherwise use position with most space
    const shouldPositionTop = usePreferred ? 
        preferredPosition === 'top' : 
        spaceAbove > spaceBelow;

    // Calculate position relative to viewport
    let coords = {
        top: shouldPositionTop ? anchorRect.top - toastRect.height - gap : anchorRect.bottom + gap,
        left: anchorRect.left, // Remove window.scrollX
        dropletPoint: shouldPositionTop ? 'bottom' : 'top',
        dropletOffset: null
    };

    // Position calculations
    switch(position) {
        case 'top':
            coords.left += (anchorRect.width - toastRect.width) / 2;
            coords.dropletPoint = 'bottom';
            break;
        case 'bottom':
            coords.left += (anchorRect.width - toastRect.width) / 2;
            coords.dropletPoint = 'top';
            break;
        case 'left':
            coords.top += (anchorRect.height - toastRect.height) / 2;
            coords.left -= (toastRect.width + gap);
            coords.dropletPoint = 'right';
            break;
        case 'right':
            coords.top += (anchorRect.height - toastRect.height) / 2;
            coords.left += (anchorRect.width + gap);
            coords.dropletPoint = 'left';
            break;
    }

    // Viewport boundary checks with fixed positioning
    const margin = 8;
    if (coords.left < margin) {
        coords.dropletOffset = coords.left - margin;
        coords.left = margin;
    } else if (coords.left + toastRect.width > viewport.width - margin) {
        coords.dropletOffset = coords.left + toastRect.width - (viewport.width - margin);
        coords.left = viewport.width - toastRect.width - margin;
    }

    // Adjust vertical position
    if (coords.top < margin) {
        if (position === 'top') {
            // Flip to bottom if not enough space on top
            coords.top = anchorRect.bottom + gap;
            coords.dropletPoint = 'top';
        } else {
            coords.top = margin;
        }
    } else if (coords.top + toastRect.height > viewport.height - margin) {
        if (position === 'bottom') {
            // Flip to top if not enough space on bottom
            coords.top = anchorRect.top - toastRect.height - gap;
            coords.dropletPoint = 'bottom';
        } else {
            coords.top = viewport.height - toastRect.height - margin;
        }
    }

    // Calculate connector height with a minimum value
    const minConnectorHeight = 8; // Minimum height for the connector
    const rawConnectorHeight = position === 'top' ? 
        Math.abs(anchorRect.top - (coords.top + toastRect.height)) :
        Math.abs(coords.top - anchorRect.bottom);
    
    // Ensure minimum connector height and adjust toast position accordingly
    coords.connectorHeight = Math.max(minConnectorHeight, rawConnectorHeight);

    // Adjust toast position to maintain minimum gap
    if (shouldPositionTop) {
        coords.top = anchorRect.top - toastRect.height - minConnectorHeight;
    } else {
        coords.top = anchorRect.bottom + minConnectorHeight;
    }

    // Calculate the anchor's center point
    const anchorCenter = {
        x: anchorRect.left + (anchorRect.width / 2),
        y: anchorRect.top + (anchorRect.height / 2)
    };

    // Calculate droplet position relative to the anchor's center
    const dropletOffset = anchorCenter.x - coords.left;

    // Adjust toast position to ensure droplet aligns with anchor
    if (dropletOffset < 12) {
        coords.left = anchorRect.left;
    } else if (dropletOffset > toastRect.width - 12) {
        coords.left = anchorCenter.x - toastRect.width + 12;
    }

    // Calculate final droplet offset after toast position adjustment
    const finalDropletOffset = anchorCenter.x - coords.left;

    // For mobile devices, center the toast horizontally
    if (isMobile) {
        coords.left = Math.max(safeMargin, (viewport.width - toastRect.width) / 2);
        // Ensure droplet aligns with anchor on mobile
        coords.dropletOffset = anchorCenter.x - coords.left;
    } else {
        // Desktop positioning with edge protection
        if (coords.left + toastRect.width > viewport.width - safeMargin) {
            coords.left = viewport.width - toastRect.width - safeMargin;
        }
        if (coords.left < safeMargin) {
            coords.left = safeMargin;
        }
    }

    // Ensure toast stays within viewport bounds
    coords = {
        ...coords,
        dropletOffset: finalDropletOffset,
        left: Math.max(safeMargin, Math.min(coords.left, viewport.width - toastRect.width - safeMargin))
    };

    // Handle software keyboard
    const visualViewport = window.visualViewport;
    if (visualViewport) {
        coords.top = Math.min(coords.top, visualViewport.height - toast.offsetHeight - 10);
    }

    // Add touch gesture support
    if ('ontouchstart' in window) {
        let touchStartX = 0;
        let touchStartY = 0;

        toast.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        toast.addEventListener('touchmove', (e) => {
            const deltaX = e.touches[0].clientX - touchStartX;
            if (Math.abs(deltaX) > 50) {
                e.preventDefault();
                toast.style.transform = `translateX(${deltaX}px)`;
            }
        }, { passive: false });

        toast.addEventListener('touchend', (e) => {
            const deltaX = e.changedTouches[0].clientX - touchStartX;
            if (Math.abs(deltaX) > 100) {
                toast.style.transform = `translateX(${deltaX > 0 ? '100%' : '-100%'})`;
                setTimeout(() => toast.remove(), 300);
            } else {
                toast.style.transform = '';
            }
        });
    }

    return coords;
}
