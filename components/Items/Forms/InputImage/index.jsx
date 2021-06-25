import React, {useMemo, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { Container, Images } from './styles';
import { baseStyle, activeStyle, acceptStyle, rejectStyle} from '../../Forms/InputImage/dropStyles'

function InputImage({handleChange, files}) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'image/*'});


  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);


  return (
    <>
    <Container>
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} onChange={(e) => {handleChange(e.target.files[0])}}/>
        <p>Drag or Select your book cover</p>
      </div>
      <aside>
        <h4 style={{marginTop:"20px"}}>Cover</h4>
        <ul style={{listStyle:"none"}}><li><Images>{files ? <img src={files} /> :  null}</Images></li></ul>
      </aside>
    </div>
    </Container>
    </>
  );
}

export default InputImage; 