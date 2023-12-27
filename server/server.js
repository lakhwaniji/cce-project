const express=require('express');

const cors=require('cors')

const app=express();

const bcrypt = require('bcrypt')

app.use(cors())

const mongoose=require("mongoose");

app.use(express.json());

const jwt=require('jsonwebtoken');


app.get('/',(req,res)=>{
    res.send("Hello Express");
})

const mongourl="mongodb+srv://love219311046:lovelakhwani@cluster0.y23zu99.mongodb.net/cce_erp_data?retryWrites=true&w=majority";

mongoose.connect(mongourl,{
    useNewUrlParser:true,
})
.then(()=>{console.log("Connected to Database")})
.catch((e)=>console.log(e));

function generateToken(user) {
    const payload = {
      email: user.email,
      role: user.role,
      name:user.username,
    };
    return jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' });
  }

const User = require('./models/User');
// server.js
app.post('/register', async (req, res) => {
    try {
      const { email, password, role,username } = req.body;
      // Check if user with the same email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already in use' });
      }
  
      // Create a new user
      const newUser = await User.create({
        username,
        email,
        password,
        role
      });
  
      res.json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email });

      // Check if the user exists
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Compare the provided password with the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      // Check if the password is valid
      if (isPasswordValid) {
        const token = generateToken(user);
        // Send token to the frontend
        res.json({ message: 'Login successful', token });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
