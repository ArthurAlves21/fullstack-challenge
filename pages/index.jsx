import React, {useEffect, useState} from 'react'

import Head from 'next/head'
import TemplateHomePage from '../components/Templates/TemplateHomePage/index';
import SearchForm from '../components/Organisms/Search/index';
import InputNormal from '../components/Items/Forms/SearchInput/index';

import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([])
  const [search, setSearch] = useState("");

  useEffect(async () => {
    const result1 = await axios ("https://www.googleapis.com/books/v1/volumes?q=potter&fields=items(volumeInfo, id)&orderBy=relevance&maxResults=21&langRestrict=portuguese&key=AIzaSyA_ovTDxtE_uf7ChrO7gyhrrIsOm0QQ-D0")
    setData(result1.data.items)
    const result2 = await axios ("/api/books")
    setData1(result2.data.data)
  }, [])

  function handleChange(e){
    setSearch(e.target.value)
  }

  return (
    <>
      <Head>
        <title>Foton Bookfinder</title>
        <meta name="description" content="Bookfinder For Foton Tech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchForm />
      {data ? <TemplateHomePage data={data} data1={data1} /> : <h1>Loading</h1>}
    </>  
  )
}
