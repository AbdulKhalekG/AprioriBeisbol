module.exports = {
    /**
     * Iterar por cada estadistica, para crear un array de objetos
     * el cual contiene el TID y los pitcher por estadistica
     * @param {Array[Object]} estadisticas
     * @returns
     */
    insertEstads: (estadisticas) => {
      estads = [];
      estadisticas.map((estadistica) => {
        console.log('estadistica', estadistica)
        estadistica.id_carrera = estadistica.id_carrera - 1;
        if (estads.length < estadistica.id_carrera + 1) {
          estads.push({});
          estads[estadistica.id_carrera] = { tid: estadistica.id_carrera, items: [] };
        } console.log('estads', estads)
        estads.splice(estadistica.id_carrera, 1, {
          tid: estadistica.id_carrera,
          items: [...estads[estadistica.id_carrera].items, estadistica.p_name],
          
        });
      });
      return estads;
    },
  };