import React, {useState, useEffect} from 'react'

const  SearchEngBin = (books) => {

    console.log("Binary search called")

    const [query, setQuery] = useState('')
    const[match, setMatch] = useState('')

    setQuery(books)

    const matchList = document.getElementById("list");

    console.log("query on progress")
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
        console.log("query done")

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

        console.log("display done")
    };

    return outputHtml
}

export default SearchEngBin
