
// Quiz modal
const quizmodal = document.getElementById("quiz-modal");
const openquizBtn = document.getElementById("open-quiz-btn");
const quizSteps = [
  document.getElementById("quiz-step-1"),
  document.getElementById("quiz-step-2"),
  document.getElementById("quiz-step-3"),
  document.getElementById("quiz-results")
];
const closeBtns = quizmodal ? quizmodal.querySelectorAll(".quiz-question-card__close") : null;

function showStep(stepId) {
  quizSteps.forEach(function(step) {
    if (step) {
      step.classList.remove("active");
    }
  });
  const step = document.getElementById(stepId);
  if (step) {
    step.classList.add("active");
  }
}


if (openquizBtn && quizmodal) {
  openquizBtn.addEventListener("click", function() {
    quizmodal.style.display = "flex";
    showStep("quiz-step-1");
  });
}

if (quizmodal && closeBtns && closeBtns.length) {
  Array.from(closeBtns).forEach(function(btn) {
    btn.addEventListener("click", function() {
      quizmodal.style.display = "none";
    });
  });

  quizmodal.addEventListener("click", function(event) {
    if (!event.target.closest('.quiz-question-card')) {
      quizmodal.style.display = "none";
    }
  });

  quizmodal.addEventListener("click", function(event) {
    const optionButton = event.target.closest('.quiz-question-card__options .button--pill-filter');
    if (optionButton && quizmodal.contains(optionButton)) {
      const optionsGroup = optionButton.closest('.quiz-question-card__options');
      if (optionsGroup) {
        optionButton.classList.toggle('active');
      }
    }
  });

  quizmodal.querySelectorAll('.quiz-question-card__navigation button').forEach(function(button) {
    button.addEventListener('click', function(event) {
      const action = event.currentTarget.dataset.action;
      if (!action) return;

      if (action === 'next') {
        if (event.currentTarget.closest('#quiz-step-1')) {
          showStep('quiz-step-2');
        } else if (event.currentTarget.closest('#quiz-step-2')) {
          showStep('quiz-step-3');
        }
      }

      if (action === 'back') {
        if (event.currentTarget.closest('#quiz-step-2')) {
          showStep('quiz-step-1');
        } else if (event.currentTarget.closest('#quiz-step-3')) {
          showStep('quiz-step-2');
        }
      }

      if (action === 'complete') {
        showStep('quiz-results');
      }

      if (action === 'retake') {
        showStep('quiz-step-1');
      }
    });
  });
}

// Diploma modal
const diplomamodal = document.getElementById("diploma-modal");
const opendiplomaBtn = document.getElementById("open-diploma-btn");
const closediplomaBtn = diplomamodal ? diplomamodal.querySelector(".button--ghost") : null;
if (opendiplomaBtn && diplomamodal) {
  opendiplomaBtn.addEventListener("click", function() {
    diplomamodal.style.display = "flex";
  });
}

if (closediplomaBtn) {
  closediplomaBtn.addEventListener("click", function() {
    diplomamodal.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const courseGrid = document.getElementById("course-grid");
  const filterContainer = document.querySelector(".find-course__filters");
  const emptyMessage = document.getElementById("course-empty-message");

  if (courseGrid && filterContainer) {
    const filterButtons = Array.from(filterContainer.querySelectorAll(".button--pill-filter"));
    const courseCards = Array.from(courseGrid.querySelectorAll(".course-card"));

    function updateEmptyMessage() {
      if (!emptyMessage) {
        return;
      }

      const hasVisibleCourses = courseCards.some(card => !card.classList.contains("course-card--hidden"));
      emptyMessage.hidden = hasVisibleCourses;
    }

    function showAllCourses() {
      courseCards.forEach(card => {
        card.classList.remove("course-card--hidden");
      });
      updateEmptyMessage();
    }


    function filterCoursesByTags(tags) {
      courseCards.forEach(card => {
        const cardTags = Array.from(card.querySelectorAll(".tag-courses")).map(span => span.textContent.trim());
        const match = tags.some(tag => cardTags.includes(tag));
        card.classList.toggle("course-card--hidden", !match);
      });
      updateEmptyMessage();
    }

    filterContainer.addEventListener("click", event => {
      const button = event.target.closest(".button--pill-filter");
      if (!button || !filterContainer.contains(button)) {
        return;
      }

      const tag = button.dataset.tag;
      if (!tag) {
        return;
      }

      button.classList.toggle("active");
      const activeTags = filterButtons
        .filter(btn => btn.classList.contains("active"))
        .map(activeBtn => activeBtn.dataset.tag)
        .filter(Boolean);

      if (activeTags.length === 0) {
        showAllCourses();
        return;
      }

      filterCoursesByTags(activeTags);
    });

    updateEmptyMessage();
  }
  
  // Progress bar
  const updateProgressBar = (current, total) => {
    const percentage = Math.round((current / total) * 100);
    const progressFill = document.getElementById("progressFill");
    if (progressFill) {
      progressFill.style.width = `${percentage}%`;
    }
  };

  const CURRENT_MODULE = window.CURRENT_MODULE || 1;
  const TOTAL_MODULES = 3;

  const savedProgress = parseInt(localStorage.getItem("moduleProgress")) || 0;

  if (CURRENT_MODULE > savedProgress) {
    localStorage.setItem("moduleProgress", CURRENT_MODULE);
    localStorage.setItem("courseCompleted", CURRENT_MODULE === TOTAL_MODULES);
  }
  
  updateProgressBar(
    parseInt(localStorage.getItem("moduleProgress")),
    TOTAL_MODULES
  );
});



