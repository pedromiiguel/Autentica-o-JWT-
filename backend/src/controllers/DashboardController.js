
module.exports = {
  async index(req, res){
    return res.json({user: req.userId})
  }
}