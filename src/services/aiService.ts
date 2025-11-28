import { supabase } from '../lib/supabaseClient';

/**
 * Invokes the 'analyze-evidence' Supabase Edge Function to perform AI analysis on the given text.
 * @param evidenceText The text content of the evidence to be analyzed.
 * @returns The analysis result from the Edge Function.
 */
export const analyzeEvidence = async (evidenceText: string) => {
  if (!evidenceText || evidenceText.trim().length === 0) {
    throw new Error('Evidence text to analyze cannot be empty.');
  }

  console.log('Invoking Supabase Edge Function: analyze-evidence...');

  const { data, error } = await supabase.functions.invoke('analyze-evidence', {
    body: { evidenceText },
  });

  if (error) {
    console.error('Error invoking edge function:', error);
    // This error typically means a network issue, function not deployed, or CORS problem.
    throw new Error(`Failed to send a request to the Edge Function. Please ensure it is deployed correctly. Details: ${error.message}`);
  }

  // The function itself might return an error object inside the data payload
  if (data.error) {
    console.error('An error occurred within the Edge Function:', data.error);
    throw new Error(`The analysis process failed inside the Edge Function: ${data.error}`);
  }

  console.log('Successfully received analysis from Edge Function:', data.result);
  return data.result;
};
