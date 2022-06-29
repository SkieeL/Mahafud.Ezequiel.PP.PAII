import React, { useState, useEffect } from 'react';
import '../stylesheets/ListadoAgentes.css';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import DetalleAgente from './DetalleAgente';

const URL = 'https://valorant-api.com/v1/agents?language=es-MX&isPlayableCharacter=true';

const ListadoAgentes = () => {
    const [agentes, setAgentes] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        if (!agentes.length) {
            setCargando(true);
            fetch(URL)
            .then((res) => res.ok ? res.json() : Promise.reject(res))
            .then(({data}) => {
                console.log(data);
                data.forEach((agente) => {
                    setAgentes((agentesGuardados) => {
                        return [
                            ...agentesGuardados, 
                            {
                                id: agente.uuid,
                                nombre: agente.displayName,
                                descripcion: agente.description,
                                imagen: agente.bustPortrait,
                                imagenFondo: agente.background,
                                portada: agente.fullPortraitV2,
                            }
                        ];
                    });
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
        <div className='row listado'>
        {
            cargando ?
            (<Spinner/>)
            :
            agentes.map((agente) => {
                return <Card key={agente.id} item={agente} />;
            })
        }
        </div>
    );

    /*<section className='cards'>
            {agentes.length && <DetalleAgente agente={agentes[0]}/>}
        </section>*/
}

export default ListadoAgentes;