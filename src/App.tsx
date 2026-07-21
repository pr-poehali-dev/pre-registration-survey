
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Webinar from "./pages/Webinar";
import Tracking from "./pages/Tracking";
import Usloviya from "./pages/Usloviya";
import EfirZapis from "./pages/EfirZapis";
import PlanProdag from "./pages/PlanProdag";
import KontentPraktikum from "./pages/KontentPraktikum";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tracking />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/usloviya" element={<Usloviya />} />
          <Route path="/impuls-pro" element={<EfirZapis />} />
          <Route path="/plan_prodag" element={<PlanProdag />} />
          <Route path="/kontent-praktikum" element={<KontentPraktikum />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;