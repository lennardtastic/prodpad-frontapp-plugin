/* eslint-disable indent */
var prodpadPostIdeaUrl = 'https://api.prodpad.com/v1/ideas';

/* List of Fields to be submitted */
var prodpadTitle; //String
var prodpadDescription; //String
var prodpadProblem; //String
var prodpadValue; //String
var prodpadProducts; //Array with objects
var prodpadTags; //Array with objects
var prodpadExternalLinks; //Array with objects

/*
Working Example Payload
*/
var prodpadPostIdeaPayload = {
    description: 'Test by Lennard Description',
    title: 'Test By Lennard Title',
    creator: '70432',
    business_case: {
        problem: 'Why this API posting is important',
        value: 'This is valuable'
    }
};

/**
 * Function for preparing the payload that will be sent to ProdPad
 *
 */
function prepareProdpadPayload() {
    prodpadPostIdeaPayload.description = prodpadDescription;
    prodpadPostIdeaPayload.title = prodpadTitle;
    prodpadPostIdeaPayload.business_case.problem = prodpadProblem;
    prodpadPostIdeaPayload.business_case.value = prodpadValue;
}

/**
{
    "description" : "this is a new idea by API posting for Simon Cast Lion using email and setting public using active_public",
    "title" : "A title",
    "state": "active_public",
    "business_case" : 
    {
   "problem" : "Why this API posting is important",
   "value" : "This is valuable"
    
    },
    "functional" : "This is the functional spec",
    "notes" : "Have a look at the documentation",
    "user_stories" : [
   {
    "story" : "here is a user story",
    "acceptance_criteria" : "here is acceptance criteria"
   },
   {
    "story" : "here is another user story",
    "acceptance_criteria" : "here is the second acceptance criteria"
   }
    ],
    "comments" : [
   {
    "comment" : "Will this comment be assigned to user?",
    "user_id" : 11553
   }
    ],
    "products" : [
    {
    "id" : 7216
    },
    {
    "id" : 7042
    }
    ],
    "personas" : [
    {
    "id" : 2710
   }
    ],
    "tags" : [
    {
    "id" : 20448
    },
    {
    "name": "something else"
    }
    ],
    "status" : {
    "id" : 25402
    },
    "external_links" : [
    {
    "external_id" : "3434252532",
    "url" : "http://www.example.com/some_link",
    "title" : "External Url" 
    }
    ]
   }**/
