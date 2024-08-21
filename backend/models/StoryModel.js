import { Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Story = db.define('story', {
    title: DataTypes.TEXT,
    writer: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    category: DataTypes.STRING,
    cover_image: DataTypes.STRING,
    status: DataTypes.STRING,
    last_updated: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW 
    }
    
},  {
    hooks: {
        beforeUpdate: (story, options) => {
            story.last_updated = new Date(); // Set to current date and time
        }
    },
    freezeTableName: true
});

export default Story;

(async()=>{
    await db.sync();
    console.log('Story table created successfully');
})();