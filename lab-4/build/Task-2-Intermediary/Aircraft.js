import Colleague from "./Colleague.js";
export default class Aircraft extends Colleague {
    constructor(mediator, name) {
        super(mediator);
        this.CurrentRunway = null;
        this.IsTakingOff = false;
        this.Name = name;
    }
    send(event) {
        this.mediator.notify(this, event);
    }
}
//# sourceMappingURL=Aircraft.js.map