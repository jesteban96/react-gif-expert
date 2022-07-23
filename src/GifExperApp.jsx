import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExperApp = () => {

    const [categories, setCategories] = useState(['IronMan','Thor']);

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory setCategories={setCategories} categories={categories}/>

      {
        categories.map(category=>{
          return (
            <GifGrid 
              key={category}
              category={category}
            />
          )
        })
      }
    </>
  )
}
