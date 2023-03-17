import Client from "../models/client.model.js";

async function insertClient(client) {
  try {
    return await Client.create(client);
  } catch (err) {
    throw err;
  }

  // const conn = await DB.connect();

  // const sql =
  //   "INSERT INTO clients (name, cpf, email, phone, address) VALUES ($1, $2, $3, $4, $5) RETURNING *";

  // const values = [
  //   client.name,
  //   client.cpf,
  //   client.email,
  //   client.phone,
  //   client.address,
  // ];

  // try {
  //   const res = await conn.query(sql, values);
  //   return res.rows[0];
  // } catch (err) {
  //   throw err;
  // } finally {
  //   conn.release();
  // }
}

async function getClients() {
  try {
    return await Client.findAll();
  } catch (err) {
    throw err;
  }

  // const conn = await DB.connect();

  // try {
  //   const res = await conn.query("SELECT * FROM clients");
  //   return res.rows;
  // } catch (err) {
  //   throw err;
  // } finally {
  //   conn.release();
  // }
}

async function getClient(id) {
  try {
    return await Client.findByPk(id);
  } catch (err) {
    throw err;
  }

  // const conn = await DB.connect();
  // const sql = "SELECT * FROM clients WHERE client_id = $1";
  // const values = [id];
  // try {
  //   const res = await conn.query(sql, values);
  //   return res.rows[0];
  // } catch (err) {
  //   throw err;
  // } finally {
  //   conn.release();
  // }
}

async function updateClient(client) {
  try {
    await Client.update(client, {
      where: {
        clientId: client.clientId,
      },
    });
    return await getClient(client.clientId);
  } catch (err) {
    throw err;
  }

  // const conn = await DB.connect();
  // const sql =
  //   "UPDATE clients SET name = $1, cpf = $2, phone = $4, email = $3, address = $5 " +
  //   "WHERE client_id = $6 RETURNING *";
  // const values = [
  //   client.name,
  //   client.cpf,
  //   client.email,
  //   client.phone,
  //   client.address,
  //   client.client_id,
  // ];
  // try {
  //   const res = await conn.query(sql, values);
  //   return res.rows[0];
  // } catch (err) {
  //   throw err;
  // } finally {
  //   conn.release();
  // }
}

async function deleteClient(id) {
  try {
    return await Client.destroy({
      where: {
        clientId: id,
      },
    });
  } catch (err) {
    throw err;
  }

  // const conn = await DB.connect();
  // try {
  //   const res = conn.query("DELETE FROM clients WHERE client_id = $1", [id]);
  //   console.log(res);
  // } catch (err) {
  //   throw err;
  // } finally {
  //   conn.release();
  // }
}

export default {
  insertClient,
  getClients,
  getClient,
  updateClient,
  deleteClient,
};
