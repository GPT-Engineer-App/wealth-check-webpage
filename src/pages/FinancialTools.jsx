import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FinancialTools = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Financial Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/calculator">
            <CardHeader>
              <CardTitle>Borrowing Capacity Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Calculate your borrowing capacity based on your financial details.</p>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default FinancialTools;