import React from 'react';

import { Input } from './styles';
import TextFormLabel from '../../Text/TextFormLabel/index';

function InputNormal({title, name, required, handleChange}) {

  return (
    <> 
    <TextFormLabel title={title} for={name}/> 
    <Input type="text" required={required} id={name} name={name} onChange={(e) => {handleChange(e.target.value)}}/>
    </>
  ); 
}

export default InputNormal;