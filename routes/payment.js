const router = require("express").Router();
let payment = require("../models/payment.model");
let art = require("../models/art.model");
let user = require("../models/user.model");
router.route("/").post((req, res) => {
  const artName = req.body.artName;
  payment
    .find({ artName: artName })
    .then((arts) => res.json(arts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  art
    .find({ ownerId: req.params.id })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const category = req.body.category;
  const image = req.body.image;
  const price = req.body.price;
  const creatorId = req.body.creatorId;
  const ownerId = req.body.ownerId;
  const count = 0;

  const newArt = new Art({
    name,
    category,
    image,
    price,
    creatorId,
    ownerId,
    count,
  });

  newArt
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addPayment").post((req, res) => {
  const artName = req.body.artName;
  const artId = req.body.artId;
  const oldOwnerId = req.body.oldOwnerId;
  const oldOwnerName = req.body.oldOwnerName;
  const newOwnerId = req.body.newOwnerId;
  const newOwnerName = req.body.newOwnerName;
  const price = parseFloat(req.body.price);
  const basePrice = parseFloat(req.body.basePrice);
  const count = parseInt(req.body.count);
  const newPrice = price + (basePrice * 3) / 5;
  const newNft = parseInt(req.body.nft) - price;
  console.log(
    newNft,
    artName,
    artId,
    oldOwnerId,
    oldOwnerName,
    newOwnerId,
    newOwnerName,
    price,
    basePrice,
    count,
    newPrice
  );
  art
    .updateOne(
      { _id: artId },

      {
        $inc: { count: 1 },
        $set: { ownerId: newOwnerId, price: newPrice, ownerName: newOwnerName },
      },
      { new: true }
    )
    .then(() => {
      user
        .updateOne({ _id: oldOwnerId }, { $inc: { nft: price } }, { new: true })
        .then(() => {
          user
            .updateOne(
              { _id: newOwnerId },
              { $set: { nft: newNft } },
              { new: true }
            )
            .then(() => {
              user.find({ _id: newOwnerId }).then((user) => res.json(user));
            })
            .catch((err) => console.log("Error user", err));
        })
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
