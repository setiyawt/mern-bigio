import { Sequelize} from "sequelize";
import db from "../config/Database.js";
import Story from './StoryModel.js';


const {DataTypes} = Sequelize;

const Keyword= db.define('keyword', {
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

export default Keyword;

(async()=>{
    await db.sync();
    console.log('Keyword table created successfully');
})();