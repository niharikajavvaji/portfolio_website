/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email address
  - `subject` (text, not null) — message subject line
  - `message` (text, not null) — the message body
  - `is_read` (boolean, default false) — flag for tracking read status
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `contact_messages`.
- Allow anon + authenticated to INSERT (the public contact form submits as anon).
- No SELECT/UPDATE/DELETE for anon or authenticated — only the owner/admin reads messages, which is done through the Supabase dashboard with the service role key that bypasses RLS.

3. Important Notes
1. This is a single-tenant public contact form with no sign-in screen.
2. Only INSERT is exposed to the public so visitors can submit messages.
3. Reading and managing submitted messages happens through the Supabase dashboard using the service role key, which bypasses RLS.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);