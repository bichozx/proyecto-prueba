import React from 'react'
import ReactPlayer from 'react-player'
import yoSoyIronMan1 from '../../img/yoSoyIronman1.jpg'

export const SubHeader = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    <div className="col-md-4">
                        <div className="card" style={{ width: "90%", height: '100%' }} >
                            <div className="card-body backSubHeader">
                                <h5 className='letras text-end'>Meta 100 peliculas</h5>
                                <div className="progress" style={{ margin: '10%' }} >
                                    <div className="progress-bar-striped progress-bar-animated  bg-info text-center letras2" role="progressbar" style={{ width: "70%" }}>Estamos al 70% de la meta</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: "90%", height: '60%' }}>
                            <img src={yoSoyIronMan1} className="img-fluid" alt="ironMan" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card " style={{ width: "90%", height: '100%' }} >
                            <ReactPlayer
                                url={'https://www.youtube.com/watch?v=CnFJpJW3dv8'}
                                width={'100%'}
                                height={'100%'}
                                controls
                                playing
                                loop
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
