import React, { useState } from "react";
import { useLoaderData } from "react-router";

const About = () => {
    const aboutData = useLoaderData();
    const [activeTab, setActiveTab] = useState("story");

    const tabs = Object.keys(aboutData);
    const activeSection = aboutData[activeTab];

    return (
        <div className=" mx-auto bg-base-100 shadow-sm w-15/16 rounded-lg mb-6 p-6 lg:px-6">

            {/* Header */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold mb-3">About Us</h1>
                <p className="text-gray-500 max-w-2xl">
                    Reliable parcel delivery built on clarity, care, and consistency.
                </p>
            </div>

            {/* Tabs */}
            <div className="tabs tabs-bordered mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`tab capitalize transition-all ${activeTab === tab ? "tab-active font-semibold" : ""
                            }`}
                    >
                        {aboutData[tab].title}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="space-y-4 text-white leading-relaxed bg-accent p-6 rounded-lg shadow">
                {activeSection.content.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>

        </div>
    );
};

export default About;
