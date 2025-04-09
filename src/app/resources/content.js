import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Rudik",
  lastName: "Arakelyan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "America/Los_Angeles", 
  languages: ["English", "Spanish", "Russian", "Armenian"],
};


const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/boxerarakelyan777",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rudik-arakelyan/",
  },
  {
    name: "Email",
    icon: "email",
    link: "rudik.arakelyan777@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer</>,
  subline: (
    <>
      I'm Rudik, a software engineer studying at <InlineCode>UW</InlineCode>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Rudik Arakelyan, a passionate software engineer with a diverse skill set spanning web development, artificial intelligence,
         and coding challenges. My expertise includes developing responsive websites, working on cutting-edge AI projects, and using resources 
         like OpenAI, NextJS, and Pinecone to build innovative solutions. I’m excited about the future of AI and am committed to exploring its potential
          to transform industries and solve complex problems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Headstarter",
        timeframe: "2024 - Present",
        role: "Software Engineering Fellow",
        achievements: [
          <>
            Built 6 AI/ML apps using AWS, Next.js, TypeScript, and OpenAI, 
            improving deployment speed by 40% and scalability by 30%
          </>,
          <>
            Led a team of 4 to launch MemorixAI with Clerk and Firebase, 
            gaining 100+ users and 15+ actives in the first 7 days
          </>,
           <>
           Increased trend accuracy by 35% in ProfTracker using Pinecone 
           and Langchain with fine-tuned sentiment analysis
         </>,
         <>
           Cut review time by 40% in TransMark by enabling real-time transcript 
           annotation with Express and Tailwind CSS
         </>,
          <>
          Scaled LookMate to 1,000+ users in 2 months by deploying AI outfit 
          suggestions using LLMs, agents, and Next.js
        </>,
        <>
          Streamlined CI/CD using Docker and GitHub Actions, 
          cutting deployment errors by 25% across all major projects
        </>,         
        <>
        Gained weekly mentorship from engineers at Google, Meta, and Amazon
         by presenting app demos and receiving feedback
    </>,          
        
         
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Falcon IT Development",
        timeframe: "2013 - Present",
        role: "Software Engineer Volunteer Intern",
        achievements: [
          <>
            Delivered client dashboards with PHP, Symfony, and React, increasing feature rollout speed by 30% across 3 accounts
          </>,
          <>
            Built APIs with Django and PostgreSQL that improved backend throughput by 15% through caching and schema tuning
          </>,
        <>
            Automated staging pipelines using Docker and GitHub, reducing deployment issues by 25% across two platforms
          </>,
          <>
            Refactored legacy systems in Java and Nest.js to reduce technical debt and improve reliability across enterprise tools
          </>,
         <>
            Created internal dev dashboards to monitor CI/CD health, reducing debug time by 20% across 2 teams
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Washington",
        description: <>Bachelor’s Degree in Computer Science</>,
        releventcourseworl: 
        <>
            Relevant Coursework: Data Structures and Algorithms, Software Engineering, Deep Learning, Operating Systems, Databases
        </>
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};


const projects = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /projects routes
};


export { person, social, home, about, projects };
