export default class Image {
    constructor(loadingStrategy) {
        this.loadingStrategy = loadingStrategy;
    }
    setLoadingStrategy(loadingStrategy) {
        this.loadingStrategy = loadingStrategy;
    }
    loadImage(href) {
        this.loadingStrategy.loadImage(href);
    }
}
//# sourceMappingURL=Image.js.map