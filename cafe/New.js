function toggleSection(button) {
    // Get the parent section
    const parentSection = button.parentElement;

    // Toggle the 'open' class on the parent section
    parentSection.classList.toggle('open');

    // Optionally: Scroll smoothly into view when opening
    if (parentSection.classList.contains('open')) {
        parentSection.scrollIntoView({ behavior: 'smooth' });
    }
}
