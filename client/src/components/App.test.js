
import React from "react";
import Enzyme from "enzyme";
import App from "./App";
// import axios from 'axios';

// jest.mock("axios", () => ({
//   get: jest.fn(() => {
//     return Promise.resolve({});
//   })
// }));

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

  it("calls axios", async () => {
    // const data = [{author: 'author', title: 'title', url: 'url'}];
    // const promiseResult = Promise.resolve({ data });

    // axios.get.mockReturnValue(promiseResult);

    // await promiseResult;

    // expect(axios.get).toHaveBeenCalledWith("/articles");
  });

  it("renders articles", async () => {
    // const data = [{author: 'author', title: 'title', url: 'url'}];
    // const promiseResult = Promise.resolve({ data });

    // axios.get.mockReturnValue(promiseResult);

    // await promiseResult;
    // const card = wrapper.find(".card")
    // expect(card.exists()).toBe(true);
  });

});


