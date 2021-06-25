import React, {useContext} from 'react';
import { Input, Form, Lupe } from './styles';
import {SearchContext} from '../../../../Context/SearchContext';

function SearchInput({handleSelect}) {
  const {setSearch} = useContext(SearchContext)
  
  return (
    <>
    <Form>
    <Lupe />
    <form onSelect={handleSelect} onChange={(e) => {setSearch(e.target.value)}}> 
      <Input type="text" placeholder="Search book" />
    </form>
    </Form>
    </>
  );
}

export default SearchInput;