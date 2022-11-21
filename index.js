const { Client } = require("pg");
const estad = require("./src/estad");
const pitchersQuery = require("./src/pitchersQuery");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "123",
  database: "beisbol",
});

const query =
  "select carrera.id_carrera, pitcher.p_name from carrera, estadistica, pitcher where carrera.id_carrera = estadistica.id_carrera and estadistica.id_carrera = carrera.id_carrera order by carrera.id_carrera";

// Obtener lista de estadisticas con pitcher
const queryExec = async () => {
  await client.connect();
  const res = await client.query(query);
  const estads = estad.insertEstads(res.rows);
  pitchersQuery.queryExec(estads);
  await client.end();
};

queryExec().catch((e) => {
  console.log(e);
});