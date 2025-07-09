"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { mockInvoices, mockClients } from "@/lib/mock-data";
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Calendar,
  Target,
  Zap,
  ArrowUpRight,
  DollarSign,
  Users,
  FileText,
  Star,
  Filter
} from "lucide-react";

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [activeChart, setActiveChart] = useState("revenue");

  // Calculate metrics
  const totalRevenue = mockInvoices
    .filter(inv => inv.status === 'paid')
    .reduce((sum, inv) => sum + inv.amount, 0);
    
  const monthlyGrowth = 15.2;
  const clientGrowth = 8.5;
  const avgInvoiceValue = totalRevenue / mockInvoices.length;

  const chartData = [
    { month: 'JAN', revenue: 4500, invoices: 12 },
    { month: 'FEB', revenue: 5200, invoices: 15 },
    { month: 'MAR', revenue: 4800, invoices: 13 },
    { month: 'APR', revenue: 6100, invoices: 18 },
    { month: 'MAY', revenue: 7300, invoices: 22 },
    { month: 'JUN', revenue: 8900, invoices: 25 },
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background text-foreground">
        {/* Animated Background */}
        <div className="fixed inset-0 mesh-gradient opacity-30 pointer-events-none"></div>
        
        <div className="relative space-y-16">
          {/* Immersive Header */}
          <div className="relative overflow-hidden mesh-gradient rounded-3xl">
            <div className="relative">
              <div className="text-center py-20 px-4">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full shadow-2xl mb-8 animate-fade-in-up">
                  <BarChart3 className="h-6 w-6" />
                  <span className="text-sm font-black tracking-widest">BUSINESS INTELLIGENCE</span>
                </div>
                
                <div className="animate-fade-in-scale">
                  <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none mb-6">
                    <span className="block gradient-text">ANALYTICS</span>
                    <span className="block text-foreground">COMMAND</span>
                    <span className="block text-outline">CENTER</span>
                  </h1>
                </div>
                
                <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light animate-fade-in-up stagger-1">
                  Dive deep into your business metrics with advanced analytics and actionable insights
                </p>
                
                <div className="flex flex-wrap justify-center gap-6 pt-8 animate-fade-in-up stagger-2">
                  <Button className="btn-gradient text-white px-8 py-4 font-black tracking-widest">
                    <Download className="h-4 w-4 mr-2" />
                    EXPORT REPORT
                  </Button>
                  <Button variant="outline" className="reports-btn-light dark:border-white/20 dark:text-white dark:hover:bg-white/10 px-8 py-4 font-black tracking-widest">
                    <Calendar className="h-4 w-4 mr-2" />
                    CUSTOM RANGE
                  </Button>
                  <Button variant="outline" className="reports-btn-light dark:border-white/20 dark:text-white dark:hover:bg-white/10 px-8 py-4 font-black tracking-widest">
                    <Filter className="h-4 w-4 mr-2" />
                    ADVANCED FILTERS
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* KPI Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "TOTAL REVENUE",
                value: `$${totalRevenue.toLocaleString()}`,
                icon: DollarSign,
                trend: `+${monthlyGrowth}%`,
                description: "vs last month",
                gradient: "from-indigo-500 to-purple-500",
                delay: "stagger-1"
              },
              {
                title: "ACTIVE CLIENTS",
                value: mockClients.length,
                icon: Users,
                trend: `+${clientGrowth}%`,
                description: "vs last month",
                gradient: "from-purple-500 to-pink-500",
                delay: "stagger-2"
              },
              {
                title: "AVG INVOICE VALUE",
                value: `$${avgInvoiceValue.toFixed(0)}`,
                icon: FileText,
                trend: "+12%",
                description: "vs last month",
                gradient: "from-pink-500 to-cyan-500",
                delay: "stagger-3"
              },
              {
                title: "AVG PAYMENT TIME",
                value: "12 days",
                icon: Target,
                trend: "-2 days",
                description: "improvement",
                gradient: "from-cyan-500 to-indigo-500",
                delay: "stagger-4"
              }
            ].map((metric, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <Card className={`relative neomorphism border-0 hover-lift animate-fade-in-up ${metric.delay}`}>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 bg-gradient-to-r ${metric.gradient} text-white rounded-2xl group-hover:scale-110 transition-transform shadow-lg`}>
                        <metric.icon className="h-8 w-8" />
                      </div>
                      <div className="flex items-center gradient-text text-sm font-black">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        {metric.trend}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-bold tracking-widest text-muted-foreground">{metric.title}</p>
                      <p className="text-3xl font-black gradient-text">{metric.value}</p>
                      <p className="text-xs text-muted-foreground font-medium">{metric.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Revenue Chart */}
            <div className="lg:col-span-2">
              <Card className="neomorphism border-0 animate-fade-in-up">
                <CardHeader className="border-b border-border pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                      <div>
                        <CardTitle className="text-2xl font-black tracking-tight gradient-text">REVENUE TRENDS</CardTitle>
                        <CardDescription className="text-muted-foreground font-medium">Monthly performance overview</CardDescription>
                      </div>
                    </div>
                    <Tabs value={activeChart} onValueChange={setActiveChart}>
                      <TabsList className="bg-muted">
                        <TabsTrigger value="revenue" className="font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:text-white">REVENUE</TabsTrigger>
                        <TabsTrigger value="invoices" className="font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:text-white">INVOICES</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="h-80 flex items-end justify-between space-x-4 p-6">
                    {chartData.map((data, index) => (
                      <div key={data.month} className="flex flex-col items-center space-y-3 flex-1 group">
                        <div className="relative w-full">
                          <div 
                            className="bg-gradient-to-t from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-t-xl transition-all duration-1000 hover:scale-105"
                            style={{ 
                              height: activeChart === 'revenue' 
                                ? `${(data.revenue / Math.max(...chartData.map(d => d.revenue))) * 240}px`
                                : `${(data.invoices / Math.max(...chartData.map(d => d.invoices))) * 240}px`
                            }}
                          ></div>
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-xs font-black gradient-text bg-background px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                            {activeChart === 'revenue' ? `$${data.revenue}` : data.invoices}
                          </div>
                        </div>
                        <span className="text-sm font-black text-muted-foreground tracking-widest">{data.month}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Monthly Goals */}
              <Card className="reports-goals-card text-white border-0 glass animate-fade-in-scale stagger-2">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Target className="h-6 w-6" />
                      <h3 className="font-black tracking-wide text-lg reports-goals-text">MONTHLY GOALS</h3>
                    </div>
                    <div className="space-y-6">
                      {[
                        { label: "Revenue Target", value: 85 },
                        { label: "New Clients", value: 92 },
                        { label: "Invoice Volume", value: 78 }
                      ].map((goal, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm mb-3 font-medium reports-goals-text">
                            <span className="reports-goals-text-muted">{goal.label}</span>
                            <span className="font-black reports-goals-text">{goal.value}%</span>
                          </div>
                          <Progress value={goal.value} className="h-3 bg-white/20" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top Performers */}
              <Card className="neomorphism border-0 animate-fade-in-scale stagger-3">
                <CardHeader>
                  <CardTitle className="text-xl font-black tracking-wide flex items-center gradient-text">
                    <Star className="h-5 w-5 mr-2" />
                    TOP PERFORMERS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockClients.slice(0, 3).map((client, index) => (
                    <div key={client.id} className="flex items-center justify-between p-4 rounded-xl neomorphism-inset group hover-lift">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black ${
                          index === 0 ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 
                          index === 1 ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 
                          'bg-gradient-to-r from-pink-500 to-cyan-500'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-black gradient-text">{client.company}</p>
                          <p className="text-xs text-muted-foreground font-medium">{client.name}</p>
                        </div>
                      </div>
                      <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 font-black">
                        ${(2000 + index * 500).toLocaleString()}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Payment Methods */}
            <Card className="neomorphism border-0 animate-fade-in-up stagger-2">
              <CardHeader>
                <CardTitle className="text-xl font-black tracking-wide flex items-center gradient-text">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  PAYMENT METHODS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { method: "Bank Transfer", percentage: 65, gradient: "from-indigo-500 to-purple-500" },
                  { method: "Credit Card", percentage: 25, gradient: "from-purple-500 to-pink-500" },
                  { method: "PayPal", percentage: 10, gradient: "from-pink-500 to-cyan-500" }
                ].map((method, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-5 h-5 bg-gradient-to-r ${method.gradient} rounded-full`}></div>
                      <span className="text-sm font-black">{method.method}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-muted-foreground font-medium">{method.percentage}%</span>
                      <div className="w-24 h-3 bg-muted rounded-full">
                        <div className={`h-3 bg-gradient-to-r ${method.gradient} rounded-full transition-all duration-1000`} style={{ width: `${method.percentage}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Insights */}
            <Card className="neomorphism border-0 animate-fade-in-up stagger-3">
              <CardHeader>
                <CardTitle className="text-xl font-black tracking-wide flex items-center gradient-text">
                  <Zap className="h-5 w-5 mr-2" />
                  QUICK INSIGHTS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "Best performing month", value: "June 2025", subtitle: "$8,900 revenue", gradient: "from-indigo-500 to-purple-500" },
                  { title: "Fastest paying client", value: "TechCorp Solutions", subtitle: "Average 2 days", gradient: "from-purple-500 to-pink-500" },
                  { title: "Growth trend", value: "+15.2% MoM", subtitle: "Consistent growth", gradient: "from-pink-500 to-cyan-500" }
                ].map((insight, index) => (
                  <div key={index} className={`p-6 bg-gradient-to-r ${insight.gradient} rounded-xl glass hover-lift reports-insight-card shadow-lg`}>
                    <p className="text-sm font-medium text-white/90 reports-insight-text-muted">{insight.title}</p>
                    <p className="text-lg font-black text-white reports-insight-text">{insight.value}</p>
                    <p className="text-xs text-white/80 font-medium reports-insight-text-muted">{insight.subtitle}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}