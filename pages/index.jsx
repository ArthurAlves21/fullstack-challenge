import React, {useEffect, useState} from 'react'

import Head from 'next/head'
import TemplateHomePage from '../components/Templates/TemplateHomePage/index';
import SearchForm from '../components/Organisms/Search/index';
import {SearchContext} from '../Context/SearchContext';

import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([])
  const [search, setSearch] = useState("");

  useEffect(async () => {
    const result2 = await axios ("/api/books")
    setData1(result2.data.data)
  }, [])

  async function queryGoogle(id){
    const result1 = await axios (`https://www.googleapis.com/books/v1/volumes?q=${id}&fields=items(volumeInfo, id)&orderBy=relevance&maxResults=21&langRestrict=portuguese&key=AIzaSyA_ovTDxtE_uf7ChrO7gyhrrIsOm0QQ-D0`)
    setData(result1.data.items)
  }

  useEffect(() => {
    if(search){
    const timeoutId = setTimeout(() => (search ? queryGoogle(search) : queryGoogle("foton")), 800);
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
      <SearchContext.Provider value={{search, setSearch, data, data1}}>
       <SearchForm/>
      {data ? <TemplateHomePage /> : <h1 style={{margin:'auto', textAlign:'center'}}>Nothing Found =(</h1>}
      </SearchContext.Provider>
    </>  
  )
}
