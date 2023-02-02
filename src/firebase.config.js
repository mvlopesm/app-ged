import firebase from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBN0WxS8k-P9MISXIhyZUeE28Ba6sAjmWA",
    authDomain: "app-ged-2957d.firebaseapp.com",
    projectId: "app-ged-2957d",
    storageBucket: "app-ged-2957d.appspot.com",
    messagingSenderId: "760453622362",
    appId: "1:760453622362:web:c77028f8471469de324663"
  };

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

