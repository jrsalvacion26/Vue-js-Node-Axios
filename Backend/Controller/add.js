const database = require('../Models/database')

const insertData = async(fullname,email,password) => {
     //const data = {fullname, email, password}

     return new Promise(async(resolve, reject) => {
      

        database.query(
            ` INSERT INTO person(fullname,email,password) VALUES (?,?,?) `, [fullname,email,password],
            function(err, rows){
                if (err) {
                    reject(false)
                    console.log(false, "eerror ka sa service")
                }
                resolve("Create a new user successful");
            }
        )
     })
}

const DataInsert = async(req,res) => {
    const {fullname, email, password} = req.body


    try {
        const inserted = await insertData(fullname, email, password)
      
        if(inserted){
            console.log("successfull", inserted);
            return res.json({message:"succes", inserted})
        }
        
        
    } catch (error) {
        return error
    }
}

module.exports = {
    insert:DataInsert
}