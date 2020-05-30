
 $('#creditLength').val();

function calculateCredit() {
    $('.credit-score').html('');
    var yearRate = ($('#creditSum').val() / 100) * $('#creditRate').val();
    

    if ($('#lengthOption').val() == 'month') {
        var fullSum = +( yearRate * ($('#creditLength').val() / 12) ) + +$('#creditSum').val();
        var payMonth = Math.floor(fullSum / $('#creditLength').val());
        var overpayment = +( yearRate * ($('#creditLength').val() / 12) );
        $('.credit-score').prepend('<p>Указан месяц</p>');
        
    } else {
        fullSum = +(yearRate * $('#creditLength').val()) + +$('#creditSum').val();
        var toMonth = $('#creditLength').val() * 12;
        overpayment = +( yearRate * $('#creditLength').val() )
        payMonth = Math.floor(fullSum / toMonth);
    }

    $('.credit-score').append('<p>Полная сумма задолженности: '+fullSum+' &#8381;</p>');
    $('.credit-score').append('<p>Сумма ежемесячного платежа: '+payMonth+' &#8381;</p>');
    $('.credit-score').append('<p>Переплата по кредиту составляет: '+overpayment+' &#8381;</p>');
    $('.credit-score').append('<p class="credit-note">* Все рассчеты приведены без учёта страховки банка</p>');
    $('.credit-score').css('display', 'block');
}