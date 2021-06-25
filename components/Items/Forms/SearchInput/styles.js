import styled from 'styled-components';
import {Search} from '@styled-icons/octicons'

export const Input = styled.input`
  font-family: "SFProDisplay";
  font-weight: 500;
  border-radius: 5px;
  border: 0px;
  width: 98%;
  padding: 15px;
  padding-left: 31.33px;
  placeholder: "Search book";
  font-size: 18px;
  line-height: 18px;
  color: #54565A, 100%;
  background-color: #fff;
  outline: none;
`;

export const Lupe = styled(Search)`
  height: 16px;
  color: #F0F0F0;
  background-color: #fff;
  position: absolute;
  margin: auto;
  margin-top: 17px;
`;

export const Form = styled.div`
  width: 90%;
  margin: auto;
  background-color: #fff;
  padding-left: 20.33px;
`;
