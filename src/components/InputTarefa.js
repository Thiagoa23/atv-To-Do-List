import styled from "styled-components";

const InputContainer = styled.div`
    width:500px;
    height: 100px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #141414;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    width:100%;
    height: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
`;

const Button = styled.button`
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.title === 'Adicionar' ? '#4CAF50' : '#f44336'};
    color: white;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.title === 'Adicionar' ? '#45a049' : '#d32f2f'};
        border: solid 1px white;
    }

    &:active {
        transform: scale(0.95);
    }
`;


const InputTarefa = ({ adicionarTarefa, cancelarAdicionarTarefa, showinput, textoTarefa, setTexto }) => {
const handleAdicionarTarefa = () => {
    adicionarTarefa();
};

if (!showinput) return null;

return (
    <InputContainer>
    <Input 
        type="text" 
        value={textoTarefa} 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Digite a nova tarefa"
    />
    <div>
        <Button title="Adicionar" onClick={handleAdicionarTarefa}>Adicionar</Button>
        <Button title="Cancelar" onClick={cancelarAdicionarTarefa}>Cancelar</Button>
    </div>
    </InputContainer>
);
};

export default InputTarefa;