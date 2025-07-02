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
      <div className="min-h-screen bg-white text-black">
        {/* Animated Background */}
        <div className="fixed inset-0 geometric-bg opacity-20 pointer-events-none"></div>
        
        <div className="relative space-y-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4 animate-minimal-fade">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-12 bg-black"></div>
                <div>
                  <h1 className="text-5xl font-black tracking-tighter">DASHBOARD</h1>
                  <p className="text-xl text-gray-600 font-light">Welcome back! Here's your business overview.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 animate-minimal-scale">
              <Button 
                onClick={() => setShowCreateInvoice(true)}
                className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-bold tracking-wide neomorphism hover-lift-bw group"
              >
                <Plus className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform" />
                CREATE INVOICE
              </Button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "TOTAL REVENUE",
                value: `$${totalRevenue.toLocaleString()}`,
                icon: DollarSign,
                trend: "+12%",
                description: "vs last month",
                delay: "stagger-1",
                accent: "bg-black"
              },
              {
                title: "PENDING AMOUNT",
                value: `$${pendingAmount.toLocaleString()}`,
                icon: Clock,
                trend: `${invoices.filter(inv => inv.status === 'pending').length}`,
                description: "invoices pending",
                delay: "stagger-2",
                accent: "bg-gray-600"
              },
              {
                title: "OVERDUE AMOUNT",
                value: `$${overdueAmount.toLocaleString()}`,
                icon: AlertCircle,
                trend: `${invoices.filter(inv => inv.status === 'overdue').length}`,
                description: "invoices overdue",
                delay: "stagger-3",
                accent: "bg-gray-800"
              },
              {
                title: "COLLECTION RATE",
                value: `${collectionRate.toFixed(1)}%`,
                icon: CheckCircle,
                trend: collectionRate,
                description: "payment success",
                delay: "stagger-4",
                accent: "bg-black"
              }
            ].map((metric, index) => (
              <Card key={index} className={`neomorphism border-0 hover-lift-bw animate-minimal-fade ${metric.delay} group`}>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 ${metric.accent} text-white rounded-xl group-hover:scale-110 transition-transform`}>
                      <metric.icon className="h-6 w-6" />
                    </div>
                    {metric.title === "COLLECTION RATE" ? (
                      <div className="text-right">
                        <TrendingUp className="h-4 w-4 text-black" />
                      </div>
                    ) : (
                      <div className="text-right text-sm font-bold text-black">
                        {metric.trend}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold tracking-widest text-gray-600">{metric.title}</p>
                    <p className="text-3xl font-black text-black">{metric.value}</p>
                    {metric.title === "COLLECTION RATE" ? (
                      <Progress value={metric.trend as number} className="mt-3 h-2 bg-gray-200" />
                    ) : (
                      <p className="text-xs text-gray-500 font-medium">{metric.description}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Invoices */}
            <div className="lg:col-span-2">
              <Card className="neomorphism border-0 animate-minimal-slide">
                <CardHeader className="border-b border-gray-100 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-1 h-8 bg-black"></div>
                      <div>
                        <CardTitle className="text-2xl font-black tracking-tight">RECENT INVOICES</CardTitle>
                        <CardDescription className="text-gray-600 font-medium">
                          Your latest invoicing activity
                        </CardDescription>
                      </div>
                    </div>
                    <FileText className="h-6 w-6 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <InvoiceList invoices={invoices.slice(0, 5)} showActions={false} />
                  <div className="mt-8 text-center">
                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-black text-black hover:bg-black hover:text-white font-bold tracking-wide transition-all duration-300"
                    >
                      VIEW ALL INVOICES
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Active Clients */}
              <Card className="neomorphism border-0 animate-minimal-scale stagger-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-black text-white rounded-2xl w-fit">
                    <Users className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-black tracking-wide">ACTIVE CLIENTS</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-4xl font-black text-black">
                    {mockClients.length}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    Total active clients
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-black text-black hover:bg-black hover:text-white font-bold"
                  >
                    MANAGE CLIENTS
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="neomorphism border-0 animate-minimal-scale stagger-3">
                <CardHeader>
                  <CardTitle className="text-xl font-black tracking-wide flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    QUICK ACTIONS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { icon: Plus, label: "Create New Invoice", action: () => setShowCreateInvoice(true) },
                    { icon: Users, label: "Add New Client", action: () => {} },
                    { icon: TrendingUp, label: "View Reports", action: () => {} }
                  ].map((action, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      className="w-full justify-start border-gray-300 text-black hover:bg-black hover:text-white font-bold transition-all duration-300"
                      onClick={action.action}
                    >
                      <action.icon className="h-4 w-4 mr-3" />
                      {action.label}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Performance Insight */}
              <Card className="bg-black text-white border-0 neomorphism-dark animate-minimal-scale stagger-4">
                <CardContent className="p-8 text-center">
                  <div className="space-y-6">
                    <div className="flex items-center justify-center space-x-2">
                      <Target className="h-6 w-6" />
                      <h3 className="text-lg font-black tracking-wide">PERFORMANCE</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm font-medium">This Month</span>
                        <span className="font-black text-white">+15.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm font-medium">Avg. Payment</span>
                        <span className="font-black text-white">12 days</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm font-medium">Top Client</span>
                        <span className="font-black text-white">TechCorp</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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