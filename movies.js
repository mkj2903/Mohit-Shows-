document.addEventListener("DOMContentLoaded", function() {
    const categoryFilter = document.getElementById("category-filter");
    const typeFilter = document.getElementById("type-filter");
    const applyFilterBtn = document.getElementById("apply-filter");
    const clearFilterBtn = document.getElementById("clear-filter");
    const cards = document.querySelectorAll(".image-card");

    console.log("Cards:", cards);

    function filterCards() {
        const selectedCategory = categoryFilter.value;
        const selectedType = typeFilter.value;

        console.log("Selected Category:", selectedCategory);
        console.log("Selected Type:", selectedType);

        cards.forEach(card => {
            const category = card.getAttribute("data-category");
            const type = card.getAttribute("data-type");

            console.log("Card Category:", category);
            console.log("Card Type:", type);

            if ((selectedCategory === "all" || category === selectedCategory) &&
                (selectedType === "all" || type === selectedType)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    function clearFilters() {
        categoryFilter.value = "all";
        typeFilter.value = "all";

        cards.forEach(card => {
            card.style.display = "block";
        });
    }

    applyFilterBtn.addEventListener("click", filterCards);
    clearFilterBtn.addEventListener("click", clearFilters);
});


// JavaScript for back button
function goBack() {
    window.history.back();
}

// JavaScript for speaking
function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}
