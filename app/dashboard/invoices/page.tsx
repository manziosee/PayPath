"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { InvoiceList } from "@/components/invoices/invoice-list";
import { CreateInvoiceDialog } from "@/components/invoices/create-invoice-dialog";
import { mockInvoices } from "@/lib/mock-data";
import { Search, Plus, Filter, FileText, DollarSign, Clock, AlertCircle, Zap } from "lucide-react";

export default function InvoicesPage() {
  const [showCreateInvoice, setShowCreateInvoice] = useState(false);
  const [invoices, setInvoices] = useState(mockInvoices);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    return matchesSearch && invoice.status === activeTab;
  });

  const handleCreateInvoice = (invoiceData: any) => {
    const newInvoice = {
      id: `INV-${Date.now()}`,
      ...invoiceData,
      status: 'pending' as const,
      createdAt: new Date().toISOString(),
    };
    setInvoices(prev => [newInvoice, ...prev]);
  };

  const getStatusCounts = () => {
    return {
      all: invoices.length,
      paid: invoices.filter(inv => inv.status === 'paid').length,
      pending: invoices.filter(inv => inv.status === 'pending').length,
      overdue: invoices.filter(inv => inv.status === 'overdue').length,
    };
  };

  const counts = getStatusCounts();

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background text-foreground">
        {/* Animated Background */}
        <div className="fixed inset-0 mesh-gradient opacity-30 pointer-events-none"></div>
        
        <div className="relative space-y-16">
          {/* Header */}
          <div className="relative overflow-hidden mesh-gradient rounded-3xl">
            <div className="relative">
              <div className="text-center py-20 px-4">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full shadow-2xl mb-8 animate-fade-in-up">
                  <FileText className="h-6 w-6" />
                  <span className="text-sm font-black tracking-widest">INVOICE MANAGEMENT</span>
                </div>
                
                <div className="animate-fade-in-scale">
                  <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none mb-6">
                    <span className="block gradient-text">INVOICE</span>
                    <span className="block text-foreground">CONTROL</span>
                    <span className="block text-outline">CENTER</span>
                  </h1>
                </div>
                
                <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light animate-fade-in-up stagger-1">
                  Manage and track all your invoices in one powerful dashboard
                </p>
                
                <div className="flex justify-center pt-8 animate-fade-in-up stagger-2">
                  <Button 
                    onClick={() => setShowCreateInvoice(true)}
                    className="btn-gradient text-white px-12 py-6 text-xl font-black tracking-widest hover-lift group"
                  >
                    <Plus className="h-6 w-6 mr-3 group-hover:rotate-90 transition-transform" />
                    CREATE INVOICE
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "TOTAL INVOICES",
                value: counts.all,
                icon: FileText,
                gradient: "from-indigo-500 to-purple-500",
                delay: "stagger-1"
              },
              {
                title: "PAID",
                value: counts.paid,
                icon: DollarSign,
                gradient: "from-purple-500 to-pink-500",
                delay: "stagger-2"
              },
              {
                title: "PENDING",
                value: counts.pending,
                icon: Clock,
                gradient: "from-pink-500 to-cyan-500",
                delay: "stagger-3"
              },
              {
                title: "OVERDUE",
                value: counts.overdue,
                icon: AlertCircle,
                gradient: "from-cyan-500 to-indigo-500",
                delay: "stagger-4"
              }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <Card className={`relative neomorphism border-0 hover-lift animate-fade-in-up ${stat.delay}`}>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-r ${stat.gradient} text-white rounded-xl group-hover:scale-110 transition-transform shadow-lg`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-bold tracking-widest text-muted-foreground">{stat.title}</p>
                      <p className="text-3xl font-black gradient-text">{stat.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Filters and Search */}
          <Card className="neomorphism border-0 animate-fade-in-up">
            <CardHeader className="border-b border-border pb-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      placeholder="Search invoices..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 h-12 border-2 border-indigo-200 focus:border-indigo-500 font-medium"
                    />
                  </div>
                </div>
                <Button 
                  variant="outline"
                  className="border-2 border-indigo-200 text-indigo-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:border-transparent font-bold tracking-wide"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  MORE FILTERS
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4 bg-muted p-1 rounded-xl">
                  {[
                    { value: "all", label: "ALL", count: counts.all },
                    { value: "paid", label: "PAID", count: counts.paid },
                    { value: "pending", label: "PENDING", count: counts.pending },
                    { value: "overdue", label: "OVERDUE", count: counts.overdue }
                  ].map((tab) => (
                    <TabsTrigger 
                      key={tab.value}
                      value={tab.value} 
                      className="flex items-center space-x-2 font-bold tracking-wide data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
                    >
                      <span>{tab.label}</span>
                      <Badge 
                        variant="secondary" 
                        className="ml-2 bg-white/20 text-current font-black"
                      >
                        {tab.count}
                      </Badge>
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <div className="mt-8">
                  <TabsContent value="all">
                    <InvoiceList invoices={filteredInvoices} />
                  </TabsContent>
                  <TabsContent value="paid">
                    <InvoiceList invoices={filteredInvoices} />
                  </TabsContent>
                  <TabsContent value="pending">
                    <InvoiceList invoices={filteredInvoices} />
                  </TabsContent>
                  <TabsContent value="overdue">
                    <InvoiceList invoices={filteredInvoices} />
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>

          {/* Empty State */}
          {filteredInvoices.length === 0 && (
            <Card className="neomorphism border-0 animate-fade-in-scale">
              <CardContent className="text-center py-20">
                <div className="space-y-6">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <FileText className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black gradient-text mb-2">NO INVOICES FOUND</h3>
                    <p className="text-muted-foreground font-medium mb-6">
                      {searchQuery ? "Try adjusting your search criteria" : "Create your first invoice to get started"}
                    </p>
                  </div>
                  {!searchQuery && (
                    <Button 
                      onClick={() => setShowCreateInvoice(true)}
                      className="btn-gradient text-white px-8 py-3 font-bold tracking-wide"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      CREATE INVOICE
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
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