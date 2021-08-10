
import React from "react";
import Enzyme from "enzyme";
import App from "./App";
import SearchBar from './SearchBar';

describe("App Component", () => {
  const getWrapper = () => Enzyme.shallow(<App />)

  beforeEach(() => {
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders", () => {
    const wrapper = getWrapper();
    expect(wrapper.exists()).toBe(true);
  })

  it("calls axios", async () => {
    const data = [{ author: 'author', title: 'title', url: 'url' }];

    const wrapper = getWrapper();

    const { setArticles } = wrapper.find(SearchBar).props();

    setArticles(data);
    wrapper.update();
    const card = wrapper.find(".card")

    expect((card).exists()).toBe(true);
  })
})