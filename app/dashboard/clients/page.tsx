"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { CreateClientDialog } from "@/components/clients/create-client-dialog";
import { mockClients, mockInvoices } from "@/lib/mock-data";
import { Search, Plus, MoreHorizontal, Mail, Phone, Building, Edit, Trash2, Users, DollarSign, TrendingUp } from "lucide-react";

export default function ClientsPage() {
  const [showCreateClient, setShowCreateClient] = useState(false);
  const [clients, setClients] = useState(mockClients);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateClient = (clientData: any) => {
    const newClient = {
      id: `client-${Date.now()}`,
      ...clientData,
      createdAt: new Date().toISOString(),
    };
    setClients(prev => [newClient, ...prev]);
  };

  const getClientStats = (clientId: string) => {
    const clientInvoices = mockInvoices.filter(invoice => 
      clients.find(client => client.id === clientId)?.name === invoice.client
    );
    
    return {
      totalInvoices: clientInvoices.length,
      totalAmount: clientInvoices.reduce((sum, inv) => sum + inv.amount, 0),
      paidAmount: clientInvoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0),
    };
  };

  const handleAction = (action: string, clientId: string) => {
    console.log(`${action} action for client:`, clientId);
  };

  const totalRevenue = mockInvoices.reduce((sum, inv) => sum + inv.amount, 0);
  const outstandingAmount = mockInvoices.filter(inv => inv.status === 'pending' || inv.status === 'overdue').reduce((sum, inv) => sum + inv.amount, 0);

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
                  <Users className="h-6 w-6" />
                  <span className="text-sm font-black tracking-widest">CLIENT MANAGEMENT</span>
                </div>
                
                <div className="animate-fade-in-scale">
                  <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none mb-6">
                    <span className="block gradient-text">CLIENT</span>
                    <span className="block text-foreground">RELATIONSHIP</span>
                    <span className="block text-outline">HUB</span>
                  </h1>
                </div>
                
                <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light animate-fade-in-up stagger-1">
                  Manage your client relationships and contact information with ease
                </p>
                
                <div className="flex justify-center pt-8 animate-fade-in-up stagger-2">
                  <Button 
                    onClick={() => setShowCreateClient(true)}
                    className="btn-gradient text-white px-12 py-6 text-xl font-black tracking-widest hover-lift group"
                  >
                    <Plus className="h-6 w-6 mr-3 group-hover:rotate-90 transition-transform" />
                    ADD CLIENT
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <Card className="neomorphism border-0 animate-fade-in-up">
            <CardHeader className="border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                <div>
                  <CardTitle className="text-2xl font-black tracking-tight flex items-center gradient-text">
                    <Users className="h-6 w-6 mr-3" />
                    CLIENT OVERVIEW
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "TOTAL CLIENTS",
                    value: clients.length,
                    icon: Users,
                    gradient: "from-indigo-500 to-purple-500"
                  },
                  {
                    title: "TOTAL REVENUE",
                    value: `$${totalRevenue.toLocaleString()}`,
                    icon: DollarSign,
                    gradient: "from-purple-500 to-pink-500"
                  },
                  {
                    title: "OUTSTANDING",
                    value: `$${outstandingAmount.toLocaleString()}`,
                    icon: TrendingUp,
                    gradient: "from-pink-500 to-cyan-500"
                  }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${stat.gradient} text-white rounded-2xl w-fit group-hover:scale-110 transition-transform shadow-lg`}>
                      <stat.icon className="h-8 w-8" />
                    </div>
                    <div className="text-3xl font-black gradient-text mb-2">{stat.value}</div>
                    <div className="text-sm font-bold tracking-widest text-muted-foreground">{stat.title}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Search */}
          <Card className="neomorphism border-0 animate-fade-in-up stagger-2">
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Search clients..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 border-2 border-indigo-200 focus:border-indigo-500 font-medium"
                  />
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Clients Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClients.map((client, index) => {
              const stats = getClientStats(client.id);
              return (
                <div key={client.id} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <Card className={`relative neomorphism border-0 hover-lift animate-fade-in-scale stagger-${(index % 3) + 1}`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <Avatar className="h-16 w-16 border-4 border-indigo-200">
                              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${client.name}`} />
                              <AvatarFallback className="text-lg font-black bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                                {client.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-2 border-background"></div>
                          </div>
                          <div>
                            <CardTitle className="text-xl font-black tracking-tight gradient-text">{client.name}</CardTitle>
                            <CardDescription className="flex items-center font-medium">
                              <Building className="h-4 w-4 mr-2" />
                              {client.company}
                            </CardDescription>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="border-2 border-indigo-200">
                            <DropdownMenuItem onClick={() => handleAction('edit', client.id)}>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAction('email', client.id)}>
                              <Mail className="mr-2 h-4 w-4" />
                              Send Email
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              onClick={() => handleAction('delete', client.id)}
                              className="text-red-600"
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground font-medium">
                          <Mail className="h-4 w-4 mr-3" />
                          {client.email}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground font-medium">
                          <Phone className="h-4 w-4 mr-3" />
                          {client.phone}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-border">
                        <div className="grid grid-cols-2 gap-6 text-center">
                          <div className="space-y-1">
                            <div className="text-2xl font-black gradient-text">{stats.totalInvoices}</div>
                            <div className="text-xs font-bold tracking-widest text-muted-foreground">INVOICES</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-2xl font-black gradient-text">${stats.paidAmount.toLocaleString()}</div>
                            <div className="text-xs font-bold tracking-widest text-muted-foreground">PAID</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredClients.length === 0 && (
            <Card className="neomorphism border-0 animate-fade-in-scale">
              <CardContent className="text-center py-20">
                <div className="space-y-6">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black gradient-text mb-2">NO CLIENTS FOUND</h3>
                    <p className="text-muted-foreground font-medium mb-6">
                      {searchQuery ? "Try adjusting your search criteria" : "Add your first client to get started"}
                    </p>
                  </div>
                  {!searchQuery && (
                    <Button 
                      onClick={() => setShowCreateClient(true)}
                      className="btn-gradient text-white px-8 py-3 font-bold tracking-wide"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      ADD CLIENT
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <CreateClientDialog
        open={showCreateClient}
        onOpenChange={setShowCreateClient}
        onCreateClient={handleCreateClient}
      />
    </DashboardLayout>
  );
}