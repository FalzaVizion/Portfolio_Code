import { nqubLogo, SteerMetaLogo, ProfileIcon } from "../assets/images";
import {
    car,
    contact,
    estate,
    github,
    linkedin,
    itchio,
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
    ZBrush,
    Portal,
    TopDownShooter,
    CombatFinishers,
    FirstPersonShooter,
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
        title: "Freelancer 3D generalist",
        company_name: "Falza Vizion",
        icon: ProfileIcon,
        iconBg: "#343434",
        date: "November 2019 - June 2021",
        points: [
            "Developed unique 3D character assets for an indie NFT project. Contributed to the overall look and feel of the project.",
            "Created and textured character models, enhancing the quality and realism to attract a wider audience.",
            "Built rigs for characters to enable smooth animations bringing the character to life improving audience engagement.",
            "Animated characters delivering dynamic movements adding personality and depth bringing concepts into engaging visuals.",
            "Illuminated and rendered final scenes ensuring high-quality outputs that met client requirements demonstrating my flexibility and commitment to meeting project deadlines."
        ],
    },
    {
        title: "Technical Artist lead",
        company_name: "SteerMeta group",
        icon: SteerMetaLogo,
        iconBg: "#4aabf8",
        date: "July 2021 - September 2023",
        points: [
            "Involved as 3D technical artist leader helping and monitoring the art team when rendering for cinematics.",
            "Unreal Engine developer using blueprints adapting the UI coming from the design team on widgets to finally have a shipping project for the final client.",
        ],
    },
    {
        title: "Technical Artist lead",
        company_name: "nqüb",
        icon: nqubLogo,
        iconBg: "#a1a1a1",
        date: "October 2023 - October 2025",
        points: [
            "Involved as a 3D technical artist, developing real-time and immersive experiences using Unreal Engine.",
            "I have made some filters for Instagram and TikTok using MetaSpark Studio and Effect House.",
            "Optimizing, creating UV maps and texturing 3D models.",
            "Video editing for Instagram, TikTok, social media in general and for YouTube aswell.",
        ],
    },
];

export const socialLinks = [  

    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/FalzaVizion',
    },
    
    {
        name: 'Itch.io',
        iconUrl: itchio,
        link: 'https://falzavizion.itch.io',
    },

    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/falzavizion',
    },

    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
];

export const projects = [
    {
        iconUrl: FirstPersonShooter,
        theme: 'btn-back-pink',
        name: 'First Person Shooter',
        description: 'This Unreal Engine demo explores fundamental FPS systems like character locomotion, weapon handling, ammo logic and hit detection. Includes damage multipliers and decal-based bullet impacts for added realism.',
        link: 'https://falzavizion.itch.io/first-person-shooter',
    },
    {
        iconUrl: TopDownShooter,
        theme: 'btn-back-black',
        name: 'Top Down Shooter',
        description: 'A top-down shooter built in Unreal Engine 5, featuring wave-based enemy AI that hunts the player down. Survive against endless hordes. Shoot, run, reload, repeat.',
        link: 'https://falzavizion.itch.io/top-down-shooter',
    },
    {
        iconUrl: CombatFinishers,
        theme: 'btn-back-blue',
        name: 'Combat Finishers',
        description: 'Combat Finisher is a short Unreal Engine prototype focused on close-range action. Approach enemies and execute finishing moves with a single button. A compact experiment in cinematic gameplay and responsive combat design.',
        link: 'https://falzavizion.itch.io/combat-finisher',
    },
    {
        iconUrl: Portal,
        theme: 'btn-back-blue',
        name: 'Seamless Portal',
        description: 'A real-time seamless portal prototype developed in Unreal Engine 5 The system maintains full visual continuity and physics consistency, allowing players to see and move through portals without teleportation or scene transitions.',
        link: 'https://falzavizion.itch.io/seamless-portal',
    },
];