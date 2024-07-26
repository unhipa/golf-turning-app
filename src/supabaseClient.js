import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jnruuyqqrhqeowpdfplr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpucnV1eXFxcmhxZW93cGRmcGxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzMTg5MDYsImV4cCI6MjAzNDg5NDkwNn0.6zPUY5VA_QFl0w2-MUyNzJszVj8uKNYw6rXZVdtAFN8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
