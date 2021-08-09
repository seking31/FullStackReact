
import React from "react";
import Enzyme from "enzyme";
import App from "./App";

describe("App Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = Enzyme.mount(<App />)
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  })

  it("renders SearchBar", () => {
    const input = wrapper.find(".wrap")
    expect(input.exists()).toBe(true);
  });

  it("calls axios", () => {

  });

  it("calls sets articles in state", () => {
    // const mockSetArticles = jest.fn();
    // React.useState = jest.fn(() => ["", mockSetArticles])

    // wrapper.setProps()

    // expect(mockSetArticles).toHaveBeenCalled()
  });


  it("renders articles", () => {
  });

});


