
function grn()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('patronamicNameOutput').innerText = initPerson.patranomic;
    document.getElementById('workOutput').innerText = initPerson.work;
    document.getElementById('birthYearOutput').innerText = initPerson.date;


};

document.getElementById('btn_clr').addEventListener('click', function () {
    document.getElementById("firstNameOutput").innerText='Иван';  
    document.getElementById("surnameOutput").innerText='Иванов';  
    document.getElementById("genderOutput").innerText='Мужчина';  
    document.getElementById("patronamicNameOutput").innerText='Иванович';  
    document.getElementById("workOutput").innerText='слесарь';  
    document.getElementById("birthYearOutput").innerText='13 Декабря 2005 года';  
});
