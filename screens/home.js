

import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import {globalStyles} from '../styles/global';

export default function ReviewDetails({navigation}){

  const [reviews, setReviews] = useState([
    {title: 'Commando', rating: 5, body:'By Arnold', key: '1'},
    {title: 'Rambo', rating: 4, body:'By Syvester', key: '2'},
    {title: 'Boyka', rating: 5, body:'By White', key: '3'},
  ])

    return(
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
            
        </View>
    )
}

