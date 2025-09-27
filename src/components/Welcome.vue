<template>
  <div class="portfolio-container">
    <!-- Navigation -->
    <nav class="nav">
      <div class="nav-brand">Matt</div>
      <div class="nav-links">
        <a href="#about" class="nav-link">About</a>
        <a href="#work" class="nav-link">Work</a>
        <a href="#contact" class="nav-link">Contact</a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-greeting">Hi, I'm Matt</div>
        <h1 class="hero-title">Full Stack Developer</h1>
        <p class="hero-description">I create elegant digital experiences through thoughtful design and clean code.</p>
        <div class="hero-actions">
          <a href="#work" class="btn-primary">View My Work</a>
          <a href="#contact" class="btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">About</h2>
          <div class="section-line"></div>
        </div>
        <div class="about-content">
          <p class="about-text">I'm a passionate developer with expertise in modern web technologies. I love creating beautiful, functional applications that solve real-world problems and delight users.</p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">Skills</h2>
          <div class="section-line"></div>
        </div>
        <div class="skills-grid">
          <div class="skill-category">
            <h3 class="skill-category-title">Frontend</h3>
            <div class="skill-tags">
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">CSS</span>
            </div>
          </div>
          <div class="skill-category">
            <h3 class="skill-category-title">Backend</h3>
            <div class="skill-tags">
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Python</span>
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">MongoDB</span>
            </div>
          </div>
          <div class="skill-category">
            <h3 class="skill-category-title">Tools</h3>
            <div class="skill-tags">
              <span class="skill-tag">Git</span>
              <span class="skill-tag">Docker</span>
              <span class="skill-tag">AWS</span>
              <span class="skill-tag">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="work" class="projects">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">Featured Work</h2>
          <div class="section-line"></div>
        </div>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-image">
              <div class="project-placeholder"></div>
            </div>
            <div class="project-content">
              <h3 class="project-title">CardCraft</h3>
              <p class="project-description">A full-stack capstone project featuring a card creation and management system with backend API integration and modern web technologies.</p>
              <div class="project-tech">
                <span class="tech-tag">Python</span>
                <span class="tech-tag">Backend API</span>
                <span class="tech-tag">Full Stack</span>
              </div>
              <div class="project-links">
                <a href="https://github.com/mattmiranda55/CardCraftBackEnd" class="project-link" target="_blank">GitHub</a>
              </div>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">
              <div class="project-placeholder"></div>
            </div>
            <div class="project-content">
              <h3 class="project-title">BGC Backend</h3>
              <p class="project-description">A robust backend system built with Python, featuring advanced data processing capabilities and scalable architecture for modern applications.</p>
              <div class="project-tech">
                <span class="tech-tag">Python</span>
                <span class="tech-tag">Backend</span>
                <span class="tech-tag">API</span>
              </div>
              <div class="project-links">
                <a href="https://github.com/mattmiranda55/BGCBackEnd" class="project-link" target="_blank">GitHub</a>
              </div>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">
              <div class="project-placeholder"></div>
            </div>
            <div class="project-content">
              <h3 class="project-title">PDF Question Bot</h3>
              <p class="project-description">An intelligent LLM bot built with IBM watsonx.ai and Streamlit for easy deployment, capable of answering questions from PDF documents.</p>
              <div class="project-tech">
                <span class="tech-tag">Python</span>
                <span class="tech-tag">LLM</span>
                <span class="tech-tag">Streamlit</span>
                <span class="tech-tag">IBM Watson</span>
              </div>
              <div class="project-links">
                <a href="https://github.com/mattmiranda55/PDF_Question_Bot" class="project-link" target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">Let's Connect</h2>
          <div class="section-line"></div>
        </div>
        <div class="contact-content">
          <p class="contact-description">I'm always interested in new opportunities and exciting projects.</p>
          <div class="contact-info">
            <div>
              <font-awesome-icon icon="fa-solid fa-envelope" />
              <a href="mailto:mattmiranda55@gmail.com" class="contact-email">&nbsp mattmiranda55@gmail.com</a>
            </div>
            <div class="social-links">
              <div>
                <font-awesome-icon icon="fa-brands fa-linkedin" />
                <a href="https://www.linkedin.com/in/matthew-miranda-b4b45a232/" class="social-link" target="_blank">LinkedIn</a>
              </div>
              <div>
                <font-awesome-icon icon="fa-brands fa-github" />
                <a href="https://github.com/mattmiranda55" class="social-link" target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Vue 3 Composition API - no imports needed for this component
// All functionality is handled through CSS and HTML
</script>

<style scoped>
/* Reset and Base Styles */
* {
  box-sizing: border-box;
}

.portfolio-container {
  min-height: 100vh;
  background: #fafafa;
  color: #2c3e50;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
}

/* Navigation */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(250, 250, 250, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #6c757d;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #2c3e50;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #8b9a7a;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Hero Section */
.hero {
  padding: 8rem 2rem 6rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-content {
  animation: fadeInUp 0.8s ease-out;
}

.hero-greeting {
  font-size: 1.125rem;
  color: #8b9a7a;
  margin-bottom: 0.5rem;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.hero-description {
  font-size: 1.25rem;
  color: #6c757d;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  font-size: 1rem;
}

.btn-primary {
  background: #8b9a7a;
  color: white;
  border: 2px solid #8b9a7a;
}

.btn-primary:hover {
  background: #7a8a6a;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 154, 122, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #8b9a7a;
  border: 2px solid #8b9a7a;
}

.btn-secondary:hover {
  background: #8b9a7a;
  color: white;
  transform: translateY(-2px);
}

/* Section Styles */
section {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-content {
  max-width: 1000px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 4rem;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.section-line {
  width: 60px;
  height: 3px;
  background: #8b9a7a;
  margin: 0 auto;
  border-radius: 2px;
}

/* About Section */
.about {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.about-text {
  font-size: 1.125rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.7;
}

/* Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-top: 2rem;
}

.skill-category {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-4px);
}

.skill-category-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.skill-tag {
  background: #f8f9fa;
  color: #8b9a7a;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: #8b9a7a;
  color: white;
  transform: translateY(-2px);
}

/* Projects Section */
.projects {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
}

.project-card {
  background: #fafafa;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, #8b9a7a 0%, #a8b896 100%);
  position: relative;
  overflow: hidden;
}

.project-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), 
              linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%), 
              linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}

.project-content {
  padding: 2rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.75rem;
}

.project-description {
  color: #6c757d;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: #8b9a7a;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: #8b9a7a;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #7a8a6a;
}

/* Contact Section */
.contact {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.contact-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.contact-description {
  font-size: 1.125rem;
  color: #6c757d;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.contact-email {
  display: inline-block;
  font-size: 1.25rem;
  color: #8b9a7a;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: color 0.3s ease;
}

.contact-email:hover {
  color: #7a8a6a;
}

.social-links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}

.social-links > div {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.social-link {
  color: #6c757d;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #8b9a7a;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav {
    padding: 1rem;
  }
  
  .nav-links {
    gap: 1rem;
  }
  
  .hero {
    padding: 6rem 1rem 4rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary, .btn-secondary {
    width: 200px;
  }
  
  section {
    padding: 4rem 1rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .social-links {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .nav-links {
    display: none;
  }
}
</style>
