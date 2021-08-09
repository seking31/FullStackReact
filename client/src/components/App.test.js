
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from "./App";

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

it("renders with or without a name", () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.textContent).toBe("Hey, stranger");

  act(() => {
    render(<App name="Jenny" />, container);
  });
  expect(container.textContent).toBe("App, Jenny!");

  act(() => {
    render(<App name="Margaret" />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
});
