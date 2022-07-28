import { render,screen,fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Preuba del componente <AddCategory/>', () => {
    test('Debe cambiar el valor de la caja del texto', () => {
        render(<AddCategory setCategories={()=>{}} categories={[]} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input,{target:{value:'Thor'}});
        expect(input.value).toBe('Thor');
    });

    test('Debe llamar setCategories si el input tiene un valor', () => {
        
        const inputValue = 'Hulk';
        const setCategories = jest.fn();

        render(<AddCategory setCategories={setCategories} categories={[]} />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input,{target:{value:inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        // expect(setCategories).toHaveBeenCalledWith([inputValue]);
    })
})