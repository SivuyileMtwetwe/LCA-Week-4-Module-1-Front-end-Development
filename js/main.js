let dismissButton = document.querySelector('.modal .btn');
let modal = document.querySelector('.modal');

function validateLogin(event) {
    let username = document.getElementById('uname').value.trim();
    let password = document.getElementById('pwd').value.trim();
    event.preventDefault();


    if (username === 'admin' && password === 'password123') {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        Toast.fire({
            icon: "success",
            title: "Signed in successfully"
        }).then(() => {
            window.location.href = 'index.html';
        });

    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Check your username or password",
          });
    }

}


function dismissModal() {
    
    if(modal.style.display ==='block'){
        modal.style.display = 'none';

    }else{
    modal.style.display = 'block';

    }
}

document.addEventListener('DOMContentLoaded', function() {
    let loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', validateLogin);
    }

    if (dismissButton) {
        dismissButton.addEventListener('click', dismissModal);
    }
});

function toggleNav() {
    const navSidebar = document.querySelector('.nav-sidebar');
    // const btnToggle = document.querySelector('.btn-toggle-nav');

    if (navSidebar.style.width === '250px' || navSidebar.style.width === '') {
        navSidebar.style.width = '50px';
        
        const sidebarUl = navSidebar.querySelector('ul');
        sidebarUl.style.visibility = 'hidden';
        sidebarUl.style.overflow = 'hidden';
    } else {
        navSidebar.style.width = '250px';
        
        const sidebarUl = navSidebar.querySelector('ul');
        sidebarUl.style.visibility = 'visible';
        sidebarUl.style.overflow = 'visible';
    }
}