import ImageLoadingStrategy from "./ImageLoadingStrategy.js";

export default class FileSystemImageLoadingStrategy implements ImageLoadingStrategy {
    loadImage(href: string): void {
        console.log(`Loading image from file system: ${href}`);
    }
}