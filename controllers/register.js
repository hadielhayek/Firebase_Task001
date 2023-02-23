const userModel = require('../models/userModel');
const { auth } = require('../config');
require('dotenv').config();
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');

exports.register = async (req, res) => {
    const { email, password } = req.body;

    // Create a new user document with the email and  password
    const user = new userModel({
        email,
        password,
    });

    // Save the user to the database
    const newUser = await user.save();

    try {
        // Create the Firebase user
        await createUserWithEmailAndPassword(auth, email, password);

        res.status(200).json({ success: true, user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const userCredential = await  signInWithEmailAndPassword(auth, email, password)
     // Get the user's ID token and save it in the bearer
     const idToken = await userCredential.user.getIdToken();
     res.set('Authorization', `Bearer ${idToken}`)
     res.status(200).json({ success: true, user: userCredential.user })

}