import React from 'react';

const Paginacion = props => {
    return (
        <div>
            <button type="button" className="btn btn-info mr-1">Anterior &larr;</button>
            <button type="button" className="btn btn-info">Siguiente &rarr;</button>
        </div>
    )
}

export default Paginacion;