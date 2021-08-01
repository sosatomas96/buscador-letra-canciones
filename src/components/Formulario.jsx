import React,{useState} from 'react';

const Formulario = ({setBusquedaletra}) => {

    const [busqueda, setBusqueda] = useState({
        artista:'',
        cancion:''
    });

    const {artista, cancion} = busqueda;

    //funcion a cada input para leer el state
    const actualizarState = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const [error, setError] = useState(false);

    //request a las Apis
    const buscarInformacion = e =>{
        e.preventDefault();

        if(artista.trim() === '' || cancion.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        //pasar al componente ppal
        setBusquedaletra(busqueda);

    }

    return ( 
        <div className='bg-info'>

            {error ? <p className='alert alert-danger text-center p-2'>Todos los campos son obligatorios.</p> : null}

            <div className='container'>
                <div className='row'>

                    <form
                        onSubmit={buscarInformacion}
                        className='col card text-white bg-transparent mb-5 pt-5 pb-2'
                    >
                        <fieldset>
                                <legend className='text-center'>
                                    Busca las letras de tus canciones favoritas.
                                </legend>
                            
                            
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label>Artista: </label>
                                            <input 
                                                type='text'
                                                className='form-control'
                                                name='artista'
                                                placeholder='Nombre artista'
                                                onChange={actualizarState}
                                                value={artista}
                                            />
                                        </div>
                                    </div>
                                    
                                    
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label>Canción: </label>
                                            <input 
                                                type='text'
                                                className='form-control'
                                                name='cancion'
                                                placeholder='Nombre cancion'
                                                onChange={actualizarState}
                                                value={cancion}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type='submit'
                                    className='btn btn-primary float-right'
                                >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;