import React from "react";
// @ts-ignore
import imgProfile  from '../assets/profile.png';

import './InfoContato.css'

const InfoContato = (props) => {
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
        <div className="form">
            {screen === 0 && (
                <>
                    <h2>Informações de Contato</h2>
                    <div className="row" >
                        <div className="content col-lg-8">
                            <label htmlFor = "name">Nome</label>
                            <input value = {data.name}
                            onChange = {(e) => setData((prevState) => ({
                                ...prevState,
                                name: e.target.value
                            }))
                            } type="text" placeholder="Nome" id="name" name="name"/>
                            <p>ex: João José</p>
                            

                            <label htmlFor = "genre">Sexo</label>
                            <input value = {data.genre} 
                            onChange = {(e) => setData((prevState) => ({
                                ...prevState,
                                genre: e.target.value
                            }))
                            } type="text" placeholder="Sexo" id="genre" name="genre"/>
                            <p>ex: Masculino</p>
                        </div>
                        
                        <div className="imgPerfil col-lg-4">
                            <label htmlFor = "photo">Foto de Perfil</label>
                            <img src= {imgProfile} alt="" />
                        </div>
                    </div>

                    <label htmlFor = "address">Endereço</label>
                    <input value = {data.address}
                    onChange = {(e) => setData((prevState) => ({
                        ...prevState,
                        address: e.target.value
                    }))
                    } type="text" placeholder="Endereço" id="address" name="address"/>
                    <p>ex: Rua do Brasil, 999 - Brasilia - DF - 00000 000</p>

                    <div>
                        <div className="row">
                            <div className="content col-lg-6">
                                <label htmlFor = "phone">Telefone</label>
                                <input value = {data.phone} 
                                onChange = {(e) => setData((prevState) => ({
                                    ...prevState,
                                    phone: e.target.value
                                }))
                                } 
                                type="tel" placeholder="Telefone" id="phone" name="phone"/>
                                    
                                <p>ex: (00) 0 0000-0000</p>
                            </div>
                            
                            <div className="content col-lg-6">
                              <label htmlFor = "date">Data de aniversário</label>
                              <input value = {data.date}
                              onChange = {(e) => setData((prevState) => ({
                                  ...prevState,
                                  date: e.target.value
                             }))
                            }  type="text" placeholder="Data de aniversário" id="date" name="date"/>
                             <p className="cl-lg-6">ex: 10/01/1980</p>
                            </div>                            
                        </div>
                    </div>
                </>
            )}

            {screen === 1 && (
                <>  
                    <div className="form-employee">
                        <h2>Informações do Funcionário</h2>
                        <label htmlFor = "position">Cargo</label>
                        <input value = {data.position}
                        onChange = {(e) => setData((prevState) => ({
                            ...prevState,
                            position: e.target.value
                        }))
                        }  type="text" placeholder="Cargo" id="position" name="position"/>
                        <p>ex: Gerente</p>

                        <label htmlFor = "admission">Data de adimissão</label>
                        <input value = {data.admission}
                        onChange = {(e) => setData((prevState) => ({
                            ...prevState,
                            admission: e.target.value
                        }))
                        }  type="text" placeholder="Data de admissão" id="admission" name="admission"/>
                        <p>ex: 10/01/1980</p>


                        <label htmlFor = "sector">Setor</label>
                        <input value = {data.sector} 
                        onChange = {(e) => setData((prevState) => ({
                            ...prevState,
                            sector: e.target.value
                        }))
                        } type="text" placeholder="Setor" id="sector" name="sector"/>
                        <p>ex: Vendas</p>

                        <label htmlFor = "salary">Salário</label>
                        <input value = {data.salary}
                        onChange = {(e) => setData((prevState) => ({
                            ...prevState,
                            salary: e.target.value
                        }))
                        }  type="number" placeholder="Salário" id="salary" name="salary"/>
                        <p>ex: 3.500,00</p>
                    </div>
                </>
            )}

            <div className="buttons row">
                <button onClick={handleNavigateToContatoPrevius} className= "btn btn-lg col-lg-4" >Anterior</button>

                {isReadyToSubmit ? <button className= "btn btn-lg col-lg-4" onClick={handleSubmit}>{props.textButton}</button> : 
                <button className= "btn btn-lg col-lg-4" onClick={handleNavigateToContatoNext}>Próxima</button> }   
            </div>

            {isSubmitted && (JSON.stringify(data))}
        </div>
    )
}

export default InfoContato