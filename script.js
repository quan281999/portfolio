// Navigation Btn
const navigation = document.getElementById("navigation");
const navigationBtn = document.getElementById("navigation__btn");

// Section Btns
const aboutBtn = document.getElementById("about--btn");
const educationBtn = document.getElementById("education--btn");
const experienceBtn = document.getElementById("experience--btn");
const skillsBtn = document.getElementById("skills--btn");
const projectsBtn = document.getElementById("projects--btn");
const contactBtn = document.getElementById("contact--btn");

// Experience Tabs
const grabTab = document.getElementById("grab--tab");
const naverTab = document.getElementById("naver--tab");
const ehTab = document.getElementById("eh--tab");
const katalonTab = document.getElementById("katalon--tab");
const experienceTabs = [
    {
        element: grabTab,
        id: 'grab'
    },
    {
        element: naverTab,
        id: 'naver'
    },
    {
        element: ehTab,
        id: 'eh'
    },
    {
        element: katalonTab,
        id: 'katalon'
    },
];

// Global State
let navigationOpen = false;
let activeExperience = document.getElementById("grab");
let activeTab = grabTab;

// Sections
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-up");

// Close the Navigation Menu
const closeNavigation = () => {
    navigation.classList.remove("navigation--opened");
    navigation.classList.add("navigation--closed");
    navigationBtn.src = "./img/navigation/open.svg";
    navigationOpen = false;
}

// Open the Navigation Menu
const openNavigation = () => {
    navigation.classList.remove("navigation--closed");
    navigation.classList.add("navigation--opened");
    navigationBtn.src = "./img/navigation/close.svg";
    navigationOpen = true;
}

// Trigger the Navigation Btn
const toggleNavigationBtn = () => {
    if (!navigationOpen) {
        openNavigation();
    } else {
        closeNavigation();
    }
}

navigationBtn.addEventListener("click", toggleNavigationBtn);

aboutBtn.addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("about").scrollIntoView();
    }, 500)
    closeNavigation();
})
educationBtn.addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("education").scrollIntoView();
    }, 500)
    closeNavigation();
})
experienceBtn.addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("experience").scrollIntoView();
    }, 500)
    closeNavigation();
})
skillsBtn.addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("skills").scrollIntoView();
    }, 500)
    closeNavigation();
})
projectsBtn.addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("projects").scrollIntoView();
    }, 500)
    closeNavigation();
})
contactBtn.addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("contact").scrollIntoView();
    }, 500)
    closeNavigation();
})

// Switch experience tab
experienceTabs.forEach(tab => {
    tab.element.addEventListener("click", () => {
       // Remove the active state of the former tab
        activeExperience.classList.remove("active");
        activeTab.classList.remove("tab-active");
        // Add the active state to the new tab
        activeExperience = document.getElementById(tab.id);
        activeExperience.classList.add("active");
        activeTab = tab.element;
        activeTab.classList.add("tab-active"); 
    })
})

// Sections Appear on Scrolling
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -190px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
        return;
        } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});