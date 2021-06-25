import styled from 'styled-components';
import {ShareAlternative} from '@styled-icons/entypo/ShareAlternative'
import {BookOpen} from '@styled-icons/boxicons-regular/BookOpen'
import {Headphone} from '@styled-icons/boxicons-regular'

export const Container = styled.div` 
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 100;
  bottom: 53px;
  height: 56px;
  width: 90%;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 2px;
  right: 5%;
  margin: auto;
`

export const Book = styled(BookOpen)`
height: 16px;
background-color: #fff;
`
export const Phone = styled(Headphone)`
height: 16px;
background-color: #fff;
`
export const Share = styled(ShareAlternative)`
height: 16px;
background-color: #fff;
`
