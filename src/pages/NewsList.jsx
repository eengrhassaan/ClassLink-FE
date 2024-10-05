import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import CardGrid from "../components/CardGrid";


function NewsList() {

    const [news, setNews] = useState([])

    useEffect(()=> {
        axios.get("https://newsapi.org/v2/everything?q=cricket&apiKey=34b92be7c9824a7dbef45950e230be90")
        .then(response => {
            console.log(response.data.articles[0])
            setNews(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    const newsItems = news.articles?news.articles.map((newsItem) => <NewsCard {...newsItem}/>):''

    return (
        
        <>
            {news.status}
                <div className='row justify-content-center'>
            {newsItems}

            </div>
        </>
    )
}

export default NewsList