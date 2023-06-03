$('#pcCpUrl')
  .css({ 'cursor': 'pointer'})
  .click(function(event) {
    event.preventDefault();
    cpUrl();
})

function cpUrl(){
  var dummy = document.createElement('input'),
  text = location.href;
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);

      $('#cpUrlMsg').text(/*[[#{copy.link.succ}]]*/);
  $('#pct-lightbox-toast').show();
  closeCpUrlMsgToast();

  return false;
}

function closeCpUrlMsgToast() {
  setTimeout(() => {
  	$('#pct-lightbox-toast').fadeOut(300);
  }, 1000);
}
