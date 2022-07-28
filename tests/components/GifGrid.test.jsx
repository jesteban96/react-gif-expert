import { render,screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGif } from "../../src/hooks/useFetchGif";

jest.mock('../../src/hooks/useFetchGif');

describe('Pruebas de GifGrid', () => {

    const category = 'IronMan';

    test('Debe mostrar el loading inicialmente', () => {

        useFetchGif.mockReturnValue({
            images:[],
            isLoading:true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category));

    });

    test('Debe mostrar Items', () => {
        
        const gifs =[
            {
                id:'ABC',
                tittle:'IronMan',
                url:'https://sadfasdad.com'
            },
            {
                id:'123',
                tittle:'Hulk',
                url:'https://asdasd.com'
            }
        ];
        
        useFetchGif.mockReturnValue({
            images:gifs,
            isLoading:false
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
})