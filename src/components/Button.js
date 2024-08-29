import styled from "styled-components";

const Button = styled.button`
    color: white;
    font-size: 1.5em;
    background-color: transparent;
    border: solid 1px white;
    width: 350px;
    height: 100px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: ${props => {if (props.title === 'adicionar') return '#45a049';
                                        if (props.title === 'alternar') return '#ffffff';
                                        if (props.title === 'deletar') return 'red';
                                        return 'transparent';
                                     }};
        color: ${props => {if (props.title === 'alternar') return 'black';}};
        border: solid 1px white;
    }

    &:active {
        transform: scale(0.95);
    }
`
export default Button;