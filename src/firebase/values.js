import database from '@react-native-firebase/database';




export async function getvalfirst(user,led,set,colr) {  
    try {console.log(led)
      database()
        .ref(`/${user}/${led}`)
        .once('value')
        .then(snapshot => {
          if (snapshot.val() == 1) {
        
                set("on") 
                colr("green")
          } else {
      
          set("off")
          colr("red") 
          }
        });
    } catch (err) { alert(err) }
  }