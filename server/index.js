 require('dotenv').config();
const express = require('express'),
      cors = require('cors'),
      session = require('express-session'),
      port = 6969,
      ctrl = require('./controller'),
      app = express();
const path = require('path');

app.use( express.static( `${__dirname}/../build` ) );
app.use(cors());
app.use(express.json());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: "shhhhhh",
  cookie: {maxAge: 1000 * 60 * 60 * 10}
}))




app.get('/api/googlenews/:search', ctrl.getGoogleNews)
app.get('/api/googletrends', ctrl.getGoogleTrends)

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => console.log(`Server started on ${port}`));


// massive(CONNECTION_STRING).then(db => {
//   app.set('db', db);
//   console.log('Database connected')
// });