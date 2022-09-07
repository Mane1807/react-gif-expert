import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"


describe('pruebas en el hook useFetchGifs', () => { 
    test('debe de regresarc el estado inicial', () => { 
        // const {images,isLoading}= useFetchGifs();
         const{result}=renderHook (() => useFetchGifs('One Punch'));
         const {images, isLoading}=result.current;

         expect(images.length).toBe(0);
         expect(isLoading).toBeTruthy();

        //  console.log(result);
    });

    test('debe de retornar un arreglo de imagenes y el isLoading en false',  async() => { 
    
         const{result}=renderHook (() => useFetchGifs('One Punch'));
         await waitFor (
            ()=> expect( result.current.images.length).toBeGreaterThan(0)
         );


         const {images, isLoading}=result.current;
         expect(images.length).toBeGreaterThan(0);
         expect(isLoading).toBeFalsy();


        //  console.log(result);
    });
 });