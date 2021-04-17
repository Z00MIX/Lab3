function Max()
{
    d=document
    var a = Number(d.form1.A.value);
    var b = Number(d.form1.B.value);
    var x1 = Math.max (a,b)
    d.form1.x1.value=x1
}

function Show()
{
    d=document
    var admin, name;
    name = "Denchik";
    admin = name;
    alert(admin);
}

function Age()
{
    d=document
    age = +prompt('Укажите ваш возраст?');
    let message = (age < 18) ? 'Вам еще нет 18 лет, закройте сайт для взрослых' : 'Вам уже есть 18, добро пожаловать на сайт для взрослых';
    alert(message);
}