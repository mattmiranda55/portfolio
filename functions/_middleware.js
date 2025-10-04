// Cloudflare Pages Middleware to handle HTTP requests before redirect
// This ensures curl mattmiranda.dev works without -L flag

export async function onRequest(context) {
  const { request, next } = context;
  
  // Only handle GET requests to the root path
  if (request.method !== 'GET') {
    return next();
  }
  
  const url = new URL(request.url);
  if (url.pathname !== '/') {
    return next();
  }
  
  const userAgent = request.headers.get('User-Agent') || '';
  
  // Check if this is an API client (curl, Postman, HTTPie, etc.)
  const isApiClient = 
    userAgent.toLowerCase().includes('curl') ||
    userAgent.toLowerCase().includes('postman') ||
    userAgent.toLowerCase().includes('httpie') ||
    userAgent.toLowerCase().includes('wget') ||
    userAgent.toLowerCase().includes('python-requests') ||
    userAgent.toLowerCase().includes('node-fetch') ||
    userAgent.toLowerCase().includes('axios') ||
    // Check for Accept header preferring JSON
    request.headers.get('Accept')?.includes('application/json') ||
    // Check for common API client patterns
    /^(curl|wget|httpie|postman|insomnia)/i.test(userAgent) ||
    // Check for programming language HTTP clients
    /(python|node|ruby|go|rust|java|php|dotnet|powershell)/i.test(userAgent);
  
  // If it's an API client, return JSON regardless of protocol (HTTP or HTTPS)
  if (isApiClient) {
    // Return Matt's profile data as JSON
    const profileData = {
      name: "Matt Miranda",
      title: "Full Stack Developer",
      contact: {
        email: "mattmiranda55@gmail.com",
        linkedin: "https://www.linkedin.com/in/matthew-miranda-b4b45a232/",
        github: "https://github.com/mattmiranda55",
        website: "mattmiranda.dev" // Always use HTTPS for website URL
      }
    };
    
    return new Response(JSON.stringify(profileData, null, 2), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  }
  
  // For browsers, let Cloudflare handle the HTTP->HTTPS redirect naturally
  return next();
}
