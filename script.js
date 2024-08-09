document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tablinks');
    const tabContents = document.querySelectorAll('.tabcontent');

    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('show'));

            // Remove active class from all tab links
            tabLinks.forEach(tab => tab.classList.remove('active'));

            // Show the selected tab content
            document.getElementById(this.dataset.target).classList.add('show');

            // Add active class to the clicked tab link
            this.classList.add('active');
        });
    });

    // Set default tab
    document.querySelector('.tablinks').click();
});
