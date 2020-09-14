import React, { useState, useEffect } from 'react';
import NewsPlate from './NewsPlate';
import axios from 'axios';
import './App.css';

function App() {

const API_KEY = 'f0d7e24a3286431eba49454874866fe2';
const [ news, setNews ] = useState([]);

const getNews = () => {
  axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`)
  .then( response => {
    setNews(response.data.articles)
  })
  .catch( error => {
    console.log(error)
  })
}
useEffect(() => {
  getNews();
},[]);


  return (
    <div className="App">
    <div className="header ">News</div>
    {news.map((data, index) => (  
    <div key={index}><NewsPlate data={data} index={index} /></div>
    ))}
    </div>
  );
}

export default App;
