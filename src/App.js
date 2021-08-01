import React,{useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';
import axios from 'axios';

function App() {
  const [busquedaLetra, setBusquedaletra] = useState({});
  const [letra, setLetra] = useState('');
  const [info, setInfo] = useState({});

  useEffect(()=>{
    if(Object.keys(busquedaLetra).length === 0) return;

    const consultarApiLetra = async ()=>{
      const apikey = 'f38e5d4a21d6cc403bf356b2d32e09eb';
      const {artista, cancion} = busquedaLetra;

      const urlLetra = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get`;
      const queryParamsLetra = {
        apikey: apikey,
        q_track: `${cancion}`,
        q_artist: `${artista}`
      };
      const urlInfo = `https://api.musixmatch.com/ws/1.1/artist.search`;
      const queryParamsInfo = {
        apikey: apikey,
        q_artist: artista
      };

      const [letra, informacion] = await Promise.all([
        axios.get(urlLetra, { params: queryParamsLetra }),
        axios.get(urlInfo, { params: queryParamsInfo })
      ])
      .catch(error => {
        debugger
        console.log(error)
      })
      
      
      // letra.data.message.body[0]
      // informacion.data.message.body[0]
      
      debugger;
      // setLetra(letra.data.lyrics);
      // setInfo(informacion.data.artists[0]);

    }

    consultarApiLetra();
  }, [busquedaLetra, info]);

  return (
    <>
      <Formulario 
        setBusquedaletra={setBusquedaletra}
      />

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <Info 
              info={info}
            />
          </div>
          <div className='col-md-6'>
            <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
