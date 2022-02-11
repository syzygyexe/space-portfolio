import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Button } from "../../../components/layout/button/Button";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

/**
 * Children value test
 */
it("Render with or without a children value", () => {
  act(() => {
    render(<Button />, container);
  });
  expect(container.textContent).toBe("");

  act(() => {
    render(<Button>children value</Button>, container);
  });
  expect(container.textContent).toBe("children value");
});

/**
 * className test
 */
it("Allow only pre-defined classNames", () => {
  act(() => {
    render(
      <Button buttonStyle='blah-blah style' buttonSize='blah-blah size' />,
      container
    );
  });
  expect(container.firstChild).toHaveClass(
    "btn btn--solid--primary btn--medium"
  );

  act(() => {
    render(
      <Button buttonStyle='btn--solid--danger' buttonSize='btn--big' />,
      container
    );
  });
  expect(container.firstChild).toHaveClass("btn btn--solid--danger btn--big");
});
