import React, { useState } from 'react'
import { useSocket } from '../hooks/useSockets';

export const BandAdd = () => {

    const [valor, setValor] = useState('');
    const {socket}=useSocket('http://localhost:8080/')


    const handleSubmit = (e) =>{
        e.preventDefault();
        if (valor.trim().length > 0) {
            socket.emit('nueva-banda', {nombre:valor});
            setValor('')
        }
    }

    return (
        <>
            <h3>Agregar Banda</h3>   
            <form onSubmit={handleSubmit}>
                <input 
                    className="form-control"
                    placeholder="Nuevo nombre de la banda"
                    value={valor}
                    onChange={(e)=>setValor(e.target.value)}
                />
            </form>
        </>
    )
}
