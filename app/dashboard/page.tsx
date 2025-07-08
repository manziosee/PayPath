"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DollarSign, FileText, Clock, CheckCircle, Plus, TrendingUp, Users, AlertCircle, Zap, Target, Star } from "lucide-react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { CreateInvoiceDialog } from "@/components/invoices/create-invoice-dialog";
import { InvoiceList } from "@/components/invoices/invoice-list";
import { mockInvoices, mockClients } from "@/lib/mock-data";

export default function DashboardPage() {
  const [showCreateInvoice, setShowCreateInvoice] = useState(false);
  const [invoices, setInvoices] = useState(mockInvoices);

  // Calculate dashboard metrics
  const totalRevenue = invoices
    .filter(inv => inv.status === 'paid')
    .reduce((sum, inv) => sum + inv.amount, 0);
    
  const pendingAmount = invoices
    .filter(inv => inv.status === 'pending')
    .reduce((sum, inv) => sum + inv.amount, 0);
    
  const overdueAmount = invoices
    .filter(inv => inv.status === 'overdue')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const totalInvoices = invoices.length;
  const paidInvoices = invoices.filter(inv => inv.status === 'paid').length;
  const collectionRate = totalInvoices > 0 ? (paidInvoices / totalInvoices) * 100 : 0;

  // Revenue chart data
  const chartData = [
    { month: 'JAN', revenue: 4500 },
    { month: 'FEB', revenue: 5200 },
    { month: 'MAR', revenue: 4800 },
    { month: 'APR', revenue: 6100 },
    { month: 'MAY', revenue: 7300 },
    { month: 'JUN', revenue: 8900 },
  ];

  const handleCreateInvoice = (invoiceData: any) => {
    const newInvoice = {
      id: `INV-${Date.now()}`,
      ...invoiceData,
      status: 'pending' as const,
      createdAt: new Date().toISOString(),
    };
    setInvoices(prev => [newInvoice, ...prev]);
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background text-foreground">
        {/* Animated Background */}
        <div className="fixed inset-0 mesh-gradient opacity-30 pointer-events-none"></div>
        
        <div className="relative space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
          {/* Header */}
          <div className="relative overflow-hidden mesh-gradient rounded-xl sm:rounded-2xl md:rounded-3xl">
            <div className="relative">
              <div className="text-center py-8 sm:py-12 md:py-16 lg:py-20 px-4">
                <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full shadow-2xl mb-4 sm:mb-6 md:mb-8 animate-fade-in-up">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  <span className="text-xs sm:text-sm font-black tracking-widest">BUSINESS OVERVIEW</span>
                </div>
                
                <div className="animate-fade-in-scale">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-tighter leading-none mb-3 sm:mb-4 md:mb-6">
                    <span className="block gradient-text">WELCOME</span>
                    <span className="block text-foreground">BACK</span>
                  </h1>
                </div>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light animate-fade-in-up stagger-1">
                  Here&#39;s your business overview and latest activity
                </p>
                
                <div className="flex justify-center pt-4 sm:pt-6 md:pt-8 animate-fade-in-up stagger-2">
                  <Button 
                    onClick={() => setShowCreateInvoice(true)}
                    className="btn-gradient text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-black tracking-widest hover-lift group"
                  >
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 md:mr-3 group-hover:rotate-90 transition-transform" />
                    CREATE INVOICE
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "TOTAL REVENUE",
                value: `$${totalRevenue.toLocaleString()}`,
                icon: DollarSign,
                trend: "+12%",
                description: "vs last month",
                delay: "stagger-1",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                title: "PENDING AMOUNT",
                value: `$${pendingAmount.toLocaleString()}`,
                icon: Clock,
                trend: `${invoices.filter(inv => inv.status === 'pending').length}`,
                description: "invoices pending",
                delay: "stagger-2",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "OVERDUE AMOUNT",
                value: `$${overdueAmount.toLocaleString()}`,
                icon: AlertCircle,
                trend: `${invoices.filter(inv => inv.status === 'overdue').length}`,
                description: "invoices overdue",
                delay: "stagger-3",
                gradient: "from-pink-500 to-cyan-500"
              },
              {
                title: "COLLECTION RATE",
                value: `${collectionRate.toFixed(1)}%`,
                icon: CheckCircle,
                trend: collectionRate,
                description: "payment success",
                delay: "stagger-4",
                gradient: "from-cyan-500 to-indigo-500"
              }
            ].map((metric, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <Card className={`relative neomorphism border-0 hover-lift animate-fade-in-up ${metric.delay}`}>
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                      <div className={`p-2 sm:p-3 md:p-4 bg-gradient-to-r ${metric.gradient} text-white rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform shadow-lg`}>
                        <metric.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                      </div>
                      {metric.title === "COLLECTION RATE" ? (
                        <div className="text-right">
                          <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-indigo-600" />
                        </div>
                      ) : (
                        <div className="text-right text-xs sm:text-sm font-bold gradient-text">
                          {metric.trend}
                        </div>
                      )}
                    </div>
                    <div className="space-y-1 sm:space-y-2 md:space-y-3">
                      <p className="text-xs sm:text-sm font-bold tracking-widest text-muted-foreground">{metric.title}</p>
                      <p className="text-xl sm:text-2xl md:text-3xl font-black gradient-text">{metric.value}</p>
                      {metric.title === "COLLECTION RATE" ? (
                        <Progress value={metric.trend as number} className="mt-2 sm:mt-3 h-2 md:h-3 bg-muted" />
                      ) : (
                        <p className="text-xs text-muted-foreground font-medium">{metric.description}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Revenue Chart */}
            <div className="lg:col-span-2">
              <Card className="neomorphism border-0 animate-fade-in-up">
                <CardHeader className="border-b border-border pb-4 sm:pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-1 h-5 sm:h-6 md:h-8 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl md:text-2xl font-black tracking-tight gradient-text">REVENUE TRENDS</CardTitle>
                        <CardDescription className="text-muted-foreground font-medium text-sm md:text-base">
                          Monthly performance overview
                        </CardDescription>
                      </div>
                    </div>
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-indigo-500" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="h-48 sm:h-64 md:h-80 flex items-end justify-between space-x-1 sm:space-x-2 md:space-x-4 p-3 sm:p-4 md:p-6">
                    {chartData.map((data, index) => (
                      <div key={data.month} className="flex flex-col items-center space-y-1 sm:space-y-2 md:space-y-3 flex-1 group">
                        <div className="relative w-full">
                          <div 
                            className="bg-gradient-to-t from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-t-lg sm:rounded-t-xl transition-all duration-1000 hover:scale-105"
                            style={{ 
                              height: `${(data.revenue / Math.max(...chartData.map(d => d.revenue))) * 160}px`
                            }}
                          ></div>
                          <div className="absolute -top-6 sm:-top-8 md:-top-10 left-1/2 transform -translate-x-1/2 text-xs font-black gradient-text bg-background px-2 md:px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                            ${data.revenue}
                          </div>
                        </div>
                        <span className="text-xs md:text-sm font-black text-muted-foreground tracking-widest">{data.month}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 sm:mt-6 md:mt-8 text-center">
                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-indigo-200 text-indigo-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:border-transparent font-bold tracking-wide transition-all duration-300 text-sm sm:text-base"
                    >
                      VIEW DETAILED REPORTS
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 sm:space-y-8">
              {/* Active Clients */}
              <Card className="neomorphism border-0 animate-fade-in-scale stagger-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-3 sm:mb-4 p-2 sm:p-3 md:p-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl sm:rounded-2xl w-fit shadow-lg">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                  </div>
                  <CardTitle className="text-base sm:text-lg md:text-xl font-black tracking-wide gradient-text">ACTIVE CLIENTS</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3 sm:space-y-4">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black gradient-text">
                    {mockClients.length}
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium">
                    Total active clients
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-2 border-indigo-200 text-indigo-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:border-transparent font-bold text-xs sm:text-sm"
                  >
                    MANAGE CLIENTS
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="neomorphism border-0 animate-fade-in-scale stagger-3">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg md:text-xl font-black tracking-wide flex items-center gradient-text">
                    <Zap className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-2" />
                    QUICK ACTIONS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3">
                  {[
                    { icon: Plus, label: "Create New Invoice", action: () => setShowCreateInvoice(true) },
                    { icon: Users, label: "Add New Client", action: () => {} },
                    { icon: TrendingUp, label: "View Reports", action: () => {} }
                  ].map((action, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      className="w-full justify-start border-2 border-indigo-200 text-indigo-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:border-transparent font-bold transition-all duration-300 text-xs sm:text-sm md:text-base"
                      onClick={action.action}
                    >
                      <action.icon className="h-3 w-3 md:h-4 md:w-4 mr-2 md:mr-3" />
                      {action.label}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Performance Insight */}
              <Card className="performance-card text-white border-0 glass animate-fade-in-scale stagger-4">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="space-y-3 sm:space-y-4 md:space-y-6">
                    <div className="flex items-center justify-center space-x-2">
                      <Target className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      <h3 className="text-sm sm:text-base md:text-lg font-black tracking-wide performance-text">PERFORMANCE</h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="performance-text-muted text-xs md:text-sm font-medium">This Month</span>
                        <span className="font-black performance-text text-sm md:text-base">+15.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="performance-text-muted text-xs md:text-sm font-medium">Avg. Payment</span>
                        <span className="font-black performance-text text-sm md:text-base">12 days</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="performance-text-muted text-xs md:text-sm font-medium">Top Client</span>
                        <span className="font-black performance-text text-sm md:text-base">TechCorp</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Invoices */}
          <Card className="neomorphism border-0 animate-fade-in-up">
            <CardHeader className="border-b border-border pb-4 sm:pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-1 h-5 sm:h-6 md:h-8 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                  <div>
                    <CardTitle className="text-lg sm:text-xl md:text-2xl font-black tracking-tight gradient-text">RECENT INVOICES</CardTitle>
                    <CardDescription className="text-muted-foreground font-medium text-sm md:text-base">
                      Your latest invoicing activity
                    </CardDescription>
                  </div>
                </div>
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-indigo-500" />
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 md:p-8">
              <InvoiceList invoices={invoices.slice(0, 5)} showActions={false} />
              <div className="mt-4 sm:mt-6 md:mt-8 text-center">
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-indigo-200 text-indigo-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:border-transparent font-bold tracking-wide transition-all duration-300 text-sm sm:text-base"
                >
                  VIEW ALL INVOICES
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <CreateInvoiceDialog
        open={showCreateInvoice}
        onOpenChange={setShowCreateInvoice}
        onCreateInvoice={handleCreateInvoice}
      />
    </DashboardLayout>
  );
}