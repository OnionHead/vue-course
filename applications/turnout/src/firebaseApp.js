import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDFEgIsNb5XwqAlSxMWtuNgGMrZC_CBy4Q",
    authDomain: "turnout-77986.firebaseapp.com",
    databaseURL: "https://turnout-77986.firebaseio.com",
    projectId: "turnout-77986",
    storageBucket: "turnout-77986.appspot.com",
    messagingSenderId: "1036004345171"
}

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebase.database().ref().child('events')