-- contact_messages: replace permissive INSERT (WITH CHECK true) with length-validated policy
DROP POLICY IF EXISTS "Anyone can insert contact messages" ON public.contact_messages;

CREATE POLICY "Anyone can insert contact messages"
  ON public.contact_messages
  FOR INSERT
  TO public
  WITH CHECK (
    length(name) BETWEEN 1 AND 200
    AND length(email) BETWEEN 3 AND 320
    AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(message) BETWEEN 1 AND 5000
  );

-- Explicitly deny SELECT (fail-closed lock-in)
DROP POLICY IF EXISTS "Deny all reads on contact_messages" ON public.contact_messages;
CREATE POLICY "Deny all reads on contact_messages"
  ON public.contact_messages
  FOR SELECT
  TO public
  USING (false);

-- newsletter_subscribers: replace permissive INSERT (WITH CHECK true) with validated policy
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.newsletter_subscribers;

CREATE POLICY "Allow anonymous inserts"
  ON public.newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(email) BETWEEN 3 AND 320
    AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  );

-- Explicitly deny SELECT
DROP POLICY IF EXISTS "Deny all reads on newsletter_subscribers" ON public.newsletter_subscribers;
CREATE POLICY "Deny all reads on newsletter_subscribers"
  ON public.newsletter_subscribers
  FOR SELECT
  TO public
  USING (false);