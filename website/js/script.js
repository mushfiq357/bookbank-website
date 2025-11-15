// Class data - we'll expand this later
const classes = [6, 7, 8, 9, 10, 11, 12];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeClassGrid();
});

// Create class grid
function initializeClassGrid() {
    const classGrid = document.querySelector('.class-grid');
    
    classes.forEach(classNum => {
        const classCard = document.createElement('div');
        classCard.className = 'class-card';
        classCard.textContent = `Class ${classNum}`;
        classCard.setAttribute('data-class', classNum);
        
        // Add click event
        classCard.addEventListener('click', function() {
            selectClass(classNum);
        });
        
        classGrid.appendChild(classCard);
    });
}

// Handle class selection
function selectClass(classNum) {
    // Store selected class in localStorage to use on next page
    localStorage.setItem('selectedClass', classNum);
    
    // Show loading effect
    const card = document.querySelector(`[data-class="${classNum}"]`);
    card.style.transform = 'scale(0.95)';
    card.textContent = 'Loading...';
    
    // Redirect to subjects page (we'll create this next)
    setTimeout(() => {
        window.location.href = 'subjects.html';
    }, 500);
    
    // For now, alert since subjects.html doesn't exist yet
    // alert(`Selected Class ${classNum}. We'll create subjects.html next!`);
    // Remove the timeout and uncomment the alert for testing
}

// Add some interactive effects
document.addEventListener('mousemove', function(e) {
    const cards = document.querySelectorAll('.class-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});