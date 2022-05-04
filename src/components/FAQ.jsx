import React from "react";
import { Accordion, Stack } from "react-bootstrap";

const FAQEntry = ({ eventKey, title, children }) => {
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body style={{ whiteSpace: "pre-line" }}>{children}</Accordion.Body>
        </Accordion.Item>
    );
};

const FAQ = () => {
    return (
        <div className="col-md-9 col-lg-8 col-xl-7 mx-auto">
            <h2 className="font-weight-bold text-center">&lt;Frequently Asked Questions/&gt;</h2>
            <Accordion>
                <Stack gap={3}>
                    <FAQEntry
                        eventKey="0"
                        title="🤔 So, what exactly is a hackathon?"
                    >
                        A hackathon is made up of two sections - a social coding event where programmers, designers, and developers collaborate in teams to solve a problem. 
                        You can either create a software-based project that falls under a category hack, or make whatever your heart desires as a general hack.
                        {"\n\n"}
                        The second section is networking events, seminars, and presentations that happen throughout the hackathon conducted by industry and academic professionals -
                        if you’ve been putting off learning that one programming language for a while, now might be the time to learn!
                    </FAQEntry>
                    <FAQEntry
                        eventKey="1"
                        title="🕒 Cool! When and where is HawkHacks happening?"
                    >
                        HawkHacks will take place for 36 hours, starting on May 13th, Friday @ 6PM EDT all the way till  May 15th, Sunday @ 2PM EDT. 
                        {"\n\n"}
                        HawkHacks is a fully virtual event, meaning everything will be hosted and managed through Hopin, Discord, and Twitch! 
                    </FAQEntry>
                    <FAQEntry
                        eventKey="2"
                        title="💰 That sounds good and all, but how much does it cost?"
                    >
                        Nothing! Free! Nada! Due to our amazing sponsors and support systems, attending and participating at HawkHacks is absolutely free!
                    </FAQEntry>
                    <FAQEntry
                        eventKey="3"
                        title="💻 Who can attend? Do I need to be a skilled leet programmer?"
                    >
                        Anybody from someone who doesn’t know what a computer is, to someone who makes computers, can attend the hackathon!
                        {"\n\n"}
                        You can either create a piece of software in 36-hours, attend the workshops and seminars, or do a bit of both - everything is up to you!
                    </FAQEntry>
                    <FAQEntry
                        eventKey="4"
                        title="👪 Do I need a team?"
                    >
                        You can work alone, or all the way up to a team of 2, 3, or 4 people! 
                        We highly encourage working in a team! 
                        If you don’t have friends who are attending, you can find a team in our Discord OR attend our team finding event before the hackathon!
                    </FAQEntry>
                    <FAQEntry
                        eventKey="5"
                        title="🐦 Why did y'all choose a bird as the mascot?"
                    >
                        Midas, the Golden Hawk, is our school mascot!
                    </FAQEntry>
                    <FAQEntry
                        eventKey="6"
                        title="🏆 Are there any Prizes?"
                    >
                        We have a tonne of different prizes! 
                        We have our general prizes for any submission, as well as prizes for each specific category hack - some of these prizes are from sponsors, and others are directly from us!
                        {"\n\n"}
                        We also do random giveaways and prizes throughout the event!
                        We might have random mini-game events, or even random giveaways whenever Nausher is feeling nice :) 
                    </FAQEntry>
                    <FAQEntry
                        eventKey="7"
                        title="📧 This is a cool FAQ section, but I still have questions!"
                    >
                        No worries! 
                        {"Reach out to us at "} 
                        <a href="mailto:hello@hawkhacks.com" target="_blank" rel="noreferrer">
                            <strong>hello@hawkhacks.com</strong>
                        </a> or our social media, and we’ll get back to you as soon as our social media and email person wakes up!
                    </FAQEntry>
                </Stack>
            </Accordion>
        </div>
    );
};

export default FAQ;
