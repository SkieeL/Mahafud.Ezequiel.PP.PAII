import React from 'react';
import '../stylesheets/Card.css';
import { Link } from "react-router-dom";

const Card = ({item}) => {
    const {id, nombre, imagen, imagenFondo} = item;

    return ( 
        <figure className='card'>
            <div className='img-card' style={{ backgroundImage: `url(${imagenFondo})`}}>
                <img src={imagen} alt={`Imagen de ${nombre}`} ></img>
            </div>
            
            <Link className='card-title' to={`/detalle/${id}`} >{nombre}</Link>
        </figure>
    );
}

export default Card;