import { useState, useEffect } from 'react';
import './styles.css';
import { GRID_HEIGHT, GRID_WIDTH, validateInventory } from './utils';

export const CELL_SIZE = 50;

export type InventoryItem = {
  x: number;
  y: number;
  width: number;
  height: number;
  type: string;
  rarity: string;
};

export const Inventory = ({ jsonFile }: { jsonFile: string }) => {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(jsonFile)
          .then((response) => response.json())
          .then((data) => {
              if (validateInventory(data.items)) {
                  setItems(data.items);
                  setError(null);
              } else {
                  setError('ошибка ');
              }
          })
          .catch(() => setError('ошибка загруки файла'));
  }, [jsonFile]);
  return (
    <div className="inventory-container">
        {error && <div className="error">{error}</div>}
        <div className="inventory-grid">
            {Array.from({ length: GRID_HEIGHT * GRID_WIDTH }).map((_, index) => {
                const x = index % GRID_WIDTH;
                const y = Math.floor(index / GRID_WIDTH);
                const item = items.find(
                      (i: InventoryItem) =>
                        x >= i.x &&
                        x < i.x + i.width &&
                        y >= i.y &&
                        y < i.y + i.height
                );

                return (
                    <div
                        key={index}
                        className={`cell ${item ? `item ${item.type} ${item.rarity}` : ''}`}
                        style={
                            item
                                ? {
                                      gridColumn: `${item.x + 1} / span ${item.width}`,
                                      gridRow: `${item.y + 1} / span ${item.height}`,
                                  }
                                : {}
                        }
                    >
                        {item && <span>{item.type}</span>}
                    </div>
                );
            })}
        </div>
    </div>
);
};
export default Inventory;
