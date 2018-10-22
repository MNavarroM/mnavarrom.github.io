{
    document.addEventListener("DOMContentLoaded", init)

    function closeWindow() {
        window.close();
    }

    function init() {
        let button = document.getElementById("closeWindow");
        button.addEventListener('click', closeWindow);
    }
}