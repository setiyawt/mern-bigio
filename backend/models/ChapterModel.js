import { Sequelize} from "sequelize";
import db from "../config/Database.js";
import Story from './StoryModel.js';


const {DataTypes} = Sequelize;

const Chapter = db.define('chapter', {
    title: DataTypes.TEXT,
    story_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Story, // Nama model yang menjadi referensi
            key: 'id'     // Kolom di model Story yang menjadi referensi
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    content: DataTypes.TEXT,
    last_updated: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
    
}, {
    hooks: {
        beforeUpdate: (chapter, options) => {
            chapter.last_updated = new Date(); // Set to current date and time
        }
    },
    freezeTableName: true
});

export default Chapter;

(async()=>{
    await db.sync();
    console.log('Chapter table created successfully');
})();