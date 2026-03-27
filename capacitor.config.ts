import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.2d22a4791de740d5b49e6523d5db89e1',
  appName: 'ROH2',
  webDir: 'dist',
  server: {
    url: 'https://2d22a479-1de7-40d5-b49e-6523d5db89e1.lovableproject.com?forceHideBadge=true',
    cleartext: true,
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
};

export default config;
