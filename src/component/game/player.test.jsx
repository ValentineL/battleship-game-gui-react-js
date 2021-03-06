import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Player } from '../';
import { PlayerModel } from '../../model';

configure({ adapter: new Adapter() });

describe(`component:: <Player/>`, () => {
    describe(`::render`, () => {
        const model = new PlayerModel();
        model.setName('test');
        model.setScore(123);
        model.setAvatarSrc('/');

        it(`renders without error`, () => {
            shallow(<Player {...model} />);
        });

        it(`props been injected properly into DOMNode`, () => {
            const component = shallow(<Player {...model} />);

            expect(component.find('.avatar').length).toBe(1);
            expect(component.find('img').length).toBe(1);
            expect(component.find('img').getElement().props.alt).toBeDefined();
            expect(component.find('img').getElement().props.src).toBe(model.getAvatarSrc());
            expect(component.find('.name').length).toBe(1);
            expect(component.find('.name').text()).toBe(model.getName());
            expect(component.find('.score').length).toBe(1);
            expect(component.find('.score').text()).toBe(`${model.getScore()}`);
        });
    });
});
