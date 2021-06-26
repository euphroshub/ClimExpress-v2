/*!
* Start Bootstrap - Climatisation Express v7.0.1 (undefined)
* Copyright 2013-2021 undefined
* Licensed under MIT (https://github.com/StartBootstrap/climatisation-express/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})
