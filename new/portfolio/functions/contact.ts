// Cloudflare Pages Function for contact form
// This endpoint will be available at /api/contact

interface Env {
  // Add your environment variables here
  // RESEND_API_KEY: string
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { name, email, message } = await context.request.json() as {
      name: string
      email: string
      message: string
    }

    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Here you can:
    // 1. Send email using a service like Resend, SendGrid, etc.
    // 2. Store in a database
    // 3. Send to a webhook
    // 4. Integrate with CRM

    // Example with Resend:
    // const response = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     from: 'portfolio@yourdomain.com',
    //     to: 'your-email@example.com',
    //     subject: `Portfolio Contact from ${name}`,
    //     text: `From: ${name} (${email})\n\nMessage:\n${message}`
    //   })
    // })

    // For now, just return success
    console.log('Contact form submission:', { name, email, message })

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Message received! I\'ll get back to you soon.'
      }),
      { 
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send message. Please try again.'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
