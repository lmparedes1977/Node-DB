// import pg from "pg";
import { Sequelize } from "sequelize";

// async function connect() {
//   if (global.connection) {
//     return global.connection.connect();
//   }

//   const pool = new pg.Pool({
//     connectionString:
//       "url de conexão",
//   });
//   global.connection = pool;

//   return pool.connect();
// }

const sequelize = new Sequelize(
  "url de conexão",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
