
export const mainData = {
    smallTitle: "Let's create something new!",
    introdution: "Hi, I'm",
    titleName: "Raphael",
    secondTitle: "A Full-Stack Web Developer",
    description: "I am a full-stack web developer specializing in building web sites!"
}

export const aboutData = {
    sectionTitle: "ABOUT",
    title: "Who I am",
    firstText: `Hello there! 👋 I'm Raphael Borba, a seasoned Full Stack Developer with over a year of
        experience in the ever-evolving tech landscape. Having started my programming journey in 2020,
        I've swiftly transitioned from being a Junior Developer to my current role as a Full Stack Developer Trainee.`,
    secondText: `Throughout my academic pursuits in programming at college, complemented by numerous bootcamps and courses,
        I've not only honed my skills but also gained practical, hands-on experience.
        My love for programming is deeply rooted in the daily thrill of overcoming challenges and transforming
        problems into impactful solutions.`,
    thirdText: `As I continue to navigate the dynamic world of development, 
        I bring a rich tapestry of theoretical insights and real-world application to my work.
        Join me on this coding adventure where innovation meets problem-solving, and together,
        let's craft solutions that make a significant difference! 💻✨`,
}

export const skillsData = {
    sectionTitle: "SKILLS",
    title: "What I Can Do",
    skills: [
        { tech: "HTML", path: "/skills/html.svg" },
        { tech: "CSS", path: "/skills/css.svg" },
        { tech: "Javascript", path: "/skills/javascript.svg" },
        { tech: "Typescript", path: "/skills/typescript.svg" },
        { tech: "React", path: "/skills/react.svg" },
        { tech: "Next", path: "/skills/next.svg" },
        { tech: "Tailwind", path: "/skills/tailwind.svg" },
        { tech: "Sass", path: "/skills/sass.svg" },
        { tech: "Redux", path: "/skills/redux.svg" },
        { tech: "Figma", path: "/skills/figma.svg" },
        { tech: "Node", path: "/skills/node.svg" },
        { tech: "Express", path: "/skills/express.svg" },
        { tech: "Nest", path: "/skills/nest.svg" },
        { tech: "Ruby", path: "/skills/ruby.svg" },
        { tech: "Rails", path: "/skills/rails.svg" },
        { tech: "Jest", path: "/skills/jest.svg" },
        { tech: "Postgre", path: "/skills/postgre.svg" },
        { tech: "Oracle", path: "/skills/oracle.svg" },
        { tech: "MongoDB", path: "/skills/mongodb.svg" },
        { tech: "Git", path: "/skills/git.svg" },
        { tech: "Linux", path: "/skills/linux.svg" },
        { tech: "Windows", path: "/skills/windows.svg" },
    ]
}

