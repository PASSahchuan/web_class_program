const express = require('express');

const router = express.Router();

const password = {
  "Y.C_Shen":{
    account: "Y.C_Shen",
    password: "evilSugar", 
  },
  "C.Y_Xue":{
    account: "C.Y_Xue",
    password: "PubgIsSoFun"
  },
  "C.L_Huang":{
    account: "C.L_Huang",
    password: "amazingSugar"
  },
  "Guest":{
    account: "Guest",
    password: "Guest",
  }
}




/* GET users listing. */
router.get('/', (req, res) => {
  console.log(req);
  res.send('respond with a resource');
});
/* GET users listing. */
router.get('/a', (req, res) => {
  res.json({ msg: 'respond with a resource:a' });
});

module.exports = router;
