import User from "../model/usermodel.js";
import bcryptjs from 'bcryptjs'
export const signup = async (req, res)=>{
    try{
        const {fullname,email,password} = req.body;
        const user =  await User.findOne({email});
        if(user){
            return res.status(400).json({message:"user already exists!"})
        }
        const hashPassword =  await bcryptjs.hash(password, 10);
        const createduser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
         await createduser.save();
        res.status(201).json({message:"User created sucessfully", user:{
            _id:createduser._id,
            email:createduser.email,
            password:createduser.password

        }})
    }catch (error){
        console.log(error)
        res.status(500).json({message:"Internal error"})

    }

};

export const login = async (req, res) =>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid Credentials!"})
        }else{
            res.status(200).json({message:"Logedin Sucessfully.", user:{
                _id : user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    }catch (error){
        console.log("Error" +error.message )
        res.status(500).json({message:"Internal error"})
    }

}