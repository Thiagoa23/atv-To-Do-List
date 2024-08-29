import styled from "styled-components";

const CardTitle = styled.h2`
  color: #fff;
  margin-bottom: 10px;
`;

const CardContainer = styled.div`
    width: 420px;
    background-color: #141414;
    border-radius: 10px;
    margin-top: 30px;
    color: white;
    `;
    
const CardOverflow = styled.div`
    max-height: 600px;
    overflow-y: auto;
`
const Card = ({ title, children }) => {
    return (
      <CardContainer>
        <CardTitle>{title}</CardTitle>
        <CardOverflow>
          {children}
        </CardOverflow>
      </CardContainer>
    );
  };
export default Card;