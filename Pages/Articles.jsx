import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Clock,
  User,
  Search,
  ArrowRight,
  Calendar,
  Tag,
  Star,
  Eye,
  Heart
} from "lucide-react";

const articles = [
  {
    category: "islamic-studies",
    title: "Understanding the Five Pillars of Islam in Daily Life",
    excerpt: "Explore how the fundamental pillars of Islam can be meaningfully integrated into modern daily routines and contemporary living.",
    author: "Imam Abdullah Hassan",
    readTime: "8 min read",
    publishDate: "2024-02-15",
    views: 1240,
    likes: 89,
    featured: true,
    tags: ["Pillars", "Faith", "Practice"]
  },
  {
    category: "community",
    title: "Building Stronger Muslim Communities in Modern Times",
    excerpt: "Practical strategies for fostering unity, cooperation, and mutual support within our diverse Muslim communities.",
    author: "Dr. Fatima Al-Zahra",
    readTime: "6 min read",
    publishDate: "2024-02-10",
    views: 890,
    likes: 67,
    featured: false,
    tags: ["Community", "Unity", "Modern Life"]
  },
  {
    category: "parenting",
    title: "Raising Muslim Children with Strong Islamic Values",
    excerpt: "Guidance for parents on nurturing faith, character, and Islamic identity in children while navigating contemporary challenges.",
    author: "Sister Aisha Rahman",
    readTime: "10 min read",
    publishDate: "2024-02-05",
    views: 1560,
    likes: 124,
    featured: true,
    tags: ["Parenting", "Children", "Values", "Education"]
  },
  {
    category: "spirituality",
    title: "The Art of Islamic Meditation and Dhikr",
    excerpt: "Discover traditional Islamic practices of remembrance and meditation that bring peace and spiritual connection.",
    author: "Ustadh Ahmad Nasir",
    readTime: "7 min read",
    publishDate: "2024-01-28",
    views: 720,
    likes: 58,
    featured: false,
    tags: ["Dhikr", "Meditation", "Spirituality"]
  },
  {
    category: "contemporary",
    title: "Islam and Environmental Stewardship",
    excerpt: "Exploring Islamic teachings on environmental responsibility and how Muslims can lead in caring for Allah's creation.",
    author: "Dr. Omar Al-Mansouri",
    readTime: "9 min read",
    publishDate: "2024-01-20",
    views: 650,
    likes: 45,
    featured: false,
    tags: ["Environment", "Stewardship", "Modern Issues"]
  },
  {
    category: "history",
    title: "Lessons from the Golden Age of Islamic Scholarship",
    excerpt: "What we can learn from the great Islamic scholars and their contributions to science, philosophy, and knowledge.",
    author: "Prof. Khalid Ibrahim",
    readTime: "12 min read",
    publishDate: "2024-01-15",
    views: 980,
    likes: 76,
    featured: true,
    tags: ["History", "Scholarship", "Knowledge", "Golden Age"]
  },
  {
    category: "youth",
    title: "Navigating Faith as a Young Muslim Professional",
    excerpt: "Practical advice for young Muslims balancing career aspirations with Islamic values and spiritual growth.",
    author: "Brother Omar Malik",
    readTime: "8 min read",
    publishDate: "2024-01-10",
    views: 1100,
    likes: 82,
    featured: false,
    tags: ["Youth", "Career", "Balance", "Professional"]
  },
  {
    category: "spirituality",
    title: "The Healing Power of Quranic Recitation",
    excerpt: "Understanding how regular Quranic recitation benefits the heart, mind, and soul according to Islamic tradition.",
    author: "Imam Abdullah Hassan",
    readTime: "6 min read",
    publishDate: "2024-01-05",
    views: 850,
    likes: 94,
    featured: false,
    tags: ["Quran", "Recitation", "Healing", "Spirituality"]
  }
];

