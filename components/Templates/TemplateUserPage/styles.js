import styled from 'styled-components';

export const Container = styled.div`
  width: 100%; 
  padding-bottom: 20vh;
  @media only screen and (min-width: 1068px){
    width: 80%;
    margin:auto;
  }
`;

export const Content = styled.div`
width: 98%;
margin: auto;
display: grid; 
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 3px;
justify-content: center;
@media only screen and (min-width: 1068px){
  width: 90%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

}
`;
