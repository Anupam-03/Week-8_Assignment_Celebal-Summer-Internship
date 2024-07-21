const getUpload = (req, res) => {
    res.render("upload", { user: req.user.username });
};

const postUpload = (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.render("upload", { user: req.user.username, message: "File uploaded successfully" });
};

module.exports = {
    getUpload,
    postUpload
};