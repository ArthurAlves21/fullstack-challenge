import styled from 'styled-components';


export const Input = styled.input`
border-radius: 10px;
border: 0;
background-color: #fff;
box-shadow: 5px 5px 30px rgba(212, 173, 134, 0.4926);
height: 48px;
padding-left: 10px;
font-size: 14px;
font-weight: 600;
cursor: pointer;
outline: none;
transition: 0.5s;

&:hover{
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
}
&:focus{
  transition: 0.5s;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
}
`
