
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


const home = () => {
  const[news,nextnews]= useState([]);
  const searchApi=async(term)=>{
    try{
    const response = await api.get("/knowledge/getNews");
    nextnews(response.data[0]);
} catch(err){
  console.log("something went wrong please check your connection")
}
  };

useEffect(()=>{
searchApi();
},[]);
console.log(news.subjectKnowledge);

  return (
    <ScrollView>
   <View style={{textAlign:"center",alignContent:"center",flex:1}}>

<View style={{backgroundColor:"orange",marginTop:10,marginBottom:10,alignContent:"center",borderRadius:40}}>

<Text style={{textAlign:"center",fontSize:15,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
India</Text>
</View>

<FlatList
   horizontal = {true}
   showsHorizontalScrollIndicator= {false}
   keyExtractor = {(ram)=>ram._id}
   data = {news.india}
   renderItem ={
       ({item})=>{
       return<>
           <News item={item}/>
    </>
       }
   }
   />
   <View style={{backgroundColor:"blue",marginTop:10,marginBottom:10,alignContent:"center",borderRadius:40}}>

<Text style={{textAlign:"center",fontSize:15,marginTop:10,marginBottom:10,fontWeight:"bold",color:"white"}}>
subject Knowledge</Text>
</View>
<FlatList
   horizontal = {true}
   showsHorizontalScrollIndicator= {false}
   keyExtractor = {(ram)=>ram._id}
   data = {news.subjectKnowledge}
   renderItem ={
       ({item})=>{
       return<> 
              <News item={item}/>
    </>
       }
   }
   />

<View style={{backgroundColor:"green",marginTop:10,marginBottom:10,alignContent:"center",borderRadius:40}}>

<Text style={{textAlign:"center",fontSize:15,marginTop:10,marginBottom:10,fontWeight:"bold",color:"white"}}>
Technology</Text>
</View>
<FlatList
   horizontal = {true}
   showsHorizontalScrollIndicator= {false}
   keyExtractor = {(ram)=>ram._id}
   data = {news.tech}
   renderItem ={
       ({item})=>{
       return<> 
              <News item={item}/>
    </>
       }
   }
   />

<View style={{backgroundColor:"#e75480",marginTop:10,marginBottom:10,alignContent:"center",borderRadius:40}}>

<Text style={{textAlign:"center",fontSize:15,marginTop:10,marginBottom:10,fontWeight:"bold",color:"white"}}>
Startup</Text>
</View>
<FlatList
   horizontal = {true}
   showsHorizontalScrollIndicator= {false}
   keyExtractor = {(ram)=>ram._id}
   data = {news.startup}
   renderItem ={
       ({item})=>{
       return<> 
              <News item={item}/>
    </>
       }
   }
   />

   
<View style={{backgroundColor:"yellow",marginTop:10,marginBottom:10,alignContent:"center",borderRadius:40}}>

<Text style={{textAlign:"center",fontSize:15,marginTop:10,marginBottom:10,fontWeight:"bold",color:"black"}}>
Challenges</Text>
</View>
<FlatList
   horizontal = {true}
   showsHorizontalScrollIndicator= {false}
   keyExtractor = {(ram)=>ram._id}
   data = {news.challenges}
   renderItem ={
       ({item})=>{
       return<> 
              <News item={item}/>
    </>
       }
   }
   />

   </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
 
});

export default home;
