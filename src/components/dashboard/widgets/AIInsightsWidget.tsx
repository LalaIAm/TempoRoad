import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, ChevronRight, Lightbulb } from "lucide-react";

interface AIInsight {
  id: string;
  title: string;
  description: string;
  type: "suggestion" | "optimization";
}

interface AIInsightsWidgetProps {
  insights?: AIInsight[];
  onInsightClick?: (insight: AIInsight) => void;
}

const defaultInsights: AIInsight[] = [
  {
    id: "1",
    title: "Optimize your route",
    description:
      "Based on your travel history, taking I-95 could save you 45 minutes.",
    type: "optimization",
  },
  {
    id: "2",
    title: "Similar trips you might enjoy",
    description: "We found 3 scenic routes similar to your last mountain trip.",
    type: "suggestion",
  },
  {
    id: "3",
    title: "Weather-based recommendation",
    description:
      "Consider rescheduling next week's trip due to forecasted storms.",
    type: "optimization",
  },
];

const AIInsightsWidget = ({
  insights = defaultInsights,
  onInsightClick = () => {},
}: AIInsightsWidgetProps) => {
  return (
    <Card className="w-[360px] h-[280px] bg-white shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <Brain className="w-5 h-5" />
          AI Travel Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Lightbulb
                    className={`w-5 h-5 ${
                      insight.type === "optimization"
                        ? "text-blue-500"
                        : "text-green-500"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{insight.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {insight.description}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 text-xs"
                    onClick={() => onInsightClick(insight)}
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsightsWidget;
