
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
import { FlatList} from 'react-native-gesture-handler';
import api from '../firebase/api';
import Optionss from '../components/Option';




const quiz = () => {
    const sam = [
        {name :"1.picakachu"  },
        {name :"2.schinchan" },
        {name :"3.harrypotter" },
        {name :"4.pokemon" },
        {name :"5.doremon" },
        {name :"6.nobita" },
        {name :"7.hazirumaru" },
        {name :"8.sanyam" }
    ];
    const[result,nextresult]= useState([]);
    const searchApi=async(term)=>{
      try{
      const response = await api.get("/quiz/getQuiz/5f44dac9e3353f3d5a0a8c08");
      nextresult(response.data);
  } catch(err){
    console.log("something went wrong please check your connection")
  }
    };

useEffect(()=>{
searchApi();
console.log(result);
},[]);
console.log(result);

  const[san,setsan]=useState([]);
console.log(san)
const pica = ()=>{}
  return (
   <View style={{flex:1}}>
     <View style={{backgroundColor:"skyblue",alignContent:"center"}}>

    <Text style={{textAlign:"center",fontSize:20,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
   {result.quizName}
   </Text>
   </View>
   <FlatList
   horizontal = {false}
   showsHorizontalScrollIndicator= {false}
   keyExtractor = {(ram)=>ram._id}
   data = {result.quizQuestions}
   renderItem ={
       ({item})=>{
       return<>
            <View style={{backgroundColor:"#D3D3D3",marginTop:10,marginBottom:10,alignContent:"center",borderRadius:10}}>
       <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
    Question:- {item.question}
     </Text>
     </View>
    <Optionss item ={item}/>
    
    </>
       }
   }
   />
</View>
  );
};

const styles = StyleSheet.create({
 
});

export default quiz;
