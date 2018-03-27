var apiKey = "45898662";
var sessionId = "2_MX40NTg5ODY2Mn5-MTQ5ODE0MzMxMzM3NX5MTDNVRWNTS2lRSzR5dGxNblJ6T1NSd1R-fg";
var token = "T1==cGFydG5lcl9pZD00NTg5ODY2MiZzaWc9NjEzNTRjMzFjMmQ3ZmI2MDk1YzAwZjUyZDE1ZjU3OTkyMjdhMjdiMDpzZXNzaW9uX2lkPTJfTVg0ME5UZzVPRFkyTW41LU1UUTVPREUwTXpNeE16TTNOWDVNVEROVlJXTlRTMmxSU3pSNWRHeE5ibEo2VDFOU2QxUi1mZyZjcmVhdGVfdGltZT0xNDk4MTQzMzQ1Jm5vbmNlPTAuODU5ODQyODc0MDY1MjM3MSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDk4NzQ4MTQz";

var SERVER_BASE_URL = 'https://     .herokuapp.com';
    fetch(SERVER_BASE_URL + '/session').then(function(res) {
      return res.json()
    }).then(function(res) {
      apiKey = res.apiKey;
      sessionId = res.sessionId;
      token = res.token;
      initializeSession();
    }).catch(handleError);

function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
