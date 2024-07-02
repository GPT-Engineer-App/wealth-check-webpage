import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  if (!formData) {
    return <div>No data available. Please go back and fill the form.</div>;
  }

  // Calculate borrowing capacity logic here
  const borrowingCapacity = calculateBorrowingCapacity(formData);

  function calculateBorrowingCapacity(data) {
    // Placeholder calculation logic
    const income = parseFloat(data.netMonthlyIncome);
    const expenses = parseFloat(data.monthlyLivingExpenses) + parseFloat(data.monthlyLoanRepayments) + parseFloat(data.monthlyCreditCardPayments);
    const debts = parseFloat(data.totalOutstandingDebts);
    return income - expenses - debts;
  }

  return (
    <div className="max-w-lg mx-auto text-center">
      <h1 className="text-2xl mb-4">Your Borrowing Capacity</h1>
      <p className="text-xl mb-4">${borrowingCapacity.toFixed(2)}</p>
      <Button onClick={() => navigate("/calculator")} className="w-full">Go Back</Button>
    </div>
  );
};

export default ResultPage;