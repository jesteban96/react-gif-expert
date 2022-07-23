import { useState } from "react";

export const AddCategory = ({setCategories,categories}) => {

  const [inputValue, setinputValue] = useState('');
  
  const onInputChange = (event) =>{
    setinputValue(event.target.value);
  }
  
  const onSubmit = (event)=>{
    event.preventDefault();
    if(inputValue.trim().length<=1 || categories.includes(inputValue.trim()))return;
    setCategories(categories=>[inputValue.trim(),...categories]);
    setinputValue('');
  }

  return (
    <>
        <form action="" onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    </>
    
  );
}
