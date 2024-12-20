import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface BudgetData {
  totalBudget: number;
  spent: number;
  categories: {
    name: string;
    amount: number;
    limit: number;
  }[];
}

interface BudgetWidgetProps {
  budgetData?: BudgetData;
}

const defaultBudgetData: BudgetData = {
  totalBudget: 1000,
  spent: 650,
  categories: [
    { name: "Accommodation", amount: 300, limit: 400 },
    { name: "Food", amount: 200, limit: 300 },
    { name: "Transportation", amount: 150, limit: 200 },
  ],
};

const BudgetWidget = ({
  budgetData = defaultBudgetData,
}: BudgetWidgetProps) => {
  const percentageSpent = (budgetData.spent / budgetData.totalBudget) * 100;
  const isOverBudget = budgetData.spent > budgetData.totalBudget;

  return (
    <Card className="w-full h-full bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Budget Tracker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Total Spent: ${budgetData.spent}</span>
            <span>Budget: ${budgetData.totalBudget}</span>
          </div>
          <Progress
            value={percentageSpent}
            className="h-2"
            indicatorClassName={isOverBudget ? "bg-red-500" : "bg-green-500"}
          />
        </div>

        {isOverBudget && (
          <Alert variant="destructive" className="mt-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              You have exceeded your budget by $
              {budgetData.spent - budgetData.totalBudget}
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-3">
          <h3 className="text-sm font-medium">Category Breakdown</h3>
          {budgetData.categories.map((category, index) => {
            const categoryPercentage = (category.amount / category.limit) * 100;
            return (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{category.name}</span>
                  <span>
                    ${category.amount} / ${category.limit}
                  </span>
                </div>
                <Progress
                  value={categoryPercentage}
                  className="h-1"
                  indicatorClassName={
                    categoryPercentage > 100 ? "bg-red-500" : "bg-blue-500"
                  }
                />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetWidget;
