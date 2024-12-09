

    var faqBoxes = document.querySelectorAll('.faq_box');


    faqBoxes.forEach(function (faqBox, index) {
        faqBox.addEventListener('click', function () {
            var answer = document.getElementById('answer' + (index + 1));
            answer.classList.toggle('show');
        });
    });