export const projectsData = {
    sectionTitle: "PROJECTS",
    title: "What I Have Built",
    projects: [
        {
            title: "Evently",
            mainStack: "Next JS",
            imgPath: "/projects/evently.png",
            pagePath: "evently",
            pageDetails: {
                description: `    <h3 className="">Evently: A Next.js 14 Innovation</h3>
                <p>Greetings, tech enthusiasts! 🌟 Over the Christmas holiday, I embarked on a thrilling project Evently. Powered
                 by Next.js 14, this venture explores the realms of Server Actions, Shadcn-UI elegance, Stripe for secure payments,
                  and the dynamic capabilities of MongoDB. 🛠️</p>
                <h4 className="">Project Highlights:</h4>
                <ul>
                  <li>- Event Mastery: Effortlessly craft and manage events with the finesse of Next.js 14's Server Actions.</li>
                  <li>- Aesthetic Excellence: Experience a sleek and user-friendly interface, thanks to the magic of Shadcn-UI.</li>
                  <li>- Financial Security: Seamlessly transact with confidence through integrated Stripe payments.</li>
                  <li>- Data Dynamo: Utilize MongoDB for dynamic and scalable event data storage.</li>
                  <li>- Empowering Creativity: Beyond ticketing, Evently empowers users to curate and manage their unique events.</li>
                </ul>
                <p>Evently is more than a ticketing platform; it's a holistic solution designed for both 
                organizers and attendees. 🎉 Dive into the seamless experience!</p>`,
                linkDeploy: "https://evently-ten-xi.vercel.app/",
                linkRepo: "https://github.com/RaphaelBorba/evently",
                stack: [
                    "Node.js",
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "TailwindCSS",
                    "Stripe",
                    "Zod",
                    "Clerk Auth",
                    "React Hook Form",
                    "Shadcn",
                    "Uploadthing",
                    "MongoDB",
                ]
            }
        },
        {
            title: "Portfolio",
            mainStack: "Next JS",
            imgPath: "/projects/portfolio.png",
            pagePath: "portfolio",
            pageDetails: {
                description: `Welcome to my portfolio, a showcase of my work constructed with the latest stack
                I'm studying – Next 14. It reflects my commitment to staying at the forefront of technology.
                Each project is a story of problem-solving, creativity, and technical prowess. 
                This space invites developers, collaborators, and tech enthusiasts to explore my 
                innovative solutions and ideas.🚀`,
                linkDeploy: "/",
                linkRepo: "https://github.com/RaphaelBorba/new_portfolio",
                stack: [
                    "Typescript",
                    "React",
                    "Next",
                    "Tailwind",
                    "ESLint",
                ]
            }
        },
        {
            title: "Car Hub",
            mainStack: "Next JS",
            imgPath: "/projects/carhub.png",
            pagePath: "carhub",
            pageDetails: {
                description: `Explore Car Hub, a learning endeavor in mastering Next.js, React, and Tailwind CSS.
                This project, offers a seamless car booking experience.
                Efficiency is at the forefront with Next.js, ensuring a responsive React app.
                Tailwind CSS provides a clean, responsive design, and API integrations fetch real-time car rental data.
                User empowerment is key, featuring dynamic search and filter components.
                The project's structure prioritizes code maintainability with organized folders.                
                Experience the fusion of tech and user-centric design at Car Hub. 🚗✨`,
                linkDeploy: "https://car-hub-sandy.vercel.app/",
                linkRepo: "https://github.com/RaphaelBorba/Car-Hub",
                stack: [
                    "Typescript",
                    "React",
                    "Next",
                    "Tailwind",
                    "API Integrations"
                ]
            }
        },
        {
            title: "Spider Verse",
            mainStack: "Next JS",
            imgPath: "/projects/spiderverse.png",
            pagePath: "spiderverse",
            pageDetails: {
                description: `This is the repository for the Spider-Verse project,
                    developed during a live on YouTube in partnership with DIO.
                    🕷️ The project consists of an interactive application inspired by the Spider-Man universe,
                    using leading front-end stacks: React, Next.js 13, the Framer Motion library, Sass,
                    and TypeScript to create an amazing and high-performance visual project. 🚀🎨`,
                linkDeploy: "https://spider-verse.vercel.app/",
                linkRepo: "https://github.com/RaphaelBorba/spider_verse",
                stack: [
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "ESLint",
                    "Framer Motion",
                    "SASS"
                ]
            }
        },
        {
            title: "TrackIt",
            mainStack: "React JS",
            imgPath: "/projects/trackit.png",
            pagePath: "trackit",
            pageDetails: {
                description: `Designed during the early stages of my React journey, this app is all about cultivating good habits.
                    With the Habit Tracker, you have the power to create and monitor your habits seamlessly.
                    Simply create a new habit, specify the days you want to commit,
                    and mark your progress with a satisfying check when you've successfully completed a task.
                    This app not only marked the beginning of my React exploration but also reflects the essence of simplicity and functionality.
                    It's a testament to my commitment to creating practical solutions that enhance daily life.
                    Explore the Habit Tracker and witness the starting point of my React learning journey,
                    where every click signifies a step towards building better habits. 🌟🔄`,
                linkDeploy: "https://trackit-rust.vercel.app/",
                linkRepo: "https://github.com/RaphaelBorba/TrackIt",
                stack: [
                    "React",
                    "React Router Dom",
                    "Styled Component",
                    "Axios",
                    "Auth"
                ]
            }
        }
    ]
}