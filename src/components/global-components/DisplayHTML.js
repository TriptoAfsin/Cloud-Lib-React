import React from 'react'

const DisplayHTML = (matches) => {

    const matchList = document.getElementById("list");
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
    return DisplayHTML(matches)
}

export default DisplayHTML
