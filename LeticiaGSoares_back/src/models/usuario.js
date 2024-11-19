import { DataTypes } from 'sequelize';
import sequelize from '../db.js'; // Sua conexão com o banco de dados

const Usuario = sequelize.define('usuarios', {
    email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
    tablename:"usuarios",
    timestamps: false
});

export default Usuario;