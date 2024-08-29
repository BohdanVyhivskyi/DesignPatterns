export default class CommandCentre {
    constructor(runways, aircrafts) {
        this.runways = [];
        this.aircrafts = [];
        this.runways = runways;
        this.aircrafts = aircrafts;
    }
    notify(sender, event) {
        if (event === "landing") {
            this.requestLanding(sender);
        }
        else if (event === "takeoff") {
            this.requestTakeOff(sender);
        }
    }
    requestLanding(aircraft) {
        const availableRunway = this.runways.find(runway => !runway.IsBusy());
        if (availableRunway) {
            availableRunway.Land(aircraft);
        }
        else {
            console.log("No available runway for landing.");
        }
    }
    requestTakeOff(aircraft) {
        const runway = aircraft.CurrentRunway;
        if (runway) {
            runway.TakeOff();
        }
        else {
            console.log("Aircraft is not currently on any runway.");
        }
    }
}
//# sourceMappingURL=CommandCentre.js.map