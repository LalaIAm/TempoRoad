import React from "react";
import DashboardHeader from "./dashboard/DashboardHeader";
import TripsSummaryWidget from "./dashboard/TripsSummaryWidget";
import WidgetGrid from "./dashboard/WidgetGrid";

interface HomeProps {
  userName?: string;
  userAvatar?: string;
  notificationCount?: number;
  onNewTrip?: () => void;
  onNotificationsClick?: () => void;
  onSettingsClick?: () => void;
  onLogout?: () => void;
  onTripClick?: (trip: any) => void;
}

const Home = ({
  userName = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  notificationCount = 3,
  onNewTrip = () => console.log("New trip clicked"),
  onNotificationsClick = () => console.log("Notifications clicked"),
  onSettingsClick = () => console.log("Settings clicked"),
  onLogout = () => console.log("Logout clicked"),
  onTripClick = () => console.log("Trip clicked"),
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader
        userName={userName}
        userAvatar={userAvatar}
        notificationCount={notificationCount}
        onNewTrip={onNewTrip}
        onNotificationsClick={onNotificationsClick}
        onSettingsClick={onSettingsClick}
        onLogout={onLogout}
      />

      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex justify-center">
          <TripsSummaryWidget onTripClick={onTripClick} />
        </div>

        <div className="w-full">
          <WidgetGrid />
        </div>
      </main>
    </div>
  );
};

export default Home;
