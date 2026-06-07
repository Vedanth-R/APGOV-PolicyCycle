const stages = {
  people: {
    label: "People",
    date: "Public problem",
    title: "How did people make AI a political issue?",
    what:
      "People experience the problem first and make it politically visible. AI became important because regular users, victims of deepfake abuse, social media creators, workers, and just consumers in general were the main users who saw problems.",
    who: "Victims of deepfakes drew attention to the topic. Authors and artists objected to training data practices related to copyrighted work. Consumers raised concerns about AI bias, privacy, jobs, and safety.",
    institution: "Public opinion, voting, protests, testimony, lawsuits, and grassroots contacting representatives are how people push issues into the policymaking cycle.",
    tension: "People did not agree on one definition of the problem: some wanted protection from AI harms (for exammple authors), while others wanted innovation (tech company workers/researchers)."
  },
  linkage: {
    label: "Linkage Institutions",
    date: "Problem to government",
    title: "How did linkage institutions connect people to policymakers?",
    what:
      "Linkage institutions connect people to the government by increasing pressure. Media, interest groups, parties, and companies helped influence AI policy.",
    who: "In the AI world, civil liberty organizations (ACLU), artist/writer unions (Writers Guild of America), and victim advocacy groups, and AI companies helped push the issue of AI policy.",
    institution: "Linkage institutions connect people to policymakers by setting agendas, lobbying, filing lawsuits, publishing research, funding campaigns, and influencing public opinion.",
    tension: "Different groups pushed different frames: innovation race, consumer protection, civil rights, creator rights, national security, and free speech."
  },
  policymakers: {
    label: "Policymakers",
    date: "Government action",
    title: "How did policymakers respond?",
    what:
      "Policymakers turned pressure into action. Congress usually directly answers to constituents and interest groups, the executive branch implements policies and sets its own agenda, states pass laws based on their own constituents/problems, and courts interpret disputes.",
    who: "Congress, the President, federal agencies, state governments, and courts all became policymakers in different parts of AI policy with things like the TAKE IT DOWN Act,AI Action Plan, and the court's Anthropic ruling.",
    institution: "Policymakers use more formal powers than other groups like legislation, executive action, bureaucratic discretion, and judicial interpretation.",
    tension: "Government action was not consistent. Certain issues like deepfake abuse got clearer policy, while broader conflicts over copyright, civil rights, state power, and innovation stayed contested, and executive orders even furthered AI development."
  }
};

const timeline = [
  {
    date: "May 19, 2025",
    tag: "Congress",
    title: "TAKE IT DOWN Act signed",
    text: "Both Congress and the President placed certain regulations on AI to make sexually explicit AI deepfake images illegal."
  },
  {
    date: "June 23, 2025",
    tag: "Courts",
    title: "Anthropic fair-use ruling",
    text: "A federal court ruled that training on lawfully aquired books was fair use, but storing/pirating those texts was against copyright rules."
  },
  {
    date: "July 23, 2025",
    tag: "Executive",
    title: "America's AI Action Plan released",
    text: "The White House announced a federal strategy which aimed to accelerating innovation and increase infrastructure development with companies like Nvidia and Oracle."
  },
  {
    date: "Sept. 29, 2025",
    tag: "State",
    title: "California SB 53 signed",
    text: "California passed a law that contained transparency and whistleblower protections, which was one of the first major state AI policies."
  },
  {
    date: "Dec. 11, 2025",
    tag: "Executive",
    title: "National AI framework order",
    text: "The White House created a plan towards a uniform national AI framework which also included scrutiny of state laws which conflicted with the federal approach."
  },
  {
    date: "2025-2026",
    tag: "Agency",
    title: "OMB, NIST, FTC implementation",
    text: "Federal agencies translated broad AI goals into governance memos (Like the OMB's AI implementation guidelines) and specific regulations (like the FTC's enforcement against misleading AI claims) using their power of oversight."
  },
  {
    date: "May 19, 2026",
    tag: "Agency",
    title: "FTC TAKE IT DOWN enforcement begins",
    text: "The FTC began actually enforcing online platforms on their obligations to remove nonconsentual deepfakes within 48 hours."
  }
];

const stageButtons = document.querySelectorAll("[data-stage]");
const stageLabel = document.querySelector("#stageLabel");
const stageDate = document.querySelector("#stageDate");
const stageTitle = document.querySelector("#stageTitle");
const stageWhat = document.querySelector("#stageWhat");
const stageWho = document.querySelector("#stageWho");
const stageInstitution = document.querySelector("#stageInstitution");
const stageTension = document.querySelector("#stageTension");

function renderStage(stageKey) {
  const stage = stages[stageKey];
  stageLabel.textContent = stage.label;
  stageDate.textContent = stage.date;
  stageTitle.textContent = stage.title;
  stageWhat.textContent = stage.what;
  stageWho.textContent = stage.who;
  stageInstitution.textContent = stage.institution;
  stageTension.textContent = stage.tension;

  stageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.stage === stageKey);
  });
}

stageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    renderStage(button.dataset.stage);
    document.querySelector("#cycle").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const timelineList = document.querySelector("#timelineList");
const filterButtons = document.querySelectorAll("[data-filter]");

