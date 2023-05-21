const backImage = document.querySelector('.back_image');
const mainHeading = document.querySelector('.main_heading');
const subHeading = document.querySelector('.sub_heading');
const secondGroupText = document.querySelector('.second_group_text');




window.addEventListener('scroll', () => {

    const scrollTop = window.scrollY / 12.6;

    backImage.style.top = `${scrollTop / 3}vw`;
    mainHeading.style.top = `${scrollTop / 3 + 20.6}vw`;
    subHeading.style.top = `${scrollTop / 3 + 12.7}vw`;

});




