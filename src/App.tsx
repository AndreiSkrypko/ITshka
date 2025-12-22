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
              <Route path="/brest" element={<Index />} />
              <Route path="/vitebsk" element={<Index />} />
              <Route path="/gomel" element={<Index />} />
              <Route path="/grodno" element={<Index />} />
              <Route path="/mogilev" element={<Index />} />
              <Route path="/baranovichi" element={<Index />} />
              <Route path="/bobruisk" element={<Index />} />
              <Route path="/pinsk" element={<Index />} />
              <Route path="/orsha" element={<Index />} />
              <Route path="/maladzyechna" element={<Index />} />
              <Route path="/salihorsk" element={<Index />} />
              <Route path="/navapolatsk" element={<Index />} />
              <Route path="/polatsk" element={<Index />} />
              <Route path="/mazyr" element={<Index />} />
              <Route path="/slutsk" element={<Index />} />
              <Route path="/moscow" element={<Index />} />
              <Route path="/spb" element={<Index />} />
              <Route path="/novosibirsk" element={<Index />} />
              <Route path="/ekaterinburg" element={<Index />} />
              <Route path="/kazan" element={<Index />} />
              <Route path="/nizhny-novgorod" element={<Index />} />
              <Route path="/chelyabinsk" element={<Index />} />
              <Route path="/samara" element={<Index />} />
              <Route path="/omsk" element={<Index />} />
              <Route path="/rostov-on-don" element={<Index />} />
              <Route path="/ufa" element={<Index />} />
              <Route path="/krasnoyarsk" element={<Index />} />
              <Route path="/voronezh" element={<Index />} />
              <Route path="/perm" element={<Index />} />
              <Route path="/volgograd" element={<Index />} />
              {/* Обрабатываем любые другие пути с городами - показываем ближайший город */}
              <Route path="/:cityName" element={<Index />} />
              {/* Остальные несуществующие пути */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CityProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;


