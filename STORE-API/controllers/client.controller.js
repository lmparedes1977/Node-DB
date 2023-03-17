import clientService from "../services/client.service.js";

async function createClient(req, res, next) {
  let client = req.body;
  try {
    if (
      !client.name ||
      !client.cpf ||
      !client.email ||
      !client.phone ||
      !client.address
    ) {
      throw new Error("Nome, cpf, email, telefone e endereço são obrigatórios");
    }
    //clientService
    client = await clientService.createClient(client);
    res.send(client);
    logger.info(`POST /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

async function getClients(req, res, next) {
  try {
    res.send(await clientService.getClients());
    logger.info("GET /clients");
  } catch (err) {
    next(err);
  }
}

async function getClient(req, res, next) {
  try {
    res.send(await clientService.getClient(req.params.id));
    logger.info("GET /client");
  } catch (err) {
    next(err);
  }
}

async function updateClient(req, res, next) {
  let client = req.body;
  try {
    if (
      !client.name ||
      !client.cpf ||
      !client.email ||
      !client.phone ||
      !client.address ||
      !client.clientId
    ) {
      throw new Error(
        "Nome, cpf, email, telefone, endereço e client_id são obrigatórios"
      );
    }
    client = await clientService.updateClient(client);
    res.send(client);
    logger.info(`PUT /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteClient(req, res, next) {
  try {
    res.send(await clientService.deleteClient(req.params.id));
    res.end();
    logger.info("DELETE /client");
  } catch (err) {
    next(err);
  }
}

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
};
