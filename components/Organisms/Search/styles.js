import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 25px;
`;

export const Greetings = styled.div`
  padding-top: 25px;
  display: ${props => (props.isSelected ? 'block' : 'none')}
`;