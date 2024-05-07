import User from '../models/User.js'

export const info = async (req,res)=> {
    try{
        const id = req.query.id;
        const data = await User.findOne({id:id});
        if (data){
            res.json(data)
        }else{
            res.status(404).json({error: 'Data not found'})
        }

    }catch(error){
        res.status(500).json({error:'Error finding data'})
        console.log(error)
    }
}