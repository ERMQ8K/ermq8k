// Simple script for progress tracking
document.addEventListener('DOMContentLoaded', function() {
    // Add checkbox functionality to checklist items
    const checklists = document.querySelectorAll('.checklist');
    checklists.forEach(list => {
        list.addEventListener('click', function(e) {
            if (e.target.tagName === 'LI') {
                e.target.classList.toggle('completed');
            }
        });
    });
    
    // Save progress to localStorage
    const saveProgress = () => {
        const completed = document.querySelectorAll('.checklist li.completed');
        const progress = Array.from(completed).map(li => li.textContent);
        localStorage.setItem('dayProgress', JSON.stringify(progress));
    };
    
    // Load progress from localStorage
    const loadProgress = () => {
        const progress = JSON.parse(localStorage.getItem('dayProgress') || '[]');
        document.querySelectorAll('.checklist li').forEach(li => {
            if (progress.includes(li.textContent)) {
                li.classList.add('completed');
            }
        });
    };
    
    loadProgress();
    
    // Save on checkbox click
    document.querySelectorAll('.checklist li').forEach(li => {
        li.addEventListener('click', saveProgress);
    });
});
