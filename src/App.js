import React, { useState, useEffect } from 'react';
import NewsPlate from './NewsPlate';
import axios from 'axios';
import './App.css';

function App() {

const API_KEY = 'f0d7e24a3286431eba49454874866fe2';
const [ news, setNews ] = useState([]);


const getNews = () => {
  // axios.get(`http://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`)
  // .then( response => {
  //   setNews(response.data.articles)
  // })
  // .catch( error => {
  //   console.log(error)
  // })
        axios({
          "method":"GET",
          "url":"https://bing-news-search1.p.rapidapi.com/news",
          "headers":{
          "content-type":"application/octet-stream",
          "x-rapidapi-host":"bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key":"8680f631a1mshaa755e93cbd7de4p16905djsn204d8a614eb6",
          "x-bingapis-sdk":"true",
          "useQueryString":true
          },"params":{
          "safeSearch":"Off",
          "textFormat":"Raw"
          }
          })
          .then((response)=>{
            setNews(response.data.value)
          })
          .catch((error)=>{
            console.log(error)
          })
}
// run one
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
