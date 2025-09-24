import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Users,
  Heart,
  ArrowRight,
  Phone,
  MapPin
} from "lucide-react";
import HeroSection from "../Components/home/HeroSection";
import ImpactStats from "../Components/home/ImpactStats";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F5B5A] mb-6">
              Our Sacred Mission
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Dar Alhikma Islamic Foundation is committed to nurturing the spiritual,
              intellectual, and social development of our community through authentic
              Islamic education, meaningful worship experiences, and compassionate service to all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button className="bg-[#1F5B5A] hover:bg-[#2A6B6A] text-white px-8 py-3">
                  Learn About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white px-8 py-3">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ImpactStats />

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F5B5A] mb-6">
              Visit Our Center
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We welcome you to visit our Islamic center and become part of our growing community.
              Join us for prayers, educational programs, and community gatherings.
            </p>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-[#B8860B]" />
                    <div className="text-left">
                      <p className="font-semibold text-[#1F5B5A]">Our Location</p>
                      <p className="text-gray-600">2929 Spotted Fawn Dr</p>
                      <p className="text-gray-600">Fort Worth, TX 76108</p>
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button className="bg-[#B8860B] hover:bg-[#A17509] text-white px-6 py-3">
                      Get Directions
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#1F5B5A] to-[#2A6B6A] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Be part of a growing community dedicated to faith, learning, and service.
              Together, we can strengthen our connection with Allah and make a positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white hover:bg-gray-100 text-[#1F5B5A] px-8 py-3">
                  <Users className="w-5 h-5 mr-2" />
                  Join Our Community
                </Button>
              </Link>
              <Link to="/donate">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1F5B5A] px-8 py-3">
                  <Heart className="w-5 h-5 mr-2" />
                  Support Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
