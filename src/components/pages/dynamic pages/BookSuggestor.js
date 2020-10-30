import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './dynamicContent.css'

function BookSuggestor() {

    const[dbData, setDbData] = useState('')
    const [loading, setLoading] = useState(true)

    //pulling data 

    useEffect(
        () => {
            axios.get("https://triptoafsin.github.io/API-Host/BookDB.json")
        .then(res => {
        setLoading(false);
        //console.log(res.data);
        //console.log(res.data.length);
        setDbData(res.data);
        //wholeDB = res.data;
        //console.log(wholeDB);
        console.log("Axios called");
    }).catch(err => console.log(err));

        }, []
    )

    console.log(dbData);


    //random books
function getRange(){
    let sortedDB = [];
    var search = document.getElementById("random-cat").value;
    const matchList = document.getElementById("random_books");
    let books;
    console.log(search);
 
 //this function searches the booklist
 const searchBooks = async searchText =>{
    books = dbData;
    //get matches
    let matches = books.filter(book =>{
        const regex = new RegExp(`${searchText}`, 'gi'); // ^: will search for which resuls starts with 
        return book.name.match(regex) || book.writer.match(regex) || book.subject.match(regex) || book.terms.match(regex);
    });
 
    if(searchText.length === 0){
        matches = [];
        matchList.innerHTML ="";
    }
 
    outputHtml(matches);
 
    console.log(matches);
 };
 //show results in html
 const outputHtml = matches =>{
    if(matches.length > 0){
       sortedDB = matches;
       console.log(sortedDB);
       console.log(sortedDB.length);
       document.getElementById("random-show").style.visibility = 'visible';
       document.getElementById("random_books").innerHTML = ``;
       document.getElementById("random-show").innerHTML = `<p><input type="button"  value="Suggest Me a Book" class="random-btn" id="random-btn"></p><br<br><br><br><p className="random-tot">Total ${search} books: ${sortedDB.length}</p>`;
       document.getElementById("random-btn").addEventListener("click", randomBooks);
       function randomBooks(){
          console.log("random-btn called");
          var random1 = Math.floor(Math.random()*sortedDB.length); //it's the range sorter algo
          document.getElementById("random_books").innerHTML = `
          <div class="card">
          <p class="card-title">${sortedDB[random1].name} <br></br>(${sortedDB[random1].writer}) <br><span>${sortedDB[random1].subject}</span></p>
          <p><a href="${sortedDB[random1].link}" target="blank" id="url" class="random-download">Download</a></p>
          <small>Language: ${sortedDB[random1].language} / Page: ${sortedDB[random1].page} </small>
          </div>
          `;
          console.log("Random Book 1: "+ dbData[random1].name);
          console.log(random1);
      }
    }
    else{
        matchList.innerHTML = null;
    }
 };
    window.addEventListener('DOMContentLoaded', searchBooks);
    searchBooks(search);
 }

 
function remove(){
    document.getElementById("random-show").style.visibility = 'hidden';
 }
    


    return (
        <React.Fragment>
             <form className="books-dropdown">
            <p className="dropddown-header">Random Books<sup className="sup-txt">Beta</sup> - </p>
            <select id="random-cat" onChange={getRange} className="book-display-list">
                <option value="null" onClick={remove}>Select Your Category</option>
                <option value="a">All Category</option>
                <option value="humayun">Humayun Ahmed Books</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="thriller">Thriller</option>
                <option value="detective">Detective</option>
                <option value="translated">Translated</option>
                <option value="novel">Novel</option>
                <option value="biography">Biography</option>
                <option value="informative">Informative</option>
                <option value="comics">Comics</option>
                <option value="physics">Physics</option>
                <option value="code">Coding</option>
                <option value="religion">Religion</option>
            </select>
        </form>
        <div className="random-container">
            <div id="random_books">

            </div>
        </div>    
        <div class="about-container">
            <p class="contributor" id="random-show"></p><br></br>
            <div class="suggestion-container">
                <p id="suggestion">1. Select any category from the dropdown list given above ^<br></br>2. Tap on the "Suggest Me a Book Button""</p>
                </div>           
        </div>
        </React.Fragment>
    )
}

export default BookSuggestor
