import React from "react";
import Card from "react-bootstrap/Card";

const AboutCard = () => (
  <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <AboutCardContent />
      </blockquote>
    </Card.Body>
  </Card>
);

const AboutCardContent = () => (
  <p style={{ textAlign: "justify" }}>
    Hey there, I am <span className="purple">Stanislav Angelov </span>
    originally from <span className="purple"> Bulgaria</span>, but I have been living, studying and working
    in <span className="purple"> London, United Kingdom.</span>

    <br /><br />

    I did not go directly into the field of Computer Science, at school I was more interested in the other type of Science
    the one associated with Psychology, studying the mind and behaviour of humans and animals. I pursued this passion and
    did a Masters in Clinical Neuroscience.

    <br /><br />

    The transition from academia to my first professional role as an Associate Practitioner in Virology marked a pivotal
    moment in my career journey. In this role, I actively participated in the PCR testing process, crucial for detecting
    the presence of COVID-19 in test samples. Surrounded by advanced technology, I marveled at the capabilities of the
    equipment and its significant role in healthcare.

    Amidst this professional exploration, a serendipitous encounter with an advertisement offering free courses in
    Computer Science languages caught my attention. Without hesitation, I enrolled in a Python course, although initially
    intimidated by the unfamiliarity of code. Despite completing the course, Python and I didn't quite click. Undeterred,
    I decided to explore another language, and after careful consideration, I chose Java.

    Java's high-level nature eased my entry into the world of programming, and I appreciated its platform independence,
    thanks to the Java Virtual Machine (JVM). Initially perplexed by Object-Oriented Programming (OOP) principles,
    I questioned the need to split a microservice into multiple classes. Why not consolidate it into one class for
    simplicity? These doubts, however, dissolved as I delved deeper into Java. In just a few weeks, I found myself
    crafting small programs—a calculator, a to-do list—typical projects for beginners in the field. Surprisingly,
    I not only adapted to Java but also developed a genuine liking for its structure and versatility.

     <br /><br />

     Fast forward a few weeks, a fortuitous discovery presented itself – a Software Development Trainee Bootcamp
     offered by QA Consulting. Intrigued by the prospect of delving into software development, especially with Java
     on the agenda, I recognized this as a golden opportunity to transition further into a field that I found
     inherently enjoyable.

     Embracing this chance, I enrolled in the QA Ltd Software Development Trainee program. In this role,
     I played a pivotal part in the design and development of a cinema web application. Taking on the
     additional responsibility of a Scrum Master, I not only guided my team towards achieving sprint
     goals but also conducted daily stand-up meetings. This experience not only highlighted my commitment
     to agile methodologies but also underscored my dedication to fostering effective teamwork within the
     development process. The bootcamp became a transformative chapter, solidifying my passion for software
     development and affirming my ability to thrive in a collaborative, fast-paced environment.

     <br /><br />

     Advancing a few months after the QA Bootcamp, my journey led me to GlobalLogic, marking a significant step
     in my career as a Java Software Engineer. In this dynamic environment, I absorbed a wealth of knowledge and
     best practices, gaining insights into the intricacies of software development. Immersed in a large agile team,
      actively contributed to the development of the Spatial Explorer, a project that stood as a testament to the
      collaborative and innovative spirit of the team. Beyond this flagship initiative, I also lent my expertise to
      various other projects, further expanding my skill set and understanding of complex software engineering processes.
      My time at GlobalLogic became a pivotal chapter in my professional growth, reinforcing my commitment to excellence
      and continuous learning in the ever-evolving landscape of software development.

     <br /><br />

     Beyond the confines of code, my interests and hobbies offer a glimpse into my multifaceted personality.
     From coding 2D games in Java to the serene art of fly fishing, I draw inspiration from a diverse array of pursuits.
     My competitive spirit has been ingrained in me since childhood. During my time in Bulgaria, I actively participated
     nd excelled in various competitions, spanning subjects such as English, Mathematics, and Art. Winning became not just
     a goal but a consistent outcome in every competition I entered. This early taste of success fueled my passion for competition,
     affirming my love for the thrill of victory—a sentiment shared by many. Whether in the realm of technology or personal pursuits,
     the drive to excel and emerge victorious remains a constant theme in my journey.

     <br /><br />

     As I persistently evolve within the dynamic intersection of science and technology, my journey stands as a testament
     to adaptability, continuous learning, and an unwavering passion for pushing boundaries in the pursuit of innovation.
     Each step, from my academic foundation to professional roles, reflects a commitment to growth and a willingness to
     embrace new challenges. My story encapsulates the essence of navigating the ever-changing landscape of the tech industry,
     showcasing not only the technical skills I've acquired but also the resilience and enthusiasm that drive me to explore
     uncharted territories. In the nexus of science and technology, I find not just a career but a boundless adventure,
     and I eagerly anticipate the next chapters of discovery and innovation that lie ahead.

  </p>
);

const Testimonial = ({ text, footerText }) => (
  <div>
    <p style={{ color: "rgb(155 126 172)" }}>{`"${text}"`}</p>
    <footer className="blockquote-footer">{footerText}</footer>
  </div>
);


export default AboutCard;
