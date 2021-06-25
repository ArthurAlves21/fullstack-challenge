import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 25px;
  @media only screen and (min-width: 1068px){
    width: 80%;
    margin:auto;
  }
`;

export const Greetings = styled.div`
  padding-top: 25px;
  display: ${props => (props.isSelected ? 'block' : 'none')};
  @media only screen and (min-width: 1068px){
    width: 80%;
    margin:auto;
  }
  
`;