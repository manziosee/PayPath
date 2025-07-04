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
      <div className="min-h-screen bg-background text-foreground">
        {/* Animated Background */}
        <div className="fixed inset-0 mesh-gradient opacity-30 pointer-events-none"></div>
        
        <div className="relative space-y-8 md:space-y-12 lg:space-y-16">
          {/* Header */}
          <div className="relative overflow-hidden mesh-gradient rounded-2xl md:rounded-3xl">
            <div className="relative">
              <div className="text-center py-12 md:py-16 lg:py-20 px-4">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full shadow-2xl mb-6 md:mb-8 animate-fade-in-up">
                  <DollarSign className="h-5 w-5 md:h-6 md:w-6" />
                  <span className="text-xs md:text-sm font-black tracking-widest">PAYMENT ANALYTICS</span>
                </div>
                
                <div className="animate-fade-in-scale">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none mb-4 md:mb-6">
                    <span className="block gradient-text">PAYMENTS</span>
                  </h1>
                </div>
                
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light animate-fade-in-up stagger-1">
                  Track your financial flow with precision
                </p>
                
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 pt-6 md:pt-8 animate-fade-in-up stagger-2">
                  <Button 
                    variant="outline" 
                    className="border-2 border-white/20 text-white hover:bg-white/10 font-bold tracking-wide px-6 md:px-8 py-3"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    EXPORT REPORT
                  </Button>
                  <Button className="bg-white text-indigo-600 hover:bg-white/90 px-6 md:px-8 py-3 font-bold tracking-wide">
                    <Zap className="h-4 w-4 mr-2" />
                    QUICK ACTIONS
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "TOTAL RECEIVED",
                value: `$${totalReceived.toLocaleString()}`,
                icon: TrendingUp,
                trend: "+12.5%",
                description: "vs last month",
                gradient: "from-indigo-500 to-purple-500",
                delay: "stagger-1"
              },
              {
                title: "AWAITING PAYMENT",
                value: `$${pendingPayments.toLocaleString()}`,
                icon: Clock,
                trend: "5 invoices",
                description: "pending",
                gradient: "from-purple-500 to-pink-500",
                delay: "stagger-2"
              },
              {
                title: "COLLECTION RATE",
                value: `${collectionRate}%`,
                icon: Target,
                trend: collectionRate,
                description: "success rate",
                gradient: "from-pink-500 to-cyan-500",
                delay: "stagger-3"
              }
            ].map((metric, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <Card className={`relative neomorphism border-0 hover-lift animate-fade-in-up ${metric.delay}`}>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <div className={`p-3 md:p-4 bg-gradient-to-r ${metric.gradient} text-white rounded-2xl group-hover:scale-110 transition-transform shadow-lg`}>
                        <metric.icon className="h-6 w-6 md:h-8 md:w-8" />
                      </div>
                      <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 font-bold text-xs md:text-sm">
                        {metric.title === "COLLECTION RATE" ? "ACTIVE" : metric.trend}
                      </Badge>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <p className="text-xs md:text-sm font-bold tracking-widest text-muted-foreground">{metric.title}</p>
                      <p className="text-2xl md:text-3xl lg:text-4xl font-black gradient-text">{metric.value}</p>
                      {metric.title === "COLLECTION RATE" ? (
                        <Progress value={metric.trend as number} className="h-2 md:h-3 bg-muted" />
                      ) : (
                        <div className="flex items-center text-xs md:text-sm gradient-text font-medium">
                          <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4 mr-1" />
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
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Payment Timeline */}
            <div className="lg:col-span-2">
              <Card className="neomorphism border-0 animate-fade-in-up">
                <CardHeader className="border-b border-border pb-4 md:pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                      <div>
                        <CardTitle className="text-xl md:text-2xl font-black tracking-tight gradient-text">RECENT PAYMENTS</CardTitle>
                        <CardDescription className="text-muted-foreground font-medium text-sm md:text-base">Latest payment activities</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="border-2 border-indigo-200 text-indigo-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:border-transparent font-bold text-xs md:text-sm">
                        <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                        DATE RANGE
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <div className="space-y-4 md:space-y-6">
                    {recentPayments.map((payment, index) => (
                      <div key={payment.id} className="group relative">
                        <div className="absolute left-4 md:left-6 top-12 bottom-0 w-px bg-border"></div>
                        <div className="flex items-start space-x-4 md:space-x-6 p-4 md:p-6 rounded-2xl hover:bg-muted/50 transition-all duration-300 neomorphism-inset">
                          <div className="relative">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl flex items-center justify-center font-black shadow-lg">
                              <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6" />
                            </div>
                            {index < recentPayments.length - 1 && (
                              <div className="absolute top-10 md:top-12 left-1/2 transform -translate-x-1/2 w-px h-8 md:h-12 bg-border"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                              <div>
                                <p className="font-black gradient-text text-base md:text-lg">{payment.client}</p>
                                <p className="text-xs md:text-sm text-muted-foreground font-medium">{payment.id}</p>
                              </div>
                              <div className="text-left sm:text-right">
                                <p className="font-black gradient-text text-lg md:text-xl">${payment.amount.toLocaleString()}</p>
                                <p className="text-xs text-muted-foreground font-medium">
                                  {new Date(payment.createdAt).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                              <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 font-bold text-xs">
                                COMPLETED
                              </Badge>
                              <Button variant="ghost" size="sm" className="h-7 md:h-8 px-2 md:px-3 text-xs font-bold hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white">
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
            <div className="space-y-6 md:space-y-8">
              {/* Quick Insights */}
              <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 glass animate-fade-in-scale stagger-2">
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center space-x-3">
                      <Zap className="h-5 w-5 md:h-6 md:w-6" />
                      <h3 className="font-black tracking-wide text-base md:text-lg">QUICK INSIGHTS</h3>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      {[
                        { label: "Avg. Payment Time", value: "12 days" },
                        { label: "Fastest Payment", value: "2 days" },
                        { label: "Best Client", value: "TechCorp" }
                      ].map((insight, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-white/80 text-xs md:text-sm font-medium">{insight.label}</span>
                          <span className="font-black text-white text-sm md:text-base">{insight.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card className="neomorphism border-0 animate-fade-in-scale stagger-3">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-black tracking-wide flex items-center gradient-text">
                    <BarChart3 className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    PAYMENT METHODS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  {[
                    { method: "Bank Transfer", percentage: 65, gradient: "from-indigo-500 to-purple-500" },
                    { method: "Credit Card", percentage: 25, gradient: "from-purple-500 to-pink-500" },
                    { method: "PayPal", percentage: 10, gradient: "from-pink-500 to-cyan-500" }
                  ].map((method, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r ${method.gradient} rounded-full`}></div>
                          <span className="text-xs md:text-sm font-bold">{method.method}</span>
                        </div>
                        <span className="text-xs md:text-sm font-black gradient-text">{method.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${method.gradient} rounded-full transition-all duration-1000`}
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