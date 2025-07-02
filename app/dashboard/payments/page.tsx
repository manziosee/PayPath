"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { mockInvoices } from "@/lib/mock-data";
import { 
  TrendingUp, 
  DollarSign, 
  Calendar,
  Download,
  Eye,
  ArrowUpRight,
  Zap,
  Clock,
  CheckCircle2,
  Target,
  BarChart3
} from "lucide-react";

export default function PaymentsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  // Calculate payment metrics
  const totalReceived = mockInvoices
    .filter(inv => inv.status === 'paid')
    .reduce((sum, inv) => sum + inv.amount, 0);
    
  const pendingPayments = mockInvoices
    .filter(inv => inv.status === 'pending')
    .reduce((sum, inv) => sum + inv.amount, 0);
    
  const overduePayments = mockInvoices
    .filter(inv => inv.status === 'overdue')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const recentPayments = mockInvoices
    .filter(inv => inv.status === 'paid')
    .slice(0, 6);

  const collectionRate = 85.2;

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-white text-black">
        {/* Animated Background */}
        <div className="fixed inset-0 dot-matrix animate-pulse-dot opacity-20 pointer-events-none"></div>
        
        <div className="relative space-y-12">
          {/* Header */}
          <div className="relative">
            <div className="absolute inset-0 bg-black/5 rounded-3xl blur-3xl"></div>
            <div className="relative neomorphism rounded-3xl p-12 border-0">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-4 animate-minimal-fade">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-12 bg-black"></div>
                    <div>
                      <h1 className="text-6xl font-black tracking-tighter">PAYMENT</h1>
                      <h2 className="text-6xl font-black tracking-tighter text-outline">ANALYTICS</h2>
                      <p className="text-xl text-gray-600 font-light mt-2">Track your financial flow with precision</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-6 lg:mt-0 animate-minimal-scale">
                  <Button 
                    variant="outline" 
                    className="border-2 border-black text-black hover:bg-black hover:text-white font-bold tracking-wide"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    EXPORT REPORT
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 font-bold tracking-wide neomorphism">
                    <Zap className="h-4 w-4 mr-2" />
                    QUICK ACTIONS
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "TOTAL RECEIVED",
                value: `$${totalReceived.toLocaleString()}`,
                icon: TrendingUp,
                trend: "+12.5%",
                description: "vs last month",
                accent: "bg-black",
                delay: "stagger-1"
              },
              {
                title: "AWAITING PAYMENT",
                value: `$${pendingPayments.toLocaleString()}`,
                icon: Clock,
                trend: "5 invoices",
                description: "pending",
                accent: "bg-gray-700",
                delay: "stagger-2"
              },
              {
                title: "COLLECTION RATE",
                value: `${collectionRate}%`,
                icon: Target,
                trend: collectionRate,
                description: "success rate",
                accent: "bg-gray-600",
                delay: "stagger-3"
              }
            ].map((metric, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-black/5 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <Card className={`relative neomorphism border-0 hover-lift-bw animate-minimal-fade ${metric.delay}`}>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 ${metric.accent} text-white rounded-2xl group-hover:scale-110 transition-transform`}>
                        <metric.icon className="h-8 w-8" />
                      </div>
                      <Badge className="bg-black text-white hover:bg-black font-bold">
                        {metric.title === "COLLECTION RATE" ? "ACTIVE" : metric.trend}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm font-bold tracking-widest text-gray-600">{metric.title}</p>
                      <p className="text-4xl font-black text-black">{metric.value}</p>
                      {metric.title === "COLLECTION RATE" ? (
                        <Progress value={metric.trend as number} className="h-3 bg-gray-200" />
                      ) : (
                        <div className="flex items-center text-sm text-black font-medium">
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                          <span>{metric.description}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Payment Timeline & Insights */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Timeline */}
            <div className="lg:col-span-2">
              <Card className="neomorphism border-0 animate-minimal-slide">
                <CardHeader className="border-b border-gray-100 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-1 h-8 bg-black"></div>
                      <div>
                        <CardTitle className="text-2xl font-black tracking-tight">RECENT PAYMENTS</CardTitle>
                        <CardDescription className="text-gray-600 font-medium">Latest payment activities</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="border-black text-black hover:bg-black hover:text-white font-bold">
                        <Calendar className="h-4 w-4 mr-2" />
                        DATE RANGE
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {recentPayments.map((payment, index) => (
                      <div key={payment.id} className="group relative">
                        <div className="absolute left-6 top-12 bottom-0 w-px bg-gray-200"></div>
                        <div className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 neomorphism-inset">
                          <div className="relative">
                            <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-black">
                              <CheckCircle2 className="h-6 w-6" />
                            </div>
                            {index < recentPayments.length - 1 && (
                              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gray-200"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-black text-black text-lg">{payment.client}</p>
                                <p className="text-sm text-gray-600 font-medium">{payment.id}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-black text-black text-xl">${payment.amount.toLocaleString()}</p>
                                <p className="text-xs text-gray-500 font-medium">
                                  {new Date(payment.createdAt).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <div className="mt-3 flex items-center space-x-3">
                              <Badge className="bg-black text-white hover:bg-black font-bold">
                                COMPLETED
                              </Badge>
                              <Button variant="ghost" size="sm" className="h-8 px-3 text-xs font-bold hover:bg-black hover:text-white">
                                <Eye className="h-3 w-3 mr-1" />
                                VIEW
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Insights Sidebar */}
            <div className="space-y-8">
              {/* Quick Insights */}
              <Card className="bg-black text-white border-0 neomorphism-dark animate-minimal-scale stagger-2">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Zap className="h-6 w-6" />
                      <h3 className="font-black tracking-wide text-lg">QUICK INSIGHTS</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        { label: "Avg. Payment Time", value: "12 days" },
                        { label: "Fastest Payment", value: "2 days" },
                        { label: "Best Client", value: "TechCorp" }
                      ].map((insight, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm font-medium">{insight.label}</span>
                          <span className="font-black text-white">{insight.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card className="neomorphism border-0 animate-minimal-scale stagger-3">
                <CardHeader>
                  <CardTitle className="text-xl font-black tracking-wide flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    PAYMENT METHODS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { method: "Bank Transfer", percentage: 65, color: "bg-black" },
                    { method: "Credit Card", percentage: 25, color: "bg-gray-700" },
                    { method: "PayPal", percentage: 10, color: "bg-gray-500" }
                  ].map((method, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 ${method.color} rounded-full`}></div>
                          <span className="text-sm font-bold">{method.method}</span>
                        </div>
                        <span className="text-sm font-black">{method.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 ${method.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${method.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}