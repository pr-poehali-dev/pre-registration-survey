
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
import Webinar from "./pages/Webinar";
import Form2 from "./pages/Form2";
import Tracking from "./pages/Tracking";
import Razbor from "./pages/Razbor";
import Usloviya from "./pages/Usloviya";
import EfirZapis from "./pages/EfirZapis";
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
          <Route path="/form" element={<Index />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/tracking" element={<Landing />} />
          <Route path="/razbor" element={<Razbor />} />
          <Route path="/usloviya" element={<Usloviya />} />
          <Route path="/impuls-pro" element={<EfirZapis />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;