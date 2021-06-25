import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: auto;
  @media only screen and (min-width: 1068px){
    text-align: center;
  }
`;
 
export const Title = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: rgba(49, 49, 49, 0.8);
  opacity: 0.8;
  line-height: 14,32px;
`

export const AuthorName = styled.div`
  font-family: "Roboto";
  font-weight: 900;
  font-size: 10px;
  color: rgba(49, 49, 49, 0.8);
  opacity: 0.8;
  line-height: 12px;
`