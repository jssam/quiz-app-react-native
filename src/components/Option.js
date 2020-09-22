
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
import { color } from 'react-native-reanimated';



const Optionss = ({item}) => {
    const[opa,setopa]=useState("#FFDAB9")
    const[opb,setopb]=useState("#FFDAB9")
    const[opc,setopc]=useState("#FFDAB9")
    const[opd,setopd]=useState("#FFDAB9")
 const  colorchangea=()=>{
  setopb("#FFDAB9");
  setopc("#FFDAB9");
  setopd("#FFDAB9");
      setopa("green");

  }
  const  colorchangeb=()=>{
    setopa("#FFDAB9");
    setopc("#FFDAB9");
    setopd("#FFDAB9");
        setopb("green");
  
    }
    const  colorchangec=()=>{
      setopb("#FFDAB9");
      setopa("#FFDAB9");
      setopd("#FFDAB9");
          setopc("green");
    
      }
      const  colorchanged=()=>{
        setopb("#FFDAB9");
        setopc("#FFDAB9");
        setopa("#FFDAB9");
            setopd("green");
      
        }
  console.log("opa"+ item);
  return(<>
 {item.optionC==null?
        <>
        <TouchableOpacity onPress={()=>colorchangea()}>
           <View style={{backgroundColor:`${opa}`,alignContent:"center",borderRadius:10,flexDirection: 'row'}}>
           <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
          A.
           </Text>
          <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",textAlign:"center",}}>
          {item.optionA}
           </Text>
           </View>
           </TouchableOpacity>
           <View>
           <TouchableOpacity onPress={()=>colorchangeb()}>
           <View style={{backgroundColor:`${opb}`,marginTop:5,marginBottom:5,alignContent:"center",borderRadius:10,flexDirection: 'row'}}>
           <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
          B.
           </Text>
          <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",textAlign:"center",}}>
          {item.optionB}
           </Text>
           </View>
           </TouchableOpacity></View>
           </>:<>
           {item.optionD ==null?
           <>
          <TouchableOpacity onPress={()=>colorchangea()}>
           <View style={{backgroundColor:`${opa}`,alignContent:"center",borderRadius:10,flexDirection: 'row'}}>
           <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
          A.
           </Text>
          <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",textAlign:"center",}}>
          {item.optionA}
           </Text>
           </View>
           </TouchableOpacity>
           <View>
           <TouchableOpacity onPress={()=>colorchangeb()}>
           <View style={{backgroundColor:`${opb}`,marginTop:5,marginBottom:5,alignContent:"center",borderRadius:10,flexDirection: 'row'}}>
           <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
          B.
           </Text>
          <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",textAlign:"center",}}>
          {item.optionB}
           </Text>
           </View>
           </TouchableOpacity></View>
           <View>
           <TouchableOpacity onPress={()=>colorchangec()}>
           <View style={{backgroundColor:`${opc}`,marginTop:5,marginBottom:5,alignContent:"center",borderRadius:10,flexDirection: 'row'}}>
           <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
          C.
           </Text>
          <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",textAlign:"center",}}>
          {item.optionC}
           </Text>
           </View>
           </TouchableOpacity></View>
           </>: <>
           <View>
           <TouchableOpacity onPress={()=>colorchangea()}>
           <View style={{backgroundColor:`${opa}`,marginTop:5,marginBottom:5,alignContent:"center",borderRadius:10,flexDirection: 'row'}}>
           <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
          A.
           </Text>
          <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",textAlign:"center",}}>
          {item.optionA}
           </Text>
           </View>
           </TouchableOpacity></View>
           <View>
           <TouchableOpacity onPress={()=>colorchangeb()}>
           <View style={{backgroundColor:`${opb}`,marginTop:5,marginBottom:5,alignContent:"center",borderRadius:10,flexDirection: 'row'}}>
           <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
          B.
           </Text>
          <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",textAlign:"center",}}>
          {item.optionB}
           </Text>
           </View>
           </TouchableOpacity></View>
           <View>
           <TouchableOpacity onPress={()=>colorchangec()}>
           <View style={{backgroundColor:`${opc}`,marginTop:5,marginBottom:5,alignContent:"center",borderRadius:10,flexDirection: 'row'}}>
           <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
          C.
           </Text>
          <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",textAlign:"center",}}>
          {item.optionC}
           </Text>
           </View>
           </TouchableOpacity></View>
           <View>
           <TouchableOpacity onPress={()=>colorchanged()}>
           <View style={{backgroundColor:`${opd}`,marginTop:5,marginBottom:5,alignContent:"center",borderRadius:10,flexDirection: 'row'}}>
           <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
          D.
           </Text>
          <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",textAlign:"center",}}>
          {item.optionD}
           </Text>
           </View>
           </TouchableOpacity></View>
           </> }</>
       }

    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Optionss;
