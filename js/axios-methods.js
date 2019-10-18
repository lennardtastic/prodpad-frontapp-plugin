// Constants
var prodpadPostIdeaUrl = 'https://api.prodpad.com/v1/ideas';

// Axios Settings Variables
var headers;
var token;
var config = {
  headers: {
    Authorization: "Bearer " + token
  }
};

// Placeholder variable for the parameters
var bodyParameters = {
  key: "value"
};

// List of Fields to be submitted
var prodpadTitle; //String
var prodpadDescription; //String
var prodpadProblem; //String
var prodpadValue; //String
var prodpadProducts = [{}]; //Array with objects
var prodpadTags; //Array with objects
var prodpadExternalLinks = [{}];; //Array with objects

// When conversation is selected the input values should be updated
Front.on('conversation', function (data) {
  var conversation = data.conversation;
  // triggered when a conversation is loaded
  console.log(conversation.id);
  console.log(conversation.link);

  document.getElementById("inputLinkName").value = conversation.id;
  document.getElementById("inputLinkUrl").value = conversation.link;
});

// Example of working payload
var prodpadPostIdeaPayload = {
  description: 'Test by Lennard Description',
  title: 'Test By Lennard Title',
  creator: '70432',
  business_case: {
    problem: 'Why this API posting is important',
    value: 'This is valuable'
  },
  products: [{
    id: 7216
  }],
};

/**
 * Function for updating the payload variables
 */
function updatePayloadVariables() {
  prodpadTitle = document.getElementById("inputIdeaTitle").value;
  prodpadDescription = document.getElementById("textAreaDescription").value;
  prodpadProblem = document.getElementById("textAreaProblem").value;
  prodpadValue = document.getElementById("textAreaValue").value;
  prodpadProducts[0].id = document.getElementById("selectProduct").value;
  prodpadExternalLinks[0].external_id = document.getElementById("inputLinkName").value
  prodpadExternalLinks[0].url = document.getElementById("inputLinkUrl").value
  prodpadExternalLinks[0].name = 'prodpad';
}

/**
 * Function for preparing the payload that will be sent to ProdPad
 */
function prepareProdpadPayload() {
  prodpadPostIdeaPayload.description = prodpadDescription;
  prodpadPostIdeaPayload.title = prodpadTitle;
  prodpadPostIdeaPayload.business_case.problem = prodpadProblem;
  prodpadPostIdeaPayload.business_case.value = prodpadValue;
  prodpadPostIdeaPayload.products = prodpadProducts;
  prodpadPostIdeaPayload.external_links = prodpadExternalLinks;
}



// Event Listeners
document.getElementById('buttonSubmit').addEventListener('click', function () {
  token = localStorage.getItem("apikey");
  // Correct config with up-to-date settings
  config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };
  //TODO Reduce to 1 function
  // Run 2 function to prepare the payload
  updatePayloadVariables();
  prepareProdpadPayload();



  // Axios Post Action
  axios.post(prodpadPostIdeaUrl, prodpadPostIdeaPayload, config)
    .then(response => {
      // Console log the response for debugging
      console.log(response);

      // Get ProdPad Idea ID from response
      var prodpadIdeaId = response.data.project_id;
      //Generate new URL to attach to FrontApp conversation
      var prodpadIdeaLink = 'https://app.prodpad.com/ideas/' + prodpadIdeaId + '/canvas';

      // Add ProdPad Idea to FrontApp Link
      Front.addTopic({
        type: 'web',
        name: 'ProdPad Link',
        ext_link: prodpadIdeaLink
      }, function () {
        console.log('done');
      });

    })
    .catch(error => {
      console.log(error);
    });
});