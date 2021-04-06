$(document).ready(function () {
  $('.btn-more').on('click', function () {
    if ($(this).parent('.preview').hasClass('active')) return
    $(this).parent('.preview').addClass('active')
  })
  
})
