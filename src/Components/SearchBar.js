import React from 'react'
import {View, Text, StyleSheet,TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons'; 
const SearchBar = ({onSearchTermChange ,serachTerm, onTermSubmit}) => {
    return <View style={styles.backgroundStyle}>
    <Feather style={styles.icontStyle} name="search" size={30} color="black" /> 
    <TextInput 
    style={styles.inputStyle}
        placeholder='Search'
        value={serachTerm}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={serachTerm => onSearchTermChange(serachTerm)}
        onEndEditing={onTermSubmit}
    />

    </View>
}

const styles = StyleSheet.create({
    backgroundStyle:{
        flexDirection:'row',
        fontSize:20, 
        backgroundColor:'#F0EEEE',
        borderRadius:5,
        height:50,
        marginHorizontal:15,
        marginVertical:10,

    },
    inputStyle:{
        fontSize:18,
        flex:1,
    },
    icontStyle:{
        fontSize:35,
        alignSelf:'center',
        marginVertical:10,
        marginHorizontal:15,


    }
})
export default SearchBar;