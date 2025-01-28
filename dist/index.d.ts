export class ToastNotifier {
    constructor(options: any);
    options: any;
    container: Element;
    handleKeyDown(e: any): void;
    toastQueue: any[];
    processingQueue: boolean;
    anchoredToasts: Map<any, any>;
    setupProgressActivation(): void;
    processQueue(): Promise<void>;
    _showToast(message: any, options: any): Promise<HTMLDivElement>;
    show(message: any, options: any): Promise<HTMLDivElement>;
    handleAnchoredToast(toast: any, options: any): void;
    setupScrollAndResizeListeners(): void;
    _scrollListener: () => void;
    _resizeListener: () => void;
    setupToastEvents(toast: any, options: any): void;
    setupToastTimer(toast: any, options: any): void;
    success(message: any, options: any): Promise<HTMLDivElement>;
    error(message: any, options: any): Promise<HTMLDivElement>;
    info(message: any, options: any): Promise<HTMLDivElement>;
    warning(message: any, options: any): Promise<HTMLDivElement>;
    hide(toast: any): void;
    cleanupListenersIfNeeded(): void;
    destroy(): void;
}
