# Avenue Code UI Challenge - Part I #

### Story Phrase ###
* As a curious web surfer, I want to be able to locate both me and any website on a map.
* I sometimes use a desktop, sometimes a tablet and sometimes a cell phone, so I need a responsive web page.

### Business Narrative / Scenario ###
* GeoLocation is a working web application which aims to retrieve details about the user's location. 
* You need to augment GeoLocation with a new form that will allow the user to find out the physical location of websites, by displaying its hosting position on a map. 
* This new form will consist of a text field for the user to input the website domain.  It will also need a "Locate" button.
* You have to keep the current features working.

### Functional / Acceptance Criteria ###
* The new form input field should only accept website domains starting with "www."  or with the host name, e.g., "www.nytimes.com", "nytimes.com" or "g1.com.br" or "www.g1.com.br".
* When the user hits the Locate button, an asynchronous call should be made to http://ip-api.com/json/:host, where :host corresponds to the user input.
* If this async call is successful, a second panel must be rendered, below the form, displaying a map showing the website's physical location from the latitude and longitude coordinates of the JSON response.
* When the user hits the existing My location button, his position must also be displayed on the map, **alone or besides a website location** if the user used that feature before.
* When the user hits the Reset location button, the user location must be cleared off from the map (but the website's location should still be displayed, if any).
* You should handle user input and server response validations for all scenarios.


### Non-Functional / Acceptance Criteria ###
* It is advisable that you employ a web app framework such as Backbone.js, AngularJS, Ember.js, Knockout.js, React, Meteor.
* You must leverage reusability with the existing code. You might have to refactor some of it, especially when adopting a web framework. Make sure to keep the existing functionality up and running and also to fix any bugs you might run into.
* It is expected that you cover at least 80%+ of your code with JS testing. You can pick a framework of your preference like Jasmine, Chai, Mocha, QUnit.
* Also, it is recommended that you use a presentation framework such as Twitter Bootstrap, Zurb Foundation or any other.
* Your coding skills will be evaluated, so apply everything you see fit, even with this being a simple app. Bonus points for: organized code, configuration files/objects, design patterns.
* Task automation (grunt, gulp, and so on) is a nice addition to your challenge.
* It is expected that you know how to properly commit changes in Git, which means you should present meaningful commits with descriptive commit messages.
* Well organized projects have descriptive Readme files. Therefore you should provide as much as you can every useful information such as fundamental decisions taken, the project setup steps, how to execute the unit tests, and any further call outs of any kind.

### Technical Details ###
You should receive a JSON response from http://ip-api.com/json/:host similar to:

```
{  
   "as":"AS20044 S/A ESTADO DE MINAS",
   "city":"Belo Horizonte",
   "country":"Brazil",
   "countryCode":"BR",
   "isp":"S/a Estado De Minas",
   "lat":-19.9191,
   "lon":-43.9386,
   "org":"S/a Estado De Minas",
   "query":"200.188.178.56",
   "region":"MG",
   "regionName":"Minas Gerais",
   "status":"success",
   "timezone":"America/Sao_Paulo",
   "zip":""
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

1. You must provide your BitBucket username. A free BitBucket account can be created at http://bitbucket.org
1. The recruiter will give you read permission to a repository named **ui-challenge**, at https://bitbucket.org/ac-recruitment/ui-challenge
1. You must fork this repository into a private repository on your own account and push your code in there.
1. Once finished, you must give the user **ac-recruitment** read permission on your repository so that you can be evaluated. Then, please contact back your recruiter and he will get an engineer to evaluate your test.
1. After you are evaluated, the recruiter will remove your read permission from the original repository.
1. Its very important that these steps are followed accordingly, as your git and overall version control skill will also be evaluated.

### Format ###

* This assessment must be delivered within 2 days.
* You must provide a README.txt (plain text) or a README.md (Markdown) file at the root of your repository, explaining:
    * How to compile and run the application.
    * How to run the suite of automated tests (unit tests, BDD tests, etc...).
    * Which JS libraries you've decided to use for this challenge.
    * Mention anything that was asked but not delivered and why, and any additional comments.
* Unclear or incomplete README instructions may subtract from your overall evaluation.
* Any questions, please send an email to **recruitment.engineering@avenuecode.com**


### Evaluation Criteria ###

* HTML, CSS, Site Responsiveness
* Functional and Non Function Criteria
* Unit Tests
* Project folder structure
* JS & Code Logic & configuration
* Framework & Design Patterns
* Git/versioning control
* Documentation
* Task Automation

We have both functional and non-functional acceptance criteria, so it is suggested that you pay attention to both. Furthermore, the quality of the application (number of bugs found) will factor into the evaluation.

### Considerations ###
As the project is relatively small, we expect you to achieve the requirements without using any code/file/folder structure auto generator tools.