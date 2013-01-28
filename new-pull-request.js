// javascript:(function(a){var b=a.createElement("script");b.src="https://raw.github.com/YoDK/Bookmarklets/master/new-pull-request.js";a.getElementsByTagName("head")[0].appendChild(b)})(document);)
var fieldValueMap = {
  '#pull_request_title' : '#issueId: Brief Description',
  '.js-comment-field.js-size-to-fit': "###### Issue Description - Fix/Feature" +
    "\n\n* " +
    "\n\n###### Notes for Code Reviewer" +
    "\n\n* " +
    "\n\n###### Notes for QA" +
    "\n\n* "
    "\n\n----"+
    "\n\n#### Jenkins Results"+
    "\n\n - [ ] [ ] MASTER"+
    "\n\n - [ ] [ ] INSTANT"+
    "\n\n----"+
    "\n\n#### Issues"+
    "\n\n - [ ] [ ] What is the DIRECT ISSUE?"+
    "\n\n - [ ] [ ] Any other issues related?"+
    "\n\n - [ ] [ ] Any additional repros to check?"+
    "\n\n----"+
    "\n\n#### API"+
    "\n\n - [ ] [ ] Via https://www.gotesters.com/dev/API-Test-Page/ > Successfully start an API session"+
    "\n\n - [ ] [ ] The API session is still logged into gotesters"+
    "\n\n - [ ] [ ] Create and join a GUEST to the API session (has guest privileges)"+
    "\n\n - [ ] [ ] Create and join an OWNER to the API session (has owner privileges)"+
    "\n\n - [ ] [ ] Create and join a GUESTROLE to the API session (has guest privileges)"+
    "\n\n - [ ] [ ] Create and join a OWNERROLE to the API session (has owner privileges)"+
    "\n\n - [ ] [ ] Change the location via GAB to a RESTRICTED DOMAIN in the API session"+
    "\n\n----"+
    "\n\n#### Connection via test.[server]"+
    "\n\n - [ ] [ ] Safari OSX"+
    "\n\n - [ ] [ ] Firefox OSX"+
    "\n\n - [ ] [ ] Chrome OSX"+
    "\n\n - [ ] [ ] IE8 XP"+
    "\n\n - [ ] [ ] IE8 VISTA"+
    "\n\n - [ ] [ ] IE9 W7"+
    "\n\n - [ ] [ ] Firefox W7"+
    "\n\n - [ ] [ ] Chrome W7"+
    "\n\n----"+
    "\n\n#### IDE"+
    "\n\n  - [ ] [ ] __LiveTests-Supported-Part-01 - Tests 11 / Expected 11"+
    "\n\n  - [ ] [ ] __LiveTests-Supported-Part-02 - Tests 11 / Expected 11"+
    "\n\n  - [ ] [ ] __GoTesters-Supported - Tests 40 / Expected 40"+
    "\n\n  - [ ] [ ] __Dashboard - Tests 16 / Expected 16"
};


Object.keys( fieldValueMap ).forEach(function( name ){
  $(name).attr('value',fieldValueMap[name]);
});
