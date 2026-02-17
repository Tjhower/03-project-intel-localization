document.addEventListener('DOMContentLoaded', () => {

  const timeline = document.querySelector('.timeline');
  const leftArrow = document.querySelector('.timeline-arrow.left');
  const rightArrow = document.querySelector('.timeline-arrow.right');
  const progressBar = document.querySelector('.timeline-progress span');

  if (!timeline || !leftArrow || !rightArrow) return;

  const scrollAmount = () => timeline.clientWidth * 0.8;

  // Arrow Controls
  leftArrow.addEventListener('click', () => {
    timeline.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    timeline.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });

  // Progress Bar
  timeline.addEventListener('scroll', () => {
    if (!progressBar) return;

    const maxScroll = timeline.scrollWidth - timeline.clientWidth;
    const progress = (timeline.scrollLeft / maxScroll) * 100;
    progressBar.style.width = `${progress}%`;
  });
// List of RTL languages
const rtlLanguages = [
  "ar", // Arabic
  "he", // Hebrew
  "fa", // Persian
  "ur"  // Urdu
];

// Function to apply direction
function applyDirection() {
  const html = document.documentElement;
  const currentLang = html.lang.toLowerCase().split("-")[0]; // handles ar-SA, etc.

  if (rtlLanguages.includes(currentLang)) {
    html.setAttribute("dir", "rtl");
    html.setAttribute("lang", currentLang);
    document.body.classList.add("rtl-active");
    console.log("RTL mode enabled:", currentLang);
  } else {
    html.setAttribute("dir", "ltr");
    document.body.classList.remove("rtl-active");
    console.log("LTR mode enabled:", currentLang);
  }
}

// Run on initial load
document.addEventListener("DOMContentLoaded", applyDirection);

// Watch for language changes (Google Translate modifies <html lang>)
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === "lang") {
      applyDirection();
        const bootstrapLink = document.getElementById("bootstrap-css");

        if (rtlLanguages.includes(currentLang)) {
          html.setAttribute("dir", "rtl");
          bootstrapLink.href =
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css";
        } 
        else {
         html.setAttribute("dir", "ltr");
          bootstrapLink.href =
         "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
        }
        
    }
  });
});

// Observe changes to the <html> tag
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["lang"]
});

});
