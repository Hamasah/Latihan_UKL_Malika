const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const secretKey = 'thisisverysecretkey'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

const db = mysql.createConnection({
    host : '127.0.0.1',
    port : '3306',
    user : 'root',
    password : '',
    database : 'latihan_ukl'
})

const isAuthorized = (request, result, next) => {
    if(typeof(request.headers[headers]) == 'undefined'){
        return result.status(403).json({
            success: false,
            message: 'Unauthorized. Token is not provided'
        })
    }
    let token = request.headers['x-api-key']

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return result.status(401).json({
                success: false,
                message: 'Unauthorized. Token is invalid'
            })
        }
    })
    next()
}