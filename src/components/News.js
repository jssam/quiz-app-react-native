
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import api from '../firebase/api';
import { FlatList } from 'react-native-gesture-handler';


const News = ({item}) => {
console.log("sam"+ item);
  return ( <View style={{borderColor:"black" , width:300,borderWidth:2,borderRadius:10,marginBottom:4,marginLeft:5,marginRight:5}}>
  <Text style={{marginLeft:7,fontSize:16,fontWeight:"bold"}}>
 {item.subject}
  </Text>
 <Text style={{marginLeft:7,fontSize:16,marginTop:5,marginBottom:2,fontSize:12}}>
 {item.summary}
  </Text>
  </View> 

  );
};

const styles = StyleSheet.create({
 
});

export default News;
