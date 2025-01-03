export function calculatePosition(toast, anchor, position = 'top', viewport) {
    const anchorRect = anchor.getBoundingClientRect();
    const toastRect = toast.getBoundingClientRect();
    const gap = 12;

    // Calculate position relative to viewport
    let coords = {
        top: anchorRect.top,  // Remove window.scrollY
        left: anchorRect.left, // Remove window.scrollX
        dropletPoint: position,
        dropletOffset: null
    };

    // Position calculations
    switch(position) {
        case 'top':
            coords.top -= (toastRect.height + gap);
            coords.left += (anchorRect.width - toastRect.width) / 2;
            coords.dropletPoint = 'bottom';
            break;
        case 'bottom':
            coords.top += anchorRect.height + gap;
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

    // Calculate connector height
    const connectorHeight = position === 'top' ? 
        Math.abs(anchorRect.top - (coords.top + toastRect.height)) :
        Math.abs(coords.top - anchorRect.bottom);
    
    coords.connectorHeight = connectorHeight;

    return coords;
}
