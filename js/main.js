function toggleContent(e) {
    e--;
    $('article').eq(e).css('pointer-events','none');
    setTimeout(() => {
        $('article').eq(e).css('pointer-events','auto');
    }, 700);
    for (i = 0; i < $('article').length; i++) {
        if (i !== e) {
            $('article').eq(i).removeClass('show');
        } else {
            $('article').eq(i).toggleClass('show');
        }
        if (i === e &&  $('.accordion-content').eq(i).css('display') === 'none') {
            $('.accordion-content').eq(i).slideDown(700);
        } else {
            $('.accordion-content').eq(i).slideUp(700);
        }
    }
}