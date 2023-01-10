const express = require('express')
const router = express.Router()

const retrieve = require('../Controller/retrieve')
const inserts = require('../Controller/add')
const editUser = require('../Controller/edit')
const deleteUser = require('../Controller/delete')

router.get('/index', retrieve.retrieve)
router.post('/index', inserts.insert)
router.get('/edit/:id', editUser.Edit)
router.post('/update', editUser.update)
router.delete('/delete/:id', deleteUser.delete)

module.exports = router