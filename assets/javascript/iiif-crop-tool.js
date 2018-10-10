$(function(){
  //From Jack Reed's bl.ock: https://bl.ocks.org/mejackreed/6936585f435b60aa9451ae2bc1c199f2
  
  $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

  //Default baseUrl
  var baseUrl = 'https://iiif.dl.itc.u-tokyo.ac.jp/iiif/hyakki/images/hyakki.tif';
  //Use URL param
  console.log($.urlParam('image'));
  if($.urlParam('image') !== null){
    baseUrl = $.urlParam('image');
  }

  var map = L.map('map', {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0,
  });

  var iiifLayer = L.tileLayer.iiif(baseUrl + '/info.json', {
    tileSize: 512
  }).addTo(map);

  var areaSelect = L.areaSelect({
    width:100, height:100
  });

  areaSelect.addTo(map);

  $('#urlArea').html(baseUrl)

  areaSelect.on('change', function() {
    var bounds = this.getBounds();
    var zoom = map.getZoom();
    var min = map.project(bounds.getSouthWest(), zoom);
    var max = map.project(bounds.getNorthEast(), zoom);
    var imageSize = iiifLayer._imageSizes[zoom];
    var xRatio = iiifLayer.x / imageSize.x;
    var yRatio = iiifLayer.y / imageSize.y;
    var region = [
      Math.floor(min.x * xRatio),
      Math.floor(max.y * yRatio),
      Math.floor((max.x - min.x) * xRatio),
      Math.floor((min.y - max.y) * yRatio)
    ];
    var url = baseUrl + '/' + region.join(',') + '/full/0/default.jpg';
    $('#urlArea').html(
      '<a href="' + url + '" target=_blank>' + url + '</a>'
    )
  });
});
