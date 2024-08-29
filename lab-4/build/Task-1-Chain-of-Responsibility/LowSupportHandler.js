import SupportHandler from "./SupportHandler.js";
export default class LowSupportHandler extends SupportHandler {
    handleRequest(request) {
        if (request === "проблема з Wi-Fi") {
            console.log("Ваша проблема з Wi-Fi буде вирішена незабаром нашим спеціалістом.");
        }
        else {
            super.handleRequest(request);
        }
    }
}
//# sourceMappingURL=LowSupportHandler.js.map