import ImageLoadingStrategy from "./ImageLoadingStrategy.js";

export default class NetworkImageLoadingStrategy implements ImageLoadingStrategy {
    loadImage(href: string): void {
        console.log(`Loading image from network: ${href}`);
    }
}