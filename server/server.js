// Import dependencies
import express from 'express'; //used to create a web server
import mongoose from 'mongoose'; //used to interact with mongodb
import cors from 'cors'; //allows for frontend requests from different origins
import dotenv from 'dotenv'; //load environment variables
import bcrypt from 'bcrypt';// hash passwords for security

// load environment variables
dotenv.config();


// initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;



//middleware
app.use(cors()); // allow cross-origin requests so frontend can communicate with backend
app.use(express.json()); // parse JSON request so we can access request bodies



//connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB Connected'))//logs success message if connection is successful
  .catch(err => console.log(err));//logs error if connection fails



//define User schema and model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, //username must be unique and required
    password: { type: String, required: true } //password is required
});
const User = mongoose.model('User', userSchema);



//signup endpoint
app.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); //hash password
        const newUser = new User({ username, password: hashedPassword });//create new user object
        await newUser.save();//save user to database
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
});



// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));//starts server on defined port
