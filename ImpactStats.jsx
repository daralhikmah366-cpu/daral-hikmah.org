import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Heart, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Community Members",
    description: "Active participants in our programs"
  },
  {
    icon: BookOpen,
    number: "15+",
    label: "Educational Programs",
    description: "Comprehensive Islamic learning opportunities"
  },
  {
    icon: Heart,
    number: "$50K+",
    label: "Community Support",
    description: "Raised for charitable causes this year"
  },
  {
    icon: Globe,
    number: "10",
    label: "Years of Service",
    description: "Serving the community with dedication"
  }
];

export default function ImpactStats() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#E6F3F3] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F5B5A] mb-4">
            Our Community Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Through Allah's blessing and community dedication, we continue to grow
            and serve with increasing impact each year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-[#1F5B5A] rounded-full flex items-center justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#B8860B] mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F5B5A] mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}