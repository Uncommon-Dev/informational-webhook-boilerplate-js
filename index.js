var request = require('request');
require('dotenv').config();
let BEARER_TOKEN = process.env.BEARER_TOKEN;

async function main() {


    let template = {
        "content": null,
        "embeds": [
          {
            "title": "You're live!",
            "description": "Congratulations, you've sent your first Informational Webhook through Whop! From here the possibilities are endless, and we look forward to seeing what you build. If you want to see how this embed was made, you can find the template [here](https://discohook.org/?data=eyJtZXNzYWdlcyI6W3siZGF0YSI6eyJjb250ZW50IjpudWxsLCJlbWJlZHMiOlt7InRpdGxlIjoiWW91J3JlIGxpdmUhIiwiZGVzY3JpcHRpb24iOiJDb25ncmF0dWxhdGlvbnMsIHlvdSd2ZSBzZW50IHlvdXIgZmlyc3QgSW5mb3JtYXRpb25hbCBXZWJob29rIHRocm91Z2ggV2hvcCEgRnJvbSBoZXJlIHRoZSBwb3NzaWJpbGl0aWVzIGFyZSBlbmRsZXNzLCBhbmQgd2UgbG9vayBmb3J3YXJkIHRvIHNlZWluZyB3aGF0IHlvdSBidWlsZC4gSWYgeW91IHdhbnQgdG8gc2VlIGhvdyB0aGlzIGVtYmVkIHdhcyBtYWRlLCB5b3UgY2FuIGZpbmQgdGhlIHRlbXBsYXRlIFtoZXJlXShodHRwczovL2Rpc2NvaG9vay5vcmcvP2RhdGE9ZXlKdFpYTnpZV2RsY3lJNlczc2laR0YwWVNJNmV5SmpiMjUwWlc1MElqcHVkV3hzTENKbGJXSmxaSE1pT2x0N0luUnBkR3hsSWpvaVdXOTFKM0psSUd4cGRtVWhJaXdpWkdWelkzSnBjSFJwYjI0aU9pSkRiMjVuY21GMGRXeGhkR2x2Ym5Nc0lIbHZkU2QyWlNCelpXNTBJSGx2ZFhJZ1ptbHljM1FnU1c1bWIzSnRZWFJwYjI1aGJDQlhaV0pvYjI5cklIUm9jbTkxWjJnZ1YyaHZjQ0VnUm5KdmJTQm9aWEpsSUhSb1pTQndiM056YVdKcGJHbDBhV1Z6SUdGeVpTQmxibVJzWlhOekxDQmhibVFnZDJVZ2JHOXZheUJtYjNKM1lYSmtJSFJ2SUhObFpXbHVaeUIzYUdGMElIbHZkU0JpZFdsc1pDNGdTV1lnZVc5MUlIZGhiblFnZEc4Z2MyVmxJR2h2ZHlCMGFHbHpJR1Z0WW1Wa0lIZGhjeUJ0WVdSbExDQjViM1VnWTJGdUlHWnBibVFnZEdobElIUmxiWEJzWVhSbElGdG9aWEpsWFNncElpd2lZMjlzYjNJaU9qRTJOekk1TVRBNWZWMHNJblZ6WlhKdVlXMWxJam9pVjJodmNDQkpibVp2Y20xaGRHbHZibUZzSUZkbFltaHZiMnR6SWl3aVlYWmhkR0Z5WDNWeWJDSTZJbWgwZEhCek9pOHZZMlJ1TG1ScGMyTnZjbVJoY0hBdVkyOXRMMkYwZEdGamFHMWxiblJ6THprNE1UWTRPREE0T0RNNU5EZzROekl4T1M4NU9UUXpPRGd5T1RnNU9UWTVNalEwTXpZdmRXNXJibTkzYmk1d2JtY2lMQ0poZEhSaFkyaHRaVzUwY3lJNlcxMTlmVjE5KSIsImNvbG9yIjoxNjcyOTEwOX1dLCJ1c2VybmFtZSI6Ildob3AgSW5mb3JtYXRpb25hbCBXZWJob29rcyIsImF2YXRhcl91cmwiOiJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODE2ODgwODgzOTQ4ODcyMTkvOTk0Mzg4Mjk4OTk2OTI0NDM2L3Vua25vd24ucG5nIiwiYXR0YWNobWVudHMiOltdfX1dfQ)",
            "color": 16729109
          }
        ],
        "username": "Whop Informational Webhooks",
        "avatar_url": "https://cdn.discordapp.com/attachments/981688088394887219/994388298996924436/unknown.png",
        "attachments": []
    }
    
    let someData = {
        someField: "testing",
        anotherField: "also testing",
        numberForFiltering: "2391230983459023"
    }

    await sendToWhop({ data: someData, embed: template })
    
}

async function sendToWhop(info) {
    var options = {
      method: 'POST',
      url: `https://data.whop.com/provider`,
      body: info,
      headers: {
        'content-type': 'application/json',
        'authorization': BEARER_TOKEN,
      },
    };
  
    request(options, function (error, response, body) {
      if (error || body == undefined) throw Error(error);
      try {
        body = JSON.parse(body);
        return body;
      } catch (error) {
        throw Error(error);
      }
    });
}

main()