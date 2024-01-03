'use client'

export function PrimeiroComponent(){

    function handleClick(){
        console.log("cliquei no botão")
    }
        return (
            <div>
                Meu Primeiro Componente!

                <button onClick={handleClick} >Clique aqui!</button>
            </div>
    )
}

export const ArrowFunction = () => {
    return(
        <h2>ArrowFunction</h2>
    )
}