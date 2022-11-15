import React from 'react'
import { Input } from '../FormularioCadastro/styled'
import { ContainerPostagem, Image, Description, Titulo } from './styles'

const TelaDaPostagem = (props) => {
  return (
     (props.titulo.length > 0 && props.imagem.length > 0 && props.descricao.length > 0) ?
      
      <ContainerPostagem>
        <Titulo>{props.titulo}</Titulo>
        <Image src={props.imagem} alt="" />
        <Description>{props.descricao}</Description>


      </ContainerPostagem> :

      <ContainerPostagem>
        <Image src={"https://dl2.macupdate.com/images/icons256/54019.png?time=1605679583"} alt='drone view' />
        <Description>{props.descricao}</Description>
      </ContainerPostagem>
  )
}

export default TelaDaPostagem