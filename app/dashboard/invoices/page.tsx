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
      <div className="min-h-screen bg-white text-black">
        {/* Animated Background */}
        <div className="fixed inset-0 diagonal-stripes opacity-10 pointer-events-none"></div>
        
        <div className="relative space-y-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4 animate-minimal-fade">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-12 bg-black"></div>
                <div>
                  <h1 className="text-5xl font-black tracking-tighter">INVOICES</h1>
                  <p className="text-xl text-gray-600 font-light">Manage and track all your invoices in one place.</p>
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

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "TOTAL INVOICES",
                value: counts.all,
                icon: FileText,
                accent: "bg-black",
                delay: "stagger-1"
              },
              {
                title: "PAID",
                value: counts.paid,
                icon: DollarSign,
                accent: "bg-gray-700",
                delay: "stagger-2"
              },
              {
                title: "PENDING",
                value: counts.pending,
                icon: Clock,
                accent: "bg-gray-600",
                delay: "stagger-3"
              },
              {
                title: "OVERDUE",
                value: counts.overdue,
                icon: AlertCircle,
                accent: "bg-gray-800",
                delay: "stagger-4"
              }
            ].map((stat, index) => (
              <Card key={index} className={`neomorphism border-0 hover-lift-bw animate-minimal-fade ${stat.delay} group`}>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 ${stat.accent} text-white rounded-xl group-hover:scale-110 transition-transform`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold tracking-widest text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-black text-black">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Filters and Search */}
          <Card className="neomorphism border-0 animate-minimal-slide">
            <CardHeader className="border-b border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      placeholder="Search invoices..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 h-12 border-2 border-gray-200 focus:border-black font-medium"
                    />
                  </div>
                </div>
                <Button 
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-black hover:text-white font-bold tracking-wide"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  MORE FILTERS
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1 rounded-xl">
                  {[
                    { value: "all", label: "ALL", count: counts.all },
                    { value: "paid", label: "PAID", count: counts.paid },
                    { value: "pending", label: "PENDING", count: counts.pending },
                    { value: "overdue", label: "OVERDUE", count: counts.overdue }
                  ].map((tab) => (
                    <TabsTrigger 
                      key={tab.value}
                      value={tab.value} 
                      className="flex items-center space-x-2 font-bold tracking-wide data-[state=active]:bg-black data-[state=active]:text-white"
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
            <Card className="neomorphism border-0 animate-minimal-scale">
              <CardContent className="text-center py-20">
                <div className="space-y-6">
                  <div className="mx-auto w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                    <FileText className="h-10 w-10 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-black mb-2">NO INVOICES FOUND</h3>
                    <p className="text-gray-600 font-medium mb-6">
                      {searchQuery ? "Try adjusting your search criteria" : "Create your first invoice to get started"}
                    </p>
                  </div>
                  {!searchQuery && (
                    <Button 
                      onClick={() => setShowCreateInvoice(true)}
                      className="bg-black text-white hover:bg-gray-800 px-8 py-3 font-bold tracking-wide"
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