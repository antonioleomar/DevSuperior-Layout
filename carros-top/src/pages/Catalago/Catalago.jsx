import React from 'react'
import './catalogo.css'
import Rearch from '../../components/Rearch/Rearch'
import CardCar from '../../components/CardCar/CardCar'


function Catalogo() {
    return (
        <div className='container-main-catalogo'>
            <Rearch />

            <div className='container-2-catalogo'>
                <div className='row'>
                    <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'>
                        <CardCar />
                    </div>

                    <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 abc'>
                        <CardCar />
                    </div>

                    <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'>
                        <CardCar />
                    </div>

                    <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'>
                        <CardCar />
                    </div>

                    <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'>
                        <CardCar />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Catalogo