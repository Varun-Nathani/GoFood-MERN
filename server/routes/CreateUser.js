const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')// Adjust the path to your User model
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const jwtSecret = "ThisIsTheJWTSecretForThisWebpage"

router.post('/createUser',
    body("email", "Invalid email").isEmail(),
    body("email", "Email already exists").exists(),
    body("password", "Password should be atleast 5 characters long").isLength({ min: 5 }),
    body("phone", "Invalid Phone Number").isMobilePhone(),
    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let salt = await bcrypt.genSalt(10)
        let secPassword = await bcrypt.hash(req.body.password, salt)

        try {
            const newUser = await User.create({
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                password: secPassword
            })
            res.json({ success: true, user: newUser })

        }
        catch (err) {
            console.log(err);
            res.json({ success: false, message: err.message });
        }
    })


    router.post('/loginUser',
        body("email", "Invalid email").isEmail(),
        body("password", "Password should be at least 5 characters long").isLength({ min: 5 }),
        async (req, res) => {
            const errors = validationResult(req);
    
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
    
            try {
                const email = req.body.email;
                const userData = await User.findOne({ email });
    
                if (!userData) {
                    return res.status(400).json({ errors: [{ msg: 'User not found' }] });
                }
    
                const isPasswordCorrect = bcrypt.compare(req.body.password, userData.password);
                if (!isPasswordCorrect) {
                    return res.status(400).json({ errors: [{ msg: 'Incorrect Password' }] });
                }

                const data = {
                    user: {
                        id: userData.id,
                    }
                }
                
                const token = jwt.sign(data, jwtSecret);

                res.json({ success: true, user: userData, authToken : token});
    
            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false, message: error.message });
            }
        }
    );

module.exports = router;