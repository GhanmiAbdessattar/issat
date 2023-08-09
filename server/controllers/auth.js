import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";

export const register = (req,res)=>{
    //check existing user
    const q="SELECT * FROM issat2.etudiant WHERE Num_inscription = ? OR mat_cin = ?"

    db.query(q, [req.body.cin, req.body.numinscription], (err, data)=>{
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("user already exists!!");
        
        //hash password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO etudiant (`Num_inscription`, `mat_cin`, `login`, `password`) VALUES (?)"
        const values = [
            req.body.cin,
            req.body.numinscription,
            req.body.username,
            hash
        ]

        db.query(q, [values], (err,data)=>{
            if (err) return res.json(err);
            return res.status(200).json("user has been created");
        })
    });

};

export const login = (req, res)=>{
    //check if user exist
    const q="SELECT * FROM issat2.etudiant WHERE login = ?"
    db.query(q, [req.body.username], (err, data)=>{
        if (err) return res.json(err);
        if (data.length===0) return res.status(404).json("user not found !!");
        
        //check password
        const isPassworsCoorect  = bcrypt.compareSync(req.body.password, data[0].password);
        if(!isPassworsCoorect)return res.status(400).json("wrong usernam or password");
        
        const token = jwt.sign({id:data[0].id}, "jwtkey", {expiresIn: '1d'});
        const {password, ...other}= data[0];
        res.cookie("access_token", token, {
            httpOnly:true,
        }).status(200).json(other)
    });
}

export const logout = (req, res)=>{
    
}