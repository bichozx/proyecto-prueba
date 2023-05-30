import React, { useEffect, useState } from 'react'

import { getSeriesCaracter } from '../../services/getSeriesCaracter'

export const SeriesCaracter = ({ caracterId }) => {
    const [series, setSeries] = useState([])
    const id = caracterId

    useEffect(() => {
        getSeriesCaracter(id)
            .then((response) => {
                setSeries(response.results)


            })
            .catch((error) => {
                console.log(error)
            });
    }, [id])

    return (
        <>
            <div className="modal fade" id="exampleSeries" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content backModal border-primary shadow letras">

                        <div name="modal-body ">
                            {
                                series.map(series => {

                                    return (
                                        <div className='container fluid' key={series.id}>
                                            <div className='row row-cols row-cols-1 g-4'>
                                                <div className='col'>

                                                    <div className="card bg-transparent border-primary shadow p-3 mb-5 bg-body rounded-3" key={series.id} style={{ margin: '4%', padding: '5%' }}>
                                                        <img src={`${series.thumbnail.path}.jpg`} className="card-img-top figure-img  img-fluid border-primary rounded" alt="imgComics" />
                                                        <div className="card-body backCard">
                                                            <h5 className="card-title">{series.title}</h5>
                                                            <p className="card-text">{series.description}</p>
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
