$(function(){
    function getFrame(){
      var region = $('#region').val();
      var rotation = $('#rotation').val();
      var size = $('#size').val();
      var quality = $('#quality').val();
      var format = $('#format').val();

      var url = 'http://ids.lib.harvard.edu/ids/iiif/5981096/' + region + '/' + size + '/' + rotation + '/' + quality + format;
      $('#iiif-image-api-img').attr("src", url);
      $('#image-url').attr("href", url);
      $('#image-url').text(url);
      $('#dl-iiif-image').attr("href", url);
  }
  $(".changeIIIF").change(getFrame);
});
