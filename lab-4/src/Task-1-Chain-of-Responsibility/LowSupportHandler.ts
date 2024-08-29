import SupportHandler from "./SupportHandler.js";

export default class LowSupportHandler extends SupportHandler {
    handleRequest(request: string): void {
        if (request === "проблема з Wi-Fi") {
            console.log("Ваша проблема з Wi-Fi буде вирішена незабаром нашим спеціалістом.");
        } else {
            super.handleRequest(request);
        }
    }
}