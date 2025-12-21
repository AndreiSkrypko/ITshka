import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CityProvider } from "@/contexts/CityContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Оптимизированная конфигурация QueryClient для лучшей производительности
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 минут
      cacheTime: 10 * 60 * 1000, // 10 минут
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <CityProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/minsk" element={<Index />} />
              <Route path="/lida" element={<Index />} />
              <Route path="/warsaw" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CityProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;


