document.addEventListener("DOMContentLoaded", () => {
    console.log("JS loaded"); // debug

    const toggleBtn = document.getElementById("themeToggle");
    console.log("Button is:", toggleBtn); // debug

    toggleBtn.addEventListener("click", () => {
        console.log("Button clicked"); // debug

        document.body.classList.toggle("guide-dark");

        console.log("Class applied? ", document.body.classList.contains("guide-dark"));
    });
});
