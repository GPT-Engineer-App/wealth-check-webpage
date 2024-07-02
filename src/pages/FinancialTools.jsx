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
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/loan-repayment-calculator">
            <CardHeader>
              <CardTitle>Loan Repayment Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This tool calculates monthly loan repayments based on the loan amount, interest rate, and loan term.</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/investment-property-calculator">
            <CardHeader>
              <CardTitle>Investment Property Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This tool estimates the potential return on investment (ROI) for a property, considering factors like purchase price, rental income, and expenses.</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/interest-rate-comparison-tool">
            <CardHeader>
              <CardTitle>Interest Rate Comparison Tool</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This allows users to compare interest rates from different lenders.</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/mortgage-comparison-tool">
            <CardHeader>
              <CardTitle>Mortgage Comparison Tool</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This tool helps users compare different mortgage products based on interest rates, fees, and features.</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/budget-planner">
            <CardHeader>
              <CardTitle>Budget Planner</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This tool helps users create a budget to manage their income and expenses effectively.</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/debt-consolidation-calculator">
            <CardHeader>
              <CardTitle>Debt Consolidation Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This tool helps users determine if consolidating their debts into a single loan could save them money.</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/stamp-duty-calculator">
            <CardHeader>
              <CardTitle>Stamp Duty Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This tool calculates the stamp duty payable on property purchases in different regions.</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/savings-goal-calculator">
            <CardHeader>
              <CardTitle>Savings Goal Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This tool helps users plan how much they need to save to reach a specific financial goal.</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/rental-yield-calculator">
            <CardHeader>
              <CardTitle>Rental Yield Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This tool calculates the rental yield of a property based on its purchase price and rental income.</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/property-valuation-tool">
            <CardHeader>
              <CardTitle>Property Valuation Tool</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This tool provides an estimate of a property's current market value based on recent sales data and market trends.</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/affordability-calculator">
            <CardHeader>
              <CardTitle>Affordability Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This tool helps users determine how much they can afford to spend on a property based on their income and expenses.</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/capital-gains-tax-calculator">
            <CardHeader>
              <CardTitle>Capital Gains Tax Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This tool calculates the capital gains tax payable on the sale of an investment property.</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/equity-release-calculator">
            <CardHeader>
              <CardTitle>Equity Release Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This tool helps homeowners calculate how much equity they can release from their property.</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/credit-score-checker">
            <CardHeader>
              <CardTitle>Credit Score Checker</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This tool provides users with their credit score and tips on how to improve it.</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/lender-comparison-tool">
            <CardHeader>
              <CardTitle>Lender Comparison Tool</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This tool compares different lenders based on their loan products, interest rates, and customer reviews.</p>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default FinancialTools;