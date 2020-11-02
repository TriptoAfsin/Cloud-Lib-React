import React from 'react'
import DataProvider from '../../global-components/DataProvider'
import './dynamicContent.css'


function BrowseBooks() {
    const newData = DataProvider()
    console.log(newData)

    //books

function displayBooks(){
    document.getElementById("book-display-list2").value = "none";
    var search = document.getElementById("book-display-list").value;
    const matchList = document.getElementById("book-display");
    let books;
    console.log(search);

//this function searches the booklist
const searchBooks = async searchText =>{
    books = newData;
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
        const html = matches.map(match => `
        <div class="card">
        <p class="card-title">${match.name} <br>(${match.writer}) <br><span>${match.subject}</span></p>
        <p><a href="${match.link}" target="blank" id="url" class="random-download">Download</a></p>
        <small>Language: ${match.language} / Page: ${match.page} </small>
        </div>
        `).join('');
        console.log(html);
        
        matchList.innerHTML = html;
    }
    else{
        matchList.innerHTML = null;
        
    }
};

    window.addEventListener('DOMContentLoaded', searchBooks);
    searchBooks(search);
    }

//display books 2

function displayBooks2(){
    document.getElementById("book-display-list").value = "none";
    var search = document.getElementById("book-display-list2").value;
    const matchList = document.getElementById("book-display");
    let books;
    console.log(search);

//this function searches the booklist
const searchBooks = async searchText =>{
    books = newData;
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
        const html = matches.map(match => `
        <div class="card">
        <p class="card-title">${match.name} <br>(${match.writer}) <br><span>${match.subject}</span></p>
        <p><a href="${match.link}" target="blank" id="url" class="random-download">Download</a></p>
        <small>Language: ${match.language} / Page: ${match.page} </small>
        </div>
        `).join('');
        console.log(html);
        
        matchList.innerHTML = html;
    }
    else{
        matchList.innerHTML = null;
        
    }
};

    window.addEventListener('DOMContentLoaded', searchBooks);
    searchBooks(search);
    }




    return (
        <React.Fragment>
            <div>
            <form className="books-dropdown">
                <p className="dropddown-header">Browse By Category<sup className="sup-txt">Beta</sup> - </p>
            <p className="art-lit-edu">Art / literature Category : </p>
            <select id="book-display-list" onChange={displayBooks} className="book-display-list">
            <option value="none" id="diselectArt">None</option>
              <option value="literature">All Art/Literature</option>
              <option value="Sci-Fi">Science Fiction</option>
              <option value="thriller">Thriller</option>
              <option value="novel">Novel</option>
              <option value="biography">Biography</option>
              <option value="romantic">Romantic</option>
              <option value="detective">Detective</option>
              <option value="comics">Comics</option>
            </select>
            <p class="art-lit-edu">Educational Category : </p>
            <select id="book-display-list2" onChange={displayBooks2} className="book-display-list">
                <option value="none" id="diselectEdu">None</option>
                <option value="physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Math">Mathematics</option>
                <option value="Coding">Coding</option>
                <option value="course">Courses</option>
                <option value="Religion">Religion</option>
                <option value="language">Language</option>
                <option value="gre1">GRE</option>
                <option value="Textile">Textile Eng.</option>
                <option value="Civil">Civil Eng.</option>
                <option value="Mechanical">Mechanical Eng.</option>
                <option value="ipe">Industrial & Production Eng.</option>
                </select>
          </form>
        </div>
        <div className="random-container">
                <div id="book-display">
                </div>   
        </div>


        <div className="book-display">
                <p id="suggestion">Select any category from the dropdown list given above ^</p>
        </div>   
        
        
    </React.Fragment>
    )
}

export default BrowseBooks
