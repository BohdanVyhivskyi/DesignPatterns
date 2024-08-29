import SupportHandler from "./SupportHandler.js";

export default class MediumSupportHandler extends SupportHandler {
    handleRequest(request: string): void {
        if (request === "відсутність звуку на пристрої") {
            console.log("Наш спеціаліст вирішить проблему зі звуком на вашому пристрої.");
        } else {
            super.handleRequest(request);
        }
    }
}