import { Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Story_Management = db.define('story_management', {
    search_term: DataTypes.STRING,
    
}, {
    freezeTableName: true
});

export default Story_Management;

(async()=>{
    await db.sync();
    console.log('Story Management table created successfully');
})();