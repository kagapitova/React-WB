import React, { useEffect, useState } from "react";

type Node = {
  tag: string;
  attrs?: Record<string, string>;
  children?: Array<Node | string>;
};

const createElement = (node: Node | string, key?: number): React.ReactNode => {
  if (typeof node === "string") {
    return node;
  }

  const { tag, attrs, children } = node;

  // Void elements (элементы без дочерних элементов)
  const voidElements = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];

  // Преобразование атрибутов (замена `class` на `className`)
  const processedAttrs = { ...attrs, className: attrs?.class, class: undefined };

  // Для void-элементов не добавляем children
  if (voidElements.includes(tag)) {
    return React.createElement(tag, { ...processedAttrs, key });
  }

  // Для всех остальных элементов создаем с children
  return React.createElement(
    tag,
    { ...processedAttrs, key },
    children?.map((child, index) => createElement(child, index))
  );
};



type RendererProps = {
  jsonPath: string;
};

const Renderer: React.FC<RendererProps> = ({ jsonPath }) => {
  const [tree, setTree] = useState<Node | null>(null);

  useEffect(() => {
    fetch(jsonPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ошибка! Статус: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setTree(data))
      .catch((error) => console.error("Ошибка загрузки JSON:", error));
  }, [jsonPath]);

  return <>{tree ? createElement(tree) : <p>Загрузка...</p>}</>;
};

export default Renderer;
