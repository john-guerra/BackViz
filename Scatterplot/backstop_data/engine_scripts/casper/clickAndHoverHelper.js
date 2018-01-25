var WAIT_TIMEOUT = 5000;

module.exports = function(casper, scenario) {
  var waitFor = require('./waitForHelperHelper')(casper, WAIT_TIMEOUT);
  var hoverSelector = scenario.hoverSelector,
      clickSelector = scenario.clickSelector,
      dragSelector = scenario.dragSelector,
      postInteractionWait = scenario.postInteractionWait;

  if (hoverSelector) {
    console.log("-------Executing a hover -------")
    waitFor(hoverSelector);
    casper.then(function () {
      casper.mouse.move(hoverSelector);
    });
  }

  if (clickSelector) {
    console.log("-------Executing a click -------")
    waitFor(clickSelector);
    casper.then(function () {
      casper.click(clickSelector);
      casper.wait(1000);
    });
  }

  if (dragSelector) {
    console.log("-------Executing a drag and drop -------")
    waitFor(dragSelector);
    casper.then(function() {
    this.mouse.down(130, 350);
    this.mouse.move(150, 350);
});

  }

  // TODO: if postInteractionWait === integer then do ==> wait(postInteractionWait) || elsevvv
  waitFor(postInteractionWait);
};
