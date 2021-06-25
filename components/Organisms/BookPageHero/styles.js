import styled from 'styled-components';

export const Container = styled.div`
  height: 40vh;
  min-height: 310px;
  width: 100%;
  @media only screen and (min-width: 1068px){
      text-align: center;
      margin: auto;
    }
`;

export const Background = styled.div`
background-color: #FFF6E5;
height: 100%;
width: 100%;
border-radius: 0px 0px 30% 0px;
.ball{
  background-color: transparent;
  right: 0px;
  position: absolute;
  top:-34px;
}
img{
  background-color: transparent;
}
@media only screen and (min-width: 1068px){
  text-align: center;
  margin: auto;
}

`

