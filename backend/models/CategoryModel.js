import { Sequelize} from "sequelize";
import db from "../config/Database.js";
import Story from './StoryModel.js';


const {DataTypes} = Sequelize;

const Category = db.define('category', {
    name: DataTypes.STRING,
    story_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Story, // Nama model yang menjadi referensi
            key: 'id'     // Kolom di model Story yang menjadi referensi
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    name: DataTypes.STRING
    
}, {
    freezeTableName: true
});

export default Category;

(async()=>{
    await db.sync();
    console.log('Category table created successfully');
})();