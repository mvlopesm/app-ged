import Header from "../components/Header/Header";
import React from "react";
import FormFuncionario from "../components/FormFuncionario/FormFuncionario";

const CadastrarFuncionario = () => {
    return (
        <div>
            <Header/>
            <FormFuncionario textButton = "Cadastrar"/>
        </div>
    )
}

export default CadastrarFuncionario