const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./model/user");
const registrationModel=require("./model/registrationDetails")
const chatModel = require("./model/chatmsg.js")


const app = express();

app.use(express.json());
app.use(cors());

// Updated MongoDB connection string
const DB = 'mongodb+srv://admin:Admin@cluster0.b2w1mhb.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 
})
.then(() => {
    console.log("Connected successfully!!");
})
.catch((err) => {
    console.log(err);
});

// Sign Up page Post request
{/*
app.post("/signup", (req, res) => {
    console.log("Request Body:", req.body); // Logging the request body

    // Destructuring name and email from req.body
    const { name, email } = req.body;

    // Creating a new user instance
    const newUser = new userModel({ name, email });

    // Saving the new user to the database
    newUser.save()
        .then(user => {
            console.log("User created:", user); // Logging the created user
            res.json(user);
        })
        .catch(err => {
            console.log("Error:", err); // Logging any errors
            res.json(err);
        });
});

*/}
// Sign Up page Post request
app.post("/register", (req, res) => {
    console.log("Request Body:", req.body); // Logging the request body

    // Destructuring name and email from req.body
    const { name, email,Number,area,organization,location,experience,language } = req.body;
    // Creating a new user instance
    const newUser = new registrationModel({ name, email,Number,area,organization,location,experience,language });

    // Saving the new user to the database
    newUser.save()
        .then(user => {
            console.log("Registration success:", user); // Logging the created user
            res.json(user);
        })
        .catch(err => {
            console.log("Error:", err); // Logging any errors
            res.json(err);
        });
});


// Add chat to the database
app.post("/chat", async (req, res) => {
    const { message } = req.body;

    const newChat = new chatModel({ message });

    try {
        const savedChat = await newChat.save();
        res.json(savedChat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Fetch all chats
app.get("/getallchats", async (req, res) => {
    try {
        const chats = await chatModel.find();
        res.json(chats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new chat (Not sure if this is needed as we have /Chat endpoint for sending messages)
app.post("/createnewchat", async (req, res) => {
    // Your logic to create a new chat
    res.json({ message: "New chat created" });
});

// Get chats by chat id
app.get("/getchats/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
        const chat = await chatModel.findById(id);
        res.json(chat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete("/deletechats", async (req, res) => {
    try {
        await chatModel.deleteMany({});
        res.json({ message: "All chats deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});






const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
