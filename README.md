# JS Toast Notifier

A lightweight toast notification package with anchor support, droplet-style connectors, and pause-on-hover functionality.

## Features

- 📍 Flexible positioning (top, bottom, left, right)
- 📚 Automatic stacking of multiple notifications
- 🔗 Anchor element support with droplet-style connectors
- 🎨 Customizable themes and timeouts
- ⏸️ Pause on hover functionality
- ✨ Smooth animations with progress bar
- 🚫 Optional close button
- ♿ WCAG 2.1 accessible
- 0️⃣ Zero dependencies

## Installation

```bash
npm install js-toast-notifier
```

## Basic Usage

```javascript
import ToastNotifier from 'js-toast-notifier';

// styling
import "js-toast-notifier/dist/toast.css"

// Initialize with default options
const toast = new ToastNotifier();

// Show a basic toast
toast.show('Hello, World!');

// Show different types of toasts
toast.success('Operation completed!');
toast.error('Something went wrong!');
toast.info('Here is some information.');
toast.warning('Please be careful!');
```

## Configuration Options

### Global Configuration

When initializing the toast instance, you can set default options for all notifications:

```javascript
const toast = new ToastNotifier({
  position: 'top-right',      // Default position
  timeout: 5000,             // Default timeout in milliseconds
  theme: 'light',           // Default theme
  showCloseButton: true,    // Show close button
  pauseOnHover: true,       // Pause timer on hover
  showProgress: true,       // Show progress bar
  progressHeight: '4px',    // Progress bar height
  progressColor: '#fff',    // Progress bar color
  progressBackground: 'rgba(255, 255, 255, 0.2)' // Progress background
});
```

### Individual Toast Configuration

Each toast can override the global configuration:

```javascript
// Custom themed toast
toast.show('Custom theme!', {
  theme: {
    backgroundColor: '#1a1a1a',
    textColor: '#ffffff'
  },
  customClass: 'my-custom-toast'
});

// Anchored toast with custom position
toast.show('Anchored to button!', {
  anchor: document.getElementById('my-button'),
  position: 'top',
  timeout: 3000
});

// Toast with custom progress bar
toast.show('Custom progress!', {
  progressHeight: '6px',
  progressColor: '#00ff00',
  progressBackground: 'rgba(0, 0, 0, 0.3)',
  pauseOnHover: true
});

// Infinite toast (no timeout)
toast.show('Will not auto-close', {
  timeout: 0,
  showProgress: false
});
```

## API Reference

### Constructor Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `position` | string | 'top-right' | Toast position: 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right' |
| `timeout` | number | 5000 | Auto-close duration in milliseconds. Set to 0 for no auto-close |
| `theme` | string\|object | 'light' | Theme name ('light'/'dark') or custom theme object |
| `showCloseButton` | boolean | true | Show/hide close button |
| `pauseOnHover` | boolean | true | Pause timer when hovering |
| `showProgress` | boolean | true | Show/hide progress bar |
| `progressHeight` | string | '4px' | Progress bar height |
| `progressColor` | string | - | Progress bar color |
| `progressBackground` | string | - | Progress bar background color |

### Methods

#### `show(message, options?)`
Shows a toast notification with optional configuration.

```javascript
toast.show('Message', {
  type: 'default',
  timeout: 3000,
  // ... other options
});
```

#### `success(message, options?)`
Shows a success toast.

```javascript
toast.success('Operation completed!', {
  timeout: 3000
});
```

#### `error(message, options?)`
Shows an error toast.

```javascript
toast.error('Failed to save!', {
  timeout: 0 // Won't auto-close
});
```

#### `info(message, options?)`
Shows an info toast.

```javascript
toast.info('New updates available');
```

#### `warning(message, options?)`
Shows a warning toast.

```javascript
toast.warning('Low disk space');
```

### Custom Themes

Create custom themes by providing a theme object:

```javascript
const toast = new ToastNotifier({
  theme: {
    backgroundColor: '#1a1a1a',
    textColor: '#ffffff',
    iconColor: '#00ff00' // Optional, defaults to textColor
  }
});
```

### CSS Customization

The package provides CSS classes for custom styling:

```css
/* Custom toast styling */
.toast {
  /* Your custom styles */
}

/* Custom progress bar */
.toast-progress {
  --progress-height: 6px;
  --progress-color: #00ff00;
  --progress-background: rgba(0, 0, 0, 0.2);
}

/* Custom animation on hover */
.toast:hover {
  transform: scale(1.02);
}
```

## Accessibility

- Follows WCAG 2.1 guidelines
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader friendly messages
- Respects reduced motion preferences

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

MIT