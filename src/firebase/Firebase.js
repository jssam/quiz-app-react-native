import database from '@react-native-firebase/database';




export async function first(user, led,set,colr) {
  console.log(led)

  try {
    console.log(user)
    database()
      .ref(`/${user}/${led}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val() == 1) {
          database()
            .ref(`/${user}`)
            .update({
              led: 0,
            }).then(() => {
               console.log("off");
              set("off")
              colr("red") })
        } else {
          database()
          .ref(`/${user}`)
          .update({
            led: 1,
          }).then(() => { console.log("on");
        set("on")
        colr("green")
       })
        }
      });
  } catch (err) { alert(err) }
}



export async function second(user, led,set,colr) {
  console.log(led)

  try {
    console.log(user)
    database()
      .ref(`/${user}/${led}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val() == 1) {
          database()
            .ref(`/${user}`)
            .update({
              led1: 0,
            }).then(() => {
               console.log("off");
              set("off")
              colr("red") })
        } else {
          database()
          .ref(`/${user}`)
          .update({
            led1: 1,
          }).then(() => { console.log("on");
        set("on")
        colr("green") })
        }
      });
  } catch (err) { alert(err) }
}






export async function third(user, led,set,colr) {
  console.log(led)

  try {
    console.log(user)
    database()
      .ref(`/${user}/${led}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val() == 1) {
          database()
            .ref(`/${user}`)
            .update({
              led2: 0,
            }).then(() => {
               console.log("off");
              set("off")
              colr("red") })
        } else {
          database()
          .ref(`/${user}`)
          .update({
            led2: 1,
          }).then(() => { console.log("on");
        set("on")
        colr("green") })
        }
      });
  } catch (err) { alert(err) }
}




export async function fourth(user, led,set,colr) {
  console.log(led)

  try {
    console.log(user)
    database()
      .ref(`/${user}/${led}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val() == 1) {
          database()
            .ref(`/${user}`)
            .update({
              led3: 0,
            }).then(() => {
               console.log("off");
              set("off")
              colr("red") })
        } else {
          database()
          .ref(`/${user}`)
          .update({
            led3: 1,
          }).then(() => { console.log("on");
        set("on")
        colr("green") })
        }
      });
  } catch (err) { alert(err) }
}
