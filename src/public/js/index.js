const titles = [
  "Technical Leader",
  "Software Engineer",
  "Michigan State Spartan",
  "Veteran",
  "AI Pioneer",
  "Dog Dad",
  "Twitch Streamer",
  "Army Officer",
  "Husband",
  "Python Developer",
  "Cloud Engineer",
  "DevOps Expert",
  "Palantir Foundry Developer"
]

const experienceData = {
  civilian: [
    {
      "title": "Senior Digital & Technology Manager",
      "employer": "General Mills Inc.",
      "logo": "./assets/gmi-twitter-logo.jpg",
      "startDate": "2025-01",
      "endDate": null,
      "location": "Golden Valley, MN",
      "skills": ["Google Cloud Platform", "Palantir Foundry", "Generative AI", "Glean - Agentic AI"],
      "bullets": [
          "Leads initiatives for General Mills' Sourcing Digitalization, focused on harnessing the power of AI and automation to transform material & services procurement",
          "Organizes and deploys cross-functional development teams to build in a complex cross-platform technical architecture",
          "Manages several multi-million dollar cost-saving solutions for the General Mills Sourcing organization",
          "Advises on expansion of Palantir Foundry platform and agentic AI exploration"
      ]
    },
    {
      "title": "Lead Infrastructure Engineer - Data and Analytics Platform",
      "employer": "General Mills Inc.",
      "logo": "./assets/gmi-twitter-logo.jpg",
      "startDate": "2023-01",
      "endDate": "2025-01",
      "location": "Golden Valley, MN",
      "skills": ["Google Cloud Platform", "HashiCorp Terraform", "Python"],
      "bullets": [
        "TODO",
        "TODO",
        "TODO"
      ]
    },
    {
      "title": "Senior Cloud Engineer",
      "employer": "C.H. Robinson",
      "logo": "./assets/chr-twitter-logo.jpg",
      "startDate": "2021-08",
      "endDate": "2023-01",
      "location": "Eden Prarie, MN",
      "skills": ["Azure", "HashiCorp Terraform", "GoLang"],
      "bullets": [
        "Built and managed Azure cloud infrastructure in support of cloud migration efforts",
        "Developed reusable Infrastructure as Code (IaC) modules using HashiCorp Terraform",
        "Utilized Azure Kubernetes Service to deploy and manage self-hosted IaC management and ephemeral GitHub Actions runners",
        "Deployed and manage custom Golang APIs to enable automation between systems"
      ]
    },
    {
      "title": "Big Data Platform Engineer",
      "employer": "General Mills Inc.",
      "logo": "./assets/gmi-twitter-logo.jpg",
      "startDate": "2020-08",
      "endDate": "2021-08",
      "location": "Golden Valley, MN",
      "skills": ["Hadoop", "Google Cloud Platform", "Terraform", "Python"],
      "bullets": []
    },
    {
      "title": "Advanced Application Developer - Supply Chain",
      "employer": "General Mills Inc.",
      "logo": "./assets/gmi-twitter-logo.jpg",
      "startDate": "2019-09",
      "endDate": "2020-08",
      "location": "Golden Valley, MN",
      "skills": [],
      "bullets": []
    },
    {
      "title": "Application Developer - Sales",
      "employer": "General Mills Inc.",
      "logo": "./assets/gmi-twitter-logo.jpg",
      "startDate": "2017-01",
      "endDate": "2019-09",
      "location": "Golden Valley, MN",
      "skills": [],
      "bullets": []
    },
    {
      "title": "Application Developer Intern",
      "employer": "General Mills Inc.",
      "logo": "./assets/gmi-twitter-logo.jpg",
      "startDate": "2016-05",
      "endDate": "2016-08",
      "location": "Golden Valley, MN",
      "skills": [],
      "bullets": []
    },
  ],
  military: [
    {
      "track": "military",
      "title": "Brigade Communications (Signal) Staff Officer",
      "employer": "MN Army National Guard",
      "logo": "./assets/34th_Infantry_Division_SSI.svg",
      "startDate": "2025-05",
      "endDate": null,
      "location": "Minnesota",
      "skills": [],
      "bullets": []
    },
    {
      "title": "Company Commander",
      "employer": "MN Army National Guard",
      "logo": "./assets/34th_Infantry_Division_SSI.svg",
      "startDate": "2023-08",
      "endDate": "2025-05",
      "location": "Minnesota",
      "skills": [],
      "bullets": [],
      "deployment": "Operation Spartan Shield 2024"
    },
    {
      "title": "Brigade Information Systems Engineer",
      "employer": "MN Army National Guard",
      "logo": "./assets/34th_Infantry_Division_SSI.svg",
      "startDate": "2023-01",
      "endDate": "2023-08",
      "location": "Minnesota",
      "skills": [],
      "bullets": []
    },
    {
      "title": "Battalion Communications (Signal) Staff Officer",
      "employer": "MN Army National Guard",
      "logo": "./assets/34th_Infantry_Division_SSI.svg",
      "startDate": "2020-01",
      "endDate": "2023-01",
      "location": "Minnesota",
      "skills": [],
      "bullets": []
    },
    {
      "title": "Company Executive Officer",
      "employer": "MN Army National Guard",
      "logo": "./assets/34th_Infantry_Division_SSI.svg",
      "startDate": "2018-01",
      "endDate": "2020-01",
      "location": "Minnesota",
      "skills": [],
      "bullets": [],
      "deployment": "Operation Spartan Shield 2018-2019"
    },
    {
      "title": "Platoon Leader",
      "employer": "MN Army National Guard",
      "logo": "./assets/34th_Infantry_Division_SSI.svg",
      "startDate": "2016-12",
      "endDate": "2018-01",
      "location": "Minnesota",
      "skills": [],
      "bullets": []
    },
    {
      "title": "Cadet",
      "employer": "MI Army National Guard",
      "logo": "./assets/197th_FA_Brigade_patch.png",
      "startDate": "2013-05",
      "endDate": "2016-12",
      "location": "Michigan",
      "skills": [],
      "bullets": []
    },
    {
      "title": "Cannon Crewmember",
      "employer": "MI Army National Guard",
      "logo": "./assets/197th_FA_Brigade_patch.png",
      "startDate": "2012-10",
      "endDate": "2013-05",
      "location": "Michigan",
      "skills": [],
      "bullets": []
    },
    {
      "title": "Forward Observer",
      "employer": "MI Army National Guard",
      "logo": "./assets/37th_Infantry_Brigade_SSI.svg.png",
      "startDate": "2011-02",
      "endDate": "2012-10",
      "location": "Michigan",
      "skills": [],
      "bullets": [],
      "deployment": "Operation Enduring Freedom 2012"
    },
    {
      "title": "Cannon Crewmember",
      "employer": "MI Army National Guard",
      "logo": "./assets/197th_FA_Brigade_patch.png",
      "startDate": "2010-05",
      "endDate": "2011-02",
      "location": "Michigan",
      "skills": [],
      "bullets": []
    }
  ]
}


