const { useState } = React;

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar-container">
      <div className="logo">Kalla Jayesh Rao</div>
      <button className="hamburger" onClick={() => setOpen(!open)}>☰</button>
      <nav className={open ? 'nav-links mobile-active' : 'nav-links'}>
        {navLinks.map(n => (
          <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

const Section = ({ id, children }) => (
  <section id={id} className="glass-section">{children}</section>
);

const Intro = () => (
  <Section id="intro">
    <div className="hero-content">
      <img src="Jay_nobackground_2.jpg" alt="Jayesh Rao" className="profile-pic" />
      <h1>Kalla Jayesh Rao</h1>
      <p>Web Developer | ML Enthusiast | Data Explorer</p>
    </div>
  </Section>
);

const About = () => (
  <Section id="about">
    <h2>About Me</h2>
    <p>
      I'm a B.Tech Computer Science student at Amrita Vishwa Vidyapeeth. My interests lie in application and web development, machine learning, and data analysis.
      I bring a strong foundation in core programming, combined with practical experience in data science through internships and personal projects.
      I'm also passionate about entrepreneurship and maintain an active lifestyle with interests in basketball, sprinting, and swimming.
    </p>
  </Section>
);

const projectsData = [
  {
    title: 'Hate Speech Detection',
    desc: 'Developed an LSTM-based NLP model to detect hate and offensive speech in tweets.',
    github: 'https://github.com/jaymadman/hate-speech-detection'
  },
  {
    title: 'Heart health and Mortality Prediction',
    desc: 'Built a deep learning model using clinical data to predict heart failure risk.',
    github: 'https://github.com/jaymadman/heart-mortality-prediction'
  },
  {
    title: 'Credit EDA Prediction',
    desc: 'Created a credit scoring model by analyzing customer and loan history data.',
    github: 'https://github.com/jaymadman/credit-EDA'
  },
  {
    title: 'BuyThem | Smart Marketplace',
    desc: 'BuyThem is a clean and user-friendly platform designed for browsing and buying products.',
    github: 'https://github.com/jaymadman/sellthem-marketplace',
    live: 'https://jay-cloudbuster.github.io/sell-them_jay/'
  }
];

const Projects = () => (
  <Section id="projects">
    <h2>Projects</h2>
    <div className="projects-container">
      {projectsData.map((p, i) => (
        <div key={i} className="project-card">
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="project-links">
            {p.live && (
              <a href={p.live} target="_blank" className="btn">Live Demo</a>
            )}
            <a href={p.github} target="_blank" className="btn">GitHub</a>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills">
    <h2>Skills</h2>
    <ul className="skills-list">
      {['Python','C','HTML','CSS','Java','JavaScript','Node.js','MySQL','GitHub'].map((s,i) => <li key={i}>{s}</li>)}
    </ul>
  </Section>
);

const Resume = () => (
  <Section id="resume">
    <h2>Resume</h2>
    <p>
      <strong>Education:</strong><br />
      B.Tech in Computer Science, Amrita Vishwa Vidyapeeth (2023 – present)<br />
      Relevant Courses: OOP, Data Structures, Data Science, Machine Learning, Web Development
    </p>
    <p>
      <strong>Work Experience:</strong><br />
      <em>Data Science Intern – Personifwy, Bangalore (Mar 2025 - Jun 2025)</em><br />
      • ML, Data Analysis, Python<br />
      • Internship certificates on LinkedIn
    </p>
    <p>
      <strong>Achievements & Interests:</strong><br />
      Black belt in Karate 🥋, NSS student coordinator, ACE club member, Web Dev, ML, Data Analysis
    </p>
    <a className="resume-btn" href="assets/jay_resume[1].pdf" download>📄 Download Full Resume</a>
  </Section>
);

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSubmitted(true);
  };
  if (submitted) return <Section id="contact"><h2>Thank you! I'll be in touch soon.</h2></Section>;
  return (
    <Section id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </Section>
  );
};

const App = () => (
  <>
    <Header />
    <main>
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <ContactForm />
    </main>
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
