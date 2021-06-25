import React from 'react';

import { Container, Input } from './styles';
import TextFormLabel from '../../Text/TextFormLabel/index';

function InputBig({title, name, required, handleChange}) {

  return (
    <>
    <TextFormLabel title={title} for={name}/>
    <Input required={required} id={name} name={name} onChange={(e) => {handleChange(e.target.value)}}/>
    </>
  );
}

export default InputBig;