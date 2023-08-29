import { useState } from "react"

export const Compra = ()=>{
    const [productos, setProductos]=useState([])
    const [nombreP, setNombreP]=useState('')
    const [cantidadP, setCantidadP] = useState('')

    const agregarProd =()=>{
        const nuevoProduc = {
            nombre: nombreP,
            cantidad: cantidadP
          }
        setProductos(lista=>[...lista, nuevoProduc])
        setNombreP('')
        setCantidadP('')
    }
    const ponerNomProd =(e)=>{
        setNombreP(e.target.value)
    }
    const ponerCantProd =(e)=>{
        setCantidadP(e.target.value)
    }

    return(
        <>
        <h1>
        Lista de productos
        </h1>

        <input
        type="text"
        placeholder="Nombre producto"
        value={nombreP}
        onChange={(even)=> ponerNomProd(even)}>
        </input>
        <input
        type="number"
        placeholder="Cantidad"
        value={cantidadP}
        onChange={(even)=> ponerCantProd(even)}>
        </input>

        <button onClick={()=> agregarProd()}> agregar</button>

        <ol>
            {
                productos.map(
                    (producto, indice) =>{
                    return <li key={indice}>
                        <span>{producto.nombre}</span>, cantidad: <span>{producto.cantidad}</span>
                        </li>
                    }
                    )
                    
            }
        </ol>
        </>
    )
}