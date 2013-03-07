// javascript:(function(a,b){b=a.createElement("script");b.src="https://raw.github.com/goinstant/Bookmarklets/master/githubNewIssueTemplate.js";a.getElementsByTagName("head")[0].appendChild(b)})(document);)
var fieldValueMap = {
  '#issue_title' : 'CATEGORY - Brief Description',
  '#issue_body': 
    "###### Description" +
    "\n\n* " +
    "\n\n###### Reproduction Steps" +
    "\n\n* " +
    "\n\n###### Potential Causes" +
    "\n\n* " +
    "\n\n###### Console Output" +
    "\n\n* " +
    "\n\n###### Error Reports"+
    "\n\n* " +
    "\n\n----"+
    "\n\n#### Discover"+
    "\n\n - [ ] Reproduce the bug. Document the reproduction steps in the issue (if they aren't there already)."+
    "\n\n#### Categorize"+
    "\n\n - [ ] Determine the underlying technology that we're not compatible with. Add an issue to support the underlying technology (if it isn't there already) and then link this issue to it."+
    "\n\n##### GoTesters"+
    "\n\n - [ ] Recreate bug on GoTesters: Document the addition by adding a description of how it should behave and a link to the issue."+
    "\n\n##### GoScanner"+
    "\n\n - [ ] Add a test to the compatibility scanner tool."+
    "\n\n##### Fix"+
    "\n\n - [ ] Fix the problem. Ideally, you can add compatibility for the underlying technology :), but you may have to write an exception :(. This is a time-benefit analysis. How long will it take you to fix the underlying technology? vs. how long will an exception take?"+
    "\n\n##### Unit Test"+
    "\n\n - [ ] Write unit tests and integration tests, if necessary"+
    "\n\n##### Use Pull Request Bookmarklet to auto populate QA checklist"+
    "\n\n - [ ] Basic preliminary testing"

};


Object.keys( fieldValueMap ).forEach(function( name ){
  $(name).attr('value',fieldValueMap[name]);
});

