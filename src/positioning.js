export function calculatePosition(toast, anchor, position, viewport, preferredPosition = 'top') {
    const anchorRect = typeof anchor === 'function' ? anchor().getBoundingClientRect() : anchor.getBoundingClientRect();
    const toastRect = toast.getBoundingClientRect();
    const gap = 12;

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

    // Calculate connector height
    const connectorHeight = position === 'top' ? 
        Math.abs(anchorRect.top - (coords.top + toastRect.height)) :
        Math.abs(coords.top - anchorRect.bottom);
    
    coords.connectorHeight = connectorHeight;

    return coords;
}
