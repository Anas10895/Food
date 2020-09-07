import React,{useState, useEffect} from 'react'
import {View, Text, StyleSheet, Image, FlatList} from 'react-native'
import yelp from '../../api/yelp'
const ResultsShowScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    const [result, setResult] = useState(null)

    const getResult = async (id) => {
       const respones = await  yelp.get(`/${id}`);
       setResult(respones.data)
    }

    useEffect(() => {
        getResult(id);
    }, [])
    if(!result ){
        return null
    }


    return (<View>
         <Text>{result.name}</Text>
         <FlatList 
        
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
        return <Image
                style={styles.imageStyle}
                source={{
                uri: item,
                }}/>
        }}
    />




    </View>
    )}
const styles = StyleSheet.create({
    imageStyle:{
        width: 200,
        height: 300,
        borderWidth:1,
        borderColor:'red'


        
    },
});
export default ResultsShowScreen;