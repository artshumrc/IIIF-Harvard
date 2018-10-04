$(function(){
    var anno_token;
    jQuery.ajax({
      url: "http://oculus-dev.harvardx.harvard.edu/cgi-bin/catch_token.py",
      success: function(data) {
        anno_token = data.replace(/[\n\r]/g, '');
      },
      async:false
    });

    var m = Mirador({
      "id": "viewer",
      // a variety of collections of settings.
      "layout": "1x1",
      "openManifestsPage" : true,
      "mainMenuSettings" : {"show": false, "buttons" : {"bookmark" : true, "layout" : true}},
      "saveSession":false,
      "data": [
        { "manifestUri": "https://iiif.lib.harvard.edu/manifests/drs:4082550", "location": "Harvard University"},
      ],
      "windowObjects": [
         {
         "loadedManifest": "https://iiif.lib.harvard.edu/manifests/drs:4082550",
         "viewType" : "ImageView",
         "annotationState" : "annoOnCreateOff",
         "annotationCreation" : false,
         "sidePanel" : false,
         "displayLayout" : false
      }
      ],
      "annotationEndpoint":
        {
        "name":"Harvard CATCH Dev",
        "module": "CatchEndpoint",
        "options": {
          token: anno_token,
          // The endpoint of the store on your server.
          prefix: "http://catch-dev.harvardx.harvard.edu:8080/catch/annotator",
          userid: "noedit"
        }
      }
    });
  });
