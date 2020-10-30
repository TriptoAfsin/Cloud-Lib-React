import React from 'react'
import './staticContent.css'
import  {Link} from 'react-router-dom'

function Team() {
    return (
        <div className="team-container">
        <p className="abt-header" id="abt-header"> Cloud Lib Team</p> 
        <div className="team-pic-holder">
            <div className="founder-holder"> 
                <p className="founder-txt"><a href="https://www.facebook.com/Tripto.Afsin"><img src="./imgs/founder.jpg"  className="member-img" alt="TriptoAfsin"></img></a><p>Founder</p>TriptoAfsin</p>
            </div>
            <div className="other-holder"> 
                <p className="founder-txt"><a href="https://www.facebook.com/almamun6464"><img src="./imgs/mamun.jpg"  className="member-img" alt="Abdullah Al Mamun"></img></a><p>Database Architect</p> Abdullah Al Mamun</p>
            </div>
        </div>
        <p className="abt-header">Contributors</p>
        <p className="contributor">Asif Iqbal</p>
        <p className="contributor">Sabiha Moon Taha</p>
        <p className="contributor">Tahmid Hasan Sameer</p>
        <p className="contributor">Mumtahina Mim</p>
        <p className="contributor">MD Zannatul Ferdous Niloy</p>
        <p className="contributor">Enamul Muyeed Latifi</p>
        <p className="contributor">Nazmul Hasan</p>
        <p className="contributor">Shahriar Rumman</p>
        <Link to="/submit">
            <p className="contributor"><a href="/">Contribute Books</a></p>
        </Link>
        
        
    </div>
    )
}

export default Team
