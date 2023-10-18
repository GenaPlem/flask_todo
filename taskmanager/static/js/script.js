document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    let modal = document.querySelectorAll('.modal');
    let modal_close = document.querySelectorAll('.modal-close');
    let datepicker = document.querySelectorAll('.datepicker');
    let selects = document.querySelectorAll('select');

    M.Sidenav.init(sidenav);
    M.Modal.init(modal);
    M.Modal.init(modal_close);
    M.Datepicker.init(datepicker, {
        format: 'dd mmmm, yyyy',
        i18n: {done: "Select"}
    });
    M.FormSelect.init(selects);
});