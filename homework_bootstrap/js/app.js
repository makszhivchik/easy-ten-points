'use strict';

const loremIpsumAlert = $('#loremIpsumAlert');
const triggerAlertBtn = $('#triggerAlert');

$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    triggerAlertBtn.click(function() {
        loremIpsumAlert.toggleClass('invisibleAlert');
    });

});