import React, { useState } from "react";

export const Loteria = () => {
    const [Loterias, setLoterias]  = useState([]);
    const [name, setName]  = useState('');
    const [numero, setNumero] = useState('');
    const [cantidad, setCantidad] = useState('');

    const agregar = () => {

        const newLoteria = {
            nombreL : name,
            numeroL : numero,
            cantidadL : cantidad
        }
        setLoterias([...Loterias, newLoteria])
        setName('')
        setNumero('')
        setCantidad('')
    }

    const total = () => {
        let totalValor = 0;
        for (const item of Loterias) {
            totalValor += parseInt(Loterias.cantidadL);
        }
        return totalValor;
    }

    return <>
        <h1>Loteria</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value) } placeholder="ingrese nombre" />
        <input type="number" value={numero} onChange={(evt) => setNumero(evt.target.value) } placeholder="ingrese numero"/>
        <input type="number" value={cantidad} onChange={(event) => setCantidad(event.target.value)} placeholder="ingrese valor" />
        <button onClick={agregar}>Agregar</button>

        <ul>
            {
                Loterias.map((val, idx) => (
                        <li key={idx}>{
                            <span>Loteria: {val.nombreL}, numero: {val.numeroL}, valor: {val.cantidadL}</span>
                            }</li>
                    )
                )
            }
        </ul>

        <span>El total es: {total()}</span>
    </>
}

