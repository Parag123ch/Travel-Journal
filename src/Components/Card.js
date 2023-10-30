import React from 'react'
import Pin from '../images/location-pin.png'

function Card(props) {
  return (
    <div>
        <div className='card'>
            <img src={props.image_url} className='image'></img>
            <div className='info-box'>
                <div className='info'>
                    <img src={Pin} className='location-icon'></img>
                    <h4 className='location'>{props.location}</h4>
                    <a href={props.link} className='link' target='_blank'>View on Google Maps</a>
                </div>
                <div className='description-box'>
                    <h1 className='title'>{props.title}</h1>
                    <p className='date'>{props.start_date+" - "+props.end_date}</p>
                    <p className='description'>{props.description}</p>
                </div>
            </div>
        </div>
        {!props.last && <hr className='line'></hr>}
    </div>
  )
}

export default Card