
import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {

  const trocarTitulo = (event) =>{
    props.setTitulo(event.target.value)
  }
  console.log(props.titulo);

  const trocarImagem = (event) => {
    props.setImagem(event.target.value)
  }

  const trocarDescricao = (event) => {
    props.setDescricao(event.target.value)
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>

      <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={props.titulo} onChange={trocarTitulo}/>
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.imagem} onChange={trocarImagem}/>
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricao} onChange={trocarDescricao}/>
        </StyledLabel>
        
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro