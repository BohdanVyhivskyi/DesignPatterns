import Colleague from "./Colleague.js";

export default interface Mediator {
    notify(sender: Colleague, event: string): void;
}