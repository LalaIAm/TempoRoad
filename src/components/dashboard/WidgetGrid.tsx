import React from "react";
import { Card } from "@/components/ui/card";
import BudgetWidget from "./widgets/BudgetWidget";
import CalendarWidget from "./widgets/CalendarWidget";
import AIInsightsWidget from "./widgets/AIInsightsWidget";

interface Widget {
  id: string;
  type: "budget" | "calendar" | "ai-insights";
  position: { x: number; y: number };
}

interface WidgetGridProps {
  widgets?: Widget[];
  onWidgetMove?: (id: string, position: { x: number; y: number }) => void;
}

const defaultWidgets: Widget[] = [
  { id: "1", type: "budget", position: { x: 0, y: 0 } },
  { id: "2", type: "calendar", position: { x: 1, y: 0 } },
  { id: "3", type: "ai-insights", position: { x: 2, y: 0 } },
];

const WidgetGrid = ({
  widgets = defaultWidgets,
  onWidgetMove = () => {},
}: WidgetGridProps) => {
  const renderWidget = (widget: Widget) => {
    switch (widget.type) {
      case "budget":
        return <BudgetWidget />;
      case "calendar":
        return <CalendarWidget />;
      case "ai-insights":
        return <AIInsightsWidget />;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full h-full bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {widgets.map((widget) => (
          <div
            key={widget.id}
            className="transition-all duration-200 hover:shadow-lg"
            style={{
              transform: `translate(${widget.position.x * 100}%, ${
                widget.position.y * 100
              }%)`,
            }}
          >
            {renderWidget(widget)}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default WidgetGrid;
