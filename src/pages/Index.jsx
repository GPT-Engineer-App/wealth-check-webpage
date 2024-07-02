import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Borrowing Capacity Calculator</h1>
      <p>This tool helps investors determine how much they can borrow based on their income, expenses, and current debts.</p>
      <Link to="/calculator" className="mt-4 inline-block text-blue-500">
        Go to Calculator
      </Link>
    </div>
  );
};

export default Index;
