const cloudinary = require('../config/cloudinaryConfig');

exports.uploadImage = async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      res.json({ url: result.secure_url });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};