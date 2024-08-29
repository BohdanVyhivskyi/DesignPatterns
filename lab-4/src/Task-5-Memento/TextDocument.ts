import TextDocumentMemento from "./TextDocumentMemento.js";

export default class TextDocument {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    getContent(): string {
        return this.content;
    }

    setContent(content: string): void {
        this.content = content;
    }

    createMemento(): TextDocumentMemento {
        return new TextDocumentMemento(this.content);
    }

    restoreMemento(memento: TextDocumentMemento): void {
        this.content = memento.getContent();
    }
}