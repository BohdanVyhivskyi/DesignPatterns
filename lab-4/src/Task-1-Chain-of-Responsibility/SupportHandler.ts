export default abstract class SupportHandler {
    private nextHandler: SupportHandler | null = null;

    setNextHandler(handler: SupportHandler): SupportHandler {
        this.nextHandler = handler;
        return handler;
    }

    handleRequest(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        } else {
            console.log("На жаль, ми не можемо надати вам підтримку для цього запиту.");
        }
    }
}