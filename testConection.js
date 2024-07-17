const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
    }
    console.log('Connected to the database');

    connection.query('SHOW DATABASES', (error, results) => {
        if (error) {
            console.error('Error fetching databases:', error.message);
            return;
        }
        console.log('Databases:', results);
        connection.end();
    });
});




/*const mysql = require('mysql2/promise');
require('dotenv').config();

async function testConnection() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });

    console.log('Connected to the database');
    const [rows] = await connection.query('SHOW DATABASES;');
    console.log('Databases:', rows);
    await connection.end();
}

testConnection().catch(err => {
    console.error('Error connecting to the database:', err.message);
});
*/