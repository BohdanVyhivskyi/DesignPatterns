import Colleague from "./Colleague.js";
export default class Runway extends Colleague {
    constructor(mediator) {
        super(mediator);
        this.Id = Math.random().toString(36).substr(2, 9);
        this.IsBusyWithAircraft = null;
    }
    send(event) {
        console.log(`Runway ${this.Id} received event: ${event}`);
    }
    IsBusy() {
        return !!this.IsBusyWithAircraft;
    }
    Land(aircraft) {
        console.log(`Aircraft ${aircraft.Name} is landing on Runway ${this.Id}`);
        this.IsBusyWithAircraft = aircraft;
        aircraft.CurrentRunway = this;
    }
    TakeOff() {
        var _a;
        console.log(`Aircraft ${(_a = this.IsBusyWithAircraft) === null || _a === void 0 ? void 0 : _a.Name} is taking off from Runway ${this.Id}`);
        this.IsBusyWithAircraft = null;
    }
}
//# sourceMappingURL=Runway.js.map