const Image = require('../models/imageModel');
const fs = require('fs');

const imageController = {
    createImage: async files => {
        try {
            let images = [];
            for (let i = 0; i < files.length; i++) {
                const image = new Image({
                    path: '/' + files[i].path.replace(/\\/g, '/'),
                    name: files[i].filename,
                });

                await image.save();
                images.push(image._id);
            }
            return images;
        } catch (error) {
            for (let i = 0; i < files.length; i++) {
                deleteLocalImage(files[i].filename);
            }
            throw error;
        }
    },

    deleteImage: async name => {
        await Image.findOneAndDelete({ name });
        deleteLocalImage(name);
        return;
    },
};

const deleteLocalImage = async name => {
    fs.unlink(`public/images/${name}`, err => {
        if (err) {
            throw err;
        }
    });
};

module.exports = imageController;