import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, DollarSign, ArrowRight } from "lucide-react";

interface TripCardProps {
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
  status: "upcoming" | "ongoing" | "completed";
  imageUrl: string;
  onViewDetails?: () => void;
}

const TripCard = ({
  title = "California Coast Road Trip",
  destination = "San Francisco to Los Angeles",
  startDate = "2024-03-15",
  endDate = "2024-03-22",
  budget = 1500,
  status = "upcoming",
  imageUrl = "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070",
  onViewDetails = () => console.log("View details clicked"),
}: TripCardProps) => {
  const statusColors = {
    upcoming: "bg-blue-500",
    ongoing: "bg-green-500",
    completed: "bg-gray-500",
  };

  return (
    <Card className="w-[340px] h-[180px] overflow-hidden bg-white hover:shadow-lg transition-shadow">
      <div className="flex h-full">
        <div
          className="w-1/3 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="w-2/3 flex flex-col justify-between">
          <CardHeader className="p-3">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg truncate">{title}</CardTitle>
              <Badge
                variant="secondary"
                className={`${statusColors[status]} text-white`}
              >
                {status}
              </Badge>
            </div>
            <CardDescription className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span className="truncate text-xs">{destination}</span>
            </CardDescription>
          </CardHeader>

          <CardContent className="p-3 pt-0">
            <div className="flex flex-col gap-1 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span className="text-xs">
                  {new Date(startDate).toLocaleDateString()} -{" "}
                  {new Date(endDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-3 h-3" />
                <span className="text-xs">${budget}</span>
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-3 pt-0">
            <Button
              variant="ghost"
              className="w-full h-8 text-xs"
              onClick={onViewDetails}
            >
              View Details
              <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default TripCard;
