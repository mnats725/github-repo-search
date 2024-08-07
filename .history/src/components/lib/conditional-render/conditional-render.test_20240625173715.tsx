import { render, screen } from "@testing-library/react";

import { ConditionalRender } from "./conditional-render";

const ChildrenComponent = () => (
  <div data-testid="children">
    <p>children</p>
  </div>
);

describe("ConditionalRender", () => {
  test("Положительное условие", () => {
    render(
      <ConditionalRender conditions={[true, true]}>
        <ChildrenComponent />
      </ConditionalRender>
    );

    expect(screen.queryByTestId("children")).toBeInTheDocument();
  });

  test("Отрицательное условие", () => {
    render(
      <ConditionalRender conditions={[true, false]}>
        <ChildrenComponent />
      </ConditionalRender>
    );

    expect(screen.queryByTestId("children")).not.toBeInTheDocument();
  });
});
