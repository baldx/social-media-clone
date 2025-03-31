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
        const { username, password } = req.body; //get username and password request

        console.log('Received signup request:', { username, password }); //logs username and password


        const hashedPassword = await bcrypt.hash(password, 10); //hash password
        const newUser = new User({ username, password: hashedPassword });//create new user object
        
        const existingUser = await User.findOne({ username }); //finds a document containing with username

        if (existingUser) { //checks if user exists
            console.log('Username already exists:', username); //logs username
            return res.status(409).json({ error: 'Username already exists' }); //sends error with status code 409
        }

        await newUser.save();//save user to database
        res.status(201).json({ message: 'User created successfully' }); //sends message with status code 201
    } catch (error) { 
        res.status(500).json({ error: 'Error creating user' }); //sends error with status code 500
        console.log(error); //logs error
    }
});

//login in endpoint
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body; //gets username and password from the form

        if (!username || !password) return res.status(404).json({ message: "Username and password required "}) //checks if username and password fields are empty


        const user = await User.findOne({ username }); //finds user with username


        if (!user) return res.status(404).json({ message: "User not found"}); //if username doesnt exist then display error


        const isMatch = await bcrypt.compare(password, user.password); //compares hashed password with users password and returns a bool


        if (!isMatch) return res.status(401).json({ message: "Invalid password "}); //if it is not a match return invalid password
        
        res.status(201).json({ message: "Login successful", user: { username: user.username } }); //return message with status code 201
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong', error }); //logs error
    }
});



// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));//starts server on defined port
