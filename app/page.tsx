"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, DollarSign, FileText, Mail, Shield, TrendingUp, Users, Zap, Star, Sparkles, Play, Award, Clock, BarChart3 } from "lucide-react";
import { AuthDialog } from "@/components/auth/auth-dialog";
import { PayPathLogo } from "@/components/ui/paypath-logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function LandingPage() {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');

  const handleGetStarted = () => {
    setAuthMode('signup');
    setShowAuth(true);
  };

  const handleSignIn = () => {
    setAuthMode('login');
    setShowAuth(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 border-b border-border/20 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <PayPathLogo className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-indigo-600" />
                <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight gradient-text">PayPath</span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-6">
              <ThemeToggle />
              <Button 
                variant="ghost" 
                onClick={handleSignIn}
                className="text-foreground hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-indigo-900/20 transition-all duration-300 font-semibold text-sm sm:text-base"
              >
                Sign In
              </Button>
              <Button 
                onClick={handleGetStarted} 
                className="btn-gradient text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 font-bold tracking-wide hover-lift text-sm sm:text-base"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 mesh-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 sm:space-y-12">
            {/* Floating Badge */}
            <div className="animate-fade-in-up">
              <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold tracking-wide glass">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                PROFESSIONAL INVOICE MANAGEMENT
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in-scale stagger-1">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none">
                <span className="block gradient-text">SMART</span>
                <span className="block text-foreground">INVOICING</span>
                <span className="block text-muted-foreground">FOR</span>
                <span className="block text-outline">FREELANCERS</span>
              </h1>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">
                  Create stunning invoices, track payments effortlessly, and get paid faster with PayPath. 
                  The complete solution designed for modern professionals.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up stagger-2">
              <Button 
                size="lg" 
                onClick={handleGetStarted}
                className="btn-gradient text-white text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 font-black tracking-wide hover-lift group w-full sm:w-auto"
              >
                START FREE TRIAL
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 dark:border-indigo-800 dark:text-indigo-300 dark:hover:bg-indigo-900/20 text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 font-bold tracking-wide transition-all duration-300 group w-full sm:w-auto"
              >
                <Play className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                WATCH DEMO
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 pt-8 sm:pt-12 animate-fade-in-up stagger-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                <span className="font-semibold text-sm sm:text-base">No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                <span className="font-semibold text-sm sm:text-base">Bank-Level Security</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                <span className="font-semibold text-sm sm:text-base">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-lg opacity-20 animate-float-slow stagger-2"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full opacity-20 animate-float stagger-3"></div>
      </section>

      {/* Features Grid */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 gradient-bg-1">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 sm:mb-6 gradient-text">
              EVERYTHING YOU NEED
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Streamline your invoice management with powerful features designed for professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: FileText,
                title: "PROFESSIONAL INVOICES",
                description: "Create beautiful, branded invoices with customizable templates and automatic PDF generation.",
                color: "from-indigo-500 to-purple-500",
                delay: "stagger-1"
              },
              {
                icon: TrendingUp,
                title: "PAYMENT TRACKING",
                description: "Monitor payment status, track overdue invoices, and get insights into your cash flow.",
                color: "from-purple-500 to-pink-500",
                delay: "stagger-2"
              },
              {
                icon: Mail,
                title: "AUTOMATED REMINDERS",
                description: "Send automatic payment reminders and follow-ups to ensure you get paid on time.",
                color: "from-pink-500 to-cyan-500",
                delay: "stagger-3"
              },
              {
                icon: Users,
                title: "CLIENT MANAGEMENT",
                description: "Organize client information, track project history, and maintain professional relationships.",
                color: "from-cyan-500 to-indigo-500",
                delay: "stagger-4"
              },
              {
                icon: BarChart3,
                title: "FINANCIAL REPORTS",
                description: "Generate detailed reports on income, outstanding payments, and business performance.",
                color: "from-indigo-500 to-purple-500",
                delay: "stagger-5"
              },
              {
                icon: Shield,
                title: "SECURE & RELIABLE",
                description: "Bank-level security with encrypted data storage and reliable cloud infrastructure.",
                color: "from-purple-500 to-cyan-500",
                delay: "stagger-1"
              }
            ].map((feature, index) => (
              <Card key={index} className={`neomorphism hover-lift border-0 animate-fade-in-up ${feature.delay} group overflow-hidden`}>
                <CardHeader className="text-center pb-4 relative">
                  <div className={`mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r ${feature.color} text-white rounded-xl sm:rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-black tracking-wide text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 gradient-bg-2 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 sm:mb-6 text-white">
              TRUSTED BY THOUSANDS
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto font-light">
              Join the growing community of professionals who trust PayPath
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { value: "99.9%", label: "UPTIME", icon: Award, delay: "stagger-1" },
              { value: "25%", label: "FASTER PAYMENTS", icon: Clock, delay: "stagger-2" },
              { value: "10K+", label: "HAPPY USERS", icon: Users, delay: "stagger-3" },
              { value: "$2M+", label: "PROCESSED", icon: DollarSign, delay: "stagger-4" }
            ].map((stat, index) => (
              <div key={index} className={`animate-fade-in-scale ${stat.delay} group`}>
                <div className="glass p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl hover-glow transition-all duration-300">
                  <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mx-auto mb-3 sm:mb-4 text-white/80 group-hover:text-white transition-colors" />
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-1 sm:mb-2 text-white group-hover:text-glow transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg font-bold tracking-widest text-white/70 group-hover:text-white/90 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-8 sm:space-y-12">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 sm:mb-8 gradient-text">
                READY TO GET STARTED?
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 font-light max-w-3xl mx-auto">
                Join thousands of freelancers who trust PayPath to manage their invoices and get paid faster.
              </p>
            </div>
            
            <div className="animate-fade-in-scale stagger-1">
              <Button 
                size="lg"
                onClick={handleGetStarted}
                className="btn-gradient text-white text-xl sm:text-2xl px-12 sm:px-16 py-6 sm:py-8 font-black tracking-widest hover-lift group"
              >
                START YOUR FREE TRIAL
                <Zap className="ml-3 sm:ml-4 h-6 w-6 sm:h-8 sm:w-8 group-hover:rotate-12 transition-transform" />
              </Button>
              <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 font-medium">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-lg animate-float stagger-2"></div>
      </section>

      {/* Footer */}
      <footer className="relative gradient-bg-2 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <PayPathLogo className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              <span className="text-xl sm:text-2xl font-black tracking-tight">PayPath</span>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-white/70 font-medium text-center md:text-left text-sm sm:text-base">
                © 2025 PayPath. All rights reserved.
              </div>
              <div className="flex space-x-4 sm:space-x-6">
                <a href="#" className="text-white/70 hover:text-white transition-colors font-medium text-sm sm:text-base">Privacy</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors font-medium text-sm sm:text-base">Terms</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors font-medium text-sm sm:text-base">Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AuthDialog 
        open={showAuth} 
        onOpenChange={setShowAuth}
        mode={authMode}
      />
    </div>
  );
}