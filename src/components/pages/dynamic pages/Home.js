import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import DataProvider from '../../global-components/DataProvider'
import axios from 'axios'
import './dynamicContent.css'





function Home() {
    //states
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('')
    const[dbData, setDbData] = useState(null);
    const[match, setMatch] = useState('')


    const newData = DataProvider()
    console.log(newData)


    /*
    //pulling data 
    useEffect(
        () => {
            axios.get("https://triptoafsin.github.io/API-Host/BookDB.json")
        .then(res => {
        setLoading(false);
        setDbData(res.data);
        console.log("Axios called");
    }).catch(err => console.log(err));

        }, []
    )
    console.log(dbData);
    */
    

    //regex
    const matchList = document.getElementById("list");
    const searchQuery = (books) => {
        let matches = books.filter(book =>{
            const regex = new RegExp(`${query}`, 'gi'); // ^: will search for which resuls starts with , gi:case insensitive search,RegExp: Regular Expression
            return book.name.match(regex) || book.writer.match(regex) || book.subject.match(regex) || book.terms.match(regex);
        });

        if(query.length === 1){
            matches = [];
            matchList.innerHTML ="";
        }

        outputHtml(matches);
        setMatch(matches.length)
        console.log(matches)
    }


    //search Handler
    const handleSearch = (e) => {
        setQuery(e.target.value)
        console.log("handleSearch Called")
        let books = newData;

         //get matches
         searchQuery(books)
         //SearchEngBin(books)
        console.log(query)
    }

    //show results in html
    const outputHtml = matches =>{
        if(matches.length > 0){
            const html = matches.map(match => `
            <div class="card">
            <p class="card-title">${match.name} <br>(${match.writer}) <br><span>${match.subject}</span></p>
            <p><a href="${match.link}" target="blank" id="url">Download</a></p>
            <small>Language: ${match.language} / Page: ${match.page} </small>
            </div>
            `).join('');
        console.log(html);
        document.getElementById("suggestion").style.display = "none";
        document.getElementById("suggestion2").style.display = "none";
        matchList.innerHTML = html;
        }
        else{
            matchList.innerHTML = null;
            document.getElementById("suggestion").style.display = "inline-block";
            document.getElementById("suggestion2").style.display = "inline-block";
        }
    };


    
    


    return (
        <React.Fragment>
            <div className="data-container">
                <img src="./imgs/db_new.png" className="data-img" alt="db"></img><p id="database">{(newData === null) ? "loading..." : `${newData.length} Books`}</p>
            </div>
            <div className="img-holder" id="img-holder">
                <img src="./imgs/cloud.png"  className="cloud" alt="cloud lib"></img>
                <p className="img-txt">{(newData === null) ? "loading..." : "Cloud Lib"}</p>
                <p className="img-txt-2">{ (query.length > 0) ?  `${match} Books Found` : "" }</p>
             </div>
            <div className="search-container">

       <input type="text" placeholder="Type to Search" id="search" className="search" onChange={handleSearch} value={query}></input><br></br>
       <p className="suggestion" id="suggestion">search by the book's name/ writer's name/ subject/ category,<b> simply just type & </b><b>Don't put random keywords</b></p><br></br>
       <p className="suggestion" id="suggestion2"><Link to="/Cloud-Lib-React/help"><p href="help.html">If You are having Download Problem Tap here</p></Link></p>
        </div>
        <div className="result-container">
    <div id="list" className="list"></div>
        </div> 
    </React.Fragment>
    )
}

export default Home
