import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  text-align: center;
  height: 50%;
  width: 100%;
  margin: auto;
  cursor: pointer;
  border: 0px;
  border-right: ${props => props.border ? "1px solid rgba(151, 151, 151, 0.2)" : "none"};
  border-left: ${props => props.border ? "1px solid rgba(151, 151, 151, 0.2)" : "none"};
  
`;

export const InnerContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`;

export const Icon = styled.span`
  color: #BFBEBF;
  padding-right: 5px;
  
`;

export const Text = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #3F4043;
`;


