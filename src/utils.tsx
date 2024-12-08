import { InventoryItem } from "./Inventory";

export const GRID_WIDTH = 12;
export const GRID_HEIGHT = 8;

export const validateInventory = (items: InventoryItem[]): boolean => {
    const grid = Array(GRID_HEIGHT).fill(null).map(() => Array(GRID_WIDTH).fill(null));

    for (const item of items) {
        const { x, y, width, height } = item;
        if (x < 0 || y < 0 || x + width > GRID_WIDTH || y + height > GRID_HEIGHT) {
            return false;
        }
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (grid[y + i][x + j]) {
                    return false;
                }
                grid[y + i][x + j] = item;
            }
        }
    }
    return true;
};
