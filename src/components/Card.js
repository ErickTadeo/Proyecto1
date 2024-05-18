import React from 'react'


export default function Card({id,title,image,instructor}) {
  return (
    <div className='card text-center bg-dark'>
        <div className='card-body text-ligh'>
            <img src={image} alt="no image" className='image-widht'/>
        <h4 className='card-title'>Curso de NGINX</h4>
        <p className='card-text text-secondary'>
        instructor:{instructor}
        </p>
        <a href='#!' className='btn btn-outline-secondary rounded-0'>Direccion al sitio web</a>
        </div>
        

    </div>
  )
}
