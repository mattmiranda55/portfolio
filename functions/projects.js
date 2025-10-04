// Projects API endpoint
// Returns all projects in JSON format

export async function onRequest(context) {
  const { request } = context;
  
  // Only handle GET requests
  if (request.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 });
  }
  
  const url = new URL(request.url);
  const userAgent = request.headers.get('User-Agent') || '';
  
  // Project data extracted from the portfolio
  const projectsData = {
    projects: [
      {
        name: "CardCraft",
        description: "An AI-powered Django flashcard management system developed as a capstone project. Features intelligent PDF processing with OpenAI GPT-3.5-turbo integration that automatically extracts text and generates comprehensive question-answer pairs from uploaded documents. Includes user authentication, JWT tokens, automated HTML-to-PDF conversion, dynamic card set creation, and RESTful API endpoints for seamless AI-driven educational content generation.",
        technologies: [
          "OpenAI API",
          "Django", 
          "GPT-3.5",
          "PDF Processing",
          "AI Generation",
          "JWT Auth"
        ],
        links: {
          github: "https://github.com/mattmiranda55/CardCraftBackEnd"
        },
        category: "AI & Machine Learning",
      },
      {
        name: "Bone Graft Consortium Backend",
        description: "A comprehensive Django REST API serving as the backend for the Bone Graft Consortium database - a non-biased, 501(c)(3) nonprofit platform. Features complete graft management with categorization, regulatory compliance tracking, user authentication with JWT tokens, credit-based posting system, PayPal payment integration, and AWS S3 file storage for images and documents. Includes admin validation workflows and comprehensive CRUD operations for bone graft products.",
        technologies: [
          "PostgreSQL",
          "Django",
          "REST APIs",
          "JWT Auth",
          "PayPal Integration",
          "AWS S3"
        ],
        links: {
          github: "https://github.com/mattmiranda55/BGCBackEnd"
        },
        category: "Backend Development",
      },
      {
        name: "PDF Question Bot",
        description: "An intelligent document analysis application leveraging IBM watsonx.ai and LangChain for PDF processing. Features vector embeddings with HuggingFace transformers, document chunking and indexing, retrieval-augmented generation (RAG), and an interactive Streamlit interface with chat functionality for natural language querying of PDF content.",
        technologies: [
          "IBM watsonx.ai",
          "LangChain",
          "Streamlit",
          "RAG",
          "Vector DB",
          "NLP"
        ],
        links: {
          github: "https://github.com/mattmiranda55/PDF_Question_Bot"
        },
        category: "AI & Machine Learning",
      }
    ]
  };
  
  return new Response(JSON.stringify(projectsData, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
