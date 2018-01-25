report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Tree_0_document_0_phone.png",
        "test": "../bitmaps_test/20180114-171328/backstop_default_Tree_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Tree_0_document_0_phone.png",
        "label": "Tree",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.23",
          "analysisTime": 24
        },
        "diffImage": "../bitmaps_test/20180114-171328/failed_diff_backstop_default_Tree_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Tree_0_document_1_tablet.png",
        "test": "../bitmaps_test/20180114-171328/backstop_default_Tree_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Tree_0_document_1_tablet.png",
        "label": "Tree",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.56",
          "analysisTime": 55
        },
        "diffImage": "../bitmaps_test/20180114-171328/failed_diff_backstop_default_Tree_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ]
});