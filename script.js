document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality
    const tabs = document.querySelectorAll('.tablinks');
    const tabContent = document.querySelectorAll('.tabcontent');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Hide all tab content
            tabContent.forEach(content => {
                content.style.display = 'none';
            });

            // Remove "active" class from all tabs
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });

            // Show the target tab content
            document.getElementById(target).style.display = 'block';
            this.classList.add('active');
        });
    });

    // Set default active tab
    document.querySelector('.tablinks').click();
});
