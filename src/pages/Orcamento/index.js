import React, { useState, useEffect } from "react";
import { data, Link, useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import ReactInputMask from "react-input-mask";
import { toast } from "react-toastify";
import { Container, button } from "../../styles/GlobalStyles.js";
import { Form, ProfilePicture, Title , Content, Description, Checkbox} from "./styled.js";
import Mock from "../../pages/Orcamento/orcamentoMock.json"
import { isEmail, isInt, isFloat } from "validator";
import CleaveInput from "./CleaveInput.js";

export default function Aluno() {


  const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    const nome = formData.get("nome");
    const descricao = formData.get("descricao");
    const telefone = formData.get("telefone");
    const servicosSelecionados = formData.getAll("servico").join(",");
    const msg = `Ola! Tenho interesse em um orcamento.
    Nome: ${nome}
    Telefone: ${telefone}
    Servicos: ${servicosSelecionados}
    Descricao: ${descricao}
    
    `
    const numero = "5585992271722";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
    
    console.log(msg);
    const data = Object.fromEntries(formData);
    e.preventDefault();
    let forErrors = false;
    if(nome.length < 3 || nome.length > 255){
      toast.error("Nome precisa ter entre 3 e 255 caracteres")
      forErrors = true;
    }
      if(telefone.length < 1){
      toast.error("Telefone incompleto")
      forErrors = true;
    }
    if(descricao.length < 1 || descricao.length > 255){
      toast.error("A descricao ter entre 1 e 255 caracteres");
      forErrors = true
    }
       if (servicosSelecionados.length < 1){
      toast.error("Selecione ao menos uma opcao de servico")
      forErrors = true;
    }
    if(forErrors) return;


    toast.success("Informacoes enviadas entraremos em contato")
    window.open(url, "_blank")
    console.log({...data, servico: servicosSelecionados})

  }
  const navigate = useNavigate();
  return (
    <Container>
    
    <Title>Solicite orcamento</Title>
     <Content>
  <Form onSubmit={handleSubmit}>
  <label htmlFor="nome">Nome</label>
  <input 
  id="nome" 
  type="text" 
  name="nome" 

  placeholder="Nome"
   />

  <label htmlFor="telefone">Telefone de contato</label>
  <CleaveInput
  options={{ 
    delimiters: ['(', ') ', '-'],
    blocks: [0, 2, 5, 4],
    numericOnly: true}}
  id="telefone" 
  type="telefone" 
  name="telefone"
  placeholder="(00) 00000-0000"
   />
     <label htmlFor="descricao">Descricao</label>
  <textarea id="descricao" type="descricao" 
  name="descricao"  
  style={{height :"100px", width: "100%", resize: "vertical", overflow: "auto"}}
  placeholder="Descreva com mais detalhes o que voce necessita"
  />
  <label className="titulo-servico">Selecione o servico:</label>
  <Checkbox>
      <label>
        Reforma
        <input type="checkbox" name="servico" value="Reforma"></input>
      </label>
      <label>
        Pintura
        <input  type="checkbox" name="servico" value="Pintura"></input>
      </label>
      <label>
        Marcenaria
        <input type="checkbox" name="servico" value="Instalação elétrica"></input>
      </label>
      <label>
        Hidraulica
        <input  type="checkbox" name="servico" value="Instalação hidraulica"></input>
      </label>
 
</Checkbox>
  <button type="submit">Enviar</button>
</Form>
<Description>
  <Title className="Title">{Mock.Title}</Title>
  <a>{Mock.Description}</a>
</Description>
</Content>
    </Container>
  );
}

