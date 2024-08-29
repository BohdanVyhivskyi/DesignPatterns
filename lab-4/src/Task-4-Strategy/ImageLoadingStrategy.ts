export default interface ImageLoadingStrategy {
    loadImage(href: string): void;
}