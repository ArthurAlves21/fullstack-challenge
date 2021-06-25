import React from 'react';

import { Input, Form, Lupe } from './styles';

function SearchInput({handleSelect}) {

  return (
    <>
    <Form>
    <Lupe />
    <form onSelect={handleSelect}>
      <Input type="text" placeholder="Search book" />
    </form>
    </Form>
    </>
  );
}

export default SearchInput;