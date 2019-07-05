const createTable = "CREATE TABLE motorcycles (? VARCHAR(255), ? VARCHAR(255))";
const createRow = "INSERT INTO motorcycles(make, model) VALUES(?, ?)";
const createMultipleRows = "INSERT INTO motorcycles(make, model) VALUES ?";
const selectAll = "SELECT * FROM motorcycles";
const update = `UPDATE motorcycles
    SET id = ?
    WHERE model = ?`;
const remove = `DELETE FROM motorcycles where model = ?`;
