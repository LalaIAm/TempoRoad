import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TripCard from "./TripCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin, Calendar, Route } from "lucide-react";

interface Trip {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
  status: "upcoming" | "ongoing" | "completed";
  imageUrl: string;
}

interface TripsSummaryWidgetProps {
  trips?: {
    upcoming: Trip[];
    ongoing: Trip[];
    completed: Trip[];
  };
  onTripClick?: (trip: Trip) => void;
}

const defaultTrips: Trip[] = [
  {
    id: "1",
    title: "California Coast",
    destination: "San Francisco to LA",
    startDate: "2024-03-15",
    endDate: "2024-03-22",
    budget: 1500,
    status: "upcoming",
    imageUrl:
      "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070",
  },
  {
    id: "2",
    title: "Grand Canyon Adventure",
    destination: "Arizona",
    startDate: "2024-04-01",
    endDate: "2024-04-07",
    budget: 2000,
    status: "upcoming",
    imageUrl:
      "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?q=80&w=2070",
  },
  {
    id: "3",
    title: "Rocky Mountains",
    destination: "Colorado",
    startDate: "2024-02-01",
    endDate: "2024-02-15",
    budget: 3000,
    status: "completed",
    imageUrl:
      "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d7?q=80&w=2070",
  },
];

const TripsSummaryWidget = ({
  trips = {
    upcoming: defaultTrips.filter((t) => t.status === "upcoming"),
    ongoing: defaultTrips.filter((t) => t.status === "ongoing"),
    completed: defaultTrips.filter((t) => t.status === "completed"),
  },
  onTripClick = () => {},
}: TripsSummaryWidgetProps) => {
  return (
    <Card className="w-[740px] h-[400px] bg-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Your Trips</CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Route className="w-4 h-4" />
              <span>{Object.values(trips).flat().length} Total Trips</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{trips.upcoming.length} Upcoming</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{trips.ongoing.length} Ongoing</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          {["upcoming", "ongoing", "completed"].map((status) => (
            <TabsContent key={status} value={status}>
              <ScrollArea className="h-[280px] w-full pr-4">
                <div className="grid grid-cols-2 gap-4">
                  {trips[status as keyof typeof trips].map((trip) => (
                    <TripCard
                      key={trip.id}
                      {...trip}
                      onViewDetails={() => onTripClick(trip)}
                    />
                  ))}
                  {trips[status as keyof typeof trips].length === 0 && (
                    <div className="col-span-2 flex items-center justify-center h-[200px] text-muted-foreground">
                      No {status} trips found
                    </div>
                  )}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TripsSummaryWidget;
