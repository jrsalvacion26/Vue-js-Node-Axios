const database = require('../Models/database')

const deleteQuery = async(id) => {
    try {
        const result = await database.promise().query(
            `DELETE FROM person WHERE id = ? `,id,

        )
        console.log(result, "dasda");
        return result
    } catch (error) {
        throw error
    }
}

const deleteUser = async(req,res) => {
    const {id} = req.params
    try {
        const deleted = await deleteQuery(id)
        if(deleted){
            return res.json({message:"succes", deleted})
        }
    } catch (error) {
        throw error
    }
}


module.exports = {
    delete:deleteUser
}