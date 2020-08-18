import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ReslutsList = ({title, resultes}) => {
    return <View>
    <Text style={style.tiltleStyle}>{title}</Text>

    <FlatList 
        horizontal
        data={resultes}
        keyExtractor={(resultes) => {
             resultes.id
        }}
        renderItem={({item}) => {
            return <Text style={style.list}>{item.name}</Text>
        }}
    />

    </View>
}
const style = StyleSheet.create({
tiltleStyle:{
fontSize:18,
fontWeight:'600',
textAlign:"center",

},
list:{
    margin:10,
    padding:10,

}

})
export default ReslutsList;