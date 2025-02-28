'use client'

import { useState } from "react"

export function Button() {
    const[nome, setNome] = useState ('Sujeito programador')

     function handleChangeName() {
        setNome('Alexis Gomez')
    }

 
    return (
        <div>
            <button onClick={handleChangeName}>Alterar nome</button><br />
            <h3>Nome: {nome}</h3>
        </div>
    )
}