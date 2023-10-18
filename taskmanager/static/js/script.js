document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    let modal = document.querySelectorAll('.modal');
    let modal_close = document.querySelectorAll('.modal-close')
    M.Sidenav.init(sidenav);
    M.Modal.init(modal);
    M.Modal.init(modal_close);
});