"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { 
  User, 
  Bell, 
  CreditCard, 
  Shield, 
  Palette, 
  Globe, 
  Mail,
  Phone,
  MapPin,
  Camera,
  Save,
  Trash2,
  Eye,
  EyeOff,
  Zap,
  Crown,
  Star,
  Lock,
  Smartphone,
  Monitor,
  Moon,
  Sun
} from "lucide-react";
import { toast } from "sonner";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
    marketing: false
  });

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-rose-50">
        {/* Artistic Header */}
        <div className="relative mb-16 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="relative">
            <div className="text-center py-16 px-4">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
                <Crown className="h-5 w-5 text-violet-600" />
                <span className="text-sm font-medium text-violet-700">Premium Settings</span>
              </div>
              
              <h1 className="text-6xl font-bold bg-gradient-to-r from-violet-600 via-rose-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                Customize Your Experience
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Personalize PayPath to match your workflow and preferences
              </p>
            </div>
          </div>
        </div>

        {/* Settings Content */}
        <div className="max-w-6xl mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            {/* Floating Tab Navigation */}
            <div className="flex justify-center">
              <TabsList className="bg-white/80 backdrop-blur-xl shadow-2xl border-0 p-2 rounded-2xl">
                <TabsTrigger value="profile" className="flex items-center space-x-2 px-6 py-3 rounded-xl">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center space-x-2 px-6 py-3 rounded-xl">
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </TabsTrigger>
                <TabsTrigger value="billing" className="flex items-center space-x-2 px-6 py-3 rounded-xl">
                  <CreditCard className="h-4 w-4" />
                  <span>Billing</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center space-x-2 px-6 py-3 rounded-xl">
                  <Shield className="h-4 w-4" />
                  <span>Security</span>
                </TabsTrigger>
                <TabsTrigger value="appearance" className="flex items-center space-x-2 px-6 py-3 rounded-xl">
                  <Palette className="h-4 w-4" />
                  <span>Appearance</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <User className="h-5 w-5 mr-2 text-violet-600" />
                        Personal Information
                      </CardTitle>
                      <CardDescription>Update your personal details and contact information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="John" className="bg-white/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Doe" className="bg-white/50" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input id="email" type="email" defaultValue="john@example.com" className="pl-10 bg-white/50" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="pl-10 bg-white/50" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Textarea id="address" defaultValue="123 Business Street, Suite 100, New York, NY 10001" className="pl-10 bg-white/50" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Globe className="h-5 w-5 mr-2 text-violet-600" />
                        Business Information
                      </CardTitle>
                      <CardDescription>Configure your business details for invoices</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name</Label>
                        <Input id="businessName" defaultValue="Freelance Solutions LLC" className="bg-white/50" />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="taxId">Tax ID</Label>
                          <Input id="taxId" defaultValue="12-3456789" className="bg-white/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="currency">Default Currency</Label>
                          <Select defaultValue="usd">
                            <SelectTrigger className="bg-white/50">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="usd">USD ($)</SelectItem>
                              <SelectItem value="eur">EUR (€)</SelectItem>
                              <SelectItem value="gbp">GBP (£)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Profile Sidebar */}
                <div className="space-y-6">
                  <Card className="bg-gradient-to-br from-violet-600 to-rose-600 text-white border-0 shadow-xl">
                    <CardContent className="p-6 text-center">
                      <div className="relative inline-block mb-4">
                        <Avatar className="h-24 w-24 border-4 border-white/20">
                          <AvatarImage src="/avatars/01.png" />
                          <AvatarFallback className="text-2xl bg-white/20">JD</AvatarFallback>
                        </Avatar>
                        <Button size="sm" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white text-violet-600 hover:bg-gray-100">
                          <Camera className="h-4 w-4" />
                        </Button>
                      </div>
                      <h3 className="text-xl font-bold mb-2">John Doe</h3>
                      <p className="text-violet-100 mb-4">Premium Member</p>
                      <Badge className="bg-white/20 text-white hover:bg-white/20">
                        <Star className="h-3 w-3 mr-1" />
                        Pro Plan
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-lg">Account Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Member since</span>
                        <span className="text-sm font-medium">Jan 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Total invoices</span>
                        <span className="text-sm font-medium">47</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Revenue generated</span>
                        <span className="text-sm font-medium">$12,450</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-violet-600" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>Choose how you want to be notified about important events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-gray-600">Receive updates via email</p>
                        </div>
                      </div>
                      <Switch 
                        checked={notifications.email} 
                        onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Smartphone className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Push Notifications</p>
                          <p className="text-sm text-gray-600">Get instant browser notifications</p>
                        </div>
                      </div>
                      <Switch 
                        checked={notifications.push} 
                        onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-purple-600" />
                        <div>
                          <p className="font-medium">SMS Notifications</p>
                          <p className="text-sm text-gray-600">Important alerts via text message</p>
                        </div>
                      </div>
                      <Switch 
                        checked={notifications.sms} 
                        onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, sms: checked }))}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Zap className="h-5 w-5 text-orange-600" />
                        <div>
                          <p className="font-medium">Marketing Updates</p>
                          <p className="text-sm text-gray-600">Product updates and tips</p>
                        </div>
                      </div>
                      <Switch 
                        checked={notifications.marketing} 
                        onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, marketing: checked }))}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lock className="h-5 w-5 mr-2 text-violet-600" />
                      Password & Authentication
                    </CardTitle>
                    <CardDescription>Manage your account security settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <div className="relative">
                        <Input 
                          id="currentPassword" 
                          type={showPassword ? "text" : "password"} 
                          className="bg-white/50 pr-10" 
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" className="bg-white/50" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" className="bg-white/50" />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600">
                      Update Password
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-violet-600" />
                      Two-Factor Authentication
                    </CardTitle>
                    <CardDescription>Add an extra layer of security to your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-green-900">2FA Enabled</p>
                          <p className="text-sm text-green-700">Your account is protected</p>
                        </div>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                          Active
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full">
                        View Recovery Codes
                      </Button>
                      <Button variant="outline" className="w-full text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Disable 2FA
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Appearance Tab */}
            <TabsContent value="appearance" className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="h-5 w-5 mr-2 text-violet-600" />
                    Theme & Display
                  </CardTitle>
                  <CardDescription>Customize the look and feel of your dashboard</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 border-2 border-violet-200 rounded-lg bg-gradient-to-br from-violet-50 to-purple-50 cursor-pointer hover:border-violet-400 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <Sun className="h-5 w-5 text-violet-600" />
                        <div className="w-3 h-3 bg-violet-600 rounded-full"></div>
                      </div>
                      <p className="font-medium">Light Mode</p>
                      <p className="text-sm text-gray-600">Clean and bright interface</p>
                    </div>
                    
                    <div className="p-4 border-2 border-gray-200 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 text-white cursor-pointer hover:border-gray-400 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <Moon className="h-5 w-5 text-gray-300" />
                        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      </div>
                      <p className="font-medium">Dark Mode</p>
                      <p className="text-sm text-gray-300">Easy on the eyes</p>
                    </div>
                    
                    <div className="p-4 border-2 border-gray-200 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 cursor-pointer hover:border-blue-400 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <Monitor className="h-5 w-5 text-blue-600" />
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      </div>
                      <p className="font-medium">Auto</p>
                      <p className="text-sm text-gray-600">Follows system preference</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Save Button */}
            <div className="flex justify-center pt-8">
              <Button 
                onClick={handleSave}
                className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-12 py-3 text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <Save className="h-5 w-5 mr-2" />
                Save All Changes
              </Button>
            </div>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
}