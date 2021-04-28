require('dotenv').config();

module.exports = {
    getMe: async (req, res) => {
      if(req.session.user){
        const {user_id} = req.session.user;
        const db = req.app.get('db');
        const userInfo = await db.get_me(user_id);
        delete userInfo[0].password;
        res.status(200).send(userInfo[0]);
      } else {
        res.status(401).send('User not found');
      }
    }
  }