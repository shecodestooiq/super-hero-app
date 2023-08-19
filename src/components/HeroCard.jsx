import React from 'react'

export default function HeroCard({id,name,img,biography}) {
  return (
    <div key={id} className='hero-card'>
        <img src={img} alt={name} />
        <div className="content">
            <h2>{name}</h2>
            <p>{biography}</p>
        </div>
        
    </div>
  )
}
