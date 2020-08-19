import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import ResultItem from '../Components/ResultItem'
const ReslutsList = ({title, resultes}) => {
    return <View>
    <Text style={style.tiltleStyle}>{title}</Text>

    <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={resultes}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
            return <ResultItem data={item}/>
        }}
    />

    </View>
}
const style = StyleSheet.create({
tiltleStyle:{
fontSize:22,
fontWeight:'700',
// textAlign:"center",
marginLeft:15,

},
list:{
    margin:10,
    padding:10,

}

})
export default ReslutsList;