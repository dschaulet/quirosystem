import React from 'react';
import shallow from 'enzyme';
import Login from '../Login';

describe("Login test", ()=> {
    it("Should render the login without erros", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('form')).toHaveLength(1);
    });
/*
    
    it('Should have a input text to username', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input[type="text"]')).toHaveLength(1);
    });
    
    it('Should have a input password', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input[type="password"]')).toHaveLength(1);
    });
    
    it('Should have a button clickable', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('button')).toHaveLength(1);
        wrapper.find('button').simulate('click');
    });
*/
});
