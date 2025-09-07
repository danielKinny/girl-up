"use client";
import React from 'react';
import Nav from '@/components/nav';
import { motion } from 'framer-motion';
import Image from "next/image"

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
        name: "Hadiya Habib",
        role: "Co-President",
        image: "/team/hadiya1.png",
        bio: "Hadiya is a dedicated advocate for women's rights and works tirelessly to empower young girls."
        
    },
    {
        id: 2,
        name: "Saanvi Sahni",
        role: "Co-President",
        image: "/team/saanvi.png",
        bio: "Saanvi is a passionate advocate for gender equality and leads our team with vision and empathy."
        
    },
]

const vicePresidents : TeamMember[] = [
    {
        id: 1,
        name: "Siyona Haldar",
        role: "Vice President",
        image: "/team/siyona.png",
        bio: "Siyona is a strong advocate for girls' education and empowerment."
    }
]

const conferenceManagement : TeamMember[] = [
    {
        id: 1,
        name: "Sameeha Siddiqui",
        role: "Head of Conference Management",
        image: "/team/sameeha.png",
        bio: "Sameeha is an experienced event planner and ensures our conferences run smoothly."
    },
    {
        id: 2,
        name: "Ayesha Sadiq",
        role: "Co-head of Conference Management",
        image: "/team/ayesha.png",
        bio: "Ayesha is a skilled organizer and ensures our events are impactful and well-coordinated."
    }
]

const outreach: TeamMember[] = [
    {
        id: 1,
        name: "Joshua Fernandes",
        role: "Co-head of Outreach",
        image: "/team/joshua.png",
        bio: "Alice is passionate about building scalable web applications and leading teams to success."
    },
    {
        id: 2,
        name: "Daniel Kinny",
        role: "Co-head of Outreach",
        image: "/team/daniel.png",
        bio: "Bob crafts beautiful and user-friendly interfaces with a focus on accessibility."
    },{
        id: 3,
        name: "Isha Karuppanchetty",
        role: "Deputy Head of Outreach",
        image: "/team/isha.png",
        bio: "Isha is dedicated to promoting our initiatives and engaging with the community."
    }
];

const mediaMarketing: TeamMember[] = [
    {
        id: 1,
        name: "Melissa Mathias",
        role: "Co-head of Media and Marketing",
        image: "/team/melissa.png",
        bio: "Melissa leads our media campaigns and ensures our message reaches the right audience."
    },
    {
        id: 2,
        name: "Nicole Fernando",
        role: "Co-head of Media and Marketing",
        image: "/team/nicole.png",
        bio: "Ethan crafts engaging content for all our platforms."
    },
    {
        id: 3,
        name: "Anaaya Nair",
        role: "Deputy Head of Media and Marketing",
        image: "/team/anaaya.png",
        bio: "Anaaya is a creative marketer with a passion for storytelling."
    }
];

const admins: TeamMember[] = [
    {
        id: 1,
        name: "Souparnika Praveen",
        role: "Co-head of Admins",
        image: "/team/souparnika.png",
        bio: "Souparnika manages our administrative tasks and ensures smooth operations."
    },{
        id: 2,
        name: "Fahim Suleiman",
        role: "Co-head of Admins",
        image: "/team/fahim.png",
        bio: "Fahim oversees our admin team and ensures efficient operations."
    }
]

const logistics: TeamMember[] = [
    {
        id: 1,
        name: "Suhasini Arun",
        role: "Co-head of Logistics",
        image: "/team/suhasini.png",
        bio: "George coordinates all event logistics and operations."
    },
    {
        id: 2,
        name: "Vrusheen Pillai",
        role: "Co-head of Logistics",
        image: "/team/vrusheen.png",
        bio: "Vrusheen ensures every event runs smoothly from start to finish."
    },{
        id: 3,
        name: "Bianca Santiaguel",
        role: "Deputy Head of Logistics",
        image: "/team/bianca.png",
        bio: "Bianca is responsible for managing logistics and ensuring smooth operations."
    }
];

const finance: TeamMember[] = [
    {
        id: 1,
        name: "Samya Jain",
        role: "Co-head of Finance",
        image: "/team/samya.png",
        bio: "Ian oversees budgeting and financial planning."
    },
    {
        id: 2,
        name: "Minha Shanod",
        role: "Co-head of Finance",
        image: "/team/minha.png",
        bio: "Minha manages accounts and financial records."
    },
    {
        id: 3,
        name: "Jan Santiaguel",
        role: "Deputy Head of Finance",
        image: "/team/jan.png",
        bio: "Jan assists in managing financial operations and reporting."
    }
];

const memberCard = (member: TeamMember, idx: number) => {
    return (
        <div className='border border-black py-8 text-black rounded-lg min-h-4x bg-pink-200'  key={idx}>
            <Image width={300} height={464} className="overflow-auto py-8 object-contain" src={member.image} alt={member.name}/>
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
                    { title: 'PRESIDENTS', data: presidents },
                    { title: 'VICE PRESIDENT', data: vicePresidents},
                    { title: 'CONFERENCE MANAGEMENT', data: conferenceManagement},
                    { title: 'OUTREACH TEAM', data: outreach },
                    { title: 'MEDIA & MARKETING TEAM', data: mediaMarketing },
                    { title: 'ADMIN TEAM', data: admins },
                    { title: 'LOGISTICS TEAM', data: logistics },
                    { title: 'FINANCE TEAM', data: finance },

                ].map((section, i) => (
                    <motion.section
                        key={section.title}
                        className="mb-16 "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionVariants}
                        transition={{ delay: i * 0.06, duration: 0.22 }}
                    >
                        <motion.h1
                            className="text-6xl text-pink-700 league-spartan font-bold text-center p-8 drop-shadow-md flex-wrap"
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.32, delay: i * 0.06, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            {section.title}
                        </motion.h1>
                        <div className="flex flex-col w-full items-center gap-10 sm:flex-row sm:justify-center">
                            {section.data.map((member, idx) => memberCard(member, idx))}
                        </div>
                    </motion.section>
                ))}
            </main>
        </div>
    );
};

export default TeamPage;