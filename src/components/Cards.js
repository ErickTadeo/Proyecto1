import React from 'react'
import Card from './Card'
import image1 from '../Assets/1.jpg'
import image2 from '../Assets/2.jpg'
import image3 from '../Assets/3.jpg'

const cards=[
    {
        id:1,
        title:'Java',
        image:image1,
        instructor:' Bustamante',
        url:'https://www.jrebel.com/blog/top-java-development-tools-and-software',

    },
    {
        id:2,
        title:'React',
        image:image2,
        instructor:'Samuel Benito'
       // url:'https://es.react.dev/',

    },
    {
        id:2,
        title:'Python',
        image:image3,
        instructor:'Angela Rios'
        //url:'https//clasesdiplomadoPython.mx',

    }
]


export default function Cards() {
  return (
    <div className='container d-flex justify-content-center aling-item-center h-100'>
        <div className='row'>
            
        {
            cards.map(c => (
                <div className='col-md-4' key={cards.id}>
                    <Card
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    instructor={c.instructor}
                    />
                    </div>
            ))
        }
                        
            </div>
         
            </div>

  )
}
