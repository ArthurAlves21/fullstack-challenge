import styled from 'styled-components';
import {HomeAlt, Plus, User} from '@styled-icons/boxicons-regular'


export const Container = styled.div` 
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 100;
  bottom: 4px;
  height: 59px;
  width: 100%;

`

export const Man = styled(User)`
height: 27.48px;
font-size: 40px;
background-color: transparent;
`
export const Home = styled(HomeAlt)`
height: 27.48px;
font-size: 40px;
background-color: transparent;

`
export const PlusSign = styled(Plus)`
height: 27.48px;
background-color: transparent;

`
