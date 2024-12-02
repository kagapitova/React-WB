import React, { useEffect, useState } from "react";

// Описание типа узла JSON-структуры
type Node = {
  tag: string;
  attrs?: Record<string, string>;
  children?: Array<Node | string>;
};

// Рекурсивная функция для создания React-элементов
const createElement = (node: Node | string): React.ReactNode => {
  if (typeof node === "string") {
    return node; // Текстовый узел
  }

  const { tag, attrs, children } = node;

  return React.createElement(
    tag,
    attrs,
    children && children.map((child, index) => createElement(child))
  );
};

type RendererProps = {
  jsonPath: string;
};

const Renderer: React.FC<RendererProps> = ({ jsonPath }) => {
  const [tree, setTree] = useState<Node | null>(null);

  useEffect(() => {
    console.log("useEffect сработал"); // Диагностика
    fetch(jsonPath)
      .then((response) => {
        console.log("Ответ сервера:", response);
        if (!response.ok) {
          throw new Error(`HTTP ошибка! Статус: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Загруженная структура JSON:", data);
        setTree(data);
      })
      .catch((error) => {
        console.error("Ошибка загрузки JSON:", error);
      });
  }, [jsonPath]);  

  return <>{tree ? createElement(tree) : <p>Загрузка...</p>}</>;
};

export default Renderer;
