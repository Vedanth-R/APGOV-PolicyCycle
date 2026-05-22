const stages = {
  agenda: {
    label: "Agenda Setting",
    date: "May-July 2025",
    title: "How did AI become important?",
    what:
      "AI rose on the agenda because deepfake abuse, copyright lawsuits, federal AI procurement, frontier-model safety, state regulation, and competition with China all became public problems at once.",
    who: "Victims and families, creators, tech firms, state lawmakers, federal advisers, and journalists pushed AI from a technical issue into a public policy issue.",
    institution: "Media attention, public pressure, Congress, state legislatures, and the White House all helped define the problem.",
    tension: "Was AI mainly an innovation race needing fewer barriers, or a fast-moving risk needing enforceable guardrails?",
    evidence: "Source trail: EO 14179, the White House AI Action Plan, TAKE IT DOWN Act coverage, and state AI bills."
  },
  formulation: {
    label: "Policy Formulation",
    date: "Jan-Sept 2025",
    title: "Who proposed solutions?",
    what:
      "Different institutions proposed different fixes: the White House proposed acceleration and federal coordination, Congress targeted deepfake abuse, agencies wrote guidance, and states proposed transparency and safety duties.",
    who: "The President, White House AI advisers, members of Congress, OMB, NIST, FTC, Commerce, California, and Colorado all shaped the menu of solutions.",
    institution: "Executive planning, congressional bill drafting, agency expertise, and state policy experimentation.",
    tension: "Should the federal government create one national rulebook, or should states experiment with stronger rules while Congress moves slowly?",
    evidence: "Source trail: AI Action Plan, OMB M-25-21, NIST AI work, California SB 53 materials, and Colorado AI Act reporting."
  },
  adoption: {
    label: "Policy Adoption",
    date: "May-Dec 2025",
    title: "What institutions adopted policy?",
    what:
      "Congress and the President enacted the TAKE IT DOWN Act, a targeted law against nonconsensual intimate imagery and AI deepfakes. California adopted SB 53, and the White House adopted a national AI framework strategy.",
    who: "Congress, the President, California's governor and legislature, and White House policy officials.",
    institution: "Statutes, executive orders, state legislation, and national policy plans.",
    tension: "The TAKE IT DOWN Act passed because it focused on a specific harm. Broader AI regulation remained harder because it raised bigger fights over innovation, speech, federalism, and industry power.",
    evidence: "Source trail: White House TAKE IT DOWN Act release, California SB 53 signing notice, and December 2025 national framework fact sheet."
  },
  implementation: {
    label: "Implementation",
    date: "2025-2026",
    title: "Who carried it out?",
    what:
      "Implementation moved to agencies and regulated platforms: OMB shaped federal AI use, NIST worked on standards, FTC prepared TAKE IT DOWN enforcement, and states planned compliance systems.",
    who: "OMB, agency Chief AI Officers, FTC, NIST, Commerce, online platforms, state regulators, and state attorneys general.",
    institution: "Bureaucracy: agency memos, compliance plans, enforcement letters, standards, procurement rules, and platform takedown systems.",
    tension: "Implementation is where broad goals meet deadlines, definitions, capacity, and legal authority. That is where many AI policies either become real or get narrowed.",
    evidence: "Source trail: OMB M-25-21, NIST AI page, FTC TAKE IT DOWN enforcement guidance, and agency compliance plans."
  },
  evaluation: {
    label: "Evaluation & Feedback",
    date: "2025-2026",
    title: "Was the policy contested?",
    what:
      "Courts, agencies, and state-federal clashes created feedback. Copyright cases tested fair use. Civil-liberties groups criticized takedown rules. States resisted federal preemption.",
    who: "Federal judges, authors, AI companies, civil-liberties groups, state leaders, Congress, and federal agencies.",
    institution: "District courts, the Copyright Office, FTC enforcement, federalism disputes, and congressional oversight.",
    tension: "Evaluation is unfinished: the next cycle will likely turn on lawsuits, enforcement outcomes, and whether Congress passes a broader national AI statute.",
    evidence: "Source trail: U.S. Copyright Office AI report, Anthropic fair-use decision coverage, FTC guidance, and state-federal AI framework disputes."
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
const stageEvidence = document.querySelector("#stageEvidence");

function renderStage(stageKey) {
  const stage = stages[stageKey];
  stageLabel.textContent = stage.label;
  stageDate.textContent = stage.date;
  stageTitle.textContent = stage.title;
  stageWhat.textContent = stage.what;
  stageWho.textContent = stage.who;
  stageInstitution.textContent = stage.institution;
  stageTension.textContent = stage.tension;
  stageEvidence.textContent = stage.evidence;

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

const successSlider = document.querySelector("#successSlider");
const successArgument = document.querySelector("#successArgument");
const submitVote = document.querySelector("#submitVote");
const voteStatus = document.querySelector("#voteStatus");
const voteSummary = document.querySelector("#voteSummary");
const voteBars = document.querySelector("#voteBars");
const clearVotes = document.querySelector("#clearVotes");
const voteStorageKey = "aiPolicySuccessVotes";
const successArguments = {
  1: {
    title: "1 - Failed",
    text: "This rating argues that the government response was too fragmented to solve the core problems. Deepfakes, copyright, state authority, and civil-rights questions remain unsettled."
  },
  2: {
    title: "2 - Mostly symbolic",
    text: "This rating argues that leaders signaled concern but left many hard problems to agencies, courts, companies, and future Congresses."
  },
  3: {
    title: "3 - Partial success",
    text: "I would rate the response a 3 because the government addressed targeted harms like deepfake abuse, but broader conflicts over state power, copyright, civil rights, and free speech remain unresolved."
  },
  4: {
    title: "4 - Effective but contested",
    text: "This rating argues that the government made real progress through statutes, agency action, and state laws, but the response is still being contested in courts and federalism fights."
  },
  5: {
    title: "5 - Strong success",
    text: "This rating argues that targeted federal law, agency implementation, and state experimentation together created a strong early AI governance framework."
  }
};

function renderSuccessArgument() {
  const rating = successArguments[successSlider.value];
  successArgument.innerHTML = `<h3>${rating.title}</h3><p>${rating.text}</p>`;
}

function getVotes() {
  const savedVotes = localStorage.getItem(voteStorageKey);
  return savedVotes ? JSON.parse(savedVotes) : [];
}

function saveVotes(votes) {
  localStorage.setItem(voteStorageKey, JSON.stringify(votes));
}

function renderVoteResults() {
  const votes = getVotes();
  const total = votes.length;
  const counts = [1, 2, 3, 4, 5].map((rating) => votes.filter((vote) => vote === rating).length);
  const average = total ? (votes.reduce((sum, vote) => sum + vote, 0) / total).toFixed(1) : "0.0";

  voteSummary.textContent = total
    ? `${total} vote${total === 1 ? "" : "s"} submitted. Class average: ${average} / 5.`
    : "No votes yet.";

  voteBars.innerHTML = counts
    .map((count, index) => {
      const rating = index + 1;
      const percent = total ? Math.round((count / total) * 100) : 0;
      return `
        <div class="vote-row">
          <span>${rating}</span>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${percent}%"></div>
          </div>
          <strong>${count}</strong>
        </div>
      `;
    })
    .join("");

  voteStatus.textContent = total
    ? `Last saved tally has ${total} vote${total === 1 ? "" : "s"}. Every submit adds another class vote.`
    : "No votes submitted yet.";
}

submitVote.addEventListener("click", () => {
  const votes = getVotes();
  const rating = Number(successSlider.value);
  votes.push(rating);
  saveVotes(votes);
  renderVoteResults();
  voteStatus.textContent = `Vote submitted: ${rating}. Total votes: ${votes.length}.`;
});

clearVotes.addEventListener("click", () => {
  localStorage.removeItem(voteStorageKey);
  renderVoteResults();
});

renderStage("agenda");
renderTimeline();
renderQuestion();
renderSuccessArgument();
renderVoteResults();
successSlider.addEventListener("input", renderSuccessArgument);
