import { DataTypes } from 'sequelize';
import sequelize from '../db.js'; // Sua conexão com o banco de dados

const Feedback = sequelize.define('feedbacks', {
    id_publicacao: {
        type: DataTypes.STRING,
        allowNull: false,
        references : {
            model: 'publicacoes',
            key: 'id'
        }
    },
    id_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        references : {
            model: 'publicacoes',
            key: 'id'
        }
    }
},
{
    tablename:"feedbacks",
    timestamps: false
});

export default Feedback;