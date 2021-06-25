import React, {useState, useContext} from 'react'
import InputNormal from '../../Items/Forms/SearchInput';
import { Container, Greetings } from './styles';
import TextGreetings from '../../Items/Text/TextGreetings/index';
import {AuthContext} from '../../../Context/AuthContext'
export function SearchForm(props) {
const [isSelected, setIsSelected] = useState(true)
const {user} = useContext(AuthContext)
function handleSelected(e){
  e.target.value ? setIsSelected(false) : setIsSelected(true) 
}

  return (
    <Container>
      <InputNormal handleSelect={handleSelected}/>
      <Greetings isSelected={isSelected}>
      <TextGreetings greetings={props.greetings} name={user}/>
      </Greetings> 
    </Container>
  ) 
}
 
export default SearchForm;