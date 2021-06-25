import styled from 'styled-components';

export const Input = styled.textarea`
  height: 228px;
  border: 0;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 5px 5px 35px rgba(212, 173, 134, 0.4926);
  outline: none;
  font-size: 14px;
  font-weight: 600;
  padding: 10px;
  transition: 0.5s;
  resize: none;
  &:hover{
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
  &:focus{
    transition: 0.5s;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
`; 