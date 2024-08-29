import Mediator from "./Mediator.js";
import Runway from "./Runway.js";
import Aircraft from "./Aircraft.js";
import Colleague from "./Colleague.js";

export default class CommandCentre implements Mediator {
    private runways: Runway[] = [];
    private aircrafts: Aircraft[] = [];

    constructor(runways: Runway[], aircrafts: Aircraft[]) {
        this.runways = runways;
        this.aircrafts = aircrafts;
    }

    notify(sender: Colleague, event: string): void {
        if (event === "landing") {
            this.requestLanding(sender as Aircraft);
        } else if (event === "takeoff") {
            this.requestTakeOff(sender as Aircraft);
        }
    }

    private requestLanding(aircraft: Aircraft): void {
        const availableRunway = this.runways.find(runway => !runway.IsBusy());
        if (availableRunway) {
            availableRunway.Land(aircraft);
        } else {
            console.log("No available runway for landing.");
        }
    }

    private requestTakeOff(aircraft: Aircraft): void {
        const runway = aircraft.CurrentRunway;
        if (runway) {
            runway.TakeOff();
        } else {
            console.log("Aircraft is not currently on any runway.");
        }
    }
}