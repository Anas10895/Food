import React,{useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SerachBar from '../Components/SearchBar'
import useResults from '../../hooks/useResultes'
const SearchScreen = () => {
    const [serachTerm, setSearch] = useState('')
    const [resultes, errorMessage, serachApi ] = useResults();
    return <View>

    <SerachBar
    serachTerm={serachTerm}
    onSearchTermChange={newTerm => setSearch(newTerm)}
    onTermSubmit={() => serachApi(serachTerm)}
    />

    <Text>Search Screen</Text>
    {errorMessage ? <Text>{errorMessage}</Text> : <Text>Efry thing is fine ya brrother </Text>}
    {resultes.length ? <Text>We have found {resultes.length} resultes</Text> : <Text>no resultes</Text>}
    

    </View>
}

const styles = StyleSheet.create({

})
export default SearchScreen;