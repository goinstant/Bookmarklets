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
    "\n\n - [ ] MASTER SUITE"+
    "\n\n - [ ] PUSH SUITE"+
    "\n\n----"+
    "\n\n#### Direct Issue"+
    "\n\n - [ ] Developer checked"+
    "\n\n - [ ] QA tested"+
    "\n\n----"+
    "\n\n#### API"+
    "\n\n##### Via https://www.gotesters.com/dev/API-Test-Page"+
    "\n\n - [ ] QA"+
    "\n\n##### Via http://demo1.nevo.com/jhltc/GoInstantRevisedPOC1892603/"+
    "\n\n - [ ] QA"+
    "\n\n----"+
    "\n\n#### Window.open"+
    "\n\n - [ ] QA"+
    "\n\n----"+
    "\n\n#### PDFs"+
    "\n\n##### IE8"+
    "\n\n - [ ] QA"+
    "\n\n##### Dynamic"+
    "\n\n - [ ] QA"+
    "\n\n----"+
    "\n\n#### Field Masking"+
    "\n\n - [ ] QA"+
    "\n\n#### Field Locking"+
    "\n\n - [ ] QA"+
    "\n\n----"+
    "\n\n#### Connection tests via test.server"+
    "\n\n - [ ] Safari"+
    "\n\n - [ ] Firefox"+
    "\n\n - [ ] Chrome"+
    "\n\n - [ ] IE8"+
    "\n\n - [ ] IE9"+
    "\n\n - [ ] Firefox Windows"+
    "\n\n - [ ] Chrome Windows"+
    "\n\n----"+
    "\n\n#### IDE"+
    "\n\n##### Live Tests"+
    "\n\n - [ ] QA"+
    "\n\n##### Control Tests"+
    "\n\n - [ ] QA"+
    "\n\n##### Dashboard Tests"+
    "\n\n - [ ] QA"
    
};


Object.keys( fieldValueMap ).forEach(function( name ){
  $(name).attr('value',fieldValueMap[name]);
});
