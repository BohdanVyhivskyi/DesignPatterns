import Colleague from "./Colleague.js";
import Runway from "./Runway.js";
import Mediator from "./Mediator.js";

export default class Aircraft extends Colleague {
    public Name: string;
    public CurrentRunway: Runway | null = null;
    public IsTakingOff: boolean = false;

    constructor(mediator: Mediator, name: string) {
        super(mediator);
        this.Name = name;
    }

    send(event: string): void {
        this.mediator.notify(this, event);
    }
}
