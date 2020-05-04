const adjNoun = require('adj-noun');
const twilio = require('twilio');

const AccessToken = twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

adjNoun.seed(Math.floor(Math.random() * 100000));
const getRandomIdentity = () => {
  let [adj, noun] = adjNoun();
  return adj[0].toUpperCase() + adj.substring(1) + noun[0].toUpperCase() + noun.substring(1);
}

function TokenGenerator(deviceId) {
  console.log('requesting token')
  let identity = getRandomIdentity();
  const appName = 'PhyswipeChat';

  // Create a unique ID for the client on their current device
  const endpointId = appName + ':' + identity + ':' + deviceId;

  // Create a "grant" which enables a client to use Chat as a given user,
  // on a given device
  const chatGrant = new ChatGrant({serviceSid: process.env.TWILIO_CHAT_SERVICE_SID, endpointId: endpointId});

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  const token = new AccessToken(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_API_KEY, process.env.TWILIO_API_SECRET);

  token.addGrant(chatGrant);
  token.identity = identity;

  return token;
}

module.exports = {
  generate: TokenGenerator
};
