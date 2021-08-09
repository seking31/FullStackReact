import React from "react";
import Enzyme from "enzyme";
import SearchBar from './SearchBar';

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

    it("calls setSearchQuery onChange", () => {
        const mockSetSearchQuery = jest.fn();
        const mockPreventDefault = jest.fn();
        React.useState = jest.fn(() => ["", mockSetSearchQuery])
        wrapper = Enzyme.mount(<SearchBar setArticles={setArticles} />)

        const inputBox = wrapper.find("input")
        const mockEvent = { preventDefault: mockPreventDefault, target: { value: 'change' } }

        inputBox.simulate("change", mockEvent)

        expect(mockSetSearchQuery).toHaveBeenCalledWith('change')
    })

    it("calls axios on submit", () => {
        wrapper.find('button').simulate('click');
    })
});