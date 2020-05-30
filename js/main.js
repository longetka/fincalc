$('.credit-container').hide();
$('#main').on('click', function () {
    $('.credit-container').hide();
    $('.container').fadeIn();
    $('.score').html('').hide();
    $('#income, #costs').val('');
});
$('#credit').on('click', function () {
    $('.container').hide();
    $('.credit-container').fadeIn();
    $('.credit-score').html('').hide();
    $('#creditSum, #creditLength, #creditRate').val('');
});


function addIncome() {
    document.getElementsByClassName('score')[0].innerHTML = '';
    var income = document.getElementById('income').value;
    var costs = document.getElementById('costs').value;

    var result = income - costs;
    var house = result * 0.25;
    var food = result * 0.20;
    var auto = result * 0.05;
    var fun = result * 0.10;
    var saving = result * 0.15;
    var balance = result - (house+food+auto+fun+saving);

    var pHouse = document.createElement('p');
    pHouse.textContent = "Расходы на жилье: "+house+" ₽";

    var pFood = document.createElement('p');
    pFood.textContent = "Расходы на питание: "+food+" ₽";

    var pAuto = document.createElement('p');
    pAuto.textContent = "Расходы на транспорт/авто: "+auto+" ₽";

    var pFun = document.createElement('p');
    pFun.textContent = "Расходы на развлечения: "+fun+" ₽";

    var pSaving = document.createElement('p');
    pSaving.textContent = "Вклады/сбережения: "+saving+" ₽";

    var par = document.createElement('p');
    par.textContent = "Ваш остаток составляет: "+balance+" ₽";


    document.getElementsByClassName('score')[0].appendChild(pHouse);
    document.getElementsByClassName('score')[0].appendChild(pFood);
    document.getElementsByClassName('score')[0].appendChild(pAuto);
    document.getElementsByClassName('score')[0].appendChild(pFun);
    document.getElementsByClassName('score')[0].appendChild(pSaving);
    document.getElementsByClassName('score')[0].appendChild(par);
    document.getElementsByClassName('score')[0].style.display = "block";
};