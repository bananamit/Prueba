import { useState } from "react"

export const InputTag = () =>{
    const [Categorias, setCategorias] = useState([])
    const [Category, setCategory] = useState('')

    const agregarCategoria = () =>{

        if (Category.trim() !== '') {
        setCategorias(lista => [...lista, Category])
        setCategory ('')
        }
    }

    const ponerCategoria =(e) => {
        setCategory (e.target.value)
    }


    return(
    <div>
        <h1>Ingresa categoria a la lista</h1>
        <input
            type="text"
            required
            value={Category}
            onChange={(event) => ponerCategoria(event)}
        />
        <button onClick={()=> agregarCategoria()}>agregar categoria</button>            
       
       <ol>
        {
            Categorias.map(
                (Category, indice) =>
                {
                    return <li key={indice}> {Category}</li>
                }
            )
        }
       </ol>
    </div>
    )
}