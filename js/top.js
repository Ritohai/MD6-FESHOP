$(function(){
    $('.drop-down').slideUp(0);
    $('.tran .drop-down').slideDown(0);
    $('.nav-item a').click(function(e){
        $(this).next().slideToggle(200);
        $(this).parent().toggleClass('tran')
    })
    $(document).ready(function() {
        $('#dataTable').DataTable();
      });
    $('').click(function(){
        $('main').addClass('active');
    })
});
$(function () {
    $open = false;
    function menuMb() {
        if ($open == false) {
            $open = true;
            $(".navbar").fadeIn();
            $('.btn-bar').addClass('isActive');

        } else {
            $open = false;
            $(".navbar").fadeOut();
            $('.btn-bar').removeClass('isActive');
        }
    }

    $('.menu-btn .btn-bar').on('click', function () {
        menuMb();
    });
});