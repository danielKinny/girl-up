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

const outreach: TeamMember[] = [
    {
        id: 1,
        name: "Alice Johnson",
        role: "Lead Developer",
        image: "/hi.jpg",
        bio: "Alice is passionate about building scalable web applications and leading teams to success."
    },
    {
        id: 2,
        name: "Bob Smith",
        role: "UI/UX Designer",
        image: "/hi.jpg",
        bio: "Bob crafts beautiful and user-friendly interfaces with a focus on accessibility."
    },
    {
        id: 3,
        name: "Charlie Lee",
        role: "Product Manager",
        image: "/hi.jpg",
        bio: "Charlie ensures the team delivers value to users and meets business goals."
    },
];

const mediaMarketing: TeamMember[] = [
    {
        id: 1,
        name: "Diana Prince",
        role: "Media Strategist",
        image: "/hi.jpg",
        bio: "Diana leads our media campaigns and ensures our message reaches the right audience."
    },
    {
        id: 2,
        name: "Ethan Hunt",
        role: "Content Creator",
        image: "/hi.jpg",
        bio: "Ethan crafts engaging content for all our platforms."
    },
    {
        id: 3,
        name: "Fiona Gallagher",
        role: "Social Media Manager",
        image: "/hi.jpg",
        bio: "Fiona manages our social presence and community engagement."
    },
];

const logistics: TeamMember[] = [
    {
        id: 1,
        name: "George Miller",
        role: "Logistics Lead",
        image: "/hi.jpg",
        bio: "George coordinates all event logistics and operations."
    },
    {
        id: 2,
        name: "Hannah Brown",
        role: "Event Coordinator",
        image: "/hi.jpg",
        bio: "Hannah ensures every event runs smoothly from start to finish."
    },
];

const finance: TeamMember[] = [
    {
        id: 1,
        name: "Ian Wright",
        role: "Finance Manager",
        image: "/hi.jpg",
        bio: "Ian oversees budgeting and financial planning."
    },
    {
        id: 2,
        name: "Julia Chen",
        role: "Accountant",
        image: "/hi.jpg",
        bio: "Julia manages accounts and financial records."
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
                    { title: 'PRESIDENTIAL SUITE', data: outreach },
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
                            className="text-4xl text-pink-700 notable-font font-bold text-center p-8 drop-shadow-md"
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.32, delay: i * 0.06, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            {section.title}
                        </motion.h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                            {section.data.map((member, idx) => memberCard(member, idx))}
                        </div>
                    </motion.section>
                ))}
            </main>
        </div>
    );
};

export default TeamPage;