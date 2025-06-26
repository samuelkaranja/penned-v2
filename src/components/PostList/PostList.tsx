import React from "react";
import "./postlist.css";
import Image from "../../assets/frontend.jpg";
import Image2 from "../../assets/backend.png";
import Image3 from "../../assets/fullstack.png";
import Image4 from "../../assets/devops.png";
import BlogPost from "../BlogPost/BlogPost";

export const allPosts = [
  {
    id: 1,
    title: "Front-End Developer",
    subtitle:
      "A frontend developer builds the user interface of websites and applications, the part users directly interact with",
    image: Image,
    description:
      "Fundamentally a front-end developer, historically sometimes referred to as a client-side developer, produces the code sent from a web server to a client/front-end to establish a user interface. For example, when you load a webpage into a web browser, code is sent from a web server to the device/client requesting the page. The code sent will produce the user interface one sees in the web browser. This code is considered front-end code and is a mixture of the web technologies HTML, CSS, and JavaScript. An individual typically enters into the field of front-end development by first learning to build a simple website using HTML and CSS. HTML or HyperText Markup Language is likened to the structural framing of a house, while CSS or Cascading Style Sheets can be considered the finishing touches one sees once a home is complete. Eventually, the house (i.e., a website) will need to become automated. In other words, it will need to become interactive and respond to events orchestrated by the user or the device on which it runs (e.g., on click or on load do X). To accomplish this, front-end developers learn the JavaScript programming language and use this language and the Document Object Model (aka the DOM) to add dynamic and interactive aspects to HTML and CSS. As a front-end developer progresses in their career, they will move from a simple understanding of web pages and websites to potentially a robust grasp of software development practices as it is done on the web platform using the JavaScript programming language.",
    author: "Samuel",
    created_at: "2025-06-26",
  },
  {
    id: 2,
    title: "Backend developer",
    subtitle:
      "A backend developer focuses on the server-side of web applications, handling the logic, databases, and infrastructure that users don't directly see",
    image: Image2,
    description:
      "They ensure that the application runs smoothly and efficiently, managing data storage, retrieval, and processing. Backend developers work with various programming languages, databases, and frameworks to build the foundation of web applications. In essence, backend developers are the architects of the digital world's behind-the-scenes operations, ensuring that websites and applications function seamlessly and securely.",
    author: "peter",
    created_at: "2025-06-26",
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    subtitle:
      "A full-stack developer is a software developer who possesses expertise in both front-end and back-end web development",
    image: Image3,
    description:
      "They handle the entire development process, from designing user interfaces to managing databases and server-side logic. Essentially, they are proficient in all aspects of building and maintaining web applications. In essence, a full-stack developer is a versatile professional who can handle all the technical aspects of building and maintaining a web application, making them a valuable asset in any development team.",
    author: "Samuel",
    created_at: "2025-06-26",
  },
  {
    id: 4,
    title: "DevOps engineer",
    subtitle:
      "A DevOps engineer bridges the gap between development and operations teams, focusing on streamlining the software development lifecycle through automation and collaboration.",
    image: Image4,
    description:
      "They are responsible for implementing strategies that enhance continuous integration, continuous delivery, and deployment processes. Their role involves automating tasks, managing infrastructure, and ensuring the smooth operation of IT systems. In essence, a DevOps engineer is a versatile professional who combines technical expertise with strong collaboration skills to drive efficiency and agility in software development and deployment.",
    author: "peter",
    created_at: "2025-06-26",
  },
];

const PostList: React.FC = () => {
  return (
    <div className="postlist">
      <div className="posts">
        {allPosts.map((post) => {
          return <BlogPost key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default PostList;
