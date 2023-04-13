const router = require("express").Router();
const multer = require('multer');
const {v4: uuidv4} = require('uuid');
const path = require('path')
let User = require("../models/user.model");
const parser = require('../middleware/cloudinary.config');


const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'client/public/new_im');
  },
  filename: function(req, file, cb){
    cb(null, uuidv4()+'-'+Date.now()+path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg','image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)){
    cb(null, true);
  }
  else  {
    cb(null, false);
  }
}

let upload = multer({storage, fileFilter});


router.route("/").post((req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  User.find({ $and: [{ email: email }, { password: password }] })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  const ID = req.params.id;
  User.find({ _id: ID })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addNewUser").post(parser.single('photo'),(req, res) => {
  var photo = req.file.path;
  if(!photo)photo='avator.jpg'
  const fName = req.body.fName;
  const lName = req.body.lName;
  const country = req.body.country;
  const state = req.body.state;
  const cityVillage = req.body.cityVillage;
  const password = req.body.password;
  const email = req.body.email;
  const nft = 100;

  const newUser = new User({
    photo,
    fName,
    lName,
    country,
    state,
    cityVillage,
    password,
    email,
    nft
  });

  newUser
    .save()
    .then(() => {
      res.json("User added!").send(newUser);
    })
    .catch((err) => {
      console.log(photo,
        fName,
        lName,
        country,
        state,
        cityVillage,
        password,
        email,
        nft);
      res.status(400).json("Error: " + err)});
});

module.exports = router;
