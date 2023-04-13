const router = require('express').Router();
const multer = require('multer');
const {v4: uuidv4} = require('uuid');
const path = require('path')
let Art = require('../models/art.model');
const parser = require('../middleware/cloudinary.config');

// const storage = multer.diskStorage({
//   destination: function(req, file, cb){
//     cb(null, 'client/public/new_im');
//   },
//   filename: function(req, file, cb){
//     cb(null, uuidv4()+'-'+Date.now()+path.extname(file.originalname));
//   }
// });

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ['image/jpeg','image/jpg', 'image/png'];
//   if(allowedFileTypes.includes(file.mimetype)){
//     cb(null, true);
//   }
//   else  {
//     cb(null, false);
//   }
// }

// let upload = multer({storage, fileFilter});

router.route('/').post((req, res) => {
  const category = req.body.category;
  const id=req.body.id;
  Art.find({$and: [{category : category},{ownerId:{$ne:id}}]})
    .then(arts => res.json(arts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Art.find({ownerId : req.params.id})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/myCreatedArt/:id').get((req, res) => {
  Art.find({creatorId : req.params.id})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addNewArt').post(parser.single('photo'), (req, res) => {
  
  const name = req.body.name;
  const category = req.body.category;
  const photo = req.file.path;
  const price = parseInt(req.body.price);
  const creatorId = req.body.creatorId;
  const ownerId = req.body.creatorId;
  const creatorName = req.body.creatorName;
  const ownerName = creatorName;
  var sell = true;
  if(req.body.sell === "No")sell = false;
  const basePrice = price;
  const count = 0;

  const newArt = new Art(
    {
      name,
      category,
      photo,
      price,
      basePrice,
      creatorName,
      creatorId,
      ownerName,
      ownerId,
      count,
      sell
    });

  newArt.save()
    .then(() => res.json("success"))
    .catch(err => {res.status(400).json(req.body)
  console.log("hello",name,
  category,
  photo,
  price,
  basePrice,
  creatorName,
  creatorId,
  ownerName,
  ownerId,
  count,
  sell)});
});

module.exports = router;