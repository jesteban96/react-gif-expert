import {renderHook,waitFor} from '@testing-library/react';
import { useFetchGif } from "../../src/hooks/useFetchGif";

describe('Pruebas en <useFetchGif/>', () => {
    
    test('Debe regresar el estado inicial', () => {
        const {result} = renderHook(()=>useFetchGif('Thork'));
        const {images,Isloading} = result.current

        expect(images.length).toBe(0);
        // expect(Isloading).toBeTruthy();
    });

    test('Debe retornar imagenes e IsLoading:false', async() => {
        const {result} = renderHook(()=>useFetchGif('Thork'));

        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images,Isloading} = result.current

        expect(images.length).toBeGreaterThan(0);
        expect(Isloading).toBeFalsy();
    });
});