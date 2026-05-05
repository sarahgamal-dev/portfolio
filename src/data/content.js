export const content = {
  en: {
    navbar: {
      logo: "SG",
      links: [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Services", href: "#services" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Achievements", href: "#achievements" }
      ],
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Sara Gamal El-Nabawy",
      title: "",
      statement: "I help businesses win with high-performance web applications",
      viewProjects: "View Projects",
      contact: "Contact",
      downloadCV: "Download CV"
    },
    about: {
      title: "About Me",
      greeting: "Hello,\nI am sara gamal",
      description: "I’m a front-end developer passionate about building responsive, high-performance web applications. I specialize in HTML, CSS, JavaScript, React, and Next.js, with a strong focus on clean code and great user experience.\n\nI can turn Figma or Adobe XD designs into fully functional websites, build interactive components, and optimize performance. I also have experience with Node.js, Django, authentication systems, dashboards, and real-time features, and have deployed live applications successfully. My goal is to provide practical solutions that help clients turn their ideas into successful digital products.",
      stats: [
        { value: "5", label: "Projects", icon: "🚀" },
        { value: "20%", label: "Performance Improved", icon: "⚡" },
        { value: "30%", label: "Code Duplication Reduced", icon: "🧹" },
        { value: "2+", label: "Live Apps Deployed", icon: "🌐" }
      ]
    },
    education: {
      title: "EDUCATION & CERTIFICATIONS",
      label: "EDUCATION & CERTIFICATIONS",
      eduTitle: "Education",
      certTitle: "Certifications",
      degree: "Bachelor's Degree in Information Technology",
      university: "Kafrelsheikh University",
      years: "2020 — 2024",
      gradProject: "Virtual Reality — Excellent Grade",
      logo: "./src/assets/images/kfu-logo.png",
      certs: [
        {
          title: "Full-Stack Web Development",
          org: "Digilians Professional Track • 2026 — Present",
          description: "Intensive training on building end-to-end applications using modern tech stacks and industry best practices.",
          pdf: "",
          icon: "../../src/assets/images/images.png"
        },
        {
          title: "Front-End Developer Trainee",
          org: "Route Academy • 2025",
          description: "Focusing on advanced React.js, state management, and building high-performance user interfaces.",
          pdf: "../../src/assets/cv/Route.pdf",
          icon: "../../src/assets/cv/route.png"
        },
        {
          title: "UI/UX & Front-End Trainee",
          org: "ITI (Information Technology Institute) • 2023",
          description: "Explored user-centered design principles along with core frontend technologies (HTML, CSS, JS).",
          pdf: "../../src/assets/cv/iti.pdf",
          icon: "../../src/assets/cv/iti.png"
        }
      ]
    },
    skills: {
      title: "My Skills",
      subtitle: "A collection of technical and soft skills I possess.",
      categories: [
        {
          id: "frontend",
          name: "Front End",
          icon: "💻",
          description: "Designing polished user interfaces and responsive experiences using modern frontend tools.",
          items: [
            { title: "HTML5 & CSS3", description: "Building responsive and accessible structural layouts.", icon: "🌐" },
            { title: "JavaScript", description: "Creating dynamic and interactive user experiences.", icon: "📜" },
            { title: "ReactJS", description: "Developing scalable component-based frontend applications.", icon: "⚛️" },
            { title: "Next.js", description: "Building performant production-ready React applications.", icon: "🚀" },
            { title: "Bootstrap & Tailwind", description: "Designing modern UI with utility-first and grid frameworks.", icon: "🎨" }
          ]
        },
        {
          id: "backend",
          name: "Back End",
          icon: "⚙️",
          description: "Building robust server-side systems, APIs, and database-driven backends.",
          items: [
            { title: "Node.js", description: "Building scalable server-side applications and REST APIs.", icon: "🚀" },
            { title: "SQL Server", description: "Designing and managing relational databases for data storage.", icon: "🗄️" },
            { title: "MySQL", description: "Implementing efficient database solutions for web apps.", icon: "📊" }
          ]
        },
        {
          id: "concepts",
          name: "Concepts",
          icon: "🧠",
          description: "Applying software architecture knowledge and best engineering practices.",
          items: [
            { title: "Git & GitHub", description: "Version control and collaborative development workflows.", icon: "🐙" },
            { title: "Design Patterns", description: "Applying proven architectural solutions to software design.", icon: "📐" },
            { title: "OOP", description: "Organizing code with Object-Oriented Programming principles.", icon: "💎" },
            { title: "Data Structures", description: "Optimizing data organization and algorithm efficiency.", icon: "🧩" }
          ]
        },
        {
          id: "softskills",
          name: "Soft Skills",
          icon: "🤝",
          description: "Working effectively with people and adapting quickly to changing requirements.",
          items: [
            { title: "Communication", description: "Effective interaction and idea sharing with team members.", icon: "🗣️" },
            { title: "Teamwork", description: "Collaborating productively in diverse group environments.", icon: "👥" },
            { title: "Problem Solving", description: "Analyzing challenges and implementing optimal solutions.", icon: "🔍" },
            { title: "Time Management", description: "Prioritizing tasks and meeting project deadlines efficiently.", icon: "⏳" },
            { title: "Adaptability", description: "Adjusting quickly to new environments and technologies.", icon: "🔄" },
            { title: "Fast Learner", description: "Quickly mastering new concepts and technical skills.", icon: "📖" }
          ]
        },
        {
          id: "languages",
          name: "Languages",
          icon: "🌐",
          description: "Communicating across languages with strong written and spoken skills.",
          items: [
            { title: "Arabic", description: "Native language with excellent verbal and written skills.", icon: "🇪🇬" },
            { title: "English", description: "Professional working proficiency for international collaboration.", icon: "🇺🇸" }
          ]
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      labels: {
        source: "Source",
        role: "Role",
        challenge: "Challenge",
        action: "Action",
        result: "Result",
        features: "Features",
        live: "Live Demo",
        viewDetails: "View Case Study",
        hideDetails: "Hide Details",
        clickDetails: "Click to view details"
      },
      list: [
        {
          title: "Daniels – Professional Portfolio",
          image: "./src/assets/images/daniels-mockup.png",
          source: "Portfolio Case Study",
          role: "Frontend Developer",
          challenge: "Creating a clean, minimalist portfolio that highlights personal brand and projects with a focus on typography and high-quality imagery.",
          action: "Developed a fully responsive website using HTML, CSS, and Bootstrap, ensuring perfect display across all devices and implementing smooth transitions.",
          result: "Delivered a sophisticated, fast-loading portfolio that achieved a 40% increase in user session duration and positive feedback on design clarity.",
          features: ["Responsive Grid System", "Minimalist UI Design", "Professional Branding", "Mobile-first approach"],
          tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
          demo: "http://portfolio-daniels-r54e-is72vrn6b-sarahgamal-devs-projects.vercel.app/",
          github: "https://github.com"
        },
        {
          title: "FreshCart React – Advanced E-commerce",
          image: "./src/assets/images/ecommerce-react-mockup.png",
          source: "React E-commerce Project",
          role: "Frontend Developer",
          challenge: "Building a complex e-commerce interface with state-of-the-art filtering, search, and cart synchronization features.",
          action: "Utilized React with Context API for state management, integrated custom hooks for data fetching, and designed a high-performance grid system.",
          result: "Delivered a feature-rich, scalable e-commerce application with a seamless user journey and optimized performance.",
          features: ["Real-time Search & Filtering", "Persistent Shopping Cart", "Dynamic Product Sliders", "User Authentication Flow"],
          tech: ["React.js", "Context API", "CSS Modules", "Vite"],
          demo: "https://e-commerce-react-project-7c5z-11zqe6vkf.vercel.app/",
          github: "https://github.com"
        }
      ]
    },
    experience: {
      title: "Work Experience",
      labels: {
        challenge: "Challenge:",
        action: "Action:",
        result: "Result:"
      },
      list: [
        {
          company: "Digilians",
          role: "Full Stack Developer",
          duration: "Feb – May 2026",
          icon: "../../src/assets/images/images.png",
          challenge: "Businesses struggle to integrate disjointed front-end apps with secure back-end systems, leading to performance bottlenecks.",
          action: "Engineered performant end-to-end applications using React and Node.js with scalable state management and secure API routing.",
          result: "Improved system reliability by 25% and reduced cross-module communication latency through optimized clean architecture."
        },
        {
          company: "Route",
          role: "Front-End Developer Trainee",
          duration: "Mar – Oct 2025",
          icon: "../../src/assets/cv/route.png",
          challenge: "Dynamic web apps often suffer from slow load times and inconsistent UI, negatively impacting user retention.",
          action: "Delivered high-performance apps using React and Next.js, optimizing asset loading and implementing responsive accessibility standards.",
          result: "Boosted frontend performance scores and delivered pixel-perfect interfaces that improved user engagement."
        },
        {
          company: "ITI (Information Technology Institute)",
          role: "UI/UX & Front-End Trainee",
          duration: "June – Aug 2023",
          icon: "../../src/assets/cv/iti.png",
          challenge: "Non-intuitive user interfaces lead to high churn rates and a disconnect between business goals and user needs.",
          action: "Combined UI/UX design principles with modern web tech (HTML5/CSS3/JS) to build interactive, user-centered prototypes.",
          result: "Successfully designed and deployed 3 responsive prototypes, bridging the gap between design vision and technical implementation."
        }
      ]
    },
    services: {
      title: "My Services",
      list: [
        {
          title: "Database Design",
          description: "Efficient schemas optimized for performance and scalability.",
          icon: "🗄️",
          color: "#22c55e",
          tags: [
            { name: "MongoDB", icon: "🍃" },
            { name: "Mongoose", icon: "🌵" }
          ]
        },
        {
          title: "Web Applications",
          description: "Building full-featured web applications using React.js and Node.js.",
          icon: "🌐",
          color: "#3b82f6",
          tags: [
            { name: "React.js", icon: "⚛️" },
            { name: "Node.js", icon: "⚙️" },
            { name: "Express", icon: "🚀" },
            { name: "Redux", icon: "🔄" }
          ]
        },
        {
          title: "Frontend Development",
          description: "Creating responsive and interactive web interfaces with excellent user experience.",
          icon: "💻",
          color: "#ef4444",
          tags: [
            { name: "React.js", icon: "⚛️" },
            { name: "HTML5", icon: "📄" },
            { name: "CSS3", icon: "🎨" },
            { name: "TailwindCSS", icon: "🌊" }
          ]
        }
      ],
      cta: {
        title: "Ready to start your project?",
        subtitle: "Let's build something amazing together.",
        pricingHeader: "💼 Transparent Pricing",
        pricingTitle: "Choose Your Plan",
        pricingSubtitle: "No hidden fees. Every plan is scoped to deliver real value — from a simple landing page to a full enterprise system.",
        pricingInfo: "All plans include source code delivery, clean architecture, and a post-launch review session. Prices are estimates — final cost depends on project scope.",
        notSureTitle: "Not Sure Which Plan Fits?",
        notSureDesc: "Reach out and we'll figure out the best scope and budget together.",
        priceBtn: "View Pricing Plan",
        backBtn: "Back to Portfolio",
        contactBtn: "Contact Me"
      }
    },
    testimonials: {
      title: "Testimonials",
      list: [
        {
          name: "eng. Sohila Wahed",
          role: "Frontend Engineer",
          feedback: "Love it! 👏💯 Amazing work, engineer! May God grant you a successful start. Keep going and don’t stop. Do lots of projects and explore different ideas. As long as your hands are coding, you’re on the right path. Don’t rush the results — just focus on doing what’s in front of you. Just because the course is over doesn’t mean learning stops — on the contrary, this is just the beginning. In our field, you always need to stay updated with the latest."
        },
        {
          name: "Creative Client",
          role: "Client",
          feedback: "Your work is excellent, Sara, and of high quality."
        }
      ],
      comingSoon: "Come soon"
    },
    achievements: {
      title: "Measurable Achievements",
      list: [
        { title: "5+ Apps", description: "Deployed applications including E-commerce and Admin Dashboards." },
        { title: "15+ RESTful APIs", description: "Integrated endpoints, improving communication by 20%." },
        { title: "30% Code Reduction", description: "Built scalable component-based architecture in React." },
        { title: "CI/CD Workflows", description: "Deployed 2+ apps live on Vercel/Render." }
      ]
    },
    contact: {
      title: "Get In Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      info: "I'm looking forward to hearing from you. Whether it's a project inquiry or just a hello!",
      emailAddress: "sara.gamal.dev@gmail.com",
      whatsapp: "+201148318711"
    },
    footer: {
      getInTouch: "GET IN TOUCH ✨",
      getInTouchDesc1: "I’m always open to new opportunities, exciting projects, and creative collaborations.",
      getInTouchDesc2: "If you have an idea, a project, or just want to connect — feel free to reach out anytime.",
      aboutMe: "ABOUT ME 👩💻",
      aboutMeDesc: "I’m a Full-Stack Developer with a strong passion for React.js and modern web development. I focus on building responsive, user-friendly, and scalable web applications that bring ideas to life with clean and efficient code.",
      copyright: "© 2026 Sara Gamal. All rights reserved. Built with ❤️ & Code"
    }
  },
  ar: {
    navbar: {
      logo: "SG",
      links: [
        { name: "الرئيسية", href: "#hero" },
        { name: "عني", href: "#about" },
        { name: "التعليم", href: "#education" },
        { name: "المهارات", href: "#skills" },
        { name: "المشاريع", href: "#projects" },
        { name: "الخبرة", href: "#experience" },
        { name: "الخدمات", href: "#services" },
        { name: "التوصيات", href: "#testimonials" },
        { name: "الإنجازات", href: "#achievements" }
      ],
      contact: "اتصل"
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "سارة جمال النبوي",
      title: "",
      statement: "أساعد الشركات على الفوز بتطبيقات ويب عالية الأداء",
      viewProjects: "عرض المشاريع",
      contact: "اتصل بي",
      downloadCV: "تحميل السيرة الذاتية"
    },
    about: {
      title: "عني",
      greeting: "مرحباً،\nأنا سارة جمال",
      description: "أنا مطور واجهات أمامية شغوف ببناء تطبيقات ويب متجاوبة وعالية الأداء. أتخصص في HTML و CSS و JavaScript و React و Next.js، مع تركيز قوي على كتابة كود نظيف وتوفير تجربة مستخدم ممتازة.\n\nأستطيع تحويل تصاميم Figma أو Adobe XD إلى مواقع ويب متكاملة، وبناء مكونات تفاعلية، وتحسين أداء الموقع. أمتلك أيضاً خبرة في التعامل مع Node.js و Django وأنظمة المصادقة ولوحات التحكم وميزات الوقت الفعلي (real-time)، بالإضافة إلى نشر مشاريع وتطبيقات حية بنجاح. هدفي هو تقديم حلول عملية تساعد العملاء على تحويل أفكارهم إلى منتجات رقمية ناجحة.",
      stats: [
        { value: "5", label: "مشاريع", icon: "🚀" },
        { value: "20%", label: "تحسين الأداء", icon: "⚡" },
        { value: "30%", label: "تقليل تكرار الكود", icon: "🧹" },
        { value: "2+", label: "تطبيقات منشورة", icon: "🌐" }
      ]
    },
    education: {
      title: "التعليم والشهادات",
      label: "التعليم والشهادات",
      eduTitle: "التعليم",
      certTitle: "الشهادات",
      degree: "بكالوريوس تكنولوجيا المعلومات",
      university: "جامعة كفر الشيخ",
      years: "2020 — 2024",
      gradProject: "الواقع الافتراضي — تقدير ممتاز",
      logo: "./src/assets/images/kfu-logo.png",
      certs: [
        {
          title: "تطوير الويب الشامل",
          org: "مسار Digilians المهني • 2026 — الحاضر",
          description: "تدريب مكثف على بناء تطبيقات متكاملة من البداية إلى النهاية باستخدام أحدث التقنيات وأفضل الممارسات.",
          pdf: "",
          icon: "../../src/assets/images/images.png"
        },
        {
          title: "متدرب مطور واجهات أمامية",
          org: "أكاديمية Route • 2025",
          description: "التركيز على تقنيات React.js المتقدمة، إدارة الحالة، وبناء واجهات مستخدم عالية الأداء.",
          pdf: "../../src/assets/cv/Route.pdf",
          icon: "../../src/assets/cv/route.png"
        },
        {
          title: "متدرب UI/UX والواجهات الأمامية",
          org: "معهد تكنولوجيا المعلومات (ITI) • 2023",
          description: "استكشاف مبادئ التصميم المتمحورة حول المستخدم بالإضافة إلى تقنيات الواجهة الأمامية الأساسية.",
          pdf: "../../src/assets/cv/iti.pdf",
          icon: "../../src/assets/cv/iti.png"
        }
      ]
    },
    skills: {
      title: "مهاراتي",
      subtitle: "مجموعة من المهارات التقنية والشخصية التي أمتلكها.",
      categories: [
        {
          id: "frontend",
          name: "الواجهات الأمامية",
          icon: "💻",
          description: "تصميم واجهات مستخدم جذابة وتجربة متجاوبة باستخدام أحدث أدوات الويب.",
          items: [
            { title: "HTML5 & CSS3", description: "بناء هياكل صفحات متجاوبة وسهلة الوصول.", icon: "🌐" },
            { title: "JavaScript", description: "إنشاء تجارب مستخدم ديناميكية وتفاعلية.", icon: "📜" },
            { title: "ReactJS", description: "تطوير تطبيقات واجهة أمامية قابلة للتوسع قائمة على المكونات.", icon: "⚛️" },
            { title: "Next.js", description: "بناء تطبيقات React متطورة وجاهزة للنشر بأداء عالٍ.", icon: "🚀" },
            { title: "Bootstrap & Tailwind", description: "تصميم واجهات مستخدم حديثة باستخدام أطر عمل مرنة.", icon: "🎨" }
          ]
        },
        {
          id: "backend",
          name: "الواجهات الخلفية",
          icon: "⚙️",
          description: "بناء أنظمة خادمية قوية وواجهات برمجة تطبيقات ودمج قواعد البيانات.",
          items: [
            { title: "Node.js", description: "بناء تطبيقات جانب الخادم وواجهات برمجة تطبيقات REST.", icon: "🚀" },
            { title: "SQL Server", description: "تصميم وإدارة قواعد البيانات العلائقية لتخزين البيانات.", icon: "🗄️" },
            { title: "MySQL", description: "تنفيذ حلول قواعد بيانات فعالة لتطبيقات الويب.", icon: "📊" }
          ]
        },
        {
          id: "concepts",
          name: "المفاهيم البرمجية",
          icon: "🧠",
          description: "تطبيق المعرفة المعمارية وأفضل الممارسات الهندسية في المشاريع.",
          items: [
            { title: "Git & GitHub", description: "التحكم في الإصدار وسير عمل التطوير التعاوني.", icon: "🐙" },
            { title: "Design Patterns", description: "تطبيق الحلول المعمارية المثبتة في تصميم البرمجيات.", icon: "📐" },
            { title: "OOP", description: "تنظيم الكود باستخدام مبادئ البرمجة الموجهة للكائنات.", icon: "💎" },
            { title: "Data Structures", description: "تحسين تنظيم البيانات وكفاءة الخوارزميات.", icon: "🧩" }
          ]
        },
        {
          id: "softskills",
          name: "المهارات الشخصية",
          icon: "🤝",
          description: "العمل بفعالية مع الفرق والتكيف بسرعة مع متطلبات المشاريع.",
          items: [
            { title: "التواصل", description: "التفاعل الفعال وتبادل الأفكار مع أعضاء الفريق.", icon: "🗣️" },
            { title: "العمل الجماعي", description: "التعاون بشكل منتج في بيئات مجموعات متنوعة.", icon: "👥" },
            { title: "حل المشكلات", description: "تحليل التحديات وتنفيذ الحلول المثلى.", icon: "🔍" },
            { title: "إدارة الوقت", description: "تحديد أولويات المهام والوفاء بالمواعيد النهائية للمشروع.", icon: "⏳" },
            { title: "القدرة على التكيف", description: "التكيف بسرعة مع البيئات والتقنيات الجديدة.", icon: "🔄" },
            { title: "سرعة التعلم", description: "إتقان المفاهيم والمهارات التقنية الجديدة بسرعة.", icon: "📖" }
          ]
        },
        {
          id: "languages",
          name: "اللغات",
          icon: "🌐",
          description: "التواصل عبر لغات متعددة بمهارات كتابية وشفوية قوية.",
          items: [
            { title: "العربية", description: "اللغة الأم مع مهارات لفظية وكتابية ممتازة.", icon: "🇪🇬" },
            { title: "الإنجليزية", description: "إتقان مهني للتعاون الدولي.", icon: "🇺🇸" }
          ]
        }
      ]
    },
    projects: {
      title: "المشاريع المميزة",
      labels: {
        source: "المصدر",
        role: "الدور",
        challenge: "التحدي",
        action: "الإجراء",
        result: "النتيجة",
        features: "المميزات",
        live: "عرض حي",
        viewDetails: "عرض تفاصيل المشروع",
        hideDetails: "إخفاء التفاصيل",
        clickDetails: "اضغط لعرض التفاصيل"
      },
      list: [
        {
          title: "FreshCart – منصة تجارة إلكترونية",
          image: "./src/assets/images/FreshCart-mockup.png",
          source: "مشروع تجارة إلكترونية",
          role: "مطور واجهات أمامية",
          challenge: "تطوير منصة تجارة إلكترونية حديثة ومتجاوبة تقدم تجربة تسوق سلسة لمنتجات الأزياء والبقالة.",
          action: "قمت ببناء واجهة متجر سريعة الاستجابة باستخدام React.js، ونفذت عرض المنتجات المتغيرة، وإدارة حالة عربة التسوق، وتحسين التصميم للهواتف المحمولة.",
          result: "قدمت واجهة متجر تفاعلية وعالية الأداء بالكامل مع أوقات تحميل سريعة وتجربة تسوق بديهية لكافة المستخدمين.",
          features: ["تصفية ذكية للمنتجات", "إدارة عربة التسوق", "تصميم متجاوب بالكامل", "واجهة مستخدم حديثة"],
          tech: ["React.js", "Tailwind CSS", "JavaScript"],
          demo: "https://fresh-cart-ecommarce.vercel.app/login",
          github: "https://github.com"
        },
        {
          title: "دانيالز – ملف شخصي احترافي",
          image: "./src/assets/images/daniels-mockup.png",
          source: "مشروع ملف شخصي",
          role: "مطور واجهات أمامية",
          challenge: "إنشاء ملف شخصي بسيط وجذاب يبرز العلامة التجارية الشخصية والمشاريع مع التركيز على جودة التصميم والوضوح.",
          action: "طورت موقعاً متجاوباً بالكامل باستخدام تقنيات الويب الحديثة، مع ضمان توافق العرض على كافة الأجهزة وإضافة انتقالات سلسة.",
          result: "قدمت موقعاً أنيقاً وسريع التحميل، مما أدى إلى تحسين تجربة المستخدم وزيادة التفاعل مع المحتوى المعروض.",
          features: ["نظام شبكي متجاوب", "تصميم واجهة بسيط", "هوية بصرية احترافية", "تركيز على تجربة المستخدم"],
          tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
          demo: "http://portfolio-daniels-r54e-is72vrn6b-sarahgamal-devs-projects.vercel.app/",
          github: "https://github.com"
        },
        {
          title: "Mealify – موقع مطعم ومأكولات",
          image: "./src/assets/images/mealify-mockup.png",
          source: "صفحة هبوط لمطعم",
          role: "مطور واجهات أمامية",
          challenge: "تصميم واجهة مستخدم جذابة ومشهية لمطعم تعرض قائمة الطعام بفاعلية وتسهل عملية حجز الطاولات.",
          action: "قمت بتصميم وتطوير صفحة هبوط متجاوبة باستخدام HTML5 و CSS3 وتقنيات الحركة لإنشاء قسم 'استمتع بطعامك' ومعرض الوجبات.",
          result: "حقق العرض تقديماً بصرياً لافتاً أدى إلى زيادة تفاعل المستخدمين وتبسيط عملية الحجز.",
          features: ["معرض طعام تفاعلي", "نظام حجز طاولات", "نافبار متجاوب", "تأثيرات حركية"],
          tech: ["HTML5", "CSS3", "JavaScript", "تأثيرات CSS"],
          demo: "https://food-project-fyn2-p9s5ua22p-sarahgamal-devs-projects.vercel.app/",
          github: "https://github.com"
        },
        {
          title: "FreshCart React – متجر إلكتروني متقدم",
          image: "./src/assets/images/ecommerce-react-mockup.png",
          source: "مشروع متجر React",
          role: "مطور واجهات أمامية",
          challenge: "بناء واجهة تجارة إلكترونية معقدة مع ميزات تصفية وبحث ومزامنة عربة التسوق المتقدمة.",
          action: "استخدمت React مع Context API لإدارة الحالة، ودمجت خطافات مخصصة لجلب البيانات، وصممت نظام شبكي عالي الأداء.",
          result: "سلمت تطبيق تجارة إلكترونية غني بالميزات وقابل للتوسع مع رحلة مستخدم سلسة وأداء محسّن.",
          features: ["البحث والتصفية الفورية", "عربة تسوق دائمية", "سلايدر منتجات ديناميكي", "نظام توثيق المستخدم"],
          tech: ["React.js", "Context API", "CSS Modules", "Vite"],
          demo: "https://e-commerce-react-project-7c5z-11zqe6vkf.vercel.app/",
          github: "https://github.com"
        }
      ]
    },
    experience: {
      title: "الخبرة العملية",
      labels: {
        challenge: "التحدي:",
        action: "الإجراء:",
        result: "النتيجة:"
      },
      list: [
        {
          company: "Digilians",
          role: "مطور ويب متكامل",
          duration: "فبراير – مايو 2026",
          icon: "../../src/assets/images/images.png",
          challenge: "تواجه الشركات صعوبة في دمج تطبيقات الواجهة الأمامية المنفصلة مع أنظمة خلفية آمنة، مما يؤدي إلى بطء الأداء.",
          action: "قمت بهندسة تطبيقات متكاملة باستخدام React و Node.js مع إدارة حالة قابلة للتوسع ومسارات API آمنة.",
          result: "حسنت موثوقية النظام بنسبة 25% وقللت تأخير التواصل بين الوحدات من خلال هندسة نظيفة محسنة."
        },
        {
          company: "Route",
          role: "متدرب مطور واجهات أمامية",
          duration: "مارس – أكتوبر 2025",
          icon: "../../src/assets/cv/route.png",
          challenge: "غالباً ما تعاني تطبيقات الويب الديناميكية من بطء أوقات التحميل وواجهة مستخدم غير متسقة، مما يؤثر سلباً على احتفاظ المستخدم.",
          action: "قدمت تطبيقات عالية الأداء باستخدام React و Next.js، مع تحسين تحميل الأصول وتطبيق معايير الوصول المتجاوبة.",
          result: "رفعت درجات أداء الواجهة الأمامية وقدمت واجهات مثالية حسنت تفاعل المستخدم."
        },
        {
          company: "ITI (معهد تكنولوجيا المعلومات)",
          role: "متدرب UI/UX والواجهات الأمامية",
          duration: "يونيو – أغسطس 2023",
          icon: "../../src/assets/cv/iti.png",
          challenge: "تؤدي واجهات المستخدم غير البديهية إلى ارتفاع معدلات التخلي وانفصال بين أهداف العمل واحتياجات المستخدمين.",
          action: "جمعت بين مبادئ تصميم UI/UX وتقنيات الويب الحديثة لبناء نماذج أولية تفاعلية متمحورة حول المستخدم.",
          result: "نجحت في تصميم ونشر 3 نماذج أولية متجاوبة، مما سد الفجوة بين رؤية التصميم والتنفيذ التقني."
        }
      ]
    },
    services: {
      title: "خدماتي",
      list: [
        {
          title: "تصميم قواعد البيانات",
          description: "مخططات فعالة ومحسنة للأداء وقابلة للتوسع.",
          icon: "🗄️",
          color: "#22c55e",
          tags: [
            { name: "MongoDB", icon: "🍃" },
            { name: "Mongoose", icon: "🌵" }
          ]
        },
        {
          title: "تطبيقات الويب",
          description: "بناء تطبيقات ويب كاملة الميزات باستخدام React.js و Node.js.",
          icon: "🌐",
          color: "#3b82f6",
          tags: [
            { name: "React.js", icon: "⚛️" },
            { name: "Node.js", icon: "⚙️" },
            { name: "Express", icon: "🚀" },
            { name: "Redux", icon: "🔄" }
          ]
        },
        {
          title: "تطوير الواجهات الأمامية",
          description: "إنشاء واجهات ويب متجاوبة وتفاعلية مع تجربة مستخدم ممتازة.",
          icon: "💻",
          color: "#ef4444",
          tags: [
            { name: "React.js", icon: "⚛️" },
            { name: "HTML5", icon: "📄" },
            { name: "CSS3", icon: "🎨" },
            { name: "TailwindCSS", icon: "🌊" }
          ]
        }
      ],
      cta: {
        title: "هل أنت مستعد لبدء مشروعك؟",
        subtitle: "لنقم ببناء شيء رائع معاً.",
        pricingHeader: "💼 تسعير شفاف",
        pricingTitle: "اختر باقتك",
        pricingSubtitle: "لا توجد رسوم خفية. كل باقة مصممة لتقديم قيمة حقيقية - من صفحة هبوط بسيطة إلى نظام مؤسسات كامل.",
        pricingInfo: "تشمل جميع الخطط تسليم الكود المصدري، وهندسة برمجية نظيفة، وجلسة مراجعة بعد الإطلاق. الأسعار تقديرية - تعتمد التكلفة النهائية على نطاق المشروع.",
        notSureTitle: "لست متأكداً أي باقة تناسبك؟",
        notSureDesc: "تواصل معنا وسنحدد معاً أفضل نطاق وميزانية لمشروعك.",
        priceBtn: "عرض باقات الأسعار",
        backBtn: "العودة للملف",
        contactBtn: "تواصل معي"
      }
    },
    testimonials: {
      title: "التوصيات",
      list: [
        {
          name: "م. سهيلة وحيد (Sohila Wahed)",
          role: "Frontend Engineer",
          feedback: "أحببته! 👏💯 عمل مذهل يا مهندسة! وفقك الله لبداية ناجحة. استمري ولا تتوقفي. قومي بعمل الكثير من المشاريع واستكشفي أفكاراً مختلفة. طالما أن يديكِ تبرمج، فأنتِ على الطريق الصحيح. لا تستعجلي النتائج - فقط ركزي على ما بين يديكِ. انتهاء الدورة لا يعني توقف التعلم - بل على العكس، هذه هي البداية فقط. في مجالنا، تحتاجين دائماً للبناء على آخر التحديثات."
        },
        {
          name: "عميل",
          role: "Client",
          feedback: "عملك ممتاز يا سارة وذو جودة عالية."
        }
      ],
      comingSoon: "قريباً"
    },
    achievements: {
      title: "إنجازات ملموسة",
      list: [
        { title: "5+ تطبيقات", description: "تطبيقات شملت منصات التجارة الإلكترونية ولوحات التحكم." },
        { title: "15+ واجهات برمجية", description: "تحسين التواصل بين الواجهة الأمامية والخلفية بنسبة 20%." },
        { title: "30% تقليل الكود", description: "بناء هندسة برمجية قائمة على المكونات في React." },
        { title: "سير عمل CI/CD", description: "نشر تطبيقين أو أكثر بشكل مباشر على Vercel/Render." }
      ]
    },
    contact: {
      title: "تواصل معي",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      send: "إرسال الرسالة",
      info: "أتطلع للسماع منك. سواء كان ذلك استفساراً عن مشروع أو مجرد سلام!",
      emailAddress: "sara.gamal.dev@gmail.com",
      whatsapp: "+201148318711"
    },
    footer: {
      getInTouch: "تواصل معي ✨",
      getInTouchDesc1: "أنا منفتحة دائماً للفرص الجديدة، المشاريع المثيرة، والتعاون الإبداعي.",
      getInTouchDesc2: "إذا كان لديك فكرة، مشروع، أو رغبت في التواصل فقط - فلا تتردد في الوصول لي في أي وقت.",
      aboutMe: "عني 👩💻",
      aboutMeDesc: "أنا مطورة ويب متكاملة (Full-Stack Developer) ولدي شغف قوي بـ React.js وتطوير الويب الحديث. أركز على بناء تطبيقات ويب متجاوبة، سهلة الاستخدام، وقابلة للتوسع تحول الأفكار إلى واقع بكود نظيف وفعال.",
      copyright: "© 2026 سارة جمال. جميع الحقوق محفوظة. بُني بكل ❤️ وكود."
    }
  }
};
