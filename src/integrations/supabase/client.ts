import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://bvhwrsvtdbbcotsaxkhh.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2aHdyc3Z0ZGJiY290c2F4a2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwNTA0MzEsImV4cCI6MjA5NDYyNjQzMX0.4VpeY7ZUAWjGjv9uIVRp5Ii-Bj_YJHSBvjLb-btCdSk';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
