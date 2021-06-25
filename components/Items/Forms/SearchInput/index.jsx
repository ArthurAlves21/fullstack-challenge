import React from 'react';

import { Input, Form, Lupe } from './styles';

function SearchInput({handleSelect, handleSearch}) {

  return (
    <>
    <Form>
    <Lupe />
    <form onSelect={handleSelect} onChange={(e) => {handleSearch(e.target.value)}}> 
      <Input type="text" placeholder="Search book" />
    </form>
    </Form>
    </>
  );
}

export default SearchInput;