import { Sequelize } from "sequelize";

const sequelize = new Sequelize('ade2023', 'root', 'Sen@iDev77!.', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize