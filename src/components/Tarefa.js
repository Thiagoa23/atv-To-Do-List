import styled from "styled-components";

const TarefaContainer = styled.div`
    word-wrap: break-word; 
    margin: 8px 10px;
    cursor: pointer;
    padding: 5px;
    background-color: #282828;
    border-radius: 5px;
    color: white;

    &:hover {
    background-color: #706C6C;
    border: solid 1px white;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const TarefaTexto = styled.p`
    margin: 0;
`;

const Tarefa = ({ textoTarefa, onClick }) => {
    return (
        <TarefaContainer onClick={onClick}>
            <TarefaTexto>{textoTarefa}</TarefaTexto>
        </TarefaContainer>
    );
};

export default Tarefa;