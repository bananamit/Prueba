const Categorias=['primera','segunda','tercera']
export const ComponentApp = ()=>{

    return(
        <>
        <h1>Mostrar lista</h1>
        <ol>
            {
                Categorias.map(
                    (nombreCate, indice) =>{
                        return <li key={indice}>{nombreCate}</li>
                    }
                )
            }
        </ol>
        
        </>
    )
}