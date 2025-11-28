import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kfnksygvjtwpfrqkfkfi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmbmtzeWd2anR3cGZycWtma2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzMzcyMDQsImV4cCI6MjA3OTkxMzIwNH0.orphv0mHedAxs7-QyL_M9qQzfdDh2Z2Fl4EvAMV0uTI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);