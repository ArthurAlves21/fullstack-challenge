import React, {useState} from 'react';
import InputNormal from '../../Items/Forms/InputNormal';
import InputBig from '../../Items/Forms/InputBig';
import InputImage from '../../Items/Forms/InputImage';
import ButtonForm from '../../Items/Buttons/ButtonForm';
import TextDescription from '../../Items/Text/TextDescription';
import { Container, Form, Load } from './styles';
import { sendToMongo } from '../../Items/Forms/functions/sendToMongo';
import Spinner from '../../Items/Spinner'
import axios from 'axios';
import { useRouter } from 'next/router'

function AddBookForm() {
  const router = useRouter();
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState("")
  const [load, setLoad] = useState(false)
  const [fullLoad, setFullLoad] = useState(false)

  function handleTitle(e){
    setTitle(e)
    console.log(title)
  }
  function handleSubtitle(e){
    setSubtitle(e)
    console.log(subtitle)
  }
  function handleAuthor(e){
    setAuthor(e)
    console.log(author)
  }
  function handleDescription(e){
    setDescription(e)
    console.log(description)
  }
  
  async function handleFile(e){
    setLoad(true)
    setFile(await sendToMongo(e))
    setLoad(false)
  }
  async function handleSubmit(e){
    setFullLoad(true)
    e.preventDefault()
    try{
    axios.post('/api/add', 
   {
    "volumeInfo" : {
			"title":title,
			"subtitle":subtitle,
			"authors":[author],
			"imageLinks":{"thumbnail": file},
			"description":description
		}
   }).then((response) => router.push('/'))
  }catch(e){
    setFullLoad(false)
  }
}

  return (
    <>
    <Container>
      {fullLoad ? <Load><Spinner style={{margin:"auto"}} /></Load> :
      <> 
      <TextDescription description={'Add a new book'}/>
      <Form onSubmit={handleSubmit}> 
      <InputNormal title={'Name'} required={true}  name={'title'} handleChange={handleTitle}/>
      <InputNormal title={'Subtitle'} required={false}  name={'subtitle'} handleChange={handleSubtitle}/> 
      <InputNormal title={'Author'} required={true}  name={'author'} handleChange={handleAuthor}/>
      <InputBig    title={'Description'} required={true} name={'desc'} handleChange={handleDescription} />
      {load ? <Load><Spinner style={{margin:"auto"}} /></Load> : 
      <>
      <InputImage  title={'Insert Image'} required={true} handleChange={handleFile} files={file}/>
      <ButtonForm  button={'Add new book'}/>
      </>
      }
      </Form>
      </>  }
    </Container>
    </>
  );
}

export default AddBookForm;