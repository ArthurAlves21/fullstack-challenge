import styled from 'styled-components';

export const Image = styled.div`
  background-image: url("${props => props.background}");
  background-size: cover;
  background-repeat: no-repeat;
  height: 153px;
  width: 105px;
  margin: auto; 
  border-radius: 5px;
  box-shadow: 0 0 0.1em rgba(49, 49, 49, 0.2);
  cursor: pointer;
`;