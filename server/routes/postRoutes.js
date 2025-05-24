import express from 'express'
import multer from 'multer';
import path from 'node:path'
import postModel from '../model/postModel.js';

const router = express.Router();

// multer storage configuration
const storage = multer.diskStorage({ //defines where uploaded files are saved
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); //save files in the uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); //defines filename for uploaded files and uses current timestamp and file extensions 
  },
});

const upload = multer({ //initialize multer with storage and file filtering
  storage, //use defined storage config
  fileFilter: (req, file, cb) => { //filters
    const filetypes = /jpeg|jpg|png|mp4|webm/; //define allowed types
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());//checks if extension matches allowed types with case sensivity
    const mimetype = filetypes.test(file.mimetype); //check if MIME type is allowed
    if (extname && mimetype) { //mime and extension is true then accept file
      cb(null, true);
    } else {
      cb(new Error('Images and videos only!')); //send error
    }
  },
});

//create post
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const { title, description } = req.body; //gets title and description
    const filePath = req.file.path.replace(/\\/g, '/');//normalize filepath by switching backslash with forward slash
    const post = new postModel({ title, description, filePath }); //create new post with variables
    await post.save(); //saves to database
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await postModel.find().sort({ createdAt: -1 }); //gets all posts sorted by creation date, newest first
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;