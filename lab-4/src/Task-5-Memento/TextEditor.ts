import TextDocument from "./TextDocument.js";
import TextDocumentMemento from "./TextDocumentMemento.js";

export default class TextEditor {
    private document: TextDocument;
    private mementos: TextDocumentMemento[] = [];

    constructor(content: string) {
        this.document = new TextDocument(content);
    }

    getContent(): string {
        return this.document.getContent();
    }

    setContent(content: string): void {
        this.document.setContent(content);
    }

    save(): void {
        this.mementos.push(this.document.createMemento());
    }

    undo(): void {
        const memento = this.mementos.pop();
        if (memento) {
            this.document.restoreMemento(memento);
        }
    }
}