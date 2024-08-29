import Colleague from "./Colleague.js";
import Aircraft from "./Aircraft.js";
import Mediator from "./Mediator.js";

export default class Runway extends Colleague {
    public readonly Id: string = Math.random().toString(36).substr(2, 9);
    public IsBusyWithAircraft: Aircraft | null = null;

    constructor(mediator: Mediator) {
        super(mediator);
    }

    send(event: string): void {
        console.log(`Runway ${this.Id} received event: ${event}`);
    }

    IsBusy(): boolean {
        return !!this.IsBusyWithAircraft;
    }

    Land(aircraft: Aircraft): void {
        console.log(`Aircraft ${aircraft.Name} is landing on Runway ${this.Id}`);
        this.IsBusyWithAircraft = aircraft;
        aircraft.CurrentRunway = this;
    }

    TakeOff(): void {
        console.log(`Aircraft ${this.IsBusyWithAircraft?.Name} is taking off from Runway ${this.Id}`);
        this.IsBusyWithAircraft = null;
    }
}