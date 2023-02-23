const admin = require('firebase-admin');
// Initialize the app with my project credentials
const serviceAccount = require('./firebaseConfig.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<projwct1-6b86b>.firebaseio.com'
});

const authenticate = async (req, res, next) => {
  try {
    const idToken = req.headers.authorization.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.uid = decodedToken.uid;
    next();
  } catch (err) {
    console.error('Error while verifying Firebase ID token:', err);
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

// Middleware function to verify the Firebase ID token
module.exports = {
  admin,
  authenticate
 };
