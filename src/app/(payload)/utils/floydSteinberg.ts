export interface Pixel {
    r: number;
    g: number;
    b: number;
    a: number;
}

export interface ImageData {
    width: number;
    height: number;
    data: Uint8ClampedArray;
}

export const floydSteinbergDither = (imageData: ImageData): ImageData => {
    const { width, height, data } = imageData;

    const getPixel = (x: number, y: number): Pixel => {
        const index = (y * width + x) * 4;
        return {
            r: data[index],
            g: data[index + 1],
            b: data[index + 2],
            a: data[index + 3],
        };
    };

    const setPixel = (x: number, y: number, color: Pixel): void => {
        const index = (y * width + x) * 4;
        data[index] = color.r;
        data[index + 1] = color.g;
        data[index + 2] = color.b;
        data[index + 3] = color.a;
    };

    const closestColor = (color: Pixel): Pixel => {
        return {
            r: color.r > 128 ? 255 : 0,
            g: color.g > 128 ? 255 : 0,
            b: color.b > 128 ? 255 : 0,
            a: color.a,
        };
    };

    const diffColor = (color1: Pixel, color2: Pixel): Pixel => {
        return {
            r: color1.r - color2.r,
            g: color1.g - color2.g,
            b: color1.b - color2.b,
            a: color1.a - color2.a,
        };
    };

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const oldColor = getPixel(x, y);
            const newColor = closestColor(oldColor);
            setPixel(x, y, newColor);
            const error = diffColor(oldColor, newColor);

            const distributeError = (dx: number, dy: number, factor: number): void => {
                const newX = x + dx;
                const newY = y + dy;
                if (newX < 0 || newX >= width || newY < 0 || newY >= height) return;
                const pixel = getPixel(newX, newY);
                const updatedPixel: Pixel = {
                    r: Math.min(255, Math.max(0, pixel.r + error.r * factor)), // Ensure valid range 0-255
                    g: Math.min(255, Math.max(0, pixel.g + error.g * factor)),
                    b: Math.min(255, Math.max(0, pixel.b + error.b * factor)),
                    a: pixel.a,
                };
                setPixel(newX, newY, updatedPixel);
            };

            distributeError(1, 0, 7 / 16);
            distributeError(-1, 1, 3 / 16);
            distributeError(0, 1, 5 / 16);
            distributeError(1, 1, 1 / 16);
        }
    }

    return imageData;
};