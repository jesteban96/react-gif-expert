import { render,screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>', () => { 

    const title ='IronMan';
    const url='https://asdasdasa/';
    
    test('Debe hacer match con el snapshot', () => { 
        const {container}= render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el url y el alt indicado', () => {
        render(<GifItem title={title} url={url} />);
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const {src,alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el titulo del componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getAllByText).toBeTruthy();
    });

    test('El div debe tener la clase card', () => {
        const {container}= render(<GifItem title={title} url={url} />);
        expect(container.firstChild.classList.contains('card')).toBe(true);

    });

 })