/**
 * Helper function to scroll to a specific section on the page
 * @param {Event} e - The event object
 * @param {string} sectionId - The ID of the section to scroll to (with or without #)
 */
export const scrollToSection = (e, sectionId) => {
  e.preventDefault();
  
  // Remove the # if it exists
  const id = sectionId.replace('#', '');
  
  // Find the element
  const element = document.getElementById(id);
  
  // If element exists, scroll to it
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    // If no specific section, scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};