// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/tiendita';
} else {
    urlDB = 'mongodb://t-user:elekele1@ds125293.mlab.com:25293/tiendita';
    // urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;