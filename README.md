[![Netlify Status](https://api.netlify.com/api/v1/badges/ac7bb7b0-7db1-4817-a5cb-96106bf9e18c/deploy-status)](https://app.netlify.com/sites/zealous-borg-bff18a/deploys)

# trumptweets.rest
A free endpoint that spits out random Donald Trump tweets.

### Usage

Just `GET` [https://trumptweets.rest/api](trumptweets.rest/api)

You'll get back something like this.
```
{
  "_id": "5c7b0dc9752e2441f4a66682",
  "source": "Twitter Ads",
  "id_str": "754420722575953920",
  "text": "Donate Today To Help Make America Great Again! You Can Help Stop Crooked Hillary Clinton! https://t.co/swzCe5PiNI https://t.co/0fmgNBuAcc",
  "created_at": "2016-07-16T21:01:31.000Z",
  "retweet_count": 1051,
  "in_reply_to_user_id_str": null,
  "favorite_count": 2497,
  "is_retweet": false
}
```

### FAQ

#### How many tweets does this API have?

About 36 thousand, almost all of Trump's tweets between 2009 and 2018. Working on getting a pipeline for tweets in 2019 and onwards.


#### What does this look like under the hood?

Quick Gatsby splash page, a Mongo Atlas free tier instance, and a lambda function making the route do it's thing.


#### Any plans for more endpoints?

Right now, no - but I'm not ruling it out!
