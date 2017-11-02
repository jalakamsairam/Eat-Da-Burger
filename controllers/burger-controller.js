var express = require("express");

var router = express.Router();

//import burger model here
var burger = require("../models/burger.js");

//create all our routes and set up logic within these routes

router.get("/",function(req,res){
    burger.all(function(data){
        var hbsObject = {
            burger:data
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});
router.post("/api/burger", function(request, response){
  console.log(request.body);
  
    burger.create(
      {
      burger_name: request.body.burgerName,
      devoured: true
    }, function(result,error){
      if(error) throw error;
      console.log(result);
      response.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burger/:id", function(request, response) {
    var Id = request.params.id;
    console.log(Id);
    var condition = "id = " + Id;
    console.log(condition);
    burger.update({
      devoured: false
    }, condition , function(result) {
      if (result.changedRows == 0) {
        return response.status(404).end();
      } else {
        response.status(204).end();
      }
    });
  });
  
  router.delete("/api/burger/:id", function(request, response){
    var Id = request.params.id;
    var condition = "id = " + Id;
  
    burger.delete(condition, function(result){
      if (result.affectedRows == 0) {
        return response.status(404).end();
      } else {
        response.status(204).end();
      }
    });
  });
  
  module.exports = router;