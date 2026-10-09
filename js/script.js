"use strict";

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const formPreview = document.querySelector("#form-preview");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const messageField = document.querySelector("#message");

// Validate trimmed form values and show a local-only preview when they are valid.
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errors = [];

    [nameField, emailField, messageField].forEach((field) => {
        field.removeAttribute("aria-invalid");
    });

    if (!name) {
        errors.push({ field: nameField, message: "Enter your name." });
    }
    if (!emailPattern.test(email)) {
        errors.push({ field: emailField, message: "Enter a valid email address." });
    }
    if (!message) {
        errors.push({ field: messageField, message: "Enter a message." });
    }

    if (errors.length > 0) {
        errors.forEach(({ field }) => field.setAttribute("aria-invalid", "true"));
        formStatus.textContent = errors.map(({ message: errorMessage }) => errorMessage).join(" ");
        formPreview.hidden = true;
        return;
    }

    document.querySelector("#preview-name").textContent = name;
    document.querySelector("#preview-email").textContent = email;
    document.querySelector("#preview-message").textContent = message;
    document.querySelector("#preview-confirmation").textContent =
        "Your details were validated in this browser. No message has been sent.";
    formStatus.textContent = "";
    formPreview.hidden = false;
});

// Expand or collapse the explanation associated with each skill card.
document.querySelectorAll(".details-toggle").forEach((button) => {
    button.addEventListener("click", () => {
        const details = document.getElementById(button.getAttribute("aria-controls"));
        const isExpanded = button.getAttribute("aria-expanded") === "true";

        details.hidden = isExpanded;
        button.setAttribute("aria-expanded", String(!isExpanded));
        button.textContent = isExpanded ? "Show details" : "Hide details";
    });
});

// Move through the three captioned photos without wrapping past either end.
const gallerySlides = Array.from(document.querySelectorAll(".gallery-slide"));
const galleryStatus = document.querySelector("#gallery-status");
const previousPhotoButton = document.querySelector("#gallery-previous");
const nextPhotoButton = document.querySelector("#gallery-next");
let currentPhotoIndex = 0;

function showPhoto(index) {
    currentPhotoIndex = index;
    gallerySlides.forEach((slide, slideIndex) => {
        slide.hidden = slideIndex !== currentPhotoIndex;
    });
    galleryStatus.textContent = `Photo ${currentPhotoIndex + 1} of ${gallerySlides.length}`;
    previousPhotoButton.disabled = currentPhotoIndex === 0;
    nextPhotoButton.disabled = currentPhotoIndex === gallerySlides.length - 1;
}

previousPhotoButton.addEventListener("click", () => {
    if (currentPhotoIndex > 0) {
        showPhoto(currentPhotoIndex - 1);
    }
});

nextPhotoButton.addEventListener("click", () => {
    if (currentPhotoIndex < gallerySlides.length - 1) {
        showPhoto(currentPhotoIndex + 1);
    }
});

showPhoto(currentPhotoIndex);

// Filter project cards by their visible content and searchable keywords.
const projectCards = Array.from(document.querySelectorAll(".project-card"));
const projectSearch = document.querySelector("#project-search");
const projectStatus = document.querySelector("#project-status");
const projectReset = document.querySelector("#project-reset");

function filterProjects() {
    const query = projectSearch.value.trim().toLowerCase();
    let visibleCount = 0;

    projectCards.forEach((card) => {
        const searchableText = `${card.dataset.search} ${card.textContent}`.toLowerCase();
        const matches = searchableText.includes(query);
        card.hidden = !matches;
        if (matches) {
            visibleCount += 1;
        }
    });

    projectStatus.textContent = visibleCount === 0
        ? "No projects match that search. Try another term or show all."
        : `Showing ${visibleCount} of ${projectCards.length} projects.`;
}

projectSearch.addEventListener("input", filterProjects);
projectReset.addEventListener("click", () => {
    projectSearch.value = "";
    filterProjects();
    projectSearch.focus();
});

filterProjects();
