const express = require ("express");
const router = express.Router();
const tacos = require("../models/taco");

router.get("/", function(req, res) {
    taco.all(function(data) {
        const hbsObject = {
            tacos: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
  });

router.post("/api/tacos", function(req, res) {
    console.log("test")
      taco.insert([
        "taco_name", "shell", "vegatarian"
      ], [
        req.body.name, req.body.shell, req.body.vegatarian
      ], function(result) {
        res.json({ id: result.insertId });
      });
    }); 

router.put("/api/tacos/:id", function(req, res) {
    const condition = "id = " + req.params.id;
      
    console.log("condition", condition);
        taco.update({
           vegatarian: req.body.vegatarian
        }, condition, function(result) {
          if (result.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        });
      });

router.delete("/api/tacos/:id", function(req, res) {
    const condition = "id = " + req.params.id;
      
        taco.delete(condition, function(result) {
          if (result.affectedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        });
      });

module.exports = router;      