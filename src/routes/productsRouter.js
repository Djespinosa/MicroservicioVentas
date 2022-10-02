const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

//******Routes******
    // listar empleados 
    router.get("/", productsController.productList);
    
    
    // Crear empleado    
    // router.post("/create", apiController.create);    

    // // Editar empleado
    // router.put("/editEmployee/:id", apiController.editEmployee);

    // // Eliminar empleado
    // router.delete("/delete/:id", apiController.deleteEmployee);


module.exports = router;