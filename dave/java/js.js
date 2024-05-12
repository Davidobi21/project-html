function toggleNav() {
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}



document.addEventListener('DOMContentLoaded', function() {
    
    var modal = document.getElementById('enrollFormPopup');
    var btn = document.getElementsByClassName('enroll-btn')[0];
    var span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    };

    span.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    
    var form = document.getElementById('enrollForm');

  
    form.addEventListener('submit', submitForm);

    function submitForm(event) {
        event.preventDefault(); 
    
        swal("Thank you for enrolling with us at Morven!", "Your request is being processed. We'll get back to you as soon as possible.", "success");
    }

});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
