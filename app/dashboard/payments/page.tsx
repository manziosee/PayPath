"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { mockInvoices } from "@/lib/mock-data";
import { 
  Search, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Calendar,
  Filter,
  Download,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Clock,
  CheckCircle2
} from "lucide-react";

export default function PaymentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
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

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Floating Header */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Payment Analytics
                </h1>
                <p className="text-gray-600 text-lg">Track your financial flow with precision</p>
              </div>
              <div className="flex items-center space-x-4 mt-6 lg:mt-0">
                <Button variant="outline" className="bg-white/50 backdrop-blur-sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all">
                  <Zap className="h-4 w-4 mr-2" />
                  Quick Actions
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <Card className="relative bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    +12.5%
                  </Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">Total Received</p>
                  <p className="text-3xl font-bold text-gray-900">${totalReceived.toLocaleString()}</p>
                  <div className="flex items-center text-sm text-green-600">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span>vs last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <Card className="relative bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                    Pending
                  </Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">Awaiting Payment</p>
                  <p className="text-3xl font-bold text-gray-900">${pendingPayments.toLocaleString()}</p>
                  <div className="flex items-center text-sm text-orange-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>5 invoices pending</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <Card className="relative bg-white/90 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                    85.2%
                  </Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">Collection Rate</p>
                  <p className="text-3xl font-bold text-gray-900">85.2%</p>
                  <Progress value={85.2} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interactive Payment Timeline */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900">Recent Payments</CardTitle>
                    <CardDescription className="text-gray-600">Latest payment activities</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Date Range
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPayments.map((payment, index) => (
                    <div key={payment.id} className="group relative">
                      <div className="absolute left-4 top-8 bottom-0 w-px bg-gradient-to-b from-blue-200 to-transparent"></div>
                      <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                        <div className="relative">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="h-4 w-4 text-white" />
                          </div>
                          {index < recentPayments.length - 1 && (
                            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-12 bg-blue-200"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-gray-900">{payment.client}</p>
                              <p className="text-sm text-gray-600">{payment.id}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-green-600">${payment.amount.toLocaleString()}</p>
                              <p className="text-xs text-gray-500">
                                {new Date(payment.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="mt-2 flex items-center space-x-2">
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                              Completed
                            </Badge>
                            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                              <Eye className="h-3 w-3 mr-1" />
                              View
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

          {/* Payment Insights Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <h3 className="font-semibold">Quick Insights</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Avg. Payment Time</span>
                      <span className="font-bold">12 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Fastest Payment</span>
                      <span className="font-bold">2 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Best Client</span>
                      <span className="font-bold">TechCorp</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Bank Transfer</span>
                    </div>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Credit Card</span>
                    </div>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">PayPal</span>
                    </div>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}