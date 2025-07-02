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
  PieChart,
  Target,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Users,
  FileText,
  Clock,
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
    { month: 'Jan', revenue: 4500, invoices: 12 },
    { month: 'Feb', revenue: 5200, invoices: 15 },
    { month: 'Mar', revenue: 4800, invoices: 13 },
    { month: 'Apr', revenue: 6100, invoices: 18 },
    { month: 'May', revenue: 7300, invoices: 22 },
    { month: 'Jun', revenue: 8900, invoices: 25 },
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        {/* Immersive Header */}
        <div className="relative mb-16 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20"></div>
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl p-12 mx-4 border border-white/30 shadow-2xl">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-cyan-100 px-4 py-2 rounded-full">
                <BarChart3 className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">Business Intelligence</span>
              </div>
              
              <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Analytics Dashboard
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Dive deep into your business metrics with advanced analytics and actionable insights
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all">
                  <Download className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
                <Button variant="outline" className="bg-white/50 backdrop-blur-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Custom Range
                </Button>
                <Button variant="outline" className="bg-white/50 backdrop-blur-sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Advanced Filters
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Grid with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <Card className="relative bg-white/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-400 to-emerald-600 rounded-xl shadow-lg">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    {monthlyGrowth}%
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">${totalRevenue.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">vs last month</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <Card className="relative bg-white/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-xl shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center text-blue-600 text-sm font-medium">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    {clientGrowth}%
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-600">Active Clients</p>
                  <p className="text-2xl font-bold text-gray-900">{mockClients.length}</p>
                  <p className="text-xs text-gray-500">vs last month</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <Card className="relative bg-white/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl shadow-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center text-purple-600 text-sm font-medium">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    12%
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-600">Avg Invoice Value</p>
                  <p className="text-2xl font-bold text-gray-900">${avgInvoiceValue.toFixed(0)}</p>
                  <p className="text-xs text-gray-500">vs last month</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <Card className="relative bg-white/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-orange-400 to-red-600 rounded-xl shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center text-orange-600 text-sm font-medium">
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                    2 days
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-600">Avg Payment Time</p>
                  <p className="text-2xl font-bold text-gray-900">12 days</p>
                  <p className="text-xs text-gray-500">improvement</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interactive Charts Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900">Revenue Trends</CardTitle>
                    <CardDescription className="text-gray-600">Monthly performance overview</CardDescription>
                  </div>
                  <Tabs value={activeChart} onValueChange={setActiveChart}>
                    <TabsList className="bg-gray-100">
                      <TabsTrigger value="revenue">Revenue</TabsTrigger>
                      <TabsTrigger value="invoices">Invoices</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-end justify-between space-x-2 p-4">
                  {chartData.map((data, index) => (
                    <div key={data.month} className="flex flex-col items-center space-y-2 flex-1">
                      <div className="relative w-full">
                        <div 
                          className="bg-gradient-to-t from-indigo-600 to-cyan-400 rounded-t-lg transition-all duration-1000 hover:from-purple-600 hover:to-pink-400"
                          style={{ 
                            height: activeChart === 'revenue' 
                              ? `${(data.revenue / Math.max(...chartData.map(d => d.revenue))) * 200}px`
                              : `${(data.invoices / Math.max(...chartData.map(d => d.invoices))) * 200}px`
                          }}
                        ></div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded shadow-sm">
                          {activeChart === 'revenue' ? `$${data.revenue}` : data.invoices}
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{data.month}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5" />
                    <h3 className="font-semibold">Monthly Goals</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Revenue Target</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2 bg-white/20" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>New Clients</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-2 bg-white/20" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Invoice Volume</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} className="h-2 bg-white/20" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-500" />
                  Top Performers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockClients.slice(0, 3).map((client, index) => (
                    <div key={client.id} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                          index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{client.company}</p>
                          <p className="text-xs text-gray-500">{client.name}</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        ${(2000 + index * 500).toLocaleString()}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="h-5 w-5 mr-2 text-indigo-600" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                    <span className="text-sm font-medium">Bank Transfer</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">65%</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-3/5 h-2 bg-indigo-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Credit Card</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">25%</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-1/4 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <span className="text-sm font-medium">PayPal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">10%</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-1/10 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                Quick Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-900">Best performing month</p>
                  <p className="text-lg font-bold text-indigo-600">June 2025</p>
                  <p className="text-xs text-gray-600">$8,900 revenue</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-900">Fastest paying client</p>
                  <p className="text-lg font-bold text-green-600">TechCorp Solutions</p>
                  <p className="text-xs text-gray-600">Average 2 days</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-900">Growth trend</p>
                  <p className="text-lg font-bold text-purple-600">+15.2% MoM</p>
                  <p className="text-xs text-gray-600">Consistent growth</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}