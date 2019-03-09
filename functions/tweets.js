const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://readOnly:readOnly@tweetarchive-x1fhf.mongodb.net/test?retryWrites=true'



const onSuccess = (callback, tweet) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(tweet)
  }
  callback(null, response)
};

const onError = (callback) => {
  const response = {
    statusCode: 500,
    body: {
      text: null,
      err: "We, we have an outage, We have the best outages, the best outages, it's gonna be great. Big. Huge, beautiful, outage."
    }
  }
  callback(null, response)
};

exports.handler = (event, context, callback) => {
  try{
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      connectTimeoutMS: 30000,
      keepAlive: 1,
      reconnectTries: 30,
      reconnectInterval: 5000
    });
    client.connect((err, client) => {
      const db = client.db("potus")
      const collection = db.collection("tweets")
      collection.aggregate([{ $sample: { size: 1 } }], (err, cursor) =>{
        console.log("Aggregate")
        cursor.toArray((err, docs) => {
          onSuccess(callback, docs[0])
          client.close()
        })
      })
    })
  } catch {
    onError(callback)
  }
};
