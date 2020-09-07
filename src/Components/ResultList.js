import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultItem from '../Components/ResultItem'
import {withNavigation} from 'react-navigation'

const ReslutsList = ({title, resultes, navigation}) => {
    if(resultes.length === 0){ return null } 
    return <View>
    <Text style={style.tiltleStyle}>{title}</Text>

         <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={resultes}
        keyExtractor={result => result.id}
        renderItem={({item}) => {

            return(<TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                <ResultItem data={item}/>
            </TouchableOpacity>) 
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

},
Text:{
fontSize:20,
margin:10,
}

})
export default withNavigation(ReslutsList);