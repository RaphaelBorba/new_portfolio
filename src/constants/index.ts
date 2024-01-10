
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
        { tech: "Node", path: "/skills/node.svg" },
        { tech: "Express", path: "/skills/express.svg" },
        { tech: "Nest", path: "/skills/nest.svg" },
        { tech: "Redux", path: "/skills/redux.svg" },
        { tech: "Jest", path: "/skills/jest.svg" },
        { tech: "Ruby", path: "/skills/ruby.svg" },
        { tech: "Rails", path: "/skills/rails.svg" },
        { tech: "Postgre", path: "/skills/postgre.svg" },
        { tech: "Oracle", path: "/skills/oracle.svg" },
        { tech: "MongoDB", path: "/skills/mongodb.svg" },
        { tech: "Git", path: "/skills/git.svg" },
        { tech: "Tailwind", path: "/skills/tailwind.svg" },
        { tech: "Sass", path: "/skills/sass.svg" },
        { tech: "Figma", path: "/skills/figma.svg" },
        { tech: "Linux", path: "/skills/linux.svg" },
        { tech: "Windows", path: "/skills/windows.svg" },
    ]
}

export const projectsData = {
    sectionTitle: "PROJECTS",
    title: "What I Have Built",
    projects: [
        {
            title: "WealthLearn: Coming Soon",
            mainStack: "Next JS | Nest JS | PostgreSQL",
            imgPath: "/projects/wealthlearn.png",
            pagePath: "wealthlearn",
            pageDetails: {
                description: `    <h3 className="">Wealthlearn is a web site where you are be able to study finances </h3>
                <p>Think of it as a friendly guide that explains things like stocks, bonds, and mutual funds in simple, 
                jargon-free terms. I'll also be sharing what I know about taxes and the amazing things (instead of "cool things")
                 that can happen when you invest your money – not just growing your numbers, but building your future, securing 
                 retirement, and maybe even opening up some exciting new avenues.</p>
                <h4>Project Highlights:</h4>
                <ul>
                  <li className="cursor-default">- Learn all about investments: Here, I'll teach you about the different types of investments you can buy, from stocks and bonds to mutual funds.</li>
                  <li className="cursor-default">- Test your investing skills: You'll be able to simulate investments, giving you practical experience in how money works in the market.</li>
                  <li className="cursor-default">- Track your progress: A dynamic dashboard will show you how your test investments are performing, letting you visualize your financial journey.</li>
                  <li>- Built with the latest technology: I'm using the newest tools and frameworks to make Wealthlearn a reliable and user-friendly platform.</li>
                </ul>
                <p>Wealthlearn is a project I've been wanting to do for a long time. Now that I 
                have the knowledge and skills to make it possible, I've finally started building it 😊.</p>`,
                linkDeploy: "/project/wealthlearn",
                linkRepo: "/project/wealthlearn",
                stack: [
                    "TypeScript",
                    "React.js",
                    "Next.js",
                    "TailwindCSS",
                    "Shadcn",
                    "Node.js",
                    "Nest.js",
                    "JWT",
                    "Prisma",
                    "PostgreSQL",
                    "API Rest",
                    "Figma",
                ]
            }
        },
        {
            title: "Evently",
            mainStack: "Next JS | MongoDB",
            imgPath: "/projects/evently.png",
            pagePath: "evently",
            pageDetails: {
                description: `    <h3 className="">Evently: A Next.js 14 Innovation</h3>
                <p>Greetings, tech enthusiasts! 🌟 Over the Christmas holiday, I embarked on a thrilling project Evently. Powered
                 by Next.js 14, this venture explores the realms of Server Actions, Shadcn-UI elegance, Stripe for secure payments,
                  and the dynamic capabilities of MongoDB. 🛠️</p>
                <h4>Project Highlights:</h4>
                <ul>
                  <li className="cursor-default">- Event Mastery: Effortlessly craft and manage events with the finesse of Next.js 14's Server Actions.</li>
                  <li className="cursor-default">- Aesthetic Excellence: Experience a sleek and user-friendly interface, thanks to the magic of Shadcn-UI.</li>
                  <li className="cursor-default">- Financial Security: Seamlessly transact with confidence through integrated Stripe payments.</li>
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
                description: `  <h3>Portfolio🚀</h3>
                <p>Explore my portfolio, a curated collection highlighting the projects I've undertaken and the skills I've been studying:</p>
                <ul>
                  <li><strong>Project Showcase:</strong> Discover a variety of projects demonstrating my hands-on experience and creative problem-solving.</li>
                  <li><strong>Skill Development:</strong> Witness the evolution of my skills, from mastering languages and frameworks to innovative problem-solving approaches.</li>
                  <li><strong>Continuous Learning:</strong> A testament to my commitment to staying updated with the latest technologies and industry best practices.</li>
                  <li><strong>Passion for Innovation:</strong> Each project reflects not just technical proficiency but a passion for innovation, user-centric design, and seamless functionality.</li>
                </ul>
                <p>Join me on this journey where my portfolio becomes a visual narrative of my growth as a developer.
                 From coding challenges to full-fledged projects, each entry is a chapter in my ongoing learning and exploration.</p>`,
                linkDeploy: "/",
                linkRepo: "https://github.com/RaphaelBorba/new_portfolio",
                stack: [
                    "Typescript",
                    "React",
                    "Next",
                    "Tailwind",
                    "ESLint",
                    "Framer Motion",
                ]
            }
        },
        {
            title: "Car Hub",
            mainStack: "Next JS",
            imgPath: "/projects/carhub.png",
            pagePath: "carhub",
            pageDetails: {
                description: `  <h3>CarHub: Booking Cars</h3>
                <p>Delve into the world of Next.js with my latest project, designed to study and implement key features:</p>
                <ul>
                  <li><strong>Search:</strong> Efficient and dynamic search functionality for seamless navigation.</li>
                  <li><strong>Filtering:</strong> Advanced filtering options for a personalized user experience.</li>
                  <li><strong>External Requests:</strong> Real-time data fetching from external APIs for up-to-date content.</li>
                  <li><strong>Responsive Design:</strong> A visually pleasing interface that adapts to various devices.</li>
                </ul>
                <p>This project not only demonstrates technical proficiency in Next.js but also showcases creativity in 
                feature development, focusing on user engagement and interactivity. Join me in this exploration where
                 coding meets innovation.</p>
              `,
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
                description: `  <h3>Spider-Verse Project</h3>
                <p>Explore the Spider-Verse project, a collaboration developed live on YouTube in partnership with DIO. 🕷️
                 This interactive application is a visual masterpiece inspired by the Spider-Man universe, leveraging
                  cutting-edge front-end stacks:</p>
                <ul>
                  <li><strong>React & Next.js 13:</strong> Harnessing the power of React and the latest version of Next.js for a robust and dynamic user interface.</li>
                  <li><strong>Framer Motion Library:</strong> Adding smooth animations and transitions for an engaging user experience.</li>
                  <li><strong>Sass:</strong> Utilizing the power of Sass for efficient and maintainable styling.</li>
                  <li><strong>TypeScript:</strong> Ensuring a high level of code integrity and developer productivity.</li>
                  <li><strong>Not Responsive:</strong> This web site isn't responsive, but I intend to make it soon.</li>
                </ul>
                <p>This project is a testament to creativity and high-performance development, blending the excitement of
                 the Spider-Verse with the latest advancements in web technology. 🚀🎨</p>
              `,
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
                description: `<h2>Habit Tracker App</h2>
                <p>Embark on a journey of cultivating good habits with the Habit Tracker app, designed during the early stages
                 of my React exploration. 🌟🔄 This application empowers you to effortlessly create and monitor your habits:</p>
                <ul>
                  <li><strong>Create and Monitor:</strong> Seamlessly create new habits, specify commitment days, and effortlessly track your progress.</li>
                  <li><strong>Simplicity and Functionality:</strong> Reflecting the essence of simplicity and functionality, this app marks the beginning of my React journey.</li>
                  <li><strong>Practical Solutions:</strong> A testament to my commitment to creating practical solutions that enhance daily life and promote positive habits.</li>
                </ul>
                <p>Explore the Habit Tracker and witness the starting point of my React learning journey, where every click signifies a step
                 towards building better habits.</p>
              `,
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

export const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}