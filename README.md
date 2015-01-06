# Avenue Code UI Challenge - Part I #

### Story Phrase ###
* As a curious web surfer, I want to be able to locate both me and any website on a map.
* I sometimes use a desktop, sometimes a tablet and sometimes a cell phone, so I need a responsive web page.

### Business Narrative / Scenario ###
* GeoLocation is a working web application which aims to retrieve details about the user's location. 
* You need to augment GeoLocation with a new form that will allow the user to find out the physical location of websites, by displaying its hosting position on a map. 
* This new form will consist in a text field for the user to input the website domain, and also a "Locate" button.
* You have to keep the current features working.

### Functional / Acceptance Criteria ###
* The new form input field should only accept website domains, as "www.nytimes.com",  "nytimes.com" or "g1.com.br" or "www.g1.com.br".
* When the user hits the **Locate** button, an asynchronous call should be made to http://freegeoip.net/json/:host, where *:host* corresponds to the user input.
* If this async call is successful, a second panel must be rendered, below the form, displaying a map showing the website's physical location from the latitude and longitude coordinates of the JSON response.
* When the user hits the existing **My location** button, his position must also be displayed on the map (besides the website's location).
* When the user hits the **Reset location** button, the user location must be cleared off from the map (but the website's location should still be displayed if any).
* You need to add consistent user input and output validations for every possible scenario.

### Non-Functional / Acceptance Criteria ###
* We urge that you employ a web app framework such as Backbone.js, AngularJS, Ember.js, Knockout.js, React, Meteor.
* You must leverage reusability with the existing code. You might have to refactor some of it, specially when you are adopting a web framework. Make sure to keep the existing functionality up and also to fix any bugs you might run into.
* You have to cover all you code with JS testing. You can pick a framework of your preference like Jasmine, Chai, Mocha, QUnit.
* We also recommend that you use a presentation framework such as Twitter Bootstrap or Zurb Foundation.

### Technical Details ###
You should receive a JSON response from http://freegeoip.net/json/:host similar to:

```
{  
   "ip":"170.149.172.130",
   "country_code":"US",
   "country_name":"United States",
   "region_code":"WA",
   "region_name":"Washington",
   "city":"Seattle",
   "zipcode":"",
   "latitude":47.6062,
   "longitude":-122.3321,
   "metro_code":"819",
   "area_code":"206"
}
```

Here are a few suggestions of tools to develop your responsive app:

* Backbone.js - http://backbonejs.org/
* AngularJS - http://angularjs.org/
* KnockoutJS - http://knockoutjs.com/
* Ember.js - http://emberjs.com/
* React - http://facebook.github.io/react/
* Meteor - https://www.meteor.com/
* JQuery - http://jquery.com/
* Twitter Bootstrap - https://twitter.github.com/bootstrap/
* Zurb Foundation - http://foundation.zurb.com/
* RequireJS - http://requirejs.org/
* Underscore - http://underscorejs.org/
* Handlebars - http://handlebarsjs.com/
* Jasmine - http://jasmine.github.io/
* Chai - http://chaijs.com/
* Mocha - http://visionmedia.github.io/mocha/
* QUnit - http://qunitjs.com/
* SASS - http://sass-lang.com/
* LESS - http://lesscss.org/

### Delivery Instructions ###

1. You must provide his BitBucket username. A free BitBucket account can be created at http://bitbucket.org
1. The recruiter will give you read permission to a repository named **ui-challenge**, at https://bitbucket.org/ac-recruitment/ui-challenge
1. You must fork this repository into a private repository on your own account and push your code in there.
1. Once finished, you must give the user **ac-recruitment** read permission on your repository so that you can be evaluated. Then, please contact back your recruiter and he will get an engineer to evaluate your test.
1. After you are evaluated, the recruiter will remove your read permission from the original repository.

### Format ###

* This assessment must be delivered within 2 days.
* You must provide a README.txt (plain text) or a README.md (Markdown) file at the root of your repository, explaining:
    * How to compile and run the application.
    * How to run the suite of automated tests (unit tests, BDD tests, etc...).
    * Which JS libraries you've decided to use for this challenge.
    * Mention anything that was asked but not delivered and why, and any additional comments.
* Any questions, please send an email to **recruitment.engineering@avenuecode.com**

### Evaluation Criteria ###

1. Functional and non-functional acceptance criteria delivery
1. Code quality: structure, modularization, reuse
1. Code legibility and elegancy
1. Frameworks usage
1. Test coverage
1. Number of bugs