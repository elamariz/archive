import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.js"

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email + " " + password);
        await createUserWithEmailAndPassword(auth, email, password);
        res.status(201).json({success: true, message: "Admin Account Created"});
    } catch (e) {
        console.log(e);
    }
}