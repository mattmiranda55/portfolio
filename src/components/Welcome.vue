<template>
  <div class="portfolio-container">
    <!-- Navigation -->
    <nav class="nav">
      <div class="nav-brand">Matt</div>
      <div class="nav-links">
        <a href="#about" class="nav-link">About</a>
        <a href="#work" class="nav-link">Work</a>
        <a href="#api" class="nav-link">API</a>
        <a href="#contact" class="nav-link">Contact</a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-layout">
        <!-- Terminal Section -->
        <div class="terminal-section">
          <Terminal 
            command="curl mattmiranda.dev"
            prompt="visitor@mattmiranda.dev:~$"
            :typing-speed="80"
            :auto-start="true"
          />
        </div>

        <!-- Main Content -->
        <div class="hero-content">
          <div class="hero-greeting">HI, I'M MATT</div>
          <h1 class="hero-title">AI-Powered Full Stack Developer</h1>
          <p class="hero-description">I build intelligent applications that leverage cutting-edge AI technologies to solve complex real-world problems.</p>
          <div class="hero-actions">
            <a href="#work" class="btn-primary">View My Work</a>
            <a href="#contact" class="btn-secondary">Get In Touch</a>
          </div>
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
          <p class="about-text">I'm a Computer Science graduate from East Carolina University specializing in AI-powered full-stack development. With expertise in OpenAI API integration, machine learning frameworks like LangChain and Apache Spark, and robust backend systems using Django and PostgreSQL, I create intelligent applications that transform how users interact with data. From AI-driven flashcard generators to document analysis systems, I combine cutting-edge artificial intelligence with scalable web architecture to build solutions that are both innovative and practical.</p>
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
          <div class="skill-category ai-featured">
            <h3 class="skill-category-title">AI & Machine Learning</h3>
            <div class="skill-tags">
              <span class="skill-tag">OpenAI API</span>
              <span class="skill-tag">IBM watsonx.ai</span>
              <span class="skill-tag">LangChain</span>
              <span class="skill-tag">Apache Spark</span>
              <span class="skill-tag">Scikit-learn</span>
              <span class="skill-tag">RAG</span>
            </div>
          </div>
          <div class="skill-category">
            <h3 class="skill-category-title">Backend Development</h3>
            <div class="skill-tags">
              <span class="skill-tag">Django</span>
              <span class="skill-tag">Python</span>
              <span class="skill-tag">REST APIs</span>
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">JWT Auth</span>
              <span class="skill-tag">AWS S3</span>
            </div>
          </div>
          <div class="skill-category">
            <h3 class="skill-category-title">Frontend & Web</h3>
            <div class="skill-tags">
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">HTML/CSS</span>
              <span class="skill-tag">Streamlit</span>
              <span class="skill-tag">Chrome Extensions</span>
              <span class="skill-tag">Responsive Design</span>
            </div>
          </div>
          <div class="skill-category">
            <h3 class="skill-category-title">Data & Analytics</h3>
            <div class="skill-tags">
              <span class="skill-tag">Pandas</span>
              <span class="skill-tag">Jupyter</span>
              <span class="skill-tag">Vector Databases</span>
              <span class="skill-tag">PDF Processing</span>
              <span class="skill-tag">Web Scraping</span>
              <span class="skill-tag">Data Visualization</span>
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
              <p class="project-description">An AI-powered Django flashcard management system developed as a capstone project. Features intelligent PDF processing with OpenAI GPT-3.5-turbo integration that automatically extracts text and generates comprehensive question-answer pairs from uploaded documents. Includes user authentication, JWT tokens, automated HTML-to-PDF conversion, dynamic card set creation, and RESTful API endpoints for seamless AI-driven educational content generation.</p>
              <div class="project-tech">
                <span class="tech-tag">OpenAI API</span>
                <span class="tech-tag">Django</span>
                <span class="tech-tag">GPT-3.5</span>
                <span class="tech-tag">PDF Processing</span>
                <span class="tech-tag">AI Generation</span>
                <span class="tech-tag">JWT Auth</span>
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
              <h3 class="project-title">Bone Graft Consortium Backend</h3>
              <p class="project-description">A comprehensive Django REST API serving as the backend for the Bone Graft Consortium database - a non-biased, 501(c)(3) nonprofit platform. Features complete graft management with categorization, regulatory compliance tracking, user authentication with JWT tokens, credit-based posting system, PayPal payment integration, and AWS S3 file storage for images and documents. Includes admin validation workflows and comprehensive CRUD operations for bone graft products.</p>
              <div class="project-tech">
                <span class="tech-tag">PostgreSQL</span>
                <span class="tech-tag">Django</span>
              </div>
              <div class="project-links">
                <a href="https://github.com/mattmiranda55/BGCBackEnd" class="project-link" target="_blank">GitHub</a>
              </div>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">
              <img src="https://lava.mattmiranda.dev/portfolio/images/ai.webp" />
            </div>
            <div class="project-content">
              <h3 class="project-title">PDF Question Bot</h3>
              <p class="project-description">An intelligent document analysis application leveraging IBM watsonx.ai and LangChain for PDF processing. Features vector embeddings with HuggingFace transformers, document chunking and indexing, retrieval-augmented generation (RAG), and an interactive Streamlit interface with chat functionality for natural language querying of PDF content.</p>
              <div class="project-tech">
                <span class="tech-tag">IBM watsonx.ai</span>
                <span class="tech-tag">LangChain</span>
                <span class="tech-tag">Streamlit</span>
                <span class="tech-tag">RAG</span>
                <span class="tech-tag">Vector DB</span>
                <span class="tech-tag">NLP</span>
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
import Terminal from './Terminal.vue'
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
  background: #663399;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
  background: #fafafa;
}

.hero-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  align-items: center;
  position: relative;
}

.terminal-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  text-align: center;
  padding: 2rem;
  animation: fadeInUp 0.8s ease-out;
}

.hero-greeting {
  font-size: 1rem;
  color: #663399;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
  background: linear-gradient(135deg, #2c3e50 0%, #663399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.125rem;
  color: #6c757d;
  margin-bottom: 2rem;
  line-height: 1.6;
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
  background: #663399;
  color: white;
  border: 2px solid #663399;
}

.btn-primary:hover {
  background: #7a8a6a;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 154, 122, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #663399;
  border: 2px solid #663399;
}

.btn-secondary:hover {
  background: #663399;
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
  background: #663399;
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
  position: relative;
  overflow: hidden;
  border-top: 4px solid #663399;
}

.skill-category:hover {
  transform: translateY(-4px);
}

.skill-category.ai-featured {
  background: linear-gradient(135deg, rgba(102, 51, 153, 0.05) 0%, rgba(138, 79, 191, 0.05) 100%);
  border-top: 4px solid #663399;
  box-shadow: 0 8px 32px rgba(102, 51, 153, 0.15);
}

.skill-category.ai-featured:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(102, 51, 153, 0.2);
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
  color: #663399;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: #663399;
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
  background: linear-gradient(135deg, #663399 0%, #8a4fbf 100%);
  position: relative;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
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
  background: #663399;
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
  color: #663399;
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
  color: #663399;
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
  color: #663399;
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
@media (max-width: 1024px) {
  .hero-layout {
    gap: 2rem;
  }
  
  .hero-content {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .nav {
    padding: 1rem;
  }
  
  .nav-links {
    gap: 1rem;
  }
  
  .hero {
    padding: 1rem;
    min-height: auto;
  }
  
  .hero-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .terminal-section {
    order: 2;
  }
  
  .hero-content {
    order: 1;
    padding: 1.5rem;
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
