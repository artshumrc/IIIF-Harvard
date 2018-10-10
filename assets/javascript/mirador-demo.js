$(function(){

Mirador({
    "mainMenuSettings" : {"show": true, "buttons" : {"bookmark" : true, "layout" : true}},
    "openManifestsPage": true,
    "windowObjects": [{
        "id": "viewer",
        "bottomPanelVisible": true,
        "viewType": "ImageView",
        "canvasID": "https://iiif.lib.harvard.edu/manifests/drs:51287251/canvas/canvas-51287274.json",
        "loadedManifest": "https://iiif.lib.harvard.edu/manifests/drs:51287251",
        "sidePanelVisible": true,
        "canvasControls" : {
          "annotations" : {
            "annotationLayer" : true
          }
        }
    }],
    "showAddFromURLBox": true,
    "buildPath": "/assets/javascript/mirador/",
    "i18nPath": "locales/",
    "imagesPath": "images/",
    "id": "viewer",
    "data": [
        {
            "manifestUri": "https://iiif.lib.harvard.edu/manifests/drs:51287251",
            "location": "Harvard University"
        }
    ]
});

});
