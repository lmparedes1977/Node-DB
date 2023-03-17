// import pg from "pg";
import { Sequelize } from "sequelize";

// async function connect() {
//   if (global.connection) {
//     return global.connection.connect();
//   }

//   const pool = new pg.Pool({
//     connectionString:
//       "postgres://uppegnvy:wm4Fk3o5YPF5lh7U9CQolKBeX52fHr7i@suleiman.db.elephantsql.com/uppegnvy",
//   });
//   global.connection = pool;

//   return pool.connect();
// }

const sequelize = new Sequelize(
  "postgres://uppegnvy:wm4Fk3o5YPF5lh7U9CQolKBeX52fHr7i@suleiman.db.elephantsql.com/uppegnvy",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
