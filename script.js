const stages = {
  agenda: {
    label: "Agenda Setting",
    date: "May-July 2025",
    title: "How did AI become important?",
    summary:
      "AI rose on the agenda because several public problems converged: deepfake abuse, copyright lawsuits, federal agencies wanting to buy AI tools, safety worries around frontier models, and pressure to beat China in AI infrastructure and standards.",
    players: ["Victims and families affected by deepfakes", "Tech companies and creators", "White House AI advisers", "State lawmakers"],
    institutions: ["Public opinion and media attention", "Congressional hearings and bills", "Executive orders", "State legislatures"],
    contest:
      "Was AI mainly an innovation race needing fewer barriers, or a fast-moving risk needing enforceable guardrails?"
  },
  formulation: {
    label: "Policy Formulation",
    date: "Jan-Sept 2025",
    title: "Who proposed solutions?",
    summary:
      "The White House framed a broad pro-innovation federal strategy, Congress focused on a specific deepfake harm, agencies drafted procurement and governance guidance, and states proposed transparency, safety, and anti-discrimination rules.",
    players: ["President and White House policy staff", "Senators and House members", "OMB, NIST, FTC, Commerce", "California and Colorado lawmakers"],
    institutions: ["Executive branch planning", "Congressional bill drafting", "Agency guidance", "State policy labs"],
    contest:
      "Should the federal government set one national rulebook, or should states experiment with stronger rules while Congress moves slowly?"
  },
  adoption: {
    label: "Policy Adoption",
    date: "May-Dec 2025",
    title: "What institutions adopted policy?",
    summary:
      "Congress and the President enacted the TAKE IT DOWN Act. California adopted SB 53 for frontier AI transparency. The White House adopted the AI Action Plan and later an executive order seeking a national framework that could limit conflicting state rules.",
    players: ["Congress", "President", "California Governor and legislature", "White House and Commerce Department"],
    institutions: ["Statutes", "Executive orders", "State legislation", "Federal policy plans"],
    contest:
      "The same period produced bipartisan action on deepfakes and intense conflict over whether state AI laws should be preempted."
  },
  implementation: {
    label: "Implementation",
    date: "2025-2026",
    title: "Who carried it out?",
    summary:
      "Implementation shifted to agencies and regulated platforms: OMB set rules for federal AI use, NIST continued standards work, FTC prepared TAKE IT DOWN enforcement, and states planned compliance systems for transparency and high-risk AI requirements.",
    players: ["OMB agency CIOs and CAIOs", "FTC", "NIST and Commerce", "Online platforms", "State attorneys general and regulators"],
    institutions: ["Federal agency compliance plans", "Standards and guidance", "Platform takedown systems", "State enforcement regimes"],
    contest:
      "Implementation is where broad goals meet capacity, definitions, deadlines, and legal authority. That is where many AI policies either become real or get narrowed."
  },
  evaluation: {
    label: "Evaluation & Feedback",
    date: "2025-2026",
    title: "Was the policy contested?",
    summary:
      "Courts, agencies, and state-federal clashes provided feedback. AI copyright cases tested fair use. Civil-liberties groups criticized takedown rules. States resisted federal preemption. Agencies had to show whether federal AI adoption could be fast and trustworthy.",
    players: ["Federal judges", "Authors and AI companies", "Civil-liberties groups", "State leaders", "Federal agencies"],
    institutions: ["District courts", "Copyright Office reports", "FTC enforcement", "Federalism disputes", "Congressional oversight"],
    contest:
      "Evaluation is still unfinished: the next policy cycle will likely turn on lawsuits, enforcement outcomes, and whether Congress passes a broader national AI statute."
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
const stageSummary = document.querySelector("#stageSummary");
const stagePlayers = document.querySelector("#stagePlayers");
const stageInstitutions = document.querySelector("#stageInstitutions");
const stageContest = document.querySelector("#stageContest");

function renderStage(stageKey) {
  const stage = stages[stageKey];
  stageLabel.textContent = stage.label;
  stageDate.textContent = stage.date;
  stageTitle.textContent = stage.title;
  stageSummary.textContent = stage.summary;
  stagePlayers.innerHTML = stage.players.map((item) => `<li>${item}</li>`).join("");
  stageInstitutions.innerHTML = stage.institutions.map((item) => `<li>${item}</li>`).join("");
  stageContest.textContent = stage.contest;

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

renderStage("agenda");
renderTimeline();
