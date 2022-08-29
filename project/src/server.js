import express from "express";
import cors from "cors";

const server = express()
server.use(express.json());
server.use(cors())

let actualUser;
const users = []
const tweets = [
   {
      username: "bobesponja",
      avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      tweet: "Esse é o primeiro"
   },
   {
      username: "kirito",
      avatar: "https://i.pinimg.com/736x/dd/ef/a5/ddefa530ece368dbd799a4f818c3894e.jpg",
      tweet: "Eu solo geral"
   },
   {
      username: "doAcoEdElric",
      avatar: "https://poltronanerd.com.br/wp-content/uploads/2016/06/poltrona-full-metal-filme.jpg",
      tweet: "É a lei da troca equivalente"
   }
]

server.post("/sign-up", (req, res) => {
   users.push(req.body)
   actualUser = req.body
   res.send("Ok")
})

server.post("/tweets", (req, res) => {
   const tweet = {
      username: req.body.username,
      avatar: actualUser.avatar,
      tweet: req.body.tweet
   }
   tweets.unshift(tweet)
   res.send("Ok")
})

server.get("/tweets", (req, res) => {
   const tweetsToSend = tweets.filter((item, index) => index < 10)

   res.send(tweetsToSend)
})

server.listen(5000)