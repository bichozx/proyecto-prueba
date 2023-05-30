import React, { useEffect, useState } from 'react'

import { getCaracterForId } from '../../services/getCaracterForId'

export const CaracterMarvel = ({ caracterId }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [proyecto, setProyecto] = useState([])
    const id = caracterId


    useEffect(() => {

        setIsLoading(true);
        getCaracterForId(id)
            .then((response) => {
                setProyecto(response.results)
                setIsLoading(false);

            })
            .catch((error) => {
                console.log(error)
                setIsLoading(true);
            });
    }, [id])
    return (
        <>
            <div loading={isLoading} className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content backModal border-primary shadow letras">
                    
                        <div className="offcanvas-header">
                            <div></div>
                            <button type="button" className="text-reset btn-close letras" data-bs-dismiss="offcanvas">X</button>
                        </div>

                        <div name="modal-body ">
                            {
                                proyecto.map(proyecto => {

                                    return (
                                        <div className='container fluid' key={proyecto.id}>
                                            <div className='row row-cols row-cols-1 g-4'>
                                                <div className='col'>

                                                    <div className="card bg-transparent  border-primary shadow p-3 mb-5 bg-body rounded-3" key={proyecto.id} style={{ margin: '4%', padding: '5%' }}>
                                                        <img src={`${proyecto.thumbnail.path}.jpg`} className="card-img-top figure-img  img-fluid border-primary rounded" alt="imgComics" />
                                                        <div className="card-body backCard">
                                                            <h5 className="card-title">{proyecto.title}</h5>
                                                            <p className="card-text">{proyecto.description}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    )
                                })}
                            ...
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
