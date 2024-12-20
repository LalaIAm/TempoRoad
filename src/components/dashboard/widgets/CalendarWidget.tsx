import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CalendarDays } from "lucide-react";

interface CalendarWidgetProps {
  trips?: Array<{
    id: string;
    title: string;
    startDate: Date;
    endDate: Date;
  }>;
}

const defaultTrips = [
  {
    id: "1",
    title: "Beach Vacation",
    startDate: new Date(2024, 2, 15),
    endDate: new Date(2024, 2, 20),
  },
  {
    id: "2",
    title: "Mountain Retreat",
    startDate: new Date(2024, 3, 1),
    endDate: new Date(2024, 3, 5),
  },
];

const CalendarWidget = ({ trips = defaultTrips }: CalendarWidgetProps) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // Find trips that occur on the selected date
  const selectedDateTrips = trips.filter((trip) => {
    if (!date) return false;
    return date >= trip.startDate && date <= trip.endDate;
  });

  return (
    <Card className="w-[360px] h-[280px] bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5" />
          Trip Calendar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-[1fr_120px] gap-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <ScrollArea className="h-[200px]">
            {selectedDateTrips.length > 0 ? (
              <div className="space-y-2">
                {selectedDateTrips.map((trip) => (
                  <Badge
                    key={trip.id}
                    variant="secondary"
                    className="w-full justify-start"
                  >
                    {trip.title}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No trips on this date
              </p>
            )}
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarWidget;
