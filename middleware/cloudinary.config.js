const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const {v4:uuidv4} = require('uuid')
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const path = require('path');
require('dotenv').config({path: '../config.env'});

const {
    CLOUDINARY_HOST,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
} = process.env;

cloudinary.config({
    cloud_name:CLOUDINARY_HOST,
    api_key:CLOUDINARY_API_KEY,
    api_secret:CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"art_images",
        format:async ()=> "png",
        public_id: (req, file)=>uuidv4()+'-'+Date.now()+path.extname(file.originalname),
    },
});

const parser = multer({storage:storage});

module.exports = parser;
