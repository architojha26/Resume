document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tablinks");
    const contents = document.querySelectorAll(".tabcontent");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(content => content.style.display = "none");

            const target = this.getAttribute("data-target");
            document.getElementById(target).style.display = "block";
            this.classList.add("active");
        });
    });

    // Set default tab
    if (tabs.length > 0) {
        tabs[0].click();
    }
});
