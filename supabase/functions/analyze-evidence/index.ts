import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'

console.log('analyze-evidence function is ready.');

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Ensure the request has a body
    if (!req.body) {
        throw new Error('Request body is missing.');
    }
    const { evidenceText } = await req.json();

    if (!evidenceText) {
      throw new Error('`evidenceText` is required in the request body.');
    }

    // Simulate AI analysis to fix the communication channel
    // In a real scenario, you would call an AI service like OpenAI here.
    const summary = `This is a simulated AI summary for the evidence provided. The analysis suggests the content is related to potential digital harassment.`;
    const labels = ['digital-harassment', 'simulated-analysis', 'text-evidence'];
    const severity = (Math.random() * (0.85 - 0.45) + 0.45).toFixed(2); // Simulate a severity score between 0.45 and 0.85

    const analysisResult = {
      summary,
      labels,
      severity,
      analyzedAt: new Date().toISOString(),
    }

    return new Response(JSON.stringify({ result: analysisResult }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error in analyze-evidence function:', error.message);
    return new Response(JSON.stringify({ error: `Function error: ${error.message}` }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
