$(function(){

Mirador({
    "mainMenuSettings" : {"show": true, "buttons" : {"bookmark" : true, "layout" : true}},
    "openManifestsPage": true,
    "windowObjects": [{
        "id": "viewer",
        "bottomPanelVisible": true,
        "viewType": "ImageView",
        "sidePanelVisible": true,
        "canvasControls" : {
          "annotations" : {
            "annotationLayer" : true
          }
        }
    }],
    "annotationEndpoint": { "name":"Local Storage", "module": "LocalStorageEndpoint" },
    "showAddFromURLBox": true,
    "buildPath": "/assets/javascript/mirador/",
    "i18nPath": "locales/",
    "imagesPath": "images/",
    "id": "viewer",
    "data": [
        {
            "manifestUri": "https://iiif.lib.harvard.edu/manifests/ids:18782984",
            "location": "Harvard Art Museums"
        },
        {
            "manifestUri": "https://kotenseki.nijl.ac.jp/biblio/200016403/manifest",
            "location": "Database of Pre-Modern Japanese Works"
        },
        {
            "manifestUri": "https://www.dl.ndl.go.jp/api/iiif/2542610/manifest.json",
            "location": "National Diet Library"
        },
        {
            "manifestUri": "https://rmda.kulib.kyoto-u.ac.jp/iiif/metadata_manifest/RB00013599/manifest.json",
            "location": "Kyoto University Rare Materials Digital Archive"
        },
        {
            "manifestUri": "http://dcollections.lib.keio.ac.jp/sites/default/files/iiif/NRE/132X-70-3-2/manifest.json",
            "location": "Digital Collections of Keio University Libraries"
        },
        {
            "manifestUri":"https://iiif.dl.itc.u-tokyo.ac.jp/repo/iiif/8/manifest",
            "location": "University of Tokyo Library Collection"
        }
    ]
});

});
