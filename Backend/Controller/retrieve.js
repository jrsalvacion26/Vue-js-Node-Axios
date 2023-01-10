const database = require('../Models/database')

const retrieve = (user) => {
    return new Promise((resolve, reject) => {
        database.query(
            ` SELECT * FROM person ORDER BY id DESC`,[],
            function(err, rows){
                if (err) {
                return reject(err)
                }
                return resolve(rows)
            }
        )
    })
}

const retrieveData = async(req,res) => {
    const retrieving = await retrieve()

    try {
        if(retrieving){
            
            res.json(retrieving)
            
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({error: 'Error retrieving data'})
    }
}

               

module.exports = {
    retrieve:retrieveData
}