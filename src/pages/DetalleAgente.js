import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../stylesheets/DetalleAgente.css';
import Spinner from '../components/Spinner';

const BASE_URL = 'https://valorant-api.com/v1/agents/';
const PARAMS_URL = '?language=es-MX';

const DetalleAgente = () => {
    const {id} = useParams();
    const [agente, setAgente] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        if (!agente) {
            setCargando(true);
            fetch(BASE_URL + id + PARAMS_URL)
            .then((res) => res.ok ? res.json() : Promise.reject(res))
            .then(({data}) => {
                setAgente({
                    nombre: data.displayName,
                    descripcion: data.description,
                    portada: data.fullPortraitV2
                });
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setCargando(false);
            });
        }
    }, []);

    return (
        <>
            <div className='row'>
                {
                    cargando ?
                    (<Spinner/>)
                    :
                    <>
                        <div className='col-md-6 img-agente'>
                            <img src={agente.portada} alt={`Portada de ${agente.nombre}`}></img>
                        </div>
                        <div className='col-md-6 descripcion-agente'>
                            <h2>{agente.nombre}</h2>
                            <p>
                                {agente.descripcion}
                            </p>
                            <Link to='/' className='btn-volver'>Volver</Link>
                        </div>
                    </>
                }
                
            </div>
        </>
    );
}

export default DetalleAgente;