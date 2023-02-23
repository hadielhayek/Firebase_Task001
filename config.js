const { initializeApp } = require('firebase/app');
 const { getAuth } = require('firebase/auth');
require('firebase/auth')
 
const firebaseConfig = { 
  //Configurations
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()


module.exports = {
auth
};
