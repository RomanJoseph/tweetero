import express from "express";
import cors from "cors";

const server = express()
server.use(express.json());
server.use(cors())

const users = []
const tweets = [
   {
      username: "bobesponja",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "eu amo o hub"
   }
]

server.post("/sign-up", (req, res) => {
   users.push(req.body)
   res.send("Ok")
})

server.post("/tweets", (req, res) => {
   const tweet = {
      username: req.body.username,
      avatar: users[0].avatar,
      tweet: req.body.tweet
   }
   tweets.push(tweet)
   console.log(tweets)
   res.send("Ok")
})

server.get("/tweets", (req, res) => {
   res.send(tweets)
})

server.listen(5000)