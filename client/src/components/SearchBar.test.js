import React from "react";
import Enzyme from "enzyme";
import SearchBar from './SearchBar';
import axios from 'axios';

describe("SearchBar Component", () => {
    let wrapper;
    const setArticles = jest.fn();


    beforeEach(() => {
        wrapper = Enzyme.mount(<SearchBar setArticles={setArticles} />)
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
    })

    it("calls axios on submit", () => {
        jest.mock("axios", () => ({
            post: jest.fn(() => {
                return Promise.resolve({});
            })
        }));
        const mockSetSearchQuery = jest.fn();
        React.useState = jest.fn(() => ["test", mockSetSearchQuery])

        const button = wrapper.find(".search")
        button.simulate("submit")

        wrapper.update()

        expect(axios.post).toHaveBeenCalledWith('/articles');
    })
});