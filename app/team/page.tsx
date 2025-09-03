"use client";
import React from 'react';
import Nav from '@/components/nav';
import { motion } from 'framer-motion';


interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    bio?: string;
}

const presidents: TeamMember[] = [
    {
        id: 1,
        name: "Saanvi Sahni",
        role: "President",
        image: "/hi.jpg",
        bio: "Saanvi is a passionate advocate for gender equality and leads our team with vision and empathy."
    },
    {
        id: 2,
        name: "Hadiya Habib",
        role: "President",
        image: "/hi.jpg",
        bio: "Hadiya is a dedicated advocate for women's rights and works tirelessly to empower young girls."
    },
]

const vicePresidents : TeamMember[] = [
    {
        id: 1,
        name: "Siyona Haldar",
        role: "Vice President",
        image: "/hi.jpg",
        bio: "Siyona is a strong advocate for girls' education and empowerment."
    }
]

const conferenceManagement : TeamMember[] = [
    {
        id: 1,
        name: "Sameeha Siddiqui",
        role: "Conference Manager",
        image: "/hi.jpg",
        bio: "Sameeha is an experienced event planner and ensures our conferences run smoothly."
    },
    {
        id: 2,
        name: "Ayesha Sadiq",
        role: "Conference Manager",
        image: "/hi.jpg",
        bio: "Ayesha is a skilled organizer and ensures our events are impactful and well-coordinated."
    }
]

const outreach: TeamMember[] = [
    {
        id: 1,
        name: "Joshua Fernandes",
        role: "Head of Outreach",
        image: "/hi.jpg",
        bio: "Alice is passionate about building scalable web applications and leading teams to success."
    },
    {
        id: 2,
        name: "Daniel Kinny",
        role: "Head of Outreach",
        image: "/hi.jpg",
        bio: "Bob crafts beautiful and user-friendly interfaces with a focus on accessibility."
    },
];

const mediaMarketing: TeamMember[] = [
    {
        id: 1,
        name: "Melissa Mathias",
        role: "Head of Media and Marketing",
        image: "/hi.jpg",
        bio: "Melissa leads our media campaigns and ensures our message reaches the right audience."
    },
    {
        id: 2,
        name: "Nicole Fernando",
        role: "Head of Media and Marketing",
        image: "/hi.jpg",
        bio: "Ethan crafts engaging content for all our platforms."
    },
];

const admins: TeamMember[] = [
    {
        id: 1,
        name: "Souparnika Praveen",
        role: "Head of Admins",
        image: "/hi.jpg",
        bio: "Souparnika manages our administrative tasks and ensures smooth operations."
    },{
        id: 2,
        name: "Fahim Suleiman",
        role: "Head of Admins",
        image: "/hi.jpg",
        bio: "Fahim oversees our admin team and ensures efficient operations."
    }
]

const logistics: TeamMember[] = [
    {
        id: 1,
        name: "Suhasini Arun",
        role: "Logistics Lead",
        image: "/hi.jpg",
        bio: "George coordinates all event logistics and operations."
    },
    {
        id: 2,
        name: "Vrusheen Pillai",
        role: "Event Coordinator",
        image: "/hi.jpg",
        bio: "Vrusheen ensures every event runs smoothly from start to finish."
    },
];

const finance: TeamMember[] = [
    {
        id: 1,
        name: "Samya Jain",
        role: "Finance Manager",
        image: "/hi.jpg",
        bio: "Ian oversees budgeting and financial planning."
    },
    {
        id: 2,
        name: "Minha Shanod",
        role: "Accountant",
        image: "/hi.jpg",
        bio: "Minha manages accounts and financial records."
    },
];

const memberCard = (member: TeamMember, idx: number) => {
    return (
        <div className='border border-black py-8 text-black rounded-lg'  key={idx}>
            <img className="py-8" src={member.image} alt={member.name}/>
            <h3 className="text-lg text-center font-bold">{member.name}</h3>
            <p className="text-lg text-center">{member.role}</p>
        </div>
    );
};

const sectionVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.22 } }
};

const TeamPage = () => {
    return (
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 min-h-screen pb-16">
            <header className="absolute top-0 left-0 w-full z-50 text-white bg-pink-700 backdrop-filter backdrop-blur-md rounded-b-xl">
                <Nav />
            </header>

            <main className="pt-32 max-w-6xl mx-auto px-4">
                {[
                    { title: 'PRESIDENTIAL SUITE', data: presidents },
                    { title: 'VICE PRESIDENT', data: vicePresidents},
                    { title: 'CONFERENCE MANAGEMENT', data: conferenceManagement},
                    { title: 'OUTREACH TEAM', data: outreach },
                    { title: 'MEDIA & MARKETING TEAM', data: mediaMarketing },
                    { title: 'LOGISTICS TEAM', data: logistics },
                    { title: 'FINANCE TEAM', data: finance },
                ].map((section, i) => (
                    <motion.section
                        key={section.title}
                        className="mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionVariants}
                        transition={{ delay: i * 0.06, duration: 0.22 }}
                    >
                        <motion.h1
                            className="text-6xl text-pink-700 league-spartan font-bold text-center p-8 drop-shadow-md"
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.32, delay: i * 0.06, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            {section.title}
                        </motion.h1>
                        <div className="flex flex-col-1 gap-10">
                            {section.data.map((member, idx) => memberCard(member, idx))}
                        </div>
                    </motion.section>
                ))}
            </main>
        </div>
    );
};

export default TeamPage;