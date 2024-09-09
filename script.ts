document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-skills-btn")!;
  const skillsSection = document.getElementById("skills-section")!;

  let isVisible = true;

  toggleButton.addEventListener("click", () => {
    if (isVisible) {
      skillsSection.style.display = "none";
      toggleButton.textContent = "Show Skills Section";
    } else {    
      skillsSection.style.display = "block";
      toggleButton.textContent = "Hide Skills Section";
    }
    isVisible = !isVisible; 
  });
});
