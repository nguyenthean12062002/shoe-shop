const show = document.getElementById("import-search").value;
function hisSearch() {
  document.getElementById("show-history_text").innerHTML = show;
}
$('#input').keypress(function (event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == 13) {
    alert('anh yêu em');
  }
});
// show cart
function showmodalCart() {
  window.location = "http://127.0.0.1:5500/html/cart.html"
}