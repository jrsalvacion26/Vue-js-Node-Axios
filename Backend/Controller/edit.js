const database = require('../Models/database')


const editQuery = (id) => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT * FROM person WHERE id = ? `,[id],
            function(err, rows){
                if(err){
                    reject(err, "query updare")
                    console.log(false, "eerror ka sa edit")
                }
                resolve(rows, )
            }
        )
    })
}


const editeUser = async(req,res) => {
    const {id} = req.params 
    try {
        const users = await editQuery(id)
        if(users == ""){
            return res.json({message:"no user"})
        }
        if(users){
            
            return res.json(users)
        }
    } catch (error) {
        return error
    }
}

/*const updateQuery = (id,fullname, email, password) => {

    const data = [ fullname, email, password,id
    ]
       

    return new Promise((resolve, reject) => {
        database.query(
            `UPDATE person SET fullname = ?, email = ?, password = ? WHERE id = ?`, data,

            function (err, result){
                if(err){
                    reject(err)
                }
                console.log(result);
                resolve(result)
            }
        )
    })
}*/
const updateQuery = async (id, fullname, email, password) => {
    const data = [fullname, email, password, id]
    try {
        const result = await database.promise().query(
            `UPDATE person SET fullname = ?, email = ?, password = ? WHERE id = ?`, 
            data
        )
        console.log(result);
        return result
    } catch (error) {
        throw error
    }
}


const updateUser = async(req, res) => {
    const {id, fullname,email, password} = req.body 

    try {
        const update = await updateQuery(id, fullname,email, password)

        if(update){
            console.log(update, "user");
            return res.json({update, message:"success"})
        }
    } catch (error) {
        return error
    }
}



module.exports = {
    Edit:editeUser,
    update:updateUser
}