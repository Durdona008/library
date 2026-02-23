const { v4 } = require("uuid");
const { read_file, write_file } = require("../api/file-system");
const bcrytpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  try {
    const {username, name, email, password } = req.body;

    const users = read_file("register.json");

    const foundeduser = users.find((item) => item.email === email);

    if(foundeduser){
      return res.status(400).json({ message: "user already exists" });
    }


    const hash =await bcrytpt.hash(password , 12);
    const newUser = {
      id: v4(),
      username,
      email,
      password: hash,
      role:"user"
    };
    users.push(newUser);

    write_file("register.json", users);

    res.status(200).json({
      message: "Registered",
      user: newUser
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const login = (req, res) => {
  try {
    const { email, password } = req.body;

    const users = read_file("register.json");

     const foundeduser = users.find((user) => user.email === email);

    if(!foundeduser){
      return res.status(400).json({ message: "user not found" });
    }

const decode= await bcrypt.compare(password, foundeduser.password);
    if(decode){
      const token=jwt.sign(
        {role: foundeduser.role, email: foundeduser.email, id: foundeduser.id},
         process.env.SECRET,
          {expiresIn:"1h"});
    }else{
      return res.status(200).json({
         message: "registered" });
         token
      }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
   register,
  login };
