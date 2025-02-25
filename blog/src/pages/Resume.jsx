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
              Computer Science and Engineering (CGPA: 7.16)
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
              Developed and maintained responsive front-end applications with
              cross-browser compatibility.
            </li>
            <li>
              Designed robust back-end services using Python Flask, Node.js, and
              Express.js with secure REST APIs.
            </li>
            <li>
              Integrated and optimized relational and NoSQL databases (MySQL,
              MongoDB) for efficient data handling.
            </li>
            <li>
              Utilized Context API and Redux for state management, enhancing
              user experience.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Project Portfolio</h2>
        <div className="section-content border">
          <div className="project border">
            <p>
              <strong>Skill Matrix Tool</strong> | Jan 2024 - May 2024
            </p>
            <ul>
              <li>
                <strong>Objective:</strong> Helps Department Managers (DMs) and
                Project Coordination Officers (PCEOs) track and manage employee
                skills across projects.
              </li>
              <li>
                <strong>Technology Stack:</strong> React.js, Redux, Node.js,
                Express.js, MySQL, Python (Excel Automation).
              </li>
              <li>
                <strong>Key Features:</strong> Authorized access for DMs and
                PCEOs, project and skills management with Excel upload support,
                employee data CRUD operations, and skill matrix tracking.
              </li>
            </ul>
          </div>

          <div className="project border">
            <p>
              <strong>Alert Summary Tool</strong> | Aug 2023 - Jan 2024
            </p>
            <ul>
              <li>
                <strong>Objective:</strong> Automated alert tracking system for
                efficient email management with a secure user interface.
              </li>
              <li>
                <strong>Technology Stack:</strong> React.js, Python, Flask, MySQL.
              </li>
              <li>
                <strong>Key Features:</strong> Tracks incoming alert emails,
                stores summaries in the database, provides an easy-to-use UI for
                alert management, and ensures secure access for authorized
                users.
              </li>
            </ul>
          </div>

          <div className="project border">
            <p>
              <strong>Dealer Management System</strong> | Oct 2022 - Aug 2023
            </p>
            <ul>
              <li>
                <strong>Objective:</strong> Streamlines dealership operations,
                including inventory, customer data, sales, and service requests.
              </li>
              <li>
                <strong>Technology Stack:</strong> React.js, Next.js, Node.js,
                Express.js, PostgreSQL.
              </li>
              <li>
                <strong>Key Features:</strong> Combines inventory management,
                sales tracking, and customer service, with car stock updates,
                invoice generation, and role-based secure access.
              </li>
            </ul>
          </div>

          <div className="project border">
            <p>
              <strong>Trainee Form</strong> | May 2022 - Oct 2022
            </p>
            <ul>
              <li>
                <strong>Objective:</strong> Registration form with backend
                connectivity for efficient data management.
              </li>
              <li>
                <strong>Technology Stack:</strong> HTML, CSS, JavaScript,
                Node.js, MongoDB.
              </li>
              <li>
                <strong>Key Features:</strong> Trainee registration form with
                API integration for seamless data transfer, secure database
                storage, tabular trainee data display, and detailed view
                functionality.
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
              Recognized on the Nagarro Cheerboard for exceptional product
              quality.
            </li>
            <li>
              Received outstanding client feedback for innovative solutions and
              technical expertise.
            </li>
            <li>Delivered high-impact projects on time and within budget.</li>
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
