import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, GraduationCap, Heart, ArrowRight, Clock, MapPin } from "lucide-react";

const programs = [
  {
    title: "Quran Recitation & Memorization",
    description: "Learn proper Quranic recitation with Tajweed and work towards memorization goals.",
    icon: BookOpen,
    schedule: "Mon, Wed, Fri • 7:00 PM",
    location: "Main Hall",
    level: "All Levels"
  },
  {
    title: "Islamic Studies for Adults",
    description: "Comprehensive study of Islamic history, jurisprudence, and contemporary issues.",
    icon: GraduationCap,
    schedule: "Saturdays • 2:00 PM",
    location: "Classroom A",
    level: "Beginner to Advanced"
  },
  {
    title: "Youth Leadership Program",
    description: "Develop leadership skills while strengthening Islamic identity and community engagement.",
    icon: Users,
    schedule: "Sundays • 4:00 PM",
    location: "Youth Center",
    level: "Ages 13-18"
  },
  {
    title: "Community Service Initiative",
    description: "Monthly community service projects helping local families and organizations.",
    icon: Heart,
    schedule: "First Saturday • 9:00 AM",
    location: "Various Locations",
    level: "All Ages"
  }
];

export default function ProgramsPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F5B5A] mb-4">
            Our Educational Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive Islamic education for all ages, fostering spiritual growth
            and practical knowledge in a supportive community environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#E6F3F3] rounded-full group-hover:bg-[#1F5B5A] transition-colors duration-300">
                    <program.icon className="w-6 h-6 text-[#1F5B5A] group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-[#1F5B5A] group-hover:text-[#2A6B6A] transition-colors">
                      {program.title}
                    </CardTitle>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-[#B8860B]" />
                    <span>{program.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#B8860B]" />
                    <span>{program.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-[#B8860B]" />
                    <span>{program.level}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/programs">
            <Button className="bg-[#1F5B5A] hover:bg-[#2A6B6A] text-white px-8 py-3">
              View All Programs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
