import React,{useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SerachBar from '../Components/SearchBar'

const SearchScreen = () => {
    const [serachTerm, setSearch] = useState('')

    return <View>
    <SerachBar
    serachTerm={serachTerm}
    onSearchTermChange={(value) => setSearch(value)}
    onTermSubmit={() => console.log('term submit')}
    />
    <Text>Search Screen</Text>
    {/* <Text>{serachTerm}</Text> */}

    </View>
}

const styles = StyleSheet.create({

})
export default SearchScreen;