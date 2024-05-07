import User from '../models/User.js'

export const search = async (req,res)=> {
    try{
        const id = req.query.id;
        const data = await User.findOne({id:id});
        if (data){
            res.json(true)
        }else{
            res.json(false)
        }

    }catch(error){
        res.status(500).json({error:'Error finding data'})
        console.log(error)
    }
}