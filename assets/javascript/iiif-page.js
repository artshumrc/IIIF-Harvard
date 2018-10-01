$(function(){
    function getFrame(){
      console.log("CALLED");
      var region = $('#region').val();
      var rotation = $('#rotation').val();
      var size = $('#size').val();

      var url = 'http://ids.lib.harvard.edu/ids/iiif/5981096/' + region + '/' + size + '/' + rotation + '/' + 'native.jpg';
      $('#iiif-image-api-img').attr("src", url);
      $('#image-url').attr("href", url);
      $('#image-url').text(url);
  }
  $(".changeIIIF").click(getFrame);
});
