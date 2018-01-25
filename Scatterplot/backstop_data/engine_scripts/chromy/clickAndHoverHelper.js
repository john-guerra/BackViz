module.exports = function (chromy, scenario) {
  var hoverSelector = scenario.hoverSelector;
  var clickSelector = scenario.clickSelector;
  var postInteractionWait = scenario.postInteractionWait; // selector [str] | ms [int]

  if (hoverSelector) {
    chromy
      .wait(hoverSelector)
      .rect(hoverSelector)
      .result(function (rect) {
        chromy.mouseMoved(rect.left, rect.top);
        chromy.wait(100);
      });

  }

  if (clickSelector) {
    chromy
      .wait(clickSelector)
      .click(clickSelector);
    chromy.wait(1000);

  }

  if (postInteractionWait) {
    chromy.wait(postInteractionWait);
  }
};
