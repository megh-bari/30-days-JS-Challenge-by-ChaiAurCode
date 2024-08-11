const challenges = [
  {
    id: 1,
    thumbnail: "thumbnail.png",
    image: "Images/day1.png",
    title: "Variables and Data Types",
    day: "Day - 1",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%201%20-%20Variables%20and%20Data%20Types",
  },
  {
    id: 2,
    thumbnail: "thumbnail.png",
    image: "Images/day2.png",
    title: "Operators",
    day: "Day - 2",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%202%20-%20Operators",
  },
  {
    id: 3,
    thumbnail: "thumbnail.png",
    image: "Images/day3.png",
    title: "Control Structure",
    day: "Day - 3",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%203%20-%20Control%20Structures",
  },
  {
    id: 4,
    thumbnail: "thumbnail.png",
    image: "Images/day4.png",
    title: "Loops",
    day: "Day - 4",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%204-%20Loops",
  },
  {
    id: 5,
    thumbnail: "thumbnail.png",
    image: "Images/day5.png",
    title: "Functions",
    day: "Day - 5",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%205%20-%20Functions",
  },
  {
    id: 6,
    thumbnail: "thumbnail.png",
    image: "Images/day6.png",
    title: "Arrays",
    day: "Day - 6",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%206%20-%20Arrays",
  },
  {
    id: 7,
    thumbnail: "thumbnail.png",
    image: "Images/day7.png",
    title: "Objects",
    day: "Day - 7",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%207%20-%20Objects",
  },
  {
    id: 8,
    thumbnail: "thumbnail.png",
    image: "Images/day8.png",
    title: "ES6+ Features",
    day: "Day - 8",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%208%20-%20ES6%2B%20Features",
  },
  {
    id: 9,
    thumbnail: "thumbnail.png",
    image: "Images/day9.png",
    title: "DOM Manupulation",
    day: "Day - 9",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%209%20-%20DOM%20Manipulation",
  },
  {
    id: 10,
    thumbnail: "thumbnail.png",
    image: "Images/day10.png",
    title: "Event Handling",
    day: "Day - 10",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2010%20-%20Event%20Handling",
  },
  {
    id: 11,
    thumbnail: "thumbnail.png",
    image: "Images/day11.png",
    title: "Promises and Async/Awaits",
    day: "Day - 11",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2011%20-%20Promises%20and%20Async-Await",
  },
  {
    id: 12,
    thumbnail: "thumbnail.png",
    image: "Images/day12.png",
    title: "Error Handling",
    day: "Day - 12",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2012%20-%20Error%20Handling",
  },
  {
    id: 13,
    thumbnail: "thumbnail.png",
    image: "Images/day13.png",
    title: "Modules",
    day: "Day - 13",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2013%20-%20Modules",
  },
  {
    id: 14,
    thumbnail: "thumbnail.png",
    image: "Images/day14.png",
    title: "Classes",
    day: "Day - 14",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2014%20-%20Classes",
  },
  {
    id: 15,
    thumbnail: "thumbnail.png",
    image: "Images/day15.png",
    title: "Closures",
    day: "Day - 15",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2015%20-%20Closures",
  },
  {
    id: 16,
    thumbnail: "thumbnail.png",
    image: "Images/day16.png",
    title: "Recursion",
    day: "Day - 16",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2016%20-%20Recursion",
  },
  {
    id: 17,
    thumbnail: "thumbnail.png",
    image: "Images/day17.png",
    title: "Data Structures",
    day: "Day - 17",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2017%20-%20Data%20Structure",
  },
  {
    id: 18,
    thumbnail: "thumbnail.png",
    image: "Images/day18.png",
    title: "Algorithms",
    day: "Day - 18",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2018%20-%20Algorithms",
  },
  {
    id: 19,
    thumbnail: "thumbnail.png",
    image: "Images/day19.png",
    title: "Regular Expressions",
    day: "Day - 19",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2018%20-%20Regular%20Expressions",
  },
  {
    id: 20,
    thumbnail: "thumbnail.png",
    image: "Images/day20.png",
    title: "LocalStorage and SessionStorage",
    day: "Day - 20",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2020%20-%20LocalStorage%20and%20SessionStorage",
  },
  {
    id: 21,
    thumbnail: "thumbnail.png",
    image: "Images/day21.png",
    title: "LeetCode Easy",
    day: "Day - 21",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2021%20-%20LeetCode%20Easy",
  },
  {
    id: 22,
    thumbnail: "thumbnail.png",
    image: "Images/day22.png",
    title: "LeetCode Medium",
    day: "Day - 22",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2022%20-%20LeetCode%20Medium",
  },
  {
    id: 23,
    thumbnail: "thumbnail.png",
    image: "Images/day23.png",
    title: "LeetCode Hard",
    day: "Day - 23",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2023%20-%20LeetCode%20Hard",
  },
  {
    id: 24,
    thumbnail: "thumbnail.png",
    image: "Images/day24.png",
    title: "Project 1: Weather App",
    day: "Day - 24",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2024%20-%20Weather%20App",
  },
  {
    id: 25,
    thumbnail: "thumbnail.png",
    image: "Images/day25.png",
    title: "Project 2: Movies Search App",
    day: "Day - 25",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2025%20-%20Movie%20Search%20App",
  },
  {
    id: 26,
    thumbnail: "thumbnail.png",
    image: "Images/day26.png",
    title: "Project 3: Chat Application",
    day: "Day - 26",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2026%20-%20Chat%20Application",
  },
  {
    id: 27,
    thumbnail: "thumbnail.png",
    image: "Images/day27.png",
    title: "Project 4: Task Management App",
    day: "Day - 27",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2027%20-%20Task%20Management%20App",
  },
  {
    id: 28,
    thumbnail: "thumbnail.png",
    image: "Images/day28.png",
    title: "Project 5: Ecommerce Website",
    day: "Day - 28",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2028%20-%20Ecommerce%20Website",
  },
  {
    id: 29,
    thumbnail: "thumbnail.png",
    image: "Images/day29.png",
    title: "Project 6: Social Media Dashboard",
    day: "Day - 29",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2029%20-%20Social%20Media%20Dashboard",
  },
  {
    id: 30,
    thumbnail: "thumbnail.png",
    image: "Images/day30.png",
    title: "Project 6: Social Media Dashboard",
    day: "Day - 30",
    solutionLink:
      "https://github.com/megh-bari/30-days-javascript-challenge/tree/main/Day%2029%20-%20Social%20Media%20Dashboard",
  },
];

const challengesContainer = document.getElementById("challenges-container");
const modal = document.getElementById("challenge-modal");
const challengeImg = document.getElementById("challenge-img");
const challengeTitle = document.getElementById("challenge-title");
const challengeDescription = document.getElementById("challenge-description");
const solveItBtn = document.getElementById("solve-it");

challenges.forEach((challenge) => {
  const card = document.createElement("div");
  card.className = "challenge-card";
  card.innerHTML = `
        <img class="thumbnail" src="${challenge.thumbnail}" alt="${challenge.title}">
        <h3>${challenge.title}</h3>
        <p class = "day">${challenge.day}</p>
        <button class="solve-it">View Solution</button>
    `;
  card.addEventListener("click", () => openChallenge(challenge));
  challengesContainer.appendChild(card);
});

function openChallenge(challenge) {
  challengeImg.src = challenge.image;
  challengeTitle.textContent = challenge.title;
  challengeDescription.textContent = challenge.description;
  solveItBtn.onclick = () => window.open(challenge.solutionLink, "_blank");
  modal.style.display = "block";
}

document.querySelector(".close-button").onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  });