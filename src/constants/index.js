import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    estate,
    github,
    linkedin,
    pricewise,
    snapgram,
    summiz,
    threads,
    AfterEffects,
    Audition,
    Blender,
    cpp,
    Descript,
    Illustrator,
    Lightroom,
    Maya,
    Photoshop,
    Premiere,
    SubstancePainter,
    ThreeJs,
    Unity,
    UE5,
    VisualStudio,
    VsCode,
    Webflow,
    ZBrush
} from "../assets/icons";

// Skills icons
export const skills = [
    {
        imageUrl: UE5,
        name: "Unreal Engine",
        type: "Game Developer",
    },
    {
        imageUrl: Unity,
        name: "Unity",
        type: "Game Developer",
    },
    {
        imageUrl: Maya,
        name: "Autodesk Maya",
        type: "Technical Artist",
    },
    {
        imageUrl: Blender,
        name: "Blender",
        type: "Technical Artist",
    },
        {
        imageUrl: ZBrush,
        name: "ZBrush",
        type: "Technical Artist",
    },    
    {
        imageUrl: AfterEffects,
        name: "Adobe After Effects",
        type: "Video Editor",
    },
    {
        imageUrl: Audition,
        name: "Adobe Audition",
        type: "Video Editor",
    },    
    {
        imageUrl: Illustrator,
        name: "Adobe Illustrator",
        type: "General Use",
    },
    {
        imageUrl: Lightroom,
        name: "Adobe Lightroom",
        type: "Video Editor",
    },    
    {
        imageUrl: Photoshop,
        name: "Adobe Photoshop",
        type: "Video Editor",
    },
    {
        imageUrl: Premiere,
        name: "Adobe Premiere",
        type: "Video Editor",
    },
    {
        imageUrl: SubstancePainter,
        name: "Adobe Substance Painter",
        type: "Video Editor",
    },
    {
        imageUrl: Descript,
        name: "Descript",
        type: "Video Editor",
    }, 
    {
        imageUrl: Webflow,
        name: "Webflow",
        type: "Video Editor",
    },   
    {
        imageUrl: cpp,
        name: "C++",
        type: "Video Editor",
    },
    {
        imageUrl: VsCode,
        name: "Visual Studio Code",
        type: "Video Editor",
    },
    {
        imageUrl: VisualStudio,
        name: "Visual Studio",
        type: "Video Editor",
    },
    {
        imageUrl: ThreeJs,
        name: "Three.js",
        type: "Video Editor",
    },
    
];

// Work experiences
export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/FalzaVizion',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/falzavizion',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];