# Memory: index.md
Updated: just now

# Project Memory

## Core
Dark/cosmic theme, bg #030508. Right-click (desktop) / long-press (mobile) pauses animations & audio ONLY in bottom space zone — never elsewhere (mobile scroll friendly).
ROH2 brand: 'ŞAİR · MÜZİSYEN · AI'. Hero name: 'O' is #5C3A1E, 'o' is #F59E0B.
Audio: Global AudioContext sync with `loopCount` tracking. Players only have play/pause + progress bar.
AI Translation: Supabase Edge + Gemini. Per-poem translation on demand (NEVER bulk-translate all poems on global lang switch).
Lyrics: single unified block (paragraphs spaced), EN toggle in top-right corner.
UI Constraints: No standard footer, no social media cards, no glassmorphism on contact form.
Mobile: `viewport-fit=cover`, safe-area, `h-2` audio progress bars for touch.

## Memories
- [Branding & Identity](mem://identity/branding) — ROH2 brand details, logos, name styling, tags, and slogan.
- [Cosmic Theme](mem://style/cosmic-theme) — CosmicCursor, warp speed bg, pause/resume interactions.
- [Cosmic Interaction Zones](mem://features/cosmic-interaction-zones) — Right-click/long-press pause restricted to bottom space only.
- [Site Architecture](mem://ui/site-architecture) — About section poem and page bottom background video.
- [Music Section](mem://features/music-section) — Music platforms grid styling and glowing effects.
- [Poetry Section](mem://features/poetry-section) — Poetry card read/unread states, colors, and shuffle logic.
- [Audio Player](mem://features/audio-player) — Fully synced minimalist audio players across sections.
- [Bottom Video Loop](mem://features/bottom-video-loop) — Muted, autoplays, loops 2s before end to skip "coming soon" frame.
- [Streaming Popup](mem://features/streaming-popup) — After 3 song loops, modal with Spotify/Apple Music/YouTube Music links.
- [Contact Section](mem://features/contact-section) — Minimalist contact form setup and removed footer elements.
- [Privacy Policy](mem://legal/gizlilik-politikasi) — Privacy policy routing, disclaimers, and contact email.
- [iOS Configuration](mem://technical/ios-yapilandirma) — App icon styling, Capacitor config, and push notifications.
- [Mobile Performance](mem://technical/mobile-performance) — viewport-fit, touch targets, and mobile interaction rules.
- [Lyrics Section](mem://features/lyrics-section) — Single unified block, EN toggle top-right, audio player placement.
- [AI Content Translation](mem://features/content-translation) — Translation via Supabase Edge Functions & Gemini.
- [Meta Pixel Integration](mem://technical/marketing-integration) — Meta Pixel setup for PageView tracking.
