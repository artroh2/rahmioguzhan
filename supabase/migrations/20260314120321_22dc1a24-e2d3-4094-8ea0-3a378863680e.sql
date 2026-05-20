
CREATE TABLE public.current_status (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  emoji text NOT NULL DEFAULT '💻',
  status_text text NOT NULL DEFAULT 'AIQrace & Mülkex geliştiriyorum',
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.current_status ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read status" ON public.current_status
  FOR SELECT USING (true);

INSERT INTO public.current_status (emoji, status_text) VALUES ('💻', 'AIQrace & Mülkex geliştiriyorum');
