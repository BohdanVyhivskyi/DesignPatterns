import Mediator from "./Mediator.js";

export default abstract class Colleague {
    constructor(protected mediator: Mediator) {}

    abstract send(event: string): void;
}