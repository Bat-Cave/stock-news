import React, { useState } from 'react';
import { IoSearchCircle } from 'react-icons/io5';
import axios from 'axios';
import {connect} from 'react-redux';

const News = (props) => {
    console.log(props)
    let [googleNews, setGoogleNews] = useState([]);
    let [newsSearch, setNewsSearch] = useState('');

    
    const getNews = () => {
        let search = '';


        if(props.get === 'Google News'){
            if(newsSearch === ''){
                search = 'no-search-here';
            } else {
                search = newsSearch;
            }
            axios.get(`/api/googlenews/${search}`).then(res => {
                setGoogleNews(res.data.items);
            })
        }
        if(props.get === 'Google Trends'){
            if(newsSearch === ''){
                search = 'no-search-here';
            } else {
                search = newsSearch;
            }
            axios.get(`/api/googletrends`).then(res => {
                console.log(res.data)
                // setGoogleNews(res.data.items);
            })
        }
    }

    let gnews = googleNews.map((e, i) => {
        let index = e.title.lastIndexOf(' - ');
        let source = e.source.text;
        let title = e.title.substring(0, index);

        return(
            <div className='news-story' key={`gnews${i}`}>
                <p className='source'>{source}</p>
                <p className='title'><a href={e.link} target='__blank'>{title}</a></p>
                <p className='date'>{e.pubDate.replace("GMT", "")}</p>
            </div>
        )
    })
    

    return(
        <div className='news-container'>
            <div className='search-container'>
                <input className='search' placeholder='Search News' onChange={(e) => setNewsSearch(e.target.value)}/>
                <button onClick={() => getNews()}><IoSearchCircle/></button>
            </div>
            {gnews}
        </div>
    )
}

function mapStateToProps(state) {
    return state;
  }
  
export default connect(mapStateToProps, null)(News);