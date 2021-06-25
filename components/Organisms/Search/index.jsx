import React, {useState, useEffect} from 'react'
import InputNormal from '../../Items/Forms/SearchInput';
import { Container, Greetings } from './styles';
import TextGreetings from '../../Items/Text/TextGreetings/index';

export function SearchForm({handleSearch}) {
const [isSelected, setIsSelected] = useState(true)

function handleSelected(e){
  e.target.value ? setIsSelected(false) : setIsSelected(true) 
}

  return (
    <Container>
      <InputNormal handleSelect={handleSelected} handleSearch={handleSearch}/>
      <Greetings isSelected={isSelected}>
      <TextGreetings greetings={'Hi,'} name={'Mehmed Al Fatih'}/>
      </Greetings> 
    </Container>
  ) 
}

export default SearchForm;