function renderTimeline(filter = "all") {
  const filtered = filter === "all" ? timeline : timeline.filter((event) => event.tag === filter);
  timelineList.innerHTML = filtered
    .map(
      (event) => `
      <article class="timeline-card">
        <span>${event.date}</span>
        <div>
          <h3>${event.title}</h3>
          <p>${event.text}</p>
        </div>
        <strong class="tag">${event.tag}</strong>
      </article>
    `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderTimeline(button.dataset.filter);
  });
});

const gameQuestions = [
  {
    prompt: "Which Constitutional concept justified Congress arguing that state AI laws burden interstate trade?",
    answer: "Commerce Clause",
    concept: "Policymaking Quiz",
    choices: ["Commerce Clause", "Supremacy Clause", "First Amendment", "Due Process Clause", "Equal Protection Clause", "Necessary and Proper Clause"],
    explanation:
      "The Commerce Clause gives Congress power over interstate commerce, which matters when state AI rules affect companies and users across state lines."
  },
  {
    prompt: "A state law requiring political ads to disclose when they use AI would likely raise questions about what constitutional principle?",
    answer: "First Amendment",
    concept: "Policymaking Quiz",
    choices: ["First Amendment", "Commerce Clause", "Supremacy Clause", "Fourth Amendment", "Equal Protection Clause", "Due Process Clause"],
    explanation:
      "Political ad disclosure rules can raise First Amendment questions because they regulate speech, political communication, and campaign messaging."
  },
  {
    prompt: "Who was responsible for enforcing the TAKE IT DOWN Act's 48 hour time limit?",
    answer: "FTC",
    concept: "Policymaking Quiz",
    choices: ["FTC", "NIST", "OMB", "Congress", "Supreme Court", "State government"],
    explanation:
      "The FTC is the bureaucratic agency responsible for enforcing key parts of the TAKE IT DOWN Act. Agencies turn laws into enforcement."
  },
  {
    prompt: "The Authors Guild pushed Congress to protect writers and actors. This is an example of interest groups using what strategy?",
    answer: "Lobbying",
    concept: "Policymaking Quiz",
    choices: ["Lobbying", "Judicial review", "Rulemaking", "Federalism", "Executive order", "Judicial activism"],
    explanation:
      "Lobbying is when interest groups try to influence policymakers. The Authors Guild used advocacy to push Congress toward stronger protections."
  },
  {
    prompt: "What was the court decision during Anthropic's copyright case?",
    answer: "Training copyrighted books was fair use",
    concept: "Policymaking Quiz",
    choices: ["Training copyrighted books was fair use", "AI companies can never use copyrighted works", "The FTC had to approve the model", "State AI laws were unconstitutional", "Congress had already banned AI training", "The case had nothing to do with copyright"],
    explanation:
      "The court found that training on copyrighted books could be fair use, while separate questions about pirated copies still created legal risk."
  },
  {
    prompt: "Which state passed a bill for whistleblower protection in AI development?",
    answer: "California",
    concept: "Policymaking Quiz",
    choices: ["California", "Colorado", "Texas", "New York", "Florida", "Washington"],
    explanation:
      "California passed SB 53, which included transparency and whistleblower protections connected to frontier AI development."
  }
];

const questionCounter = document.querySelector("#questionCounter");
const questionConcept = document.querySelector("#questionConcept");
const questionPrompt = document.querySelector("#questionPrompt");
const choiceGrid = document.querySelector("#choiceGrid");
const gameFeedback = document.querySelector("#gameFeedback");
const nextQuestion = document.querySelector("#nextQuestion");
const scoreValue = document.querySelector("#scoreValue");
let currentQuestion = 0;
let score = 0;
let answered = 0;

function renderQuestion() {
  const question = gameQuestions[currentQuestion];
  questionCounter.textContent = `Question ${currentQuestion + 1} of ${gameQuestions.length}`;
  questionConcept.textContent = question.concept;
  questionPrompt.textContent = question.prompt;
  gameFeedback.textContent = "";
  gameFeedback.className = "game-feedback";
  choiceGrid.innerHTML = question.choices
    .map((choice) => `<button class="choice" data-choice="${choice}">${choice}</button>`)
    .join("");
}

choiceGrid.addEventListener("click", (event) => {
  const choice = event.target.closest("[data-choice]");
  if (!choice || choice.disabled) {
    return;
  }

  const question = gameQuestions[currentQuestion];
  const isCorrect = choice.dataset.choice === question.answer;
  if (isCorrect) {
    score += 1;
    choice.classList.add("correct");
  } else {
    choice.classList.add("incorrect");
    [...choiceGrid.querySelectorAll("[data-choice]")].find((button) => button.dataset.choice === question.answer)?.classList.add("correct");
  }
  answered += 1;
  scoreValue.textContent = `${score} / ${answered}`;
  gameFeedback.classList.add(isCorrect ? "is-correct" : "is-incorrect");
  gameFeedback.textContent = `${isCorrect ? "Correct." : "Not quite."} ${question.explanation}`;
  choiceGrid.querySelectorAll("[data-choice]").forEach((item) => {
    item.disabled = true;
  });
});

nextQuestion.addEventListener("click", () => {
  currentQuestion = (currentQuestion + 1) % gameQuestions.length;
  renderQuestion();
});

document.querySelectorAll(".flip-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

document.querySelectorAll(".actor-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("open");
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.classList.toggle("open");
    }
  });
});

renderStage("people");
renderTimeline();
renderQuestion();
