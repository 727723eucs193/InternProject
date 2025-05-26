import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <h1>React Router Navigation</h1>
        <nav style={styles.navbar}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/about" style={styles.navLink}>About</Link>
          <Link to="/contact" style={styles.navLink}>Contact</Link>
        </nav>

        <div style={styles.page}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return <h2 style={styles.pageTitle}>Welcome to the Home Page</h2>;
}

function About() {
  return <h2 style={styles.pageTitle}>About Us</h2>;
}

function Contact() {
  return <h2 style={styles.pageTitle}>Contact Us</h2>;
}

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '30px',
    padding: '10px',
    backgroundColor: '#333',
    borderRadius: '8px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  page: {
    backgroundColor: '#f9f9f9',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  pageTitle: {
    color: '#333',
  },
};

export default App;
