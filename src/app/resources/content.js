const person = {
  firstName: "Lorenzo",
  lastName: "Martinez",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "contact@lorenzo.tech",
  location: "America/Los_Angeles", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about technology, gaming, and share thoughts on other
      aspects of my professional life.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Lor3nzoMartinez",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lorenzo-martinez/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: false,
    title: (
      <>
        Recent project: <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Lorenzo, a Software engineer at Cisco Meraki, where I build the future
      of networking.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/contact-lorenzo",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Lorenzo is a Software Engineer with a foundation in both military
        discipline and full-stack development, He thrives at the intersection of
        systems design, user experience, and platform resilience. He brings 8+
        years of leadership from his time in the U.S. military into every
        engineering challenge he faces — whether he's architecting scalable
        APIs, enhancing web platforms, or mentoring teammates through complex
        builds.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Cisco Meraki",
        timeframe: "June 2021 - Present",
        role: "Full Stack Software Engineer",
        achievements: [
          <>
            Built backend APIs and frontend components using React, TypeScript,
            and Ruby on Rails to integrate network performance data and insights
            to enhanced platform engagement and improved user interaction for
            more than over 4 million active networks globally.
          </>,
          <>
            Led a workshop at Cisco Live, a global Cisco conference,
            demonstrating how customers can leverage AI technologies to improve
            network resilience; received an award for delivering one of the top
            talks at an international conference.
          </>,
          <>
            Played an integral role in developing a centralized feature that
            unified insights across all Meraki products, surfacing critical
            network health information to improve system visibility and
            resilience.
          </>,
          <>
            Led collaborative sprints with design, product, and engineering
            teams, ensuring the delivery of high impact features.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Pallet.click",
        timeframe: "May 2019 – June 2021",
        role: "Full Stack Web Developer",
        achievements: [
          <>
            Developed user-facing web applications that boosted engagement
            within a commercial sector marketplace.
          </>,
          <>
            Built full-stack solutions, integrating React frontend with GraphQL
            and AWS-powered backend services.
          </>,
          <>
            Focused on UX and performance improvements, leading to a 67% rise in
            active user sessions.
          </>,
          <>
            Designed scalable backend services and worked across the stack to
            optimize platform responsiveness.
          </>,
        ],
        images: [],
      },
      {
        company: "United States Army",
        timeframe: "Oct 2013 – Apr 2020",
        role: "25B Information Technology Specialist",
        achievements: [
          <>
            Supported and maintained IT infrastructure, ensuring system
            reliability and user engagement across mission-critical
            environments.
          </>,
          <>
            Authored technical documentation and conducted training to enhance
            system usability and team technical growth.
          </>,
          <>
            Fostered a growth mindset culture, encouraging continuous learning
            and cross-training within IT teams.
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
        name: "Seattle Pacific University",
        description: <>Bachelor of Science, Computer Science</>,
        timeframe: "Aug 2018 – Jun 2022",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skillsMenu: [
      {
        label: "Products",
        sections: [
          {
            links: [
              {
                description: "Get insights into your data",
                href: "/analytics",
                icon: "HiOutlineDocumentChartBar",
                label: "Analytics",
              },
              {
                description: "Protect your assets",
                href: "/security",
                icon: "HiOutlineShieldCheck",
                label: "Security",
              },
            ],
            title: "Featured",
          },
          {
            links: [
              {
                description: "Monitor your metrics",
                href: "/dashboard",
                icon: "HiOutlineSquares2X2",
                label: "Dashboard",
              },
              {
                description: "Configure your preferences",
                href: "/settings",
                icon: "HiCog8Tooth",
                label: "Settings",
              },
            ],
            title: "Tools",
          },
        ],
        suffixIcon: "chevron-down",
      },
      {
        label: "Solutions",
        sections: [
          {
            links: [
              {
                description: "Solutions for large organizations",
                href: "/enterprise",
                icon: "cube",
                label: "Enterprise",
              },
              {
                description: "Perfect for growing companies",
                href: "/startups",
                icon: "rocket",
                label: "Startups",
              },
            ],
            title: "By industry",
          },
          {
            links: [
              {
                description: "Tools and APIs",
                href: "/developers",
                icon: "code",
                label: "Developers",
              },
              {
                description: "Creative solutions",
                href: "/design",
                icon: "sparkle",
                label: "Design teams",
              },
            ],
            title: "By team",
          },
        ],
        suffixIcon: "chevron-down",
      },
      {
        label: "Resources",
        sections: [
          {
            links: [
              {
                description: "Learn how to use our platform",
                href: "/guides",
                icon: "book",
                label: "Guides",
              },
              {
                description: "Technical documentation",
                href: "/api",
                icon: "code",
                label: "API reference",
              },
            ],
            title: "Documentation",
          },
          {
            links: [
              {
                description: "Get your questions answered",
                href: "/help",
                icon: "infoCircle",
                label: "Help center",
              },
              {
                description: "Connect with other users",
                href: "/community",
                icon: "people",
                label: "Community",
              },
            ],
            title: "Support",
          },
        ],
        suffixIcon: "chevron-down",
      },
      {
        label: "Company",
        sections: [
          {
            links: [
              {
                description: "Learn about our journey",
                href: "/about",
                icon: "book",
                label: "Our story",
              },
              {
                description: "Join our team",
                href: "/careers",
                icon: "rocket",
                label: "Careers",
              },
            ],
            title: "About",
          },
          {
            links: [
              {
                description: "Latest updates and news",
                href: "/blog",
                icon: "document",
                label: "Blog",
              },
              {
                description: "Get in touch with us",
                href: "/contact",
                icon: "email",
                label: "Contact",
              },
            ],
            title: "Connect",
          },
        ],
        suffixIcon: "chevron-down",
      },
    ],
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
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
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
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

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Tech diaries",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Magnificent feats of engineering by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work };
