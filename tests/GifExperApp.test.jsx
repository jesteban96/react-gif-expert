import { render,screen } from "@testing-library/react";
import { GifExperApp } from "../src/GifExperApp";


describe('Pruebas en <GifExperApp/>', () => {
    test('Pruebas', () => {
        render(<GifExperApp/>);
        screen.debug();
    });
});