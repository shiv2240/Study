

// module.exports.getUser = async(req,res)=>{
//     try{
//         const user = 
//         res.status(201).json({ message: "All Users fetched Successfully", user });
//     }catch(err){
//         res.status(500).json({message:"Error while getting all users", err})
//     }
// }


module.exports.getUser = async(req,res)=>{
    req.send("hello")
}