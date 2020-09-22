
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity 
} from 'react-native';
import { FlatList, } from 'react-native-gesture-handler';

const exam = ({ navigation }) => {
    const sam = [
        {name :"explain how induction motor starts?"  },
        {name :"Distinguish between malloc() & calloc() memory allocation" },
        {name :"What is a pointer on pointer?" },
        {name :"What is keyword auto for?" },
    ];
    
    return (
    <View style={{textAlign:"center",alignContent:"center",flex:1}}>
 <View style={{backgroundColor:"red",alignContent:"center"}}>
 
 <Text style={{textAlign:"center",fontSize:20,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
 Test</Text>


 </View>
 <FlatList
   horizontal = {false}
   showsHorizontalScrollIndicator= {false}
   keyExtractor = {(ram)=>ram.name}
   data = {sam}
   renderItem ={
       ({item})=>{
       return<>
              <TouchableOpacity onPress={() => { navigation.navigate("Ques", { ques: `${item.name}`  })}}>
 <View style={{backgroundColor:"#D3D3D3",marginTop:10,marginBottom:10,alignContent:"center",borderRadius:10}}>

       <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
    Question:- {item.name}
     </Text>
     </View>
     </TouchableOpacity>
 
 </>}}
 />
   <View style={{ position: "absolute", bottom:20, right: 5 }}>
   <Button

  title="submit"
  color="#841584"

/>
      </View>

    </View>
   );
 };
 const styles = StyleSheet.create({
 
});

export default exam;