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
    "\n\n#### Jenkins"+
    "\n\n - [ ] PUSH"+
    "\n\n - [ ] DOM Event Integration"+
    "\n\n - [ ] Transports"+
    "\n\n - [ ] MUST"
    
};


Object.keys( fieldValueMap ).forEach(function( name ){
  $(name).attr('value',fieldValueMap[name]);
});
