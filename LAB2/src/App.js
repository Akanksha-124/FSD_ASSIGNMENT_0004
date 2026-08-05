// App.js

import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

function App() {
  return (
    <div className="app">

      {/* LEFT SIDE */}
      <aside className="sidebar">

        <div className="profile-card">

          {/* Leave blank or replace with your image */}
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600"
            alt="Profile"
            className="profile-img"
          />

          <h1>Akanksha</h1>
          <h3>Data Analyst | BCA Student</h3>

          <button className="resume-btn">
            <FaDownload /> Resume
          </button>

        </div>

        <div className="contact">

          <h2>Contact</h2>

          <p><FaEnvelope /> akanksha@email.com</p>
          <p><FaPhoneAlt /> +91 9876543210</p>
          <p><FaMapMarkerAlt /> Bangalore, India</p>

        </div>

        <div className="social">

          <a href="/"> <FaGithub /> </a>
          <a href="/"> <FaLinkedin /> </a>

        </div>

      </aside>

      {/* RIGHT SIDE */}

      <main className="content">

        <section className="card">

          <h2>About Me</h2>

          <p>
            Passionate BCA student interested in Data Analytics,
            Python, SQL and Machine Learning.
            I enjoy building practical projects and learning modern technologies.
          </p>

        </section>

        <section className="card">

          <h2>Education</h2>

          <table>

            <thead>

              <tr>
                <th>Degree</th>
                <th>College</th>
                <th>Year</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>BCA (Hons)</td>
                <td>Your College</td>
                <td>2023-2027</td>
              </tr>

            </tbody>

          </table>

        </section>

        <section className="card">

          <h2>Skills</h2>

          <div className="skills">

            <span>Python</span>
            <span>SQL</span>
            <span>Power BI</span>
            <span>Excel</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Machine Learning</span>
            <span>React</span>

          </div>

        </section>

        <section className="card">

          <h2>Projects</h2>

          <div className="project">

            <h3>Student Performance Predictor</h3>

            <p>
              ML model predicting student performance using Python,
              Pandas and Scikit-Learn.
            </p>

          </div>

          <div className="project">

            <h3>Resume Portfolio Website</h3>

            <p>
              Responsive single-page portfolio using React.
            </p>

          </div>

        </section>

        <section className="card">

          <h2>Certificates</h2>

          <table>

            <thead>

              <tr>
                <th>Certificate</th>
                <th>Platform</th>
                <th>Year</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Python Programming</td>
                <td>Coursera</td>
                <td>2025</td>
              </tr>

              <tr>
                <td>Data Analytics</td>
                <td>Google</td>
                <td>2025</td>
              </tr>

              <tr>
                <td>SQL Basics</td>
                <td>HackerRank</td>
                <td>2025</td>
              </tr>

              <tr>
                <td>Power BI</td>
                <td>Microsoft</td>
                <td>2026</td>
              </tr>

            </tbody>

          </table>

        </section>

        <section className="card">

          <h2>Achievements</h2>

          <ul>
            <li>Built Machine Learning Projects</li>
            <li>Participated in College Hackathon</li>
            <li>Completed Multiple Online Certifications</li>
          </ul>

        </section>

      </main>

    </div>
  );
}

export default App;