'use strict';

function myBirthDateFormat(myBirthDate) {
    myBirthDate = myBirthDate.locale('uk');
    return myBirthDate.format('LL');
}

let birthDateBlock = document.getElementById('birthDate');
let myBirthDate = moment('1997-01-27');

birthDateBlock.innerHTML = myBirthDateFormat(myBirthDate);

let dateForm = document.forms[0];

let dateFormatBtn = dateForm.dateFormatBtn;

function formatUsersDate(usersDate) {
    usersDate = usersDate.locale('ru');
    return usersDate.format('LL');
}

let usersFormatedDateBlock = document.getElementById('formatedDate');

dateFormatBtn.addEventListener('click', function() {
    let dateValue = dateForm.date.value;

    usersFormatedDateBlock.innerHTML = formatUsersDate(moment(dateValue));
});
