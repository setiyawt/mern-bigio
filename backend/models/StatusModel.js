import { Sequelize} from "sequelize";
import db from "../config/Database.js";
import Story from './StoryModel.js';


const {DataTypes} = Sequelize;

const Status= db.define('status', {
    name: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Status;

(async()=>{
    await db.sync();
    console.log('Status table created successfully');
})();