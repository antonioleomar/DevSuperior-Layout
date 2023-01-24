import React from 'react'
import fotoCarro from '../../assets/images/carro.png'
import './carro.css'

function Carro(){
    return(
        <div className='container-main'>

            <img src={fotoCarro} alt='imagem de um automóvel' className='image-carro'/>

            <div className='container-text'>
                <h2 className='text-first'>O carro perfeito para você</h2>
                <h3 className='text-second'>Conheça nossos carros e dê mais um passo na realização do seu sonho</h3>
            </div>


        </div>
    )
}
export default Carro