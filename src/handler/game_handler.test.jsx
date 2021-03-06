import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { generateGame } from '../service/generator';
import { GameHandler } from './';

configure({ adapter: new Adapter() });

describe(`<GameHandler/>`, () => {
    describe(`::render`, () => {
        it(' - renders without error', () => {
            const model = generateGame(2, 1); /* two players */

            shallow(<GameHandler model={model} />);
        });
    });
});
