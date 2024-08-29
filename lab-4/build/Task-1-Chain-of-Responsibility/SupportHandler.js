export default class SupportHandler {
    constructor() {
        this.nextHandler = null;
    }
    setNextHandler(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handleRequest(request) {
        if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
        else {
            console.log("На жаль, ми не можемо надати вам підтримку для цього запиту.");
        }
    }
}
//# sourceMappingURL=SupportHandler.js.map