
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity, 
  Image
} from 'react-native';
import { FlatList, } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';

const ques = ({route,navigation}) => {
    const [selectedImage, setSelectedImage] = useState("https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-12%20at%2010.58.05%20PM.jpeg?alt=media&token=77c0873f-7f6a-48e2-b7a0-076f21a982f5");
    const question = route.params;
    const sam = [
        {name :"explain how induction motor starts?"  },
        {name :"Distinguish between malloc() & calloc() memory allocation" },
        {name :"What is a pointer on pointer?" },
        {name :"What is keyword auto for?" },
    ];
    console.log(question)
    pickClickHandler = () => {
        ImagePicker.openCamera({ compressImageQuality: 0.5, compressImageMaxWidth: 1000, compressImageMaxHeight: 1000, cropping: true,freeStyleCropEnabled:true })
        .then(response => {
          if (response.error) {
            console.log('Please choose image from gallery')
          } else {
            if (response.path == null) {
        console.log("sam")
            } else {
              console.log("Image: " + response.path)
              setSelectedImage(response.path);}
              }
            }
          ).catch((err) => { console.log("you can select new image") })
        }



    return (
    <View style={{textAlign:"center",alignContent:"center",flex:1}}>
 <View style={{backgroundColor:"red",alignContent:"center"}}>
 
 <Text style={{textAlign:"center",fontSize:20,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
 Test</Text>


 </View>
       
 <View style={{backgroundColor:"#D3D3D3",marginTop:10,marginBottom:10,alignContent:"center",borderRadius:10}}>

       <Text style={{marginLeft:7,fontSize:16,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
    Question:- {question.ques}
     </Text>
     </View>
     <View style={styles.imageContainer}>
<TouchableOpacity onPress={()=> pickClickHandler()}>
<View style={styles.imageContainer2}>

  <Image source={{uri:`${selectedImage}`}} style={styles.previewImage} />

</View>
</TouchableOpacity>
</View>


   <View style={{ position: "absolute", bottom:20, right: 5 }}>
   <Button
onPress={() =>{ navigation.navigate("Home")}}
  title="submit"
  color="#841584"

/>
      </View>

    </View>
   );
 };
 const styles = StyleSheet.create({
    previewImage: {
        flex:1,
        width: "100%",
        height: "100%", resizeMode:'contain'
      }, imageContainer: {
        borderColor: 'black',
        backgroundColor: 'black',
        width: '100%',
        height: "80%",
    
        marginTop:1
    
      },imageContainer2: {
        width: "100%",
        height: "100%",
      },container: {
        height:"100%",
      backgroundColor: "#2D2D2D",
      flex:1,
      width:"100%",
      flexDirection:"column"
      },
    
    })

export default ques;