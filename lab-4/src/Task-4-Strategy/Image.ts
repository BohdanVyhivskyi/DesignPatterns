import ImageLoadingStrategy from "./ImageLoadingStrategy.js";

export default class Image {
    private loadingStrategy: ImageLoadingStrategy;

    constructor(loadingStrategy: ImageLoadingStrategy) {
        this.loadingStrategy = loadingStrategy;
    }

    setLoadingStrategy(loadingStrategy: ImageLoadingStrategy): void {
        this.loadingStrategy = loadingStrategy;
    }

    loadImage(href: string): void {
        this.loadingStrategy.loadImage(href);
    }
}