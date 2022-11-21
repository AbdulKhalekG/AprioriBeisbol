const { Client } = require("pg");
const apriori = require("./apriori");
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "123",
  database: "beisbol",
});

const query = "select p_name from pitcher";

// Obtener lista de pitcher
const queryExec = async (estads) => {
  await client.connect();
  const res = await client.query(query);
  const candidates1 = res.rows;
  candidates1.forEach((pitcher) => {
    pitcher.support = countFrecuency(estads, pitcher.p_name);
  });
  apriori.exec(candidates1, estads);
  await client.end();
};

const countFrecuency = (estads, value) => {
  let i = 0;
  estads.forEach((estad) => {
    if (estad.items.findIndex((item) => item === value) !== -1) {
      i++;
    }
  });
  return i;
};

module.exports = {
  queryExec,
};

