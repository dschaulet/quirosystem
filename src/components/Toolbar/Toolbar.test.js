import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Toolbar from '../Toolbar';

describe("Toolbar test", ()=> {
    it("should render without throwing an error", () => {
        const wrapper = shallow(<Toolbar />);
        expect(wrapper.find("nav")).toHaveLength(1);
    });

    it("should show app name", () => {
        const wrapper = shallow(<Toolbar />);    
        expect(wrapper.find('.qs-app-name')).toHaveLength(1);
    });

    it("should have a link to project repository", () => {
        const wrapper = shallow(<Toolbar />);
        expect(wrapper.find('.qs-lnk-github')).toHaveLength(1);
    });
});
