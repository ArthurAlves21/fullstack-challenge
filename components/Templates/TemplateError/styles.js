import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;


export const Button = styled.button`
background-color: #FF6978;
color: #fff;
border: 0;
height: 48px;
width: 90%;
text-align: center;
font-size: 24px;
font-weight: 600;
border-radius: 10px;
outline: none;
cursor: pointer;
&:hover{
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
}
&:focus{
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
}
`;
