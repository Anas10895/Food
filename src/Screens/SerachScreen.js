import React,{useState,} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SerachBar from '../Components/SearchBar'
import useResults from '../../hooks/useResultes'
import ResultsList from '../Components/ResultList'
const SearchScreen = () => {
    const [serachTerm, setSearch] = useState('')
    const [resultes, errorMessage, serachApi ] = useResults();
    const filterResult = (price) => {
        return resultes.filter(result => {
            return result.price === price
        })
    }
    return <View style={{flex:1}}>

    <SerachBar
    serachTerm={serachTerm}
    onSearchTermChange={newTerm => setSearch(newTerm)}
    onTermSubmit={() => serachApi(serachTerm)}
    />

    {/* <Text>Search Screen</Text>
    {errorMessage ? <Text>{errorMessage}</Text> : <Text>Efry thing is fine ya brrother </Text>}
    {resultes.length ? <Text>We have found {resultes.length} resultes</Text> : <Text>no resultes</Text>}
    */}
   <ScrollView >
        <ResultsList resultes ={filterResult('$')} title={'Cost Effective'}/>
        <ResultsList resultes ={filterResult('$$')} title={'Bit Pricier'}/>
        <ResultsList resultes ={filterResult('$$$')} title={'Big Spender'}/>
   </ScrollView>
 


    </View>
}

const styles = StyleSheet.create({
    ViewStyle:{
        flexDirection:'column',
    }
})
export default SearchScreen;