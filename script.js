const stages = {
  people: {
    label: "People",
    date: "Public problem",
    title: "How did people make AI a political issue?",
    what:
      "People experience the problem first and make it politically visible. AI became important because regular users, victims of deepfake abuse, creators, workers, parents, and consumers felt real consequences.",
    who: "Victims pushed attention toward deepfake harms. Authors and artists objected to training data practices. Workers and consumers raised concerns about bias, privacy, jobs, and safety.",
    institution: "Public opinion, voting, protest, testimony, lawsuits, and contacting representatives are how people push issues into the policymaking cycle.",
    tension: "People did not agree on one definition of the problem: some wanted protection from AI harms, while others worried strict rules would slow innovation."
  },
  linkage: {
    label: "Linkage Institutions",
    date: "Problem to government",
    title: "How did linkage institutions connect people to policymakers?",
    what:
      "Linkage institutions organized public pressure and translated it into demands government could act on. Media coverage, interest groups, parties, campaigns, and tech advocacy groups framed AI as a policy issue.",
    who: "Civil-liberties groups, victim advocates, creator organizations, technology companies, state officials, think tanks, and news media all shaped the debate.",
    institution: "Linkage institutions connect people to policymakers by setting agendas, lobbying, filing lawsuits, publishing research, funding campaigns, and influencing public opinion.",
    tension: "Different groups pushed different frames: innovation race, consumer protection, civil rights, creator rights, national security, and free speech."
  },
  policymakers: {
    label: "Policymakers",
    date: "Government action",
    title: "How did policymakers respond?",
    what:
      "Policymakers turned pressure into action. Congress passed the TAKE IT DOWN Act, the President used executive orders and the AI Action Plan, agencies implemented guidance, states passed AI laws, and courts interpreted copyright and speech disputes.",
    who: "Congress, the President, federal agencies, state governments, and courts all became policymakers in different parts of the AI regulation fight.",
    institution: "Policymakers use formal powers: legislation, executive action, bureaucratic implementation, state law, enforcement, and judicial interpretation.",
    tension: "Government action was uneven: targeted harms like deepfake abuse got clearer policy, while broader conflicts over copyright, civil rights, state power, and innovation stayed contested."
  }
};

const timeline = [
  {
    date: "May 19, 2025",
    tag: "Congress",
    title: "TAKE IT DOWN Act signed",
    text: "Congress and the President adopted a targeted federal response to nonconsensual intimate imagery, including AI-generated deepfakes, and required covered platforms to remove reported content."
  },
  {
    date: "June 23, 2025",
    tag: "Courts",
    title: "Anthropic fair-use ruling",
    text: "A federal court found that training on lawfully acquired books could be fair use, while questions about pirated copies and storage remained a major liability issue."
  },
  {
    date: "July 23, 2025",
    tag: "Federal",
    title: "America's AI Action Plan released",
    text: "The White House announced a federal strategy organized around accelerating innovation, building AI infrastructure, and leading internationally."
  },
  {
    date: "Sept. 29, 2025",
    tag: "State",
    title: "California SB 53 signed",
    text: "California adopted frontier AI transparency and whistleblower protections, becoming a central state-level example of safety-focused AI regulation."
  },
  {
    date: "Dec. 11, 2025",
    tag: "Federal",
    title: "National AI framework order",
    text: "The White House directed federal action toward a uniform national AI framework and scrutiny of state laws seen as conflicting with federal AI priorities."
  },
  {
    date: "2025-2026",
    tag: "Agency",
    title: "OMB, NIST, FTC implementation",
    text: "Federal agencies translated broad AI goals into procurement rules, governance memos, standards work, compliance plans, and enforcement deadlines."
  },
  {
    date: "May 19, 2026",
    tag: "Agency",
    title: "FTC TAKE IT DOWN enforcement begins",
    text: "The FTC reminded online platforms of their compliance obligations as the statutory removal and enforcement regime became active."
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
    prompt: "A federal law targets nonconsensual intimate deepfakes and requires platforms to remove reported content. Who responded first?",
    answer: "Congress",
    concept: "Legislative process",
    explanation:
      "Congress responded through lawmaking. The TAKE IT DOWN Act became a statute because lawmakers could agree on a targeted harm even while broader AI regulation stayed contested."
  },
  {
    prompt: "The federal government releases a broad strategy to accelerate AI innovation, infrastructure, and global leadership. Who responded first?",
    answer: "President",
    concept: "Executive agenda setting",
    explanation:
      "The President and White House set the agenda through executive orders and the AI Action Plan, directing agencies toward federal priorities."
  },
  {
    prompt: "Online platforms receive reminders that TAKE IT DOWN Act compliance obligations are becoming enforceable. Who responded first?",
    answer: "FTC",
    concept: "Bureaucratic implementation",
    explanation:
      "The FTC is the agency actor here. Agencies translate statutes into enforcement, guidance, and compliance pressure."
  },
  {
    prompt: "California passes a frontier AI transparency law after national rules remain incomplete. Who responded first?",
    answer: "State government",
    concept: "Federalism",
    explanation:
      "State government responded through state law. This is federalism in action: states can act as policy laboratories, but may face federal preemption fights."
  },
  {
    prompt: "A judge decides whether using copyrighted books to train an AI model can count as fair use. Who responded first?",
    answer: "Courts",
    concept: "Judicial interpretation",
    explanation:
      "Courts responded by interpreting copyright law. Judges do not usually write AI policy directly, but their rulings shape what policy means in practice."
  },
  {
    prompt: "A platform updates its reporting and removal workflow so it can process deepfake takedown requests within a legal deadline. Who responded first?",
    answer: "Tech company",
    concept: "Private implementation",
    explanation:
      "A tech company is the front-line actor here. Public policy often depends on private platforms changing their systems after government creates legal obligations."
  }
];

const questionCounter = document.querySelector("#questionCounter");
const questionConcept = document.querySelector("#questionConcept");
const questionPrompt = document.querySelector("#questionPrompt");
const gameFeedback = document.querySelector("#gameFeedback");
const nextQuestion = document.querySelector("#nextQuestion");
const scoreValue = document.querySelector("#scoreValue");
const choices = document.querySelectorAll("[data-choice]");
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
  choices.forEach((choice) => {
    choice.disabled = false;
    choice.classList.remove("correct", "incorrect");
  });
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const question = gameQuestions[currentQuestion];
    const isCorrect = choice.dataset.choice === question.answer;
    if (isCorrect) {
      score += 1;
      choice.classList.add("correct");
    } else {
      choice.classList.add("incorrect");
      document.querySelector(`[data-choice="${question.answer}"]`).classList.add("correct");
    }
    answered += 1;
    scoreValue.textContent = `${score} / ${answered}`;
    gameFeedback.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    gameFeedback.textContent = `${isCorrect ? "Correct." : "Not quite."} ${question.explanation}`;
    choices.forEach((item) => {
      item.disabled = true;
    });
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
