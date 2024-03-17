const scrollUpButton = document.getElementById('scrollUp');
window.onscroll = function() {
    // if we are down on the page a decent amount
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // show the button
        scrollUpButton.style.display = 'block';
    } else {
        // otherwise don't show the button
        scrollUpButton.style.display = 'none';
    }
};
function scrollToTop() {
    // scroll up if the button is clicked
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}