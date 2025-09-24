import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1F5B5A] via-[#2A6B6A] to-[#1F5B5A]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8860B' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM10 50c0-5.5-4.5-10-10-10v20c5.5 0 10-4.5 10-10zM50 10c0 5.5 4.5 10 10 10V0c-5.5 0-10 4.5-10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68d210e132dc575977550d92/b4c7fbb48_image.png"
              alt="Dar Alhikma Foundation"
              className="h-20 w-20 mx-auto mb-6 opacity-90"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-[#B8860B]">Knowledge</span> • <span className="text-white">Faith</span> • <span className="text-[#B8860B]">Community</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dar Alhikma Islamic Foundation - Where Islamic learning flourishes,
            communities unite, and hearts find peace through authentic knowledge and worship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/programs">
              <Button className="bg-[#B8860B] hover:bg-[#A17509] text-white px-8 py-4 text-lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Programs
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1F5B5A] px-8 py-4 text-lg">
                <Users className="w-5 h-5 mr-2" />
                Community Events
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#B8860B]">500+</div>
              <div className="text-gray-200">Community Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#B8860B]">15+</div>
              <div className="text-gray-200">Educational Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#B8860B]">10</div>
              <div className="text-gray-200">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}