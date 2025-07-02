"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, DollarSign, FileText, Mail, Shield, TrendingUp, Users, Zap, Star, Sparkles } from "lucide-react";
import { AuthDialog } from "@/components/auth/auth-dialog";
import { PayPathLogo } from "@/components/ui/paypath-logo";

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
    <div className="min-h-screen bg-white text-black overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 geometric-bg animate-slide-diagonal opacity-30"></div>
      <div className="fixed inset-0 dot-matrix animate-pulse-dot"></div>
      
      {/* Navigation */}
      <nav className="relative z-50 border-b border-black/10 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <PayPathLogo className="h-10 w-10 text-black" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-black rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-black tracking-tight">PayPath</span>
            </div>
            <div className="flex items-center space-x-6">
              <Button 
                variant="ghost" 
                onClick={handleSignIn}
                className="text-black hover:bg-black hover:text-white transition-all duration-300 font-medium"
              >
                Sign In
              </Button>
              <Button 
                onClick={handleGetStarted} 
                className="bg-black text-white hover:bg-gray-800 px-8 py-3 font-bold tracking-wide neomorphism hover-lift-bw"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-12">
            {/* Floating Badge */}
            <div className="animate-minimal-fade">
              <Badge className="bg-black text-white hover:bg-gray-800 px-6 py-2 text-sm font-bold tracking-wide">
                <Sparkles className="w-4 h-4 mr-2" />
                PROFESSIONAL INVOICE MANAGEMENT
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-8 animate-minimal-scale">
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none">
                <span className="block text-outline">SMART</span>
                <span className="block">INVOICING</span>
                <span className="block text-gray-400">FOR MODERN</span>
                <span className="block text-black">FREELANCERS</span>
              </h1>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                  Create professional invoices, track payments, and get paid faster with PayPath. 
                  The complete solution designed for the modern freelancer.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-minimal-slide">
              <Button 
                size="lg" 
                onClick={handleGetStarted}
                className="bg-black text-white hover:bg-gray-800 text-xl px-12 py-6 font-black tracking-wide neomorphism hover-lift-bw group"
              >
                START FREE TRIAL
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white text-xl px-12 py-6 font-bold tracking-wide transition-all duration-300"
              >
                WATCH DEMO
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-4 border-black/20 rotate-45 animate-float-geometric"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-black/10 rounded-full animate-float-geometric stagger-2"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-black/30 animate-float-geometric stagger-3"></div>
      </section>

      {/* Features Grid */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 diagonal-stripes">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-shadow-hard">
              EVERYTHING YOU NEED
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Streamline your invoice management with powerful features designed for professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "PROFESSIONAL INVOICES",
                description: "Create beautiful, branded invoices with customizable templates and automatic PDF generation.",
                delay: "stagger-1"
              },
              {
                icon: TrendingUp,
                title: "PAYMENT TRACKING",
                description: "Monitor payment status, track overdue invoices, and get insights into your cash flow.",
                delay: "stagger-2"
              },
              {
                icon: Mail,
                title: "AUTOMATED REMINDERS",
                description: "Send automatic payment reminders and follow-ups to ensure you get paid on time.",
                delay: "stagger-3"
              },
              {
                icon: Users,
                title: "CLIENT MANAGEMENT",
                description: "Organize client information, track project history, and maintain professional relationships.",
                delay: "stagger-4"
              },
              {
                icon: DollarSign,
                title: "FINANCIAL REPORTS",
                description: "Generate detailed reports on income, outstanding payments, and business performance.",
                delay: "stagger-5"
              },
              {
                icon: Shield,
                title: "SECURE & RELIABLE",
                description: "Bank-level security with encrypted data storage and reliable cloud infrastructure.",
                delay: "stagger-1"
              }
            ].map((feature, index) => (
              <Card key={index} className={`neomorphism hover-lift-bw border-0 animate-minimal-fade ${feature.delay} group`}>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-6 p-4 bg-black text-white rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-black tracking-wide">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black text-white hexagon-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { value: "99.9%", label: "UPTIME GUARANTEE", delay: "stagger-1" },
              { value: "25%", label: "FASTER PAYMENTS", delay: "stagger-2" },
              { value: "10K+", label: "HAPPY USERS", delay: "stagger-3" }
            ].map((stat, index) => (
              <div key={index} className={`animate-minimal-scale ${stat.delay} group`}>
                <div className="neomorphism-dark p-8 rounded-3xl hover-tilt">
                  <div className="text-6xl md:text-7xl font-black mb-4 text-outline-white group-hover:text-white transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-lg font-bold tracking-widest text-gray-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white scan-lines">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-12">
            <div className="animate-minimal-fade">
              <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-8 glitch" data-text="READY TO STREAMLINE?">
                READY TO STREAMLINE?
              </h2>
              <p className="text-2xl text-gray-600 mb-12 font-light max-w-3xl mx-auto">
                Join thousands of freelancers who trust PayPath to manage their invoices and get paid faster.
              </p>
            </div>
            
            <div className="animate-minimal-scale">
              <Button 
                size="lg"
                onClick={handleGetStarted}
                className="bg-black text-white hover:bg-gray-800 text-2xl px-16 py-8 font-black tracking-widest neomorphism hover-lift-bw group"
              >
                START YOUR FREE TRIAL
                <Zap className="ml-4 h-8 w-8 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border-8 border-black/10 rounded-full animate-float-geometric"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-black/5 transform rotate-45 animate-float-geometric stagger-2"></div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <PayPathLogo className="h-10 w-10 text-white" />
              <span className="text-2xl font-black tracking-tight">PayPath</span>
            </div>
            <div className="text-gray-400 font-medium">
              © 2025 PayPath. All rights reserved.
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