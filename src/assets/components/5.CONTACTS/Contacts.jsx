import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLink,
  faUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./contacts.css";
import CustomHook from "../6.CUSTOMHOOKS/CustomHook";

const Contacts = () => {
  const [listContacts] = useState([
    {
      title: "Phone Number",
      value: "+63 - 966 - 829 - 4821",
      link: "tel:+639668294821",
      icon: faPhone,
    },
    {
      title: "Email",
      value: "virgelcortel@gmail.com",
      link: "mailto:virgelcortel@gmail.com",
      icon: faEnvelope,
    },
    {
      title: "Upwork",
      value: "Virgel Cuarteros C.",
      link: "https://www.upwork.com/freelancers/~011233927c01d8a61c?mp_source=share",
      icon: faUser,
    },
    {
      title: "LinkedIn",
      value: "Virgel Cuarteros Cortel",
      link: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
      icon: faLink,
    },
  ]);

  const refTab = useRef(null);
  const divs = useRef([]);
  CustomHook(refTab, divs);

  return (
    <section className="contacts" ref={refTab}>
      <div className="title4" ref={(el) => el && divs.current.push(el)}>
        Let's Connect
      </div>
      <div className="des4" ref={(el) => el && divs.current.push(el)}>
        Impressed by my work? Let's collaborate! Whether it's through Upwork,
        LinkedIn, or email, I'm eager to bring your projects to life with
        creativity and expertise. Reach out and let's transform your vision into
        reality together.
      </div>
      <div className="list4" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((contact, index) => (
          <div key={index} className="item4">
            <h3>{contact.title}</h3>
            <div>
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={contact.icon} />
                {contact.value}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
