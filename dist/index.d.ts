export class ToastNotifier {
    constructor(options: any);
    options: any;
    container: Element;
    handleKeyDown(e: any): void;
    show(message: any, options: any): HTMLDivElement;
    success(message: any, options: any): HTMLDivElement;
    error(message: any, options: any): HTMLDivElement;
    info(message: any, options: any): HTMLDivElement;
    warning(message: any, options: any): HTMLDivElement;
    hide(toast: any): void;
    destroy(): void;
}
