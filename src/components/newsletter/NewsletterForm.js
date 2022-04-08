import React from "react";
import { Container } from "react-bootstrap";
import SocialIcons from "../SocialIcons";
import Styled from "styled-components";

const FormInput = Styled.input`
    background-color: white;
    border: 0;
    font-size: 1rem;
    padding: 0.6rem;
    margin: 0.2rem 0;
`;

const FormButton = Styled.button`
    color: white;
    background-color: #0FA3B1;
    border: 0;
    font-size: 1rem;
    border-radius: 0 0.8rem 0.8rem 0;
    padding: 0.6rem 1.2rem;
    margin: 0.8rem 0 0.4rem 0;
    flex-grow: 1;
    transition: all 0.25s ease;
    :hover {
        transition: all 0.25s ease;
        cursor: pointer;
        filter: brightness(85%) drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.28));
    }
`;

const NewsletterForm = () => {
    return (
        <Container id="newsletter" className="foreground">
            <div className="spacer" style={{ width: "100%", height: "10em" }} />
            <div className="row">
                <div className="col-md-6 text-left">
                    <h3>// Want to stay updated?</h3>
                    <p className="mb-0">
                      Reach out at{" "}
                        <a href="mailto:hello@hawkhacks.ca">hello@hawkhacks.ca</a> for
                      any help or support, and please be sure to join the{" "}
                        <a
                            href="https://discord.gg/z8XbEEXkqN"
                            target="_blank"
                            rel="noreferrer"
                        >
                          HawkHacks Discord
                        </a>
                        {" "}community!
                    </p>
                    <div className="pb-1 my-2">
                        <SocialIcons />
                    </div>

                    {/* <InputGroup className="mb-3">
                      <FormControl
                          placeholder="Enter your email to subscribe to our newsletter!"
                          aria-label="Recipient's email"
                          aria-describedby="basic-addon2"
                      />

                      <Button>{">>"}</Button>
                  </InputGroup> */}
                    <div id="mc_embed_signup">
                        <form action="https://hawkhacks.us6.list-manage.com/subscribe/post?u=26e2afc1662a30dadf0c725af&id=050d487d87" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                            <div id="mc_embed_signup_scroll">

                                <h5>Sign up for our newsletter!</h5>

                                <div className="mc-field-group">
                                    <FormInput type="email" placeholder="Enter your email !" name="EMAIL" className="required email" id="mce-EMAIL" />
                                    <FormButton type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button">Subscribe!</FormButton>
                                </div>

                                <div id="mce-responses" className="clear foot">
                                    <div className="response" id="mce-error-response" style={{ display: "none" }} />
                                    <div className="response" id="mce-success-response" style={{ display: "none" }} />
                                </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_26e2afc1662a30dadf0c725af_050d487d87" tabIndex={-1} defaultValue /></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default NewsletterForm;