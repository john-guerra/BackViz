module.exports = function (chromy, scenario) {
  var hoverSelector = scenario.hoverSelector;
  var clickSelector = scenario.clickSelector;
  var dragSelector = scenario.dragSelector;
  var postInteractionWait = scenario.postInteractionWait; // selector [str] | ms [int]

  if(dragSelector){
    console.log('Doing drag event')
    chromy
    .wait(dragSelector)
    .click(dragSelector,true)
    .mouseMoved(130, 350);
      }
  


  if (hoverSelector) {
    chromy
      .wait(hoverSelector)
      .rect(hoverSelector)
      .result(function (rect) {
        chromy.mouseMoved(rect.left, rect.top);
      });
  }

  if (clickSelector) {
    console.log('Ingresando al click'+clickSelector)
    chromy
      .wait(clickSelector)
      .click(clickSelector,false);
  }

  if (postInteractionWait) {
    chromy.wait(postInteractionWait);
  }
};
