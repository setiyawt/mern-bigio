import {Sequelize} from "sequelize";

const db= new Sequelize('mern-bigio', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;