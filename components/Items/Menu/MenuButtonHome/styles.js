import styled from 'styled-components';

export const Container = styled.div`
  height: 90%;
  background-color: #fff;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Icon = styled.div`
  color: ${props => props.selected ? "#000" : "#BFBEBF"};
  background-color: #fff;

`;

export const Text = styled.div`
  color: ${props => props.selected ? "#000" : "#BFBEBF"};
  background-color: #fff;
  font-size: 10px;

`;
