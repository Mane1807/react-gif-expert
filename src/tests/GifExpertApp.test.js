import { render,screen } from "@testing-library/react"
import {GifExpertApp}from'../GifExpertApp'
describe('pruebas en el componente <GifExpertApp/>', () => { 
    test('should ', () => { 
        render(<GifExpertApp/>) ;
        screen.debug();
    })
 })