import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import ContactForm from "../../component/ContactForm/ContactForm";
import NavButton from "../../component/NavButton/NavButton";
import Navigation from "../../component/Navigation/Navigation";
import SocialNetwork from "../../component/SocialNetwork/SocialNetwork";
import Logo from "../../subcomponent/Logo";
import {
  Adress,
  ContactContainer,
  ContactInfos,
  Content,
  Credits,
  Email,
  Phone,
} from "./Contact.elements";

const Contact = () => {
  return (
    <main>
      <ContactContainer>
        <Navigation />
        <Logo />
        <ContactForm/>
        <ContactInfos>
          <Adress>
            <Content className="content">
              <h4>adresse</h4>
              <p>164, avenue des graviers</p>
              <p>03200 Abrest</p>
            </Content>
          </Adress>

          <Phone>
            <Content className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0665354481" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Numéro de téléphone copié!");
                  }}
                >
                  +336 653 544 81
                </p>
              </CopyToClipboard>
            </Content>
          </Phone>

          <Email>
            <Content className="content">
              <h4>email</h4>
              <CopyToClipboard text="contact@the-square.net" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("E-Mail copié!");
                  }}
                >
                  contact@the-square.net
                </p>
              </CopyToClipboard>
            </Content>
          </Email>

          <SocialNetwork/>
          <Credits>
            <p>©2022 made with ❤ <span>by The Square.</span></p>
          </Credits>
        </ContactInfos>
        <NavButton left={"/projects"} />
      </ContactContainer>
    </main>
  );
};

export default Contact;
