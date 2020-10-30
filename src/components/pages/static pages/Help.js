import React from 'react'
import './staticContent.css'

function Help() {
    return (
        <div className="about-container">
        <p className="abt-header" id="abt-header">Help</p> 
        <h2 className="help-headers">1. How to Search ?</h2>
        <h3 className="help-answers"> Ans: You can search by the books name/writer's name/subject/category, simply just type</h3>
        <h2 className="help-headers">2. I'm having download issues with google drive links - </h2>
        <h3 className="help-answers"> Ans: Simply sign-in to your google account when you visit a link, only once</h3>
        <div className="help-img-container">
            <img src="./imgs/helpss.png" className="help-img" alt="help_img"></img>
        </div>
        <p className="abt-header" id="abt-header">FAQ</p> 
        <h2 className="help-headers">1. Is this service free ?</h2>
        <h3 className="help-answers"> Ans: Yes !</h3>
        <h2 className="help-headers">2. Where are these books stored?</h2>
        <h3 className="help-answers"> Ans: These books are stored in various cloud storages(Drive, Dropbox)</h3>
        <h2 className="help-headers">For more Queries - </h2>
        <p className="contributor"><a href="https://www.messenger.com/t/110335137306303" target="blank">Chat with our chatbot</a></p>
    </div>
    )
}

export default Help
