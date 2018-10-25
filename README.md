# BackViz
## A visual regression testing framework for information visualizations


![BackVizTeaser](https://github.com/nychi713/BackViz/blob/master/docs/Teaser.png "BackVizTeaser")

BackViz is a testing framework for information visualizations. It based on visual regression testing technique and provides a high-level description through Gherkin to write the tests.


### Prerequisites

In order to run your scenarios you need to install BackstopJS and Cucumber.

```bash
# Clone this repository
git clone https://github.com/nychi713/BackViz.git

#Go into the repository
cd BackViz

#Instal Backstop and Cucumber
npm install --save-dev cucumber

#Get reference. From /node_modules/backstopjs/
npm run reference

#Run the features that you define
./node_modules/.bin/cucumber.js features/ -r steps/;


