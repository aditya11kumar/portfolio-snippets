import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <>
      <header>
        <h1>Aditya Kumar</h1>
        <p>
          Software Engineer | React.js | Node.js | Python Flask | Full-Stack
          Developer
        </p>
        <div className="contact-info">
          <p>📍 Bettiah, Bihar</p>
          <p>📞 +91-7667025267</p>
          <p>
            ✉️{" "}
            <a href="mailto:adityakumar110799@gmail.com">
              adityakumar110799@gmail.com
            </a>
          </p>
          <p>
            🔗 <a href="https://www.linkedin.com/in/aditya110799/">LinkedIn</a>
          </p>
        </div>
      </header>

      <section>
        <h2>Professional Summary</h2>
        <div className="section-content border">
          <p>
            A dedicated and detail-oriented software engineer with over 2 years
            of experience in full-stack development, specializing in{" "}
            <strong>React.js, Node.js, Python Flask,</strong> and{" "}
            <strong>database management (MySQL, MongoDB)</strong>. Committed to
            delivering high-quality projects on time with a focus on continuous
            improvement and client satisfaction.
          </p>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div className="section-content border">
          <ul>
            <li>
              <strong>IIT Patna (2023-2025)</strong> - Executive M.Tech in
              Computer Science and Engineering (CGPA: 7.69)
            </li>
            <li>
              <strong>LPU Punjab (2018-2022)</strong> - B.Tech in Computer
              Science and Engineering (CGPA: 7.34)
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Professional Experience </h2>
        <div className="section-content border">
          <p>
            <strong>Engineer at Nagarro Software</strong> | April 2022 - May
            2024
          </p>
          <ul>
            <li>
            Built and optimized scalable REST APIs, improving response times by <strong>40%</strong>.
            </li>
            <li>
            Designed and maintained microservices handling <strong>500K+ requests/day</strong> .
            </li>
            <li>
            Implemented database optimizations, reducing query execution time by <strong>30%</strong> .
            </li>
            <li>
            Mentored junior developers, conducting code reviews and tech sessions.
            </li>
          </ul>
        </div>
      </section>

      <section>
      <h2>Project Portfolio</h2>
<div className="section-content border">
  <div className="project border">
    <p>
      <strong>Skill Matrix Tool</strong>
    </p>
    <ul>
      <li>
        <strong>Objective:</strong> A tool to help track employee skills across projects, reducing manual effort by 50%.
      </li>
      <li>
        <strong>Technology Stack:</strong> React.js, Redux, Node.js, MySQL, Python (Excel Automation).
      </li>
      <li>
        <strong>Key Features:</strong> Secure authentication with role-based access for Department Managers (DMs) and Project Coordination Officers (PCEOs), skill tracking via Excel automation, employee data CRUD operations, and enhanced reporting.
      </li>
    </ul>
  </div>

  <div className="project border">
    <p>
      <strong>Alert Summary Tool</strong>
    </p>
    <ul>
      <li>
        <strong>Objective:</strong> Automated email alert tracking system to streamline and reduce manual effort by 60%.
      </li>
      <li>
        <strong>Technology Stack:</strong> React.js, Python, Flask, MySQL.
      </li>
      <li>
        <strong>Key Features:</strong> Tracks and summarizes incoming email alerts, provides real-time UI updates, secure authentication, and efficient alert management via a user-friendly dashboard.
      </li>
    </ul>
  </div>

  <div className="project border">
    <p>
      <strong>Dealer Management System</strong>
    </p>
    <ul>
      <li>
        <strong>Objective:</strong> An inventory and sales tracking system used by 50+ dealerships.
      </li>
      <li>
        <strong>Technology Stack:</strong> React.js, Node.js, PostgreSQL.
      </li>
      <li>
        <strong>Key Features:</strong> Role-based authentication, real-time inventory updates, sales tracking, and dealership performance analytics.
      </li>
    </ul>
  </div>
</div>

      </section>

      <section>
        <h2>Technical Skills</h2>
        <div className="section-content border">
          <ul>
            <li>
              <strong>Languages:</strong> Python, JavaScript, C++, C
            </li>
            <li>
              <strong>Front-end:</strong> HTML5, CSS3, React.js, Redux,
              Bootstrap
            </li>
            <li>
              <strong>Back-end:</strong> Node.js, Express.js, Flask, REST API
            </li>
            <li>
              <strong>Databases:</strong> MySQL, MongoDB, SQLite
            </li>
          </ul>
        </div>
      </section>

      <section>
  <h2>Achievements and Awards</h2>
  <div className="section-content border">
    <ul>
      <li>
        Recognized on the Nagarro Cheerboard for delivering a high-quality product that significantly exceeded client expectations.
      </li>
      <li>
        Awarded for developing scalable and high-impact solutions that improved system performance and efficiency.
      </li>
      <li>
        Ranked among the top 5 teams for building a real-time analytics dashboard.
      </li>
    </ul>
  </div>
</section>


      {/* <section>
        <h2>Services Offered</h2>
        <div className="section-content">
          <ul>
            <li><strong>Web Development:</strong> Full-stack development with React, Node.js, and Python Flask.</li>
            <li><strong>Backend Development:</strong> Database management, REST API, and server-side scripting.</li>
            <li><strong>Frontend Development:</strong> Responsive design and UI enhancement with React.js and Redux.</li>
            <li><strong>Database Management:</strong> Expertise in MySQL and MongoDB for data management.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>5-Day Free Trial</h2>
        <div className="section-content">
          <p>
            Interested in experiencing my services risk-free? I'm offering a <strong>5-Day Free Trial</strong> for new clients! This allows you to see firsthand the quality of my work and how I can contribute to your project goals.
          </p>
          <ul>
            <li>Access my expertise in <strong>full-stack web development</strong> for 5 days, no cost upfront.</li>
            <li>Test out <strong>frontend enhancements, backend functionalities, and database management</strong> tailored to your requirements.</li>
            <li>Get a custom solution sample to understand how I can add value to your projects.</li>
          </ul>
          <p>
            Ready to get started? Reach out today to claim your free trial and discuss your project needs!
          </p>
          <p>
            <a href="mailto:adityakumar110799@gmail.com" className="email-link">Contact Me for Free Trial</a>
          </p>
        </div>
      </section> */}
    </>
  );
}
