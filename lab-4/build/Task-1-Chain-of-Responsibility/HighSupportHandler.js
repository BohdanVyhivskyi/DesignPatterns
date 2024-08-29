import SupportHandler from "./SupportHandler.js";
export default class HighSupportHandler extends SupportHandler {
    handleRequest(request) {
        if (request === "відсутність інтернет-з'єднання") {
            console.log("Вибачте за тимчасові незручності. Ми намагаємося вирішити проблему з інтернет-з'єднанням.");
        }
        else {
            super.handleRequest(request);
        }
    }
}
//# sourceMappingURL=HighSupportHandler.js.map