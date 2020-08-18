import {useEffect, useState} from 'react'
import yelp from '../api/yelp'

export default() => {
    const [resultes , setResults] = useState([])
    const [errorMessage , setErrorMessage] = useState('')


    const serachApi = async(anything) => {
        console.log('hi ')
        try{
            const response = await yelp.get('/search', {
                params:{
                    limit:50,
                    term:anything,
                    location: 'san jose', 
     
                }
            });
            setResults(response.data.businesses);
        }catch(e){
            setErrorMessage('Somthing went Wrong ya brother')
        }

    }
    useEffect(() => {
        serachApi('pasta')
    }, [])
    return [resultes, errorMessage, serachApi ]
}