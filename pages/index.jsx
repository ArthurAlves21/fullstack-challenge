import React, {useEffect, useState} from 'react'

import Head from 'next/head'
import TemplateHomePage from '../components/Templates/TemplateHomePage/index';
import SearchForm from '../components/Organisms/Search/index';
import InputNormal from '../components/Items/Forms/SearchInput/index';

import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([])
  const [search, setSearch] = useState("" || "foton");

  useEffect(async () => {
    const result2 = await axios ("/api/books")
    setData1(result2.data.data)
  }, [])

  async function queryGoogle(id){
    const result1 = await axios (`https://www.googleapis.com/books/v1/volumes?q=${id}&fields=items(volumeInfo, id)&orderBy=relevance&maxResults=21&langRestrict=portuguese&key=AIzaSyA_ovTDxtE_uf7ChrO7gyhrrIsOm0QQ-D0`)
    setData(result1.data.items)
  }

  function handleChange(e){
    setSearch(e)
  }

  useEffect(() => {
    if(search){
    const timeoutId = setTimeout(() => (queryGoogle(search)), 1500);
    return () => clearTimeout(timeoutId);
  }
  }, [search]);

  return (
    <>
      <Head>
        <title>Foton Bookfinder</title>
        <meta name="description" content="Bookfinder For Foton Tech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchForm handleSearch={handleChange}/>
      {data ? <TemplateHomePage data={data} data1={data1} search={search}/> : <h1 style={{margin:'auto', textAlign:'center'}}>Nothing Found =(</h1>}
    </>  
  )
}
