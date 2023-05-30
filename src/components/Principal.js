/* eslint-disable no-useless-concat*/

import React, { useEffect, useState } from 'react'

import { CaracterMarvel } from './layout/CaracterMarvel';
import { Pagination } from './layout/Pagination';
import { SeriesCaracter } from './layout/SeriesCaracter';
import { SubHeader } from './layout/SubHeader';
import marvelApi from '../services/getMarvel'

export const Principal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [infoMarvel, setInfoMarvel] = useState([])
    const [caracterId, setCaracterId] = useState('');
    const [cardPerPage,] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)

    const allItems = infoMarvel.length


    const lastIndex = currentPage * cardPerPage
    const firtstIndex = lastIndex - cardPerPage

    useEffect(() => {
        setIsLoading(true);
        marvelApi()
            .then((response) => {
                const marvelResponse = response.data.results
                setInfoMarvel(marvelResponse)
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false);
            });
    }, [])
    return (
        <>
            isLoading,
            <section className='container-fluid' >
                <div style={{ marginLeft: '0%', marginBottom: '3%' }}> <SubHeader loading={isLoading} /></div>

                <div className="row row-cols-1 row-cols-md-5">

                    {infoMarvel.slice(firtstIndex, lastIndex).map(infoMarvel => {

                        return (
                            <div key={infoMarvel.id} style={{ marginBottom: '3%' }}>
                                <article key={infoMarvel.id} className="card h-100 backCard border-primary shadow p-3  border-radius">
                                    <div >
                                        <h4 className="card-body text-center letras">{`${infoMarvel.name === "Abomination (Emil Blonsky)" ? "Emil Blonsky" : infoMarvel.name}`}</h4>
                                    </div>
                                    <div className='card-body'>
                                        <img src={`${infoMarvel.thumbnail.path}` + `${infoMarvel.thumbnail.extension === 'jpg' ? '.jpg' : '.gif'
                                            }`} className="mask img-fluid rounded-circle" alt={infoMarvel.id} />
                                    </div>

                                    <div className='align-items-center d-grid gap-2 ' key={infoMarvel.id} style={{ padding: '0%' }}>
                                        <button type="button" className="btn-bs align-items-center card backCard btn btn-light border-primary letras" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setCaracterId(infoMarvel.id)}>
                                            <CaracterMarvel caracterId={caracterId} /> Comics: {infoMarvel.comics.available}
                                        </button>

                                        <button type="button" className="btn-bs align-items-center card backCard btn btn-light border-primary letras" data-bs-toggle="modal" data-bs-target="#exampleSeries" onClick={() => setCaracterId(infoMarvel.id)}>
                                            <SeriesCaracter caracterId={caracterId} /> Peliculas: {infoMarvel.series.available}
                                        </button>

                                    </div>
                                </article>
                            </div>
                        )
                    })}
                </div>
                <Pagination
                    loading={isLoading}
                    cardPerPage={cardPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    allItems={allItems}
                />

            </section>
        </>
    )
}
