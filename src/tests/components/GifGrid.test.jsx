import { getAllByRole, render ,screen} from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('pruebas en  <GifGrid/>', () => { 

    const category='One Punch';

    test('debe de mostrar el loading iniciamente ', () => { 

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        });

        render(<GifGrid category={category}/>)
        // screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
     });

     test('debe de mostrar los items cuando se cargan las imagenes  useFetchGifs', () => {
         const gifs=[
            {
                id:'ABC',
                title:'saitama',
                url :'https://Localhost/saitama.jpg '
            },
            {
                id:'123',
                title:'Goku',
                url :'https://Localhost/goku.jpg '
            },
        ]

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:true
        });
         render(<GifGrid category={category}/>)
         screen.debug();
         expect(screen.getAllByRole('img').length).toBe(2); 
      })
 });
 