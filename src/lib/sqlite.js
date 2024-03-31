import Database from 'better-sqlite3';

const db = new Database('./data/tietokannan-alustus.sql', { verbose: console.log });