const timelineContainer = document.getElementById("timeline-container");
const tabCivilian = document.getElementById("tab-civilian");
const tabMilitary = document.getElementById("tab-military");

function formatDate(d) {
  if (!d) return 'Present';
  const [y, m] = d.split('-');
  const date = new Date(Number(y), m ? Number(m) - 1 : 0);
  return date.toLocaleString('default', { month: 'short', year: 'numeric' });
}

function formatDateRange(start, end) {
  return `${formatDate(start)} - ${formatDate(end)}`;
}

function renderExperience(exp, idx, total) {
  const sideClass = idx % 2 === 0 ? "timeline-start md:text-end" : "timeline-end";
  const logo = exp.logo
    ? `<img src="${exp.logo}" alt="${exp.employer} logo"
        class="w-12 h-12 object-contain rounded bg-base-200 p-1 border border-base-300 mb-2 inline-block align-middle"
      >`
    : "";
  const deployment = exp.deployment
    ? `<span class="badge badge-accent ms-2">${exp.deployment}</span>`
    : "";
  return `
    <li>
      <div class="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="${sideClass} mb-10">
        <time class="font-mono italic">${formatDateRange(exp.startDate, exp.endDate)}</time>
        <div class="text-lg font-semibold">
          ${exp.title}
        </div>
        <div class="text-base-content/70">
          ${logo}
          ${exp.employer}${exp.location ? " • " + exp.location : ""}
        </div>
        ${deployment}
      </div>
      ${idx < total - 1 ? "<hr />" : ""}
    </li>
  `;
}

function renderTimeline(track) {
  const data = experienceData[track];
  const list = data.map((item, i) => renderExperience(item, i, data.length)).join("");
  timelineContainer.innerHTML = `
      <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        ${list}
      </ul>
    `;
}

function activateTab(trackToActivate) {
  tabCivilian.classList.toggle("tab-active", trackToActivate === "civilian");
  tabMilitary.classList.toggle("tab-active", trackToActivate === "military");
  tabCivilian.setAttribute("aria-selected", trackToActivate === "civilian" ? "true" : "false");
  tabMilitary.setAttribute("aria-selected", trackToActivate === "military" ? "true" : "false");
  renderTimeline(trackToActivate);
}

tabCivilian.addEventListener("click", () => activateTab("civilian"));
tabMilitary.addEventListener("click", () => activateTab("military"))
activateTab("civilian");

// const tabs = {
//   civilian: {
//       tab: document.getElementById('tab-civilian'),
//       panel: document.getElementById('panel-civilian')
//   },
//   military: {
//       tab: document.getElementById('tab-military'),
//       panel: document.getElementById('panel-military')
//   }
// };
// function activate(which) {
// const other = which === 'civilian' ? 'military' : 'civilian';
// tabs[which].tab.classList.add('tab-active');
// tabs[which].tab.setAttribute('aria-selected', 'true');
// tabs[which].panel.classList.remove('hidden');

// tabs[other].tab.classList.remove('tab-active');
// tabs[other].tab.setAttribute('aria-selected', 'false');
// tabs[other].panel.classList.add('hidden');
// }
// tabs.civilian.tab.addEventListener('click', () => activate('civilian'));
// tabs.military.tab.addEventListener('click', () => activate('military'));
// activate('civilian');