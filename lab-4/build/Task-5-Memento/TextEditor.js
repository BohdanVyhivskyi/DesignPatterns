import TextDocument from "./TextDocument.js";
export default class TextEditor {
    constructor(content) {
        this.mementos = [];
        this.document = new TextDocument(content);
    }
    getContent() {
        return this.document.getContent();
    }
    setContent(content) {
        this.document.setContent(content);
    }
    save() {
        this.mementos.push(this.document.createMemento());
    }
    undo() {
        const memento = this.mementos.pop();
        if (memento) {
            this.document.restoreMemento(memento);
        }
    }
}
//# sourceMappingURL=TextEditor.js.map