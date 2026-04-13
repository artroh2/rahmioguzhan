import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ReactPixel from "react-facebook-pixel";
import Index from "./pages/Index";
import Manifesto from "./pages/Manifesto";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const PIXEL_ID = "1901323140522127";

ReactPixel.init(PIXEL_ID, undefined, {
  autoConfig: true,
  debug: false,
});

const queryClient = new QueryClient();

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactPixel.pageView();
  }, [location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageViewTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/privacy" element={<Privacy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
