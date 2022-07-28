import { useState } from "react";
import PropTypes from 'prop-types';

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
        <form action="" onSubmit={onSubmit} aria-label="form">
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

AddCategory.propTypes ={
  setCategories:PropTypes.func.isRequired,
  categories:PropTypes.array.isRequired
}

