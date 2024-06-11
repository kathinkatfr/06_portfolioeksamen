document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".cvh2");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      content.style.display = content.style.display === "none" || content.style.display === "" ? "block" : "none";
    });
  });
});
