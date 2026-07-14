CREATE TABLE public.support_suggestions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text,
  type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.support_suggestions TO anon;
GRANT SELECT, INSERT ON public.support_suggestions TO authenticated;
GRANT ALL ON public.support_suggestions TO service_role;

ALTER TABLE public.support_suggestions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read suggestions"
  ON public.support_suggestions FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert suggestions"
  ON public.support_suggestions FOR INSERT
  WITH CHECK (
    length(coalesce(name, '')) <= 100
    AND length(type) BETWEEN 1 AND 50
    AND length(message) BETWEEN 1 AND 2000
  );