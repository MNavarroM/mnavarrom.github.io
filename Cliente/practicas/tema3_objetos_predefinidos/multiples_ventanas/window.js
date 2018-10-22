{

    function closeWindow() {
        window.close();
    }

    function init() {
        let button = document.getElementById("closeWindow");
        button.addEventListener('click', closeWindow);
    }
    document.addEventListener("DOMContentLoaded", init)

}