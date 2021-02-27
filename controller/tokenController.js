
function tokenController(req, res) {
    try {

        res.send({ message: 'sucess', data: req.body })

    } catch (error) {
        console.log("........................", error);
        return res.send({ error })
    }

}

module.exports = tokenController