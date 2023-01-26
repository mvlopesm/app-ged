import React from "react";
import { useState } from "react";

import './InfoContato.css'

const InfoContato = () => {
    const [screen, setScreen] = React.useState<number>(0);

    const [data, setData] = React.useState({
        name: '',
        genre: '',
        address: '',
        phone: '',
        date: '',
        position: '',
        admission: '',
        sector: '',
        salary: '',
    })

    const [isSubmitted, setSubmitted] = React.useState(false)
    


    const handleNavigateToContatoPrevius = () => {
        if (screen === 0) return
        setScreen(state => state - 1)
    }

    const handleNavigateToContatoNext = () => {
        if (screen === 1) return
        setScreen(state => state + 1)
    }

    const handleSubmit = () => {
        setSubmitted(true)
    }

    const isReadyToSubmit = 
        data.name !== '' &&
        data.genre !== '' &&
        data.address !== '' &&
        data.phone !== '' &&
        data.date !== '' &&
        data.position !== '' &&
        data.admission !== '' &&
        data.sector !== '' &&
        data.salary !== '' &&
        screen === 1; 

    return (
        <div>
            {screen === 0 && (
                <>
                    <label htmlFor = "name">Nome</label>
                    <input value = {data.name}
                    onChange = {(e) => setData((prevState) => ({
                        ...prevState,
                        name: e.target.value
                    }))
                    } type="text" id="name" name="name"/>

                    <label htmlFor = "genre">Sexo</label>
                    <input value = {data.genre} 
                    onChange = {(e) => setData((prevState) => ({
                        ...prevState,
                        genre: e.target.value
                    }))
                    } type="text" id="genre" name="genre"/>

                    <label htmlFor = "address">Endereço</label>
                    <input value = {data.address}
                    onChange = {(e) => setData((prevState) => ({
                        ...prevState,
                        address: e.target.value
                    }))
                    } type="text" id="address" name="address"/>

                    <label htmlFor = "phone">Telefone</label>
                    <input value = {data.phone} 
                    onChange = {(e) => setData((prevState) => ({
                        ...prevState,
                        phone: e.target.value
                    }))
                    } 
                    type="tel" id="phone" name="phone"/>

                    <label htmlFor = "photo">Foto de Perfil</label>
                    <input type="image" id="photo" name="photo"/>

                    <label htmlFor = "date">Data de aniversário</label>
                    <input value = {data.date}
                    onChange = {(e) => setData((prevState) => ({
                        ...prevState,
                        date: e.target.value
                    }))
                    }  type="date" id="date" name="date"/>
                </>
            )}

            {screen === 1 && (
                <>
                    <label htmlFor = "position">Cargo</label>
                    <input value = {data.position}
                    onChange = {(e) => setData((prevState) => ({
                        ...prevState,
                        position: e.target.value
                    }))
                    }  type="text" id="position" name="position"/>

                    <label htmlFor = "admission">Data de adimissão</label>
                    <input value = {data.admission}
                    onChange = {(e) => setData((prevState) => ({
                        ...prevState,
                        admission: e.target.value
                    }))
                    }  type="date" id="admission" name="admission"/>

                    <label htmlFor = "sector">Setor</label>
                    <input value = {data.sector} 
                    onChange = {(e) => setData((prevState) => ({
                        ...prevState,
                        sector: e.target.value
                    }))
                    } type="text" id="sector" name="sector"/>

                    <label htmlFor = "salary">Salário</label>
                    <input value = {data.salary}
                    onChange = {(e) => setData((prevState) => ({
                        ...prevState,
                        salary: e.target.value
                    }))
                    }  type="number" id="salary" name="salary"/>
                </>
            )}

            <div>
                <button onClick={handleNavigateToContatoPrevius}>Página Anterior</button>
                {isReadyToSubmit ? <button onClick={handleSubmit}>Submeter Dados</button> : 
                <button onClick={handleNavigateToContatoNext}>Próxima Página</button> }   
            </div>

            {isSubmitted && (JSON.stringify(data))}
        </div>
    )
}

export default InfoContato