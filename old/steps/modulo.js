const backstop = require('backstopjs');

let hoverSelector,clickSelector,dragSelector="";

module.exports = function (){
this.backCall= function(application,tag,devices, interaction){
var interactions= checkInteraction(interaction,tag);

  return backstop('test', {config:{"id": "backstop_default",
  "viewports": devices,
  "onBeforeScript": "chromy/onBefore.js",
  "onReadyScript": "chromy/onReady.js",
  "scenarios": [
    {
      "label": "BackstopJS Homepage",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": application,
      "referenceUrl": "",
      "readyEvent": "",
      "readySelector": "",
      "delay": 0,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "dragSelector": "",
      "postInteractionWait": "",
      "selectors": [],
      "selectorExpansion": true,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions": true
    }
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "ci": {
  "format" :  "junit" ,
  "testReportFileName": "myproject-xunit", // in case if you want to override the default filename (xunit.xml)
  "testSuiteName" :  "backstopJS"
},
  "report": ["browser","CI"],
  "engine": "chrome",
  "engineFlags": [],
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false}});
  }}



function checkInteraction(interaction,tag){

 
  if(interaction== "click"){
    clickSelector=tag;
  }else if(interaction== "hover"){
    hoverSelector=tag;
  }if(interaction== "drag"){
    dragSelector=tag;
  }

  return [hoverSelector, clickSelector, dragSelector];

}
