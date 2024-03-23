const toggle_answer = (questionElement) => {
    const answer = questionElement.nextElementSibling;
    const svgIcon = questionElement.querySelector('.svg');
    
    if (!answer.classList.contains('show')) {
        // Get the actual height of the answer content
        const maxHeight = answer.scrollHeight;
        
        answer.style.maxHeight = maxHeight + 'px';
        answer.classList.add('show');
        svgIcon.style.backgroundImage = 'url(./assets/images/icon-minus.svg)';
    } else {
        answer.style.maxHeight = '0px';
        answer.classList.remove('show');
        svgIcon.style.backgroundImage = 'url(./assets/images/icon-plus.svg)';
    }
};
