import styled from 'styled-components';

export const Container = styled.div`
  img{
    position: absolute;
    left: 113px;
    top: 84px;
    z-index: 10;
    height: 234px;
    width: 151px;
    @media only screen and (min-width: 1068px){
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    z-index: 10;
    height: 33%;
    width: 151px;
    }

  }
`;
