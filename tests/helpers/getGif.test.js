import { string } from "prop-types";
import { getGif } from "../../src/helpers/GetGif";

describe('Pruebas en getGif', () => {
    test('Debe retornar un arreglo de gif', async() => {
        
        const gifs = await getGif('Hulk');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id:expect.any(String),
            title:expect.any(String),
            url:expect.any(String)
        });
    });
 })