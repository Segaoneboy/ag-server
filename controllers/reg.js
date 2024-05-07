import User from '../models/User.js'

export const register = async (req,res)=>{
    try{
        const {projectName, author} = req.body

        const newUser = new User({
            projectName,
            author,
            imageUrl: `/uploads/${req.file.originalname}`,
        })

        await newUser.save()

        res.json({
            newUser,
            message: 'Регистрация есть',
            id:newUser.id,
        })
    }catch(error){
        res.status(500).json({
            message: 'Регистрации нет',
        })
        console.log(error)
    }
}