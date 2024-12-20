import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Plus, Settings, LogOut, User, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface DashboardHeaderProps {
  userName?: string;
  userAvatar?: string;
  notificationCount?: number;
  onNewTrip?: () => void;
  onNotificationsClick?: () => void;
  onSettingsClick?: () => void;
  onLogout?: () => void;
}

const DashboardHeader = ({
  userName = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  notificationCount = 3,
  onNewTrip = () => console.log("New trip clicked"),
  onNotificationsClick = () => console.log("Notifications clicked"),
  onSettingsClick = () => console.log("Settings clicked"),
  onLogout = () => console.log("Logout clicked"),
}: DashboardHeaderProps) => {
  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Road Dog</h1>
        <Button
          onClick={onNewTrip}
          className="bg-primary text-white hover:bg-primary/90"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Trip
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={onNotificationsClick}
        >
          <Bell className="w-5 h-5" />
          {notificationCount > 0 && (
            <Badge
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500"
              variant="destructive"
            >
              {notificationCount}
            </Badge>
          )}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 hover:bg-gray-100"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={userAvatar} alt={userName} />
                <AvatarFallback>
                  {userName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium">{userName}</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={onSettingsClick}>
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
