import React from 'react'

export const BandAdd = () => {
    return (
        <>
            <h3>Agregar Banda</h3>   
            <form>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Nuevo nombre de la banda"
                />
            </form>
        </>
    )
}
