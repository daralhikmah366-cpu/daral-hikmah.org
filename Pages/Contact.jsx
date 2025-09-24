import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageCircle,
  Send
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    alert("Thank you for your message. We'll get back to you soon!");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: ["2929 Spotted Fawn Dr", "Fort Worth, TX 76108", "United States"]
    },
    {
      icon: Phone,
      title: "Call Us",
      content: ["Administration: +1 (347) 335-7447"]
    },
    {
      icon: Mail,
      title: "Email Us",
      content: ["Admin@daral-hikmah.org"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: After Fajr - 2:00 PM"]
    }
  ];

  const prayerTimes = [
    { prayer: "Fajr", time: "5:30 AM" },
    { prayer: "Dhuhr", time: "12:45 PM" },
    { prayer: "Asr", time: "4:15 PM" },
    { prayer: "Maghrib", time: "6:20 PM" },
    { prayer: "Isha", time: "8:00 PM" },
    { prayer: "Jummah", time: "1:00 PM (Fridays)" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1F5B5A] to-[#2A6B6A] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              We're here to answer your questions and welcome you to our community.
              Reach out to us anytime - we'd love to hear from you.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-[#B8860B]" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-[#B8860B]" />
                <span>Available Daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#B8860B]" />
                <span>Easy to Find</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1F5B5A] text-center mb-8">Find Us on the Map</h2>
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Map Embed */}
                <div className="lg:col-span-2">
                  <iframe
                    title="Dar Alhikma Foundation Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.8981013679363!2d-97.27668268481921!3d32.74146608097952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7945d0f37c5f%3A0x0!2s2929%20Spotted%20Fawn%20Dr%2C%20Fort%20Worth%2C%20TX%2076108!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  ></iframe>
                </div>

                {/* Location Details */}
                <div className="bg-gradient-to-br from-[#E6F3F3] to-white p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-[#1F5B5A] mb-3 flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-[#B8860B]" />
                        Our Address
                      </h4>
                      <p className="text-gray-600">
                        2929 Spotted Fawn Dr<br />
                        Fort Worth, TX 76108<br />
                        United States
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1F5B5A] mb-3 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-[#B8860B]" />
                        Visiting Hours
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Mon-Fri: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: After Fajr - 2:00 PM
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1F5B5A] mb-3">Parking</h4>
                      <p className="text-gray-600 text-sm">
                        Free parking available on-site for all visitors and worshippers.
                      </p>
                    </div>

                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=2929+Spotted+Fawn+Dr,+Fort+Worth,+TX+76108"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-[#1F5B5A] hover:bg-[#2A6B6A] text-white">
                        <MapPin className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#1F5B5A] flex items-center">
                    <MessageCircle className="w-6 h-6 mr-3 text-[#B8860B]" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-[#1F5B5A] font-medium">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="mt-1 border-gray-200 focus:border-[#1F5B5A]"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-[#1F5B5A] font-medium">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-1 border-gray-200 focus:border-[#1F5B5A]"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-[#1F5B5A] font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-1 border-gray-200 focus:border-[#1F5B5A]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-[#1F5B5A] font-medium">Subject</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          className="mt-1 border-gray-200 focus:border-[#1F5B5A]"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-[#1F5B5A] font-medium">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="mt-1 border-gray-200 focus:border-[#1F5B5A] h-32"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#1F5B5A] hover:bg-[#2A6B6A] text-white py-3"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Prayer Times */}
            <div className="space-y-6">

              {/* Contact Information */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-[#1F5B5A]">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="p-2 bg-[#E6F3F3] rounded-full flex-shrink-0">
                        <info.icon className="w-5 h-5 text-[#1F5B5A]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1F5B5A] mb-1">{info.title}</h4>
                        {info.content.map((line, idx) => (
                          <p key={idx} className="text-sm text-gray-600">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Prayer Times */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-[#1F5B5A] flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-[#B8860B]" />
                    Today's Prayer Times
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {prayerTimes.map((prayer, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-[#1F5B5A]">{prayer.prayer}</span>
                        <span className="text-gray-600">{prayer.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    * Times may vary based on local calculations
                  </p>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-[#FFF8E7] to-white">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-[#1F5B5A] mb-2">Emergency Contact</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    For urgent matters outside office hours, please call:
                  </p>
                  <p className="font-semibold text-[#B8860B]">+1 (347) 335-7447</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
