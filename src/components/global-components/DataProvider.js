import {useEffect, useState} from 'react'
import axios from 'axios'

function DataProvider() {

    console.log("DataProvider Called")
    const[dbData, setDbData] = useState(null)
    //const [loading, setLoading] = useState(true)
    const url = "https://triptoafsin.github.io/API-Host/BookDB.json"

     //pulling data 

     useEffect(
        () => {
            axios.get(url)
        .then(res => {
        //setLoading(false);
        setDbData(res.data);
        console.log("Axios called");
        return dbData;
    }).catch(err => console.log(err));

        }, [url]
)
    return dbData;
}

export default DataProvider
