import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataProvider() {

    console.log("DataProvider Called")
    const[dbData, setDbData] = useState(null)
    const [loading, setLoading] = useState(true)

     //pulling data 

     useEffect(
        () => {
            axios.get("https://triptoafsin.github.io/API-Host/BookDB.json")
        .then(res => {
        setLoading(false);
        setDbData(res.data);
        console.log("Axios called");
        //return dbData;
    }).catch(err => console.log(err));

        }, [dbData]
)



    return dbData;
}

export default DataProvider
