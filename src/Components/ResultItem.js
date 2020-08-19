import React from 'react'
import {View, Text, StyleSheet,Image} from 'react-native'


const ResultDetail = ({data}) => {
    return <View style={style.listStyle}>
    <Image
    style={style.imageStyle}
        source={{
          uri: data.image_url,
        }}
      />
          <Text style={style.TextStyle}>{data.name}</Text>
          <Text style={style.ratingStyle}>{data.rating} Stars, {data.review_count}</Text>


    </View>
}

const style = StyleSheet.create({
    TextStyle:{

        fontSize:17,
        fontWeight:'bold'
    },
    ratingStyle:{
        fontSize:16,

    },
    imageStyle:{
        width: '100%',
        height: '70%',
        alignSelf:'center',
        borderRadius:4,
        
    },
    listStyle:{
        width:250,
        height:300,
        marginHorizontal:16
    }
})
export default ResultDetail;