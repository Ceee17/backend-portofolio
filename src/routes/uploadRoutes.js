const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const uploadController = require('../controllers/uploadController');
const upload = multer({ dest: 'uploads/' });



router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/upload.html'));
  });

router.post('/', upload.single('image'), uploadController.uploadImage);

module.exports = router;