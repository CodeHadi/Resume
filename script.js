document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggle-skills-btn");
    var skillsSection = document.getElementById("skills-section");
    var isVisible = true;
    toggleButton.addEventListener("click", function () {
        if (isVisible) {
            skillsSection.style.display = "none";
            toggleButton.textContent = "Show Skills Section";
        }
        else {
            skillsSection.style.display = "block";
            toggleButton.textContent = "Hide Skills Section";
        }
        isVisible = !isVisible;
    });
});
