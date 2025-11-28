import { supabase } from '../lib/supabaseClient';

export const generateReport = async (evidenceIds: string[]) => {
  const { data, error } = await supabase.functions.invoke('generate-report', {
    body: { evidenceIds },
  });

  if (error) {
    throw new Error(`Failed to generate report: ${error.message}`);
  }

  // Assuming the function returns the public URL of the generated PDF
  return data.reportUrl;
};