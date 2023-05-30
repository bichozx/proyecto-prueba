/* eslint-disable no-useless-concat*/

import React, { useEffect, useState } from 'react'

import { CaracterMarvel } from './layout/CaracterMarvel';
import { Pagination } from './layout/Pagination';
import { SeriesCaracter } from './layout/SeriesCaracter';
import { SubHeader } from './layout/SubHeader';
import marvelApi from '../services/getMarvel'

export const Principal = () => {
    const [infoMarvel, setInfoMarvel] = useState([])
    const [caracterId, setCaracterId] = useState('');
    const [cardPerPage,] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)

    const allItems = infoMarvel.length


    const lastIndex = currentPage * cardPerPage
    const firtstIndex = lastIndex - cardPerPage

    useEffect(() => {
        marvelApi()
            .then((response) => {
                const marvelResponse = response.data.results
                setInfoMarvel(marvelResponse)
            })
            .catch((error) => {
                console.log(error)
            });
    }, [])
    return (
        <>
            <section className='container-fluid' >
                <div style={{ marginLeft: '2%', marginBottom: '1%' }}> <SubHeader /></div>

                <div className="row row-cols-1 row-cols-md-5 g-4 container-fluid">

                    {infoMarvel.slice(firtstIndex, lastIndex).map(infoMarvel => {

                        return (
                            <div key={infoMarvel.id} className="col">
                                <article key={infoMarvel.id} style={{ height: '85%' }} className="card backCard border-primary shadow p-3 mb-5 bg-body rounded-3">
                                    <div >
                                        <h4 className="card-body text-center letras">{`${infoMarvel.name === "Abomination (Emil Blonsky)" ? "Emil Blonsky" : infoMarvel.name}`}</h4>
                                    </div>
                                    <div className='card-body  card-img-top' style={{ marginRight: '20%' }} >
                                        <img src={`${infoMarvel.thumbnail.path}` + `${infoMarvel.thumbnail.extension === 'jpg' ? '.jpg' : '.gif'
                                            }`} style={{ height: '95%', width: '85%' }} className="img-thumbnail rounded-circle rounded mx-auto d-block" alt={infoMarvel.id} />
                                    </div>

                                    <div className='align-items-center d-grid gap-2 ' key={infoMarvel.id} style={{ padding: '2%' }}>
                                        <button type="button" className="align-items-center card backCard btn btn-light border-primary letras" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setCaracterId(infoMarvel.id)}>
                                            <CaracterMarvel caracterId={caracterId} /> Comics: {infoMarvel.comics.available}
                                        </button>

                                        <button type="button" className="align-items-center card backCard btn btn-light border-primary letras" data-bs-toggle="modal" data-bs-target="#exampleSeries" onClick={() => setCaracterId(infoMarvel.id)}>
                                            <SeriesCaracter caracterId={caracterId} /> Peliculas: {infoMarvel.series.available}
                                        </button>

                                    </div>
                                </article>
                            </div>
                        )
                    })}
                </div>
                <Pagination
                    cardPerPage={cardPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    allItems={allItems}
                />

            </section>
        </>
    )
}
