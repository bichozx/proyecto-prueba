import React from 'react'

export const Pagination = ({ allItems, cardPerPage, currentPage, setCurrentPage }) => {

    const pageNumber = []
    for (let i = 1; i <= Math.ceil(allItems / cardPerPage); i++) {
        pageNumber.push(i)
    }

    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1)

    }
    const onNextpage = () => {
        setCurrentPage(currentPage + 1)

    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }
    return (
        <>
            <nav aria-label=" " key={currentPage} style={{ margin: '1%' }}>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ''}`}>
                        <button className={"page-link letras "} onClick={onPreviusPage} >
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    {
                        pageNumber.map(noPage => {

                            return (
                                <li key={noPage} className={`page-item  ${currentPage === noPage ? "active" : " "} `} aria-current="page">
                                    <button onClick={() => {
                                        onSpecificPage(noPage)
                                    }} className={"page-link letras"}>{noPage}
                                    </button>
                                </li>
                            )
                        })
                    }
                    <li className={`page-item ${currentPage >= pageNumber.length ? "disabled" : ''}`}>
                        <button className={"page-link letras"} onClick={onNextpage}>
                            <span >&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}
