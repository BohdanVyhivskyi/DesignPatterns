import TextDocumentMemento from "./TextDocumentMemento.js";
export default class TextDocument {
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
    setContent(content) {
        this.content = content;
    }
    createMemento() {
        return new TextDocumentMemento(this.content);
    }
    restoreMemento(memento) {
        this.content = memento.getContent();
    }
}
//# sourceMappingURL=TextDocument.js.map