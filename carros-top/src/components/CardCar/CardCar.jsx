import React from 'react'
import carcard from '../../assets/images/carcard.png'
import './cardcar.css'

function CardCar(){
    return(
        <div className='container-main-card'>

            <img src={carcard} alt='imagem de carro dentro do card' className='image-carcard'/>

            <div className='container-card-text'>
                <h2 className='text-card-1'>Audi Supra TT</h2>
                <h3 className='text-card-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</h3>
            </div>

            <button className='btn-card'>COMPRAR</button>

        </div>
    )
}
export default CardCar