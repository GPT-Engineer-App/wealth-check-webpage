import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Calculator, CheckCircle } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";
import CalculatorPage from "./pages/CalculatorPage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import FinancialWealthCheck from "./pages/FinancialWealthCheck.jsx";
import FinancialTools from "./pages/FinancialTools.jsx"; // Import the new page

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Financial Wealth Check",
    to: "/financial-wealth-check",
    icon: <CheckCircle className="h-4 w-4" />,
  },
  {
    title: "Financial Tools",
    to: "/financial-tools",
    icon: <Calculator className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="calculator" element={<CalculatorPage />} />
              <Route path="result" element={<ResultPage />} />
              <Route path="financial-wealth-check" element={<FinancialWealthCheck />} />
              <Route path="financial-tools" element={<FinancialTools />} /> {/* Add the new route */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;