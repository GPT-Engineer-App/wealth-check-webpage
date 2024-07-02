import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Property Club</h1>
      <p className="mb-8">
        Property investing can be a great way to build wealth and secure your financial future. At Property Club, we provide you with the tools and resources you need to make informed investment decisions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/financial-wealth-check">
            <CardHeader>
              <CardTitle>Financial Wealth Check</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Assess your financial health and plan your investment strategy.</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/financial-tools">
            <CardHeader>
              <CardTitle>Financial Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore our suite of financial calculators and tools.</p>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Index;