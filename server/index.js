import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()



const app = express();
const PORT = process.env.PORT || 5050

const allowlist = ['http://localhost:5173'];
const corsOptions = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

app.use(cors(corsOptions));

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for an allowed domain.'})
})

app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 80')
})