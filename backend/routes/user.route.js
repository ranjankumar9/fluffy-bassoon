const express = require("express");
const bcrypt = require("bcrypt");
const { usermodel } = require("../model/user.model");
const jwt = require("jsonwebtoken");


const UserRouter = express.Router();

const secretKey = "your-secret-key";

UserRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await usermodel.findOne({ email });
        if (existingUser) {
            return res.send({ message: "Email is already in use" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new usermodel({ name, email, password: hashedPassword });
        await newUser.save();
        const token = jwt.sign({ userId: newUser._id }, secretKey, { expiresIn: "1h" });

        res.status(201).send({
            message: "User registered successfully",
            token: token
        });
    } catch (error) {
        console.error(error);
        res.send({ message: "Registration failed" });
    }
});

module.exports = {
    UserRouter
};
