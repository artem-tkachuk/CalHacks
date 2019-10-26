exports.get404 = (req, res) => {
    res.status(404).send('404! Page not found!');
    res.end();
};