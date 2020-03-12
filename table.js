'use strick'

const express = require('express')
const mysql = require ('mysql')

const db = mysql.createConnection({
    host : '127.0.0.1',
    port : '3306',
    user : 'root',
    password : '',
    database : 'latihan_ukl'
})

db.connect((err) => {
    if(err) throw err
    console.log('Database Connected')
})

const createBuahTable = () => {
    let sql = `
    create table buah (
        id int unsigned auto_increment primary key,
        nama varchar(191) not null,
        stock int unsigned default 0,
        harga int not null,
        created_at timestamp default current_timestamp,
        update_at timestamp default current_timestamp null on update current_timestamp
    )
    `
    db.query(sql, (err, res) => {
        if (err) throw err
        console.log('Table buah has been created')
    })
}

const createPembeliTable = () => {
    let sql = `
        create table pembeli (
            id int unsigned auto_increment primary key,
            email varchar(191) not null,
            password varchar(191) not null,
            created_at timestamp default current_timestamp,
            update_at timestamp default current_timestamp null on update current_timestamp
        )
    `
    db.query(sql, (err, res) => {
        if (err) throw err
        console.log('Table pembeli has been created')
    })
}

const createPembelianTable = () => {
    let sql = `
        create table pembelian (
            id int unsigned auto_increment primary key,
            id_buah int not null,
            id_pembeli int not null,
            created_at timestamp default current_timestamp
        )
    `
    db.query(sql, (err, res) => {
        if (err) throw err
        console.log('Table pembelian has been created')
    })
}

createBuahTable()
createPembeliTable()
createPembelianTable()