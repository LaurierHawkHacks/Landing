import React from "react";
import { Accordion, Stack } from "react-bootstrap";

const FAQEntry = ({ title, children }) => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body style={{ whiteSpace: "pre-line" }}>{children}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

const FAQ = () => {
    return (
        <div className="col-md-9 col-lg-8 col-xl-7 mx-auto">
            <h1 className="text-center">Frequently Asked Questions</h1>
            <Stack gap={3}>
                <FAQEntry title="🤔 So, what exactly is a hackathon?">
                    A hackathon is made up of two sections - a social coding event where
                    programmers, designers, and developers collaborate in teams to solve a problem.
                    {"\n\n"}
                    Alongside a tonne of networking events and seminars/presentations conducted by
                    our industry and academic sponsors!
                </FAQEntry>
                <FAQEntry title="🕒 Cool! When and where is HawkHacks happening?">
                    HawkHacks will take place for 36 hours, starting on January 7th, Friday @ 6PM
                    EDT all the way till January 9th, Sunday @ 2PM EDT.
                    {"\n\n"}
                    HawkHacks is a hybrid event, meaning it will be both virtual AND in person! The
                    virtual parts will be hosted and managed through Twitch, Discord, and ___!
                    {"\n\n"}
                    You can attend in person if you fill out the additional forms during the
                    registration process! We are limited to a fixed number of people that are
                    allowed to attend in person, so stay tuned for information on that!
                </FAQEntry>
                <FAQEntry title="💰 That sounds good and all, but how much does it cost?">
                    Nothing! Free! Nada! Due to our amazing sponsors and support systems, attending
                    and participating at HawkHacks is absolutely free!
                </FAQEntry>
                <FAQEntry title="💻 Who can attend? Do I need to be a skilled leet programmer?">
                    (incomplete)
                </FAQEntry>
                <FAQEntry title="👪 Do I need a team?">
                    You can work alone, or all the way up to a team of 2, 3, or 4 people! We highly
                    encourage working in a team! If you don't have friends who are attending
                    HawkHacks, you can find a team in our Discord OR attend our team finding event
                    before the hackathon!
                </FAQEntry>
                <FAQEntry title="🍔 Will there be any Food?">yes. (if in person)</FAQEntry>
                <FAQEntry title="🏆 Are there any Prizes?">yes. (stay tuned)</FAQEntry>
                <FAQEntry title="📧 This is a cool FAQ section, but I still have questions!">
                    No worries! Reach out to us at communications@hawkhacks.com or our social media,
                    and we’ll get back to you as soon as our social media and email person wakes up!
                </FAQEntry>
            </Stack>
        </div>
    );
};

export default FAQ;
