import type { ReactNode } from "react";

export type ConditionalRenderProps = {
  conditions: boolean[]; // Список условий, которые должны быть выполнены для отображения детей.
  children: ReactNode; // Содержимое, которое будет отображаться, если все условия выполнены.
};

export const ConditionalRender = ({ conditions, children }: ConditionalRenderProps) => {
  const shouldRender = conditions.every((condition) => condition);

  return <>{shouldRender && children}</>;
};