export default function Articles() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [likedArticles, setLikedArticles] = useState(new Set());

  const filteredArticles = articles.filter(article => {
    const categoryMatch = activeTab === "all" || article.category === activeTab;
    const searchMatch = searchTerm === "" ||
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const featuredArticles = articles.filter(article => article.featured);

  const handleLike = (articleTitle) => {
    setLikedArticles(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(articleTitle)) {
        newLiked.delete(articleTitle);
      } else {
        newLiked.add(articleTitle);
      }
      return newLiked;
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1F5B5A] to-[#2A6B6A] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Islamic Articles & Resources</h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Discover insightful articles, scholarly discussions, and practical guidance
              on living Islam in the contemporary world.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-gray-900 bg-white border-0 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {searchTerm === "" && activeTab === "all" && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1F5B5A] mb-4">Featured Articles</h2>
              <p className="text-lg text-gray-600">Our most popular and impactful pieces</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredArticles.slice(0, 3).map((article, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-[#1F5B5A] to-[#B8860B]" />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-[#B8860B] text-white">Featured</Badge>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views}</span>
                        </div>
                        <button
                          onClick={() => handleLike(article.title)}
                          className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                        >
                          <Heart className={`w-4 h-4 ${likedArticles.has(article.title) ? 'fill-red-500 text-red-500' : ''}`} />
                          <span>{article.likes + (likedArticles.has(article.title) ? 1 : 0)}</span>
                        </button>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-[#1F5B5A] leading-tight">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="border-[#B8860B] text-[#B8860B] text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                      <Button className="bg-[#1F5B5A] hover:bg-[#2A6B6A] text-white">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Category Filter */}
            <div className="mb-12">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-7 bg-white shadow-lg">
                  <TabsTrigger value="all" className="data-[state=active]:bg-[#1F5B5A] data-[state=active]:text-white">
                    All Articles
                  </TabsTrigger>
                  <TabsTrigger value="islamic-studies" className="data-[state=active]:bg-[#1F5B5A] data-[state=active]:text-white">
                    Islamic Studies
                  </TabsTrigger>
                  <TabsTrigger value="spirituality" className="data-[state=active]:bg-[#1F5B5A] data-[state=active]:text-white">
                    Spirituality
                  </TabsTrigger>
                  <TabsTrigger value="community" className="data-[state=active]:bg-[#1F5B5A] data-[state=active]:text-white">
                    Community
                  </TabsTrigger>
                  <TabsTrigger value="parenting" className="data-[state=active]:bg-[#1F5B5A] data-[state=active]:text-white">
                    Parenting
                  </TabsTrigger>
                  <TabsTrigger value="youth" className="data-[state=active]:bg-[#1F5B5A] data-[state=active]:text-white">
                    Youth
                  </TabsTrigger>
                  <TabsTrigger value="contemporary" className="data-[state=active]:bg-[#1F5B5A] data-[state=active]:text-white">
                    Contemporary
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredArticles.map((article, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="outline"
                        className="border-[#1F5B5A] text-[#1F5B5A] capitalize"
                      >
                        {article.category.replace('-', ' ')}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views}</span>
                        </div>
                        <button
                          onClick={() => handleLike(article.title)}
                          className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                        >
                          <Heart className={`w-4 h-4 ${likedArticles.has(article.title) ? 'fill-red-500 text-red-500' : ''}`} />
                          <span>{article.likes + (likedArticles.has(article.title) ? 1 : 0)}</span>
                        </button>
                      </div>
                    </div>

                    <CardTitle className="text-xl text-[#1F5B5A] leading-tight hover:text-[#2A6B6A] transition-colors cursor-pointer">
                      {article.title}
                      {article.featured && <Star className="inline w-4 h-4 ml-2 text-[#B8860B] fill-current" />}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="border-gray-300 text-gray-600 text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(article.publishDate)}</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-[#1F5B5A] hover:bg-[#2A6B6A] text-white">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read Full Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Articles Found</h3>
                <p className="text-gray-500">
                  {searchTerm ? `No articles found matching "${searchTerm}"` : "No articles in this category yet."}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-[#1F5B5A] to-[#2A6B6A] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with New Articles
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Subscribe to receive the latest Islamic articles, scholarly insights,
              and practical guidance delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 text-gray-900 border-0"
              />
              <Button className="bg-[#B8860B] hover:bg-[#A17509] text-white px-8 py-3">
                <BookOpen className="w-5 h-5 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}