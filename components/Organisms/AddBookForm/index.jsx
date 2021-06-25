import React, {useState, useContext} from 'react';
import InputNormal from '../../Items/Forms/InputNormal';
import InputBig from '../../Items/Forms/InputBig';
import InputImage from '../../Items/Forms/InputImage';
import ButtonForm from '../../Items/Buttons/ButtonForm';
import TextDescription from '../../Items/Text/TextDescription';
import { Container, Form, Load } from './styles';
import { sendToMongo } from '../../Items/functions/sendToMongo';
import Spinner from '../../Items/Spinner'
import axios from 'axios';
import { useRouter } from 'next/router'
import { AddBookContext } from '../../../Context/AddBookContext'
import { AuthContext } from '../../../Context/AuthContext'

function AddBookForm() {
  const {user} = useContext(AuthContext)
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
  }
  function handleSubtitle(e){
    setSubtitle(e)
  }
  function handleAuthor(e){
    setAuthor(e)
  }
  function handleDescription(e){
    setDescription(e)
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
			"description":description,
      "user": user
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
      <InputNormal title={'Subtitle'} required={false} name={'subtitle'} handleChange={handleSubtitle}/> 
      <InputNormal title={'Author'} required={true}  name={'author'} handleChange={handleAuthor}/>
      <InputBig    title={'Description'} required={true} name={'desc'} handleChange={handleDescription} />
      {load ? <Load><Spinner style={{margin:"auto"}} /></Load> : 
      <>
      <AddBookContext.Provider value={{handleFile, file}}>
      <InputImage title={'Insert Image'} required={true} handleChange={handleFile}/>
      <ButtonForm button={'Add new book'}/>
      </AddBookContext.Provider>
      </>
      }
      </Form>
      </>  }
    </Container>
    </>
  );
}

export default AddBookForm;