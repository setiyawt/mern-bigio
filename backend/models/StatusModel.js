import { Sequelize} from "sequelize";
import db from "../config/Database.js";
import Story from './StoryModel.js';



const {DataTypes} = Sequelize;

const Status= db.define('status', {
    name: DataTypes.STRING,
    story_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Story, // Nama model yang menjadi referensi
            key: 'id'     // Kolom di model Story yang menjadi referensi
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}, {
    freezeTableName: true
});

export default Status;

(async()=>{
    await db.sync();
    console.log('Status table created successfully');
})();