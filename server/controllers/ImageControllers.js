const AWS = require("aws-sdk");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const NodeCache = require("node-cache");
const AsyncHandler = require("express-async-handler");

const imgCache = new NodeCache();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, "");
  },
});

const upload = multer({ storage }).single("profilePicture");

const uploadImage = AsyncHandler(async (req, res) => {
  const fileNameParts = req.file.originalname.split(".");
  const fileType = fileNameParts[fileNameParts.length - 1];

  const key = `${uuidv4()}.${fileType}`;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
    Body: req.file.buffer,
  };
  s3.upload(params, async (error, data) => {
    if (error) throw new Error(error);
    res.json(data);
  });
});

const getImageSrc = AsyncHandler(async (req, res) => {
  const key = req.params.key;
  if (imgCache.has(key)) {
    console.log("Dont worry, it's coming from cache");
    return res.json(imgCache.get(key));
  }
  AWS.config.update({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
  });
  async function getImage() {
    const data = s3
      .getObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${key}`,
      })
      .promise();

    return data;
  }
  function encode(data) {
    let buf = Buffer.from(data);
    let base64 = buf.toString("base64");
    return base64;
  }
  getImage()
    .then((img) => {
      imgCache.set(key, {
        srcData: "data:image/jpeg;base64," + encode(img.Body),
      });
      res.json({ srcData: "data:image/jpeg;base64," + encode(img.Body) });
    })
    .catch((e) => {
      console.log(e);
      res.send(e);
    });
});

module.exports = { upload, getImageSrc, uploadImage };
