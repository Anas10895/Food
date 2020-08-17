import React,{useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SerachBar from '../Components/SearchBar'
import yelp from '../../api/yelp'
const SearchScreen = () => {
    const [serachTerm, setSearch] = useState('')
    const [resultes , setResults] = useState([])

    const serachApi = async() => {

       const response = await yelp.get('/search', {
           params:{
               limit:50,
               term:serachTerm,
               location: 'san jose',

           }
       });
       setResults(response.data.businesses);
    }
    return <View>

    <SerachBar
    serachTerm={serachTerm}
    onSearchTermChange={newTerm => setSearch(newTerm)}
    onTermSubmit={serachApi}
    />

    <Text>Search Screen</Text>
    {resultes.length ? <Text>We have found {resultes.length} resultes</Text> : <Text>no resultes</Text>}
    

    </View>
}

const styles = StyleSheet.create({

})
export default SearchScreen;