import { useState } from "react";
import { AddCategory ,GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'one Punch']);
  console.log(categories);

  const onAddCategory=(newCategory)=>{
    if (categories.includes(newCategory))return;

    console.log(newCategory);
    //  categories.push(newCategory);
    setCategories([newCategory,...categories]);
    // setCategories(cat =>[...cat, newCategory])
  }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
        // setCategories={setCategories} 
        onNewCategory={(value)=> onAddCategory(value)}
        /> 
        
        
        { categories.map((category)=>(
            <GifGrid key={category}
            category={category}
            />

          ))
        }
    </>
  )
}
