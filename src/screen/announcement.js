
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
import News from '../components/News';
import { FlatList } from 'react-native-gesture-handler';


const announcement = () => {
  const[news,nextnews]= useState([]);
  const searchApi=async(term)=>{
    try{
    const response = await api.get("/knowledge/getAnnouncement");
    nextnews(response.data);
} catch(err){
  console.log("something went wrong please check your connection")
}
  };

useEffect(()=>{
searchApi();
},[]);
console.log(news);

  return (
   <View style={{textAlign:"center",alignContent:"center",flex:1}}>
<View style={{backgroundColor:"red",alignContent:"center"}}>

<Text style={{textAlign:"center",fontSize:20,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
Announcement</Text>
</View>

<FlatList
   horizontal = {false}
   showsHorizontalScrollIndicator= {false}
   keyExtractor = {(ram)=>ram._id}
   data = {news}
   renderItem ={
       ({item})=>{
       return<>
         <View style={{borderColor:"black",width:"97%" ,marginTop:4,borderWidth:1,borderRadius:10,marginBottom:4,marginLeft:5,marginRight:5}}>
 <Text style={{marginLeft:7,fontSize:16,marginTop:5,marginBottom:2,fontSize:17,fontWeight:"bold"}}>
 {item.summary}
  </Text>
  <View style={{alignContent:"center",borderRadius:10,flexDirection: 'row',width:"70%"}}>
  <Text style={{marginLeft:7,fontSize:16,marginTop:5,marginBottom:2,fontSize:15,fontWeight:"bold"}}>
  ReachUs:-
  </Text>
           <Text style={{marginLeft:7,fontSize:16,marginTop:7,marginBottom:2,fontSize:13}}>
           {item.reachUs}
  </Text>
           </View>
  <View style={{alignContent:"center",borderRadius:10,flexDirection: 'row'}}>
  <Text style={{marginLeft:7,fontSize:16,marginTop:5,marginBottom:2,fontSize:15,fontWeight:"bold"}}>
  createdAt:-
  </Text>
           <Text style={{marginLeft:7,fontSize:16,marginTop:7,marginBottom:2,fontSize:13}}>
 {item.createdAt}
  </Text>
           </View>

           <View style={{alignContent:"center",borderRadius:10,flexDirection: 'row'}}>
  <Text style={{marginLeft:7,fontSize:16,marginTop:5,marginBottom:2,fontSize:15,fontWeight:"bold"}}>
  updatedAt:- 
  </Text>
           <Text style={{marginLeft:7,fontSize:16,marginTop:7,marginBottom:2,fontSize:13}}>
 {item.updatedAt}
  </Text>
           </View>
  
  </View>
    </>
       }
   }
   />


   </View>
  );
};

const styles = StyleSheet.create({
 
});

export default announcement;
