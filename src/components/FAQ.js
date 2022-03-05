import React from 'react';
import { Accordion, Stack } from 'react-bootstrap';

const FAQEntry = ({ title, children }) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>{children}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

const LOREM_IPSUM =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const FAQ = () => {
  return (
    <div className="col-md-9 col-lg-8 col-xl-7 mx-auto">
      <h1 class="text-center">Frequently Asked Questions</h1>
      <Stack gap={3}>
        <FAQEntry title="So, what exactly is a hackathon?">
          {LOREM_IPSUM}
        </FAQEntry>
        <FAQEntry title="Cool! When and where is HawkHacks happening?">
          {LOREM_IPSUM}
        </FAQEntry>
        <FAQEntry title="That sounds good and all, but how much does it cost?">
          {LOREM_IPSUM}
        </FAQEntry>
        <FAQEntry title="Who can attend? Do I need to be a skilled leet programmer?">
          {LOREM_IPSUM}
        </FAQEntry>
        <FAQEntry title="Do I need a team?">{LOREM_IPSUM}</FAQEntry>
        <FAQEntry title="Will there be any Food?">{LOREM_IPSUM}</FAQEntry>
        <FAQEntry title="Are there any Prizes?">{LOREM_IPSUM}</FAQEntry>
        <FAQEntry title="This is a cool FAQ section, but I still have questions!">
          {LOREM_IPSUM}
        </FAQEntry>
      </Stack>
    </div>
  );
};

export default FAQ;
