export class ToastNotifier {
    constructor(options: any);
    options: any;
    container: Element;
    handleKeyDown(e: any): void;
    anchoredToasts: Map<any, any>;
    show(message: any, options: any): HTMLDivElement;
    _scrollListener: () => void;
    _resizeListener: () => void;
    success(message: any, options: any): HTMLDivElement;
    error(message: any, options: any): HTMLDivElement;
    info(message: any, options: any): HTMLDivElement;
    warning(message: any, options: any): HTMLDivElement;
    hide(toast: any): void;
    destroy(): void;
}
