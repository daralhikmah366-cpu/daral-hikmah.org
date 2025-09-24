import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";

const recentEvents = [
  {
    title: "Weekly Friday Khutbah",
    description: "Join us for inspiring Friday sermons exploring contemporary Islamic topics.",
    date: "Every Friday",
    time: "1:00 PM",
    location: "Main Prayer Hall",
    attendees: "200+ expected",
    category: "Weekly",
    status: "ongoing"
  },
  {
    title: "Islamic Finance Workshop",
    description: "Learn about halal investment strategies and Islamic banking principles.",
    date: "March 15, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Conference Room",
    attendees: "50 max",
    category: "Education",
    status: "upcoming"
  },
  {
    title: "Community Iftar Dinner",
    description: "Join our community for a shared iftar meal during the blessed month of Ramadan.",
    date: "March 22, 2024",
    time: "6:30 PM",
    location: "Community Hall",
    attendees: "300+ expected",
    category: "Community",
    status: "upcoming"
  }
];

export default function RecentEvents() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F5B5A] mb-4">
            Upcoming Community Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay connected with our vibrant community through regular events,
            educational workshops, and spiritual gatherings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {recentEvents.map((event, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#1F5B5A] to-[#B8860B]" />
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge
                    variant="outline"
                    className={`${
                      event.status === 'ongoing'
                        ? 'bg-green-50 text-green-700 border-green-200'
                        : 'bg-blue-50 text-blue-700 border-blue-200'
                    }`}
                  >
                    {event.category}
                  </Badge>
                  <div className={`w-3 h-3 rounded-full ${
                    event.status === 'ongoing' ? 'bg-green-500' : 'bg-blue-500'
                  }`} />
                </div>
                <CardTitle className="text-xl text-[#1F5B5A] group-hover:text-[#2A6B6A] transition-colors">
                  {event.title}
                </CardTitle>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {event.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-[#B8860B]" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#B8860B]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#B8860B]" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-[#B8860B]" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/events">
            <Button className="bg-[#1F5B5A] hover:bg-[#2A6B6A] text-white px-8 py-3">
              View All Events
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
