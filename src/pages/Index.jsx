import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tools = [
  { name: "Borrowing Capacity Calculator", path: "/calculator" },
  { name: "Financial Wealth Check", path: "/financial-wealth-check" }, // Added new menu item
  { name: "Loan Repayment Calculator", path: "/loan-repayment" },
  { name: "Investment Property Calculator", path: "/investment-property" },
  { name: "Interest Rate Comparison Tool", path: "/interest-rate-comparison" },
  { name: "Mortgage Comparison Tool", path: "/mortgage-comparison" },
  { name: "Budget Planner", path: "/budget-planner" },
  { name: "Debt Consolidation Calculator", path: "/debt-consolidation" },
  { name: "Stamp Duty Calculator", path: "/stamp-duty" },
  { name: "Savings Goal Calculator", path: "/savings-goal" },
  { name: "Rental Yield Calculator", path: "/rental-yield" },
  { name: "Property Valuation Tool", path: "/property-valuation" },
  { name: "Affordability Calculator", path: "/affordability" },
  { name: "Capital Gains Tax Calculator", path: "/capital-gains-tax" },
  { name: "Equity Release Calculator", path: "/equity-release" },
  { name: "Credit Score Checker", path: "/credit-score" },
  { name: "Lender Comparison Tool", path: "/lender-comparison" },
];

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Financial Tools</h1>
      <p className="mb-8">Choose from the following financial tools:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Card key={tool.name} className="hover:shadow-lg transition-shadow">
            <Link to={tool.path}>
              <CardHeader>
                <CardTitle>{tool.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{tool.description}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;