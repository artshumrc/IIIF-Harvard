$(function(){

var m = Mirador({
    "mainMenuSettings" : {"show": false, "buttons" : {"bookmark" : true, "layout" : true}},
    "openManifestsPage": true,
    "windowObjects": [{
        "id": "viewer",
        "bottomPanelVisible": false,
        "viewType": "ImageView",
        "canvasID": "https://iiif.lib.harvard.edu/manifests/drs:51287251/canvas/canvas-51287274.json",
        "loadedManifest": "https://iiif.lib.harvard.edu/manifests/drs:51287251",
        "sidePanelVisible": false,
        "canvasControls" : {
          "annotations" : {
            "annotationLayer" : false
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

    $('.pageview').click(function(){
        $('#viewer').html('');
        var windowOptions = {};
        manifestLoc = 'https://iiif.lib.harvard.edu/manifests/drs:51287251';
        drawCanvas("ImageView", 'https://iiif.lib.harvard.edu/manifests/drs:51287251', 'https://iiif.lib.harvard.edu/manifests/drs:51287251/canvas/canvas-51287274.json', windowOptions);
    });

    $('.bookview').click(function(){
        $('#viewer').html('');
        var windowOptions = {};
        drawCanvas('BookView', 'https://iiif.lib.harvard.edu/manifests/drs:51287251', 'https://iiif.lib.harvard.edu/manifests/drs:51287251/canvas/canvas-51287274.json', windowOptions);
    });

    $('.imageview').click(function(){
        $('#viewer').html('');
        var windowOptions = {};
        drawCanvas('ImageView', 'http://iiif.harvardartmuseums.org/manifests/object/198021', 'https://ids.lib.harvard.edu/ids/iiif/48466698', windowOptions);
    });

    $('.scrollview').click(function(){
        $('#viewer').html('');
        var windowOptions = {};
        drawCanvas('ScrollView', 'http://iiif.harvardartmuseums.org/manifests/object/198021', 'http://iiif.harvardartmuseums.org/manifests/object/198021', windowOptions);
    });

    $('.scrollfullview').click(function(){
        $('#viewer').html('');
        var windowOptions = {};
        drawCanvas('ImageView', 'https://iiif.lib.harvard.edu/manifests/drs:48309543', 'https://iiif.lib.harvard.edu/manifests/drs:48309543/canvas/canvas-48530377.json', windowOptions);
    });

    $('.scrollzoomview').click(function(){
        $('#viewer').html('');
        var windowOptions = {};
        var osdBounds = {x: -0.02944738670033964, y: 0.3339634347789723, width: 1.0591676025696108, height: 0.3976523981577135, degrees: 0};
        windowOptions["osdBounds"] = osdBounds ;
        drawCanvas('ImageView', 'https://iiif.lib.harvard.edu/manifests/drs:48309543', 'https://iiif.lib.harvard.edu/manifests/drs:48309543/canvas/canvas-48530377.json', windowOptions);
    });

    $('.gridview').click(function(){
        $('#viewer').html('');
        drawGrid();
    });


    function drawCanvas(view, manifest, canvas, windowOptions){

	    var m = Mirador({
	        "mainMenuSettings" : {"show": false, "buttons" : {"bookmark" : false, "layout" : true}},
	        "openManifestsPage": true,
	        "windowObjects": [{
	            "windowOptions": windowOptions,
	            "id": "viewer",
	            "bottomPanelVisible": false,
	            "viewType": view,
	            "canvasID": canvas,
	            "loadedManifest": manifest,
	            "sidePanelVisible": false,
	            "canvasControls" : {
	              "annotations" : {
	                "annotationLayer" : false
	              }
	            }
	        }],
	        "showAddFromURLBox": false,
	        "buildPath": "../mirador/mirador/build/mirador/",
	        "i18nPath": "locales/",
	        "imagesPath": "images/",
	        "id": "viewer",
	        "data": [
	            {
	                "manifestUri": manifest,
	                "location": "Harvard University"
	            }
	        ]

	    });

    }


    function drawGrid(){

    	var m = Mirador({
    		"id": "viewer",
	        "mainMenuSettings" : {"show": false, "buttons" : {"bookmark" : false, "layout" : true}},
	        "openManifestsPage": true,
    		"layout": {
    			"type":"row",
    			"children":[
    				{"type":"column"},
    				{"type":"column",
      				"children":[
        				{"type":"row"},
        				{"type":"row"}
      				]
      			}
    		]},
	        "buildPath": "../mirador/mirador/build/mirador/",
	        "i18nPath": "locales/",
	        "imagesPath": "images/",
    		"data": [{"manifestUri": "https://iiif.lib.harvard.edu/manifests/drs:48309543"}],
    		"windowObjects": [
    		{
	            "bottomPanelVisible": false,
	            "viewType": "ImageView",
	            "canvasID": 'https://iiif.lib.harvard.edu/manifests/drs:48309543/canvas/canvas-48530377.json',
	            "loadedManifest": 'https://iiif.lib.harvard.edu/manifests/drs:48309543',
	            "sidePanelVisible": false,
	            "canvasControls" : {
	              "annotations" : {
	                "annotationLayer" : false
	              }
	            },
	            "slotAddress": "row1.column1"
	        },
			{
	            "bottomPanelVisible": false,
	            "viewType": "ImageView",
	            "canvasID": 'https://iiif.lib.harvard.edu/manifests/drs:48309543/canvas/canvas-48530377.json',
	            "loadedManifest": 'https://iiif.lib.harvard.edu/manifests/drs:48309543',
	            "sidePanelVisible": false,
	            "canvasControls" : {
	              "annotations" : {
	                "annotationLayer" : false
	              }
	            },
	            "slotAddress": "row1.column2.row1"
	        },
			{
	            "bottomPanelVisible": false,
	            "viewType": "ImageView",
	            "canvasID": 'https://iiif.lib.harvard.edu/manifests/drs:48309543/canvas/canvas-48530377.json',
	            "loadedManifest": 'https://iiif.lib.harvard.edu/manifests/drs:48309543',
	            "sidePanelVisible": false,
	            "canvasControls" : {
	              "annotations" : {
	                "annotationLayer" : false
	              }
	            },
	            "slotAddress": "row1.column2.row2"
	        }],
    	});
    }
});
