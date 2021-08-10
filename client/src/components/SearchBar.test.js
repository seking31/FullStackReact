import React from "react";
import Enzyme from "enzyme";
import SearchBar from './SearchBar';
import axios from 'axios';

jest.mock("axios", () => ({
    post: jest.fn(() => {
        return Promise.resolve({});
    })
}));

describe("SearchBar Component", () => {
    let wrapper;
    const setArticles = jest.fn();


    beforeEach(() => {
        wrapper = Enzyme.shallow(<SearchBar setArticles={setArticles} />)
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
    })

    it("calls axios on submit", async () => {
        const data = [{ author: 'author', title: 'title', url: 'url' }];
        const promiseResult = Promise.resolve({ data });

        axios.post.mockReturnValue(promiseResult);

        const inputBox = wrapper.find("input")
        const mockEvent = { target: { value: 'change' } }

        inputBox.simulate("change", mockEvent)
        wrapper.find('input')
        const button = wrapper.find(".search")

        const event = Object.assign(jest.fn(), { preventDefault: () => { } })
        button.simulate("submit", event)

        await promiseResult;

        expect(axios.post).toHaveBeenCalledWith("/articles", { "searchQuery": "change" });
        expect(setArticles).toHaveBeenCalledWith(data);
    })
});