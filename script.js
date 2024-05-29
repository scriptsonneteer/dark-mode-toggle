document.addEventListener('DOMContentLoaded', function() { // Wait for DOM ready
    const toggleSwitch = document.getElementById('dark-mode-toggle'); // Get toggle switch
    const body = document.body; // Get body element

    function toggleDarkMode(isDark) { // Define toggle function
        body.classList.toggle('dark-mode', isDark); // Toggle dark mode class
    }

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') { // If dark mode saved
        toggleDarkMode(true); // Enable dark mode
        toggleSwitch.checked = true; // Set switch to checked
    }

    // Listen for toggle switch changes
    toggleSwitch.addEventListener('change', function(e) { // On switch change
        const isDark = e.target.checked; // Get switch state
        toggleDarkMode(isDark); // Toggle dark mode
        localStorage.setItem('darkMode', isDark); // Save preference
    });
});
