var axios = require('axios');
require('dotenv').config();

//The token in the .env file is not functional
//Please make sure to replace with your real token!
let BEARER_TOKEN = process.env.BEARER_TOKEN;

async function main() {

    //This JSON object is what will represent a specific event
    //Whop uses this to allow filtering on your data
    let someData = await getData()

    //This JSON object is what will be sent to Discord through Whop
    let discordEmbed = await getEmbed(someData.sport, someData.teams[0], someData.teams[1], someData.event, someData.score)

    //This function is responsible for sending the above data to Whop
    let response = await sendToWhop({ data: someData, embed: discordEmbed })
    console.log(response)
}

async function getData() {
    //Normally you might have some code here to pull data from an API
    //or some other data source, but for now we will return dummy data

    return {
        sport: "MLB",
        teams: ["NYM", "NYY"],
        event: "Score Changed",
        score: [3,2]
    }
}

async function getEmbed(sport, teamOne, teamTwo, description, score) {
    return {
        "content": null,
        "embeds": [
          {
                "title": `${sport} Update: ${teamOne} @ ${teamTwo} ${description}`,
            "description": `The score is now ${score[0]}-${score[1]}, ${teamOne} is winning`,
            "color": 16729109
          }
        ],
        "username": "The Sports Score Provider",
        "avatar_url": "https://cdn.discordapp.com/attachments/981688088394887219/994388298996924436/unknown.png",
        "attachments": []
    }
}

async function sendToWhop(info) {

    //These options set the request as a POST request,
    //the url as the Whop provider endpoint, the authorization
    //as the bearer token found in the .env file, and the body
    //of the request as the data from the main() function.
    var options = {
      method: 'POST',
      url: `https://data.whop.com/provider`,
      data: info,
      json: true,
      headers: {
        'content-type': 'application/json',
        'authorization': BEARER_TOKEN,
      },
    };
  
    let response
    try {
        response = await axios(options)
    } catch (error) {
        console.log(error)
    }
    return response.data
       
}

main()