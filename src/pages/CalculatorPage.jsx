import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CalculatorPage = () => {
  const [formData, setFormData] = useState({
    grossAnnualIncome: "",
    netMonthlyIncome: "",
    monthlyLivingExpenses: "",
    monthlyLoanRepayments: "",
    monthlyCreditCardPayments: "",
    totalOutstandingDebts: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate borrowing capacity logic here
    navigate("/result", { state: { formData } });
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl mb-4">Borrowing Capacity Calculator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="grossAnnualIncome">Gross Annual Income</Label>
          <Input
            id="grossAnnualIncome"
            name="grossAnnualIncome"
            type="number"
            value={formData.grossAnnualIncome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="netMonthlyIncome">Net Monthly Income</Label>
          <Input
            id="netMonthlyIncome"
            name="netMonthlyIncome"
            type="number"
            value={formData.netMonthlyIncome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="monthlyLivingExpenses">Monthly Living Expenses</Label>
          <Input
            id="monthlyLivingExpenses"
            name="monthlyLivingExpenses"
            type="number"
            value={formData.monthlyLivingExpenses}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="monthlyLoanRepayments">Monthly Loan Repayments</Label>
          <Input
            id="monthlyLoanRepayments"
            name="monthlyLoanRepayments"
            type="number"
            value={formData.monthlyLoanRepayments}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="monthlyCreditCardPayments">Monthly Credit Card Payments</Label>
          <Input
            id="monthlyCreditCardPayments"
            name="monthlyCreditCardPayments"
            type="number"
            value={formData.monthlyCreditCardPayments}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="totalOutstandingDebts">Total Outstanding Debts</Label>
          <Input
            id="totalOutstandingDebts"
            name="totalOutstandingDebts"
            type="number"
            value={formData.totalOutstandingDebts}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="w-full">Calculate</Button>
      </form>
    </div>
  );
};

export default CalculatorPage;