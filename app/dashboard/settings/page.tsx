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
  Eye,
  EyeOff,
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
      <div className="min-h-screen bg-white text-black">
        {/* Animated Background */}
        <div className="fixed inset-0 scan-lines opacity-20 pointer-events-none"></div>
        
        <div className="relative space-y-16">
          {/* Artistic Header */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-96 h-96 bg-black/5 rounded-full mix-blend-multiply filter blur-3xl animate-float-geometric"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-black/3 rounded-full mix-blend-multiply filter blur-3xl animate-float-geometric stagger-2"></div>
              <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-black/4 rounded-full mix-blend-multiply filter blur-3xl animate-float-geometric stagger-3"></div>
            </div>
            
            <div className="relative">
              <div className="text-center py-20 px-4">
                <div className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full shadow-2xl mb-8 animate-minimal-fade">
                  <Crown className="h-6 w-6" />
                  <span className="text-sm font-black tracking-widest">PREMIUM SETTINGS</span>
                </div>
                
                <div className="animate-minimal-scale">
                  <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none mb-6">
                    <span className="block">CUSTOMIZE</span>
                    <span className="block text-outline">YOUR</span>
                    <span className="block">EXPERIENCE</span>
                  </h1>
                </div>
                
                <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light animate-minimal-slide">
                  Personalize PayPath to match your workflow and preferences
                </p>
              </div>
            </div>
          </div>

          {/* Settings Content */}
          <div className="max-w-6xl mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">
              {/* Floating Tab Navigation */}
              <div className="flex justify-center animate-minimal-fade">
                <TabsList className="neomorphism p-2 rounded-3xl border-0">
                  {[
                    { value: "profile", icon: User, label: "PROFILE" },
                    { value: "notifications", icon: Bell, label: "NOTIFICATIONS" },
                    { value: "billing", icon: CreditCard, label: "BILLING" },
                    { value: "security", icon: Shield, label: "SECURITY" },
                    { value: "appearance", icon: Palette, label: "APPEARANCE" }
                  ].map((tab) => (
                    <TabsTrigger 
                      key={tab.value}
                      value={tab.value} 
                      className="flex items-center space-x-3 px-8 py-4 rounded-2xl font-black tracking-wide data-[state=active]:bg-black data-[state=active]:text-white"
                    >
                      <tab.icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-12">
                <div className="grid lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2 space-y-8">
                    <Card className="neomorphism border-0 animate-minimal-slide">
                      <CardHeader className="border-b border-gray-100 pb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-1 h-8 bg-black"></div>
                          <div>
                            <CardTitle className="text-2xl font-black tracking-tight flex items-center">
                              <User className="h-6 w-6 mr-3" />
                              PERSONAL INFORMATION
                            </CardTitle>
                            <CardDescription className="font-medium">Update your personal details and contact information</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-8 space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <Label htmlFor="firstName" className="text-sm font-black tracking-widest">FIRST NAME</Label>
                            <Input id="firstName" defaultValue="John" className="h-12 border-2 border-gray-200 focus:border-black font-medium" />
                          </div>
                          <div className="space-y-3">
                            <Label htmlFor="lastName" className="text-sm font-black tracking-widest">LAST NAME</Label>
                            <Input id="lastName" defaultValue="Doe" className="h-12 border-2 border-gray-200 focus:border-black font-medium" />
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <Label htmlFor="email" className="text-sm font-black tracking-widest">EMAIL ADDRESS</Label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input id="email" type="email" defaultValue="john@example.com" className="pl-12 h-12 border-2 border-gray-200 focus:border-black font-medium" />
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <Label htmlFor="phone" className="text-sm font-black tracking-widest">PHONE NUMBER</Label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="pl-12 h-12 border-2 border-gray-200 focus:border-black font-medium" />
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <Label htmlFor="address" className="text-sm font-black tracking-widest">ADDRESS</Label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                            <Textarea id="address" defaultValue="123 Business Street, Suite 100, New York, NY 10001" className="pl-12 border-2 border-gray-200 focus:border-black font-medium" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="neomorphism border-0 animate-minimal-slide stagger-2">
                      <CardHeader className="border-b border-gray-100 pb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-1 h-8 bg-black"></div>
                          <div>
                            <CardTitle className="text-2xl font-black tracking-tight flex items-center">
                              <Globe className="h-6 w-6 mr-3" />
                              BUSINESS INFORMATION
                            </CardTitle>
                            <CardDescription className="font-medium">Configure your business details for invoices</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-8 space-y-6">
                        <div className="space-y-3">
                          <Label htmlFor="businessName" className="text-sm font-black tracking-widest">BUSINESS NAME</Label>
                          <Input id="businessName" defaultValue="Freelance Solutions LLC" className="h-12 border-2 border-gray-200 focus:border-black font-medium" />
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <Label htmlFor="taxId" className="text-sm font-black tracking-widest">TAX ID</Label>
                            <Input id="taxId" defaultValue="12-3456789" className="h-12 border-2 border-gray-200 focus:border-black font-medium" />
                          </div>
                          <div className="space-y-3">
                            <Label htmlFor="currency" className="text-sm font-black tracking-widest">DEFAULT CURRENCY</Label>
                            <Select defaultValue="usd">
                              <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-black font-medium">
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
                  <div className="space-y-8">
                    <Card className="bg-black text-white border-0 neomorphism-dark animate-minimal-scale">
                      <CardContent className="p-8 text-center">
                        <div className="relative inline-block mb-6">
                          <Avatar className="h-32 w-32 border-4 border-white/20">
                            <AvatarImage src="/avatars/01.png" />
                            <AvatarFallback className="text-3xl bg-white/20 font-black">JD</AvatarFallback>
                          </Avatar>
                          <Button size="sm" className="absolute -bottom-2 -right-2 h-10 w-10 rounded-full bg-white text-black hover:bg-gray-100">
                            <Camera className="h-5 w-5" />
                          </Button>
                        </div>
                        <h3 className="text-2xl font-black mb-2">John Doe</h3>
                        <p className="text-gray-300 mb-6 font-medium">Premium Member</p>
                        <Badge className="bg-white/20 text-white hover:bg-white/20 font-black">
                          <Star className="h-4 w-4 mr-2" />
                          PRO PLAN
                        </Badge>
                      </CardContent>
                    </Card>

                    <Card className="neomorphism border-0 animate-minimal-scale stagger-2">
                      <CardHeader>
                        <CardTitle className="text-xl font-black tracking-tight">ACCOUNT STATS</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {[
                          { label: "Member since", value: "Jan 2025" },
                          { label: "Total invoices", value: "47" },
                          { label: "Revenue generated", value: "$12,450" }
                        ].map((stat, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-sm text-gray-600 font-medium">{stat.label}</span>
                            <span className="text-sm font-black">{stat.value}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications" className="space-y-8">
                <Card className="neomorphism border-0 animate-minimal-slide">
                  <CardHeader className="border-b border-gray-100 pb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-1 h-8 bg-black"></div>
                      <div>
                        <CardTitle className="text-2xl font-black tracking-tight flex items-center">
                          <Bell className="h-6 w-6 mr-3" />
                          NOTIFICATION PREFERENCES
                        </CardTitle>
                        <CardDescription className="font-medium">Choose how you want to be notified about important events</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8">
                    {[
                      {
                        icon: Mail,
                        title: "EMAIL NOTIFICATIONS",
                        description: "Receive updates via email",
                        key: "email",
                        bg: "bg-black"
                      },
                      {
                        icon: Smartphone,
                        title: "PUSH NOTIFICATIONS",
                        description: "Get instant browser notifications",
                        key: "push",
                        bg: "bg-gray-700"
                      },
                      {
                        icon: Phone,
                        title: "SMS NOTIFICATIONS",
                        description: "Important alerts via text message",
                        key: "sms",
                        bg: "bg-gray-600"
                      },
                      {
                        icon: Bell,
                        title: "MARKETING UPDATES",
                        description: "Product updates and tips",
                        key: "marketing",
                        bg: "bg-gray-800"
                      }
                    ].map((notification, index) => (
                      <div key={index} className="flex items-center justify-between p-6 neomorphism-inset rounded-2xl hover-lift-bw">
                        <div className="flex items-center space-x-4">
                          <div className={`p-4 ${notification.bg} text-white rounded-2xl`}>
                            <notification.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="font-black tracking-wide">{notification.title}</p>
                            <p className="text-sm text-gray-600 font-medium">{notification.description}</p>
                          </div>
                        </div>
                        <Switch 
                          checked={notifications[notification.key as keyof typeof notifications]} 
                          onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, [notification.key]: checked }))}
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  <Card className="neomorphism border-0 animate-minimal-slide">
                    <CardHeader className="border-b border-gray-100 pb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-1 h-8 bg-black"></div>
                        <div>
                          <CardTitle className="text-2xl font-black tracking-tight flex items-center">
                            <Lock className="h-6 w-6 mr-3" />
                            PASSWORD & AUTHENTICATION
                          </CardTitle>
                          <CardDescription className="font-medium">Manage your account security settings</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                      <div className="space-y-3">
                        <Label htmlFor="currentPassword" className="text-sm font-black tracking-widest">CURRENT PASSWORD</Label>
                        <div className="relative">
                          <Input 
                            id="currentPassword" 
                            type={showPassword ? "text" : "password"} 
                            className="h-12 border-2 border-gray-200 focus:border-black font-medium pr-12" 
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-4"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Label htmlFor="newPassword" className="text-sm font-black tracking-widest">NEW PASSWORD</Label>
                        <Input id="newPassword" type="password" className="h-12 border-2 border-gray-200 focus:border-black font-medium" />
                      </div>
                      
                      <div className="space-y-3">
                        <Label htmlFor="confirmPassword" className="text-sm font-black tracking-widest">CONFIRM NEW PASSWORD</Label>
                        <Input id="confirmPassword" type="password" className="h-12 border-2 border-gray-200 focus:border-black font-medium" />
                      </div>
                      
                      <Button className="w-full bg-black text-white hover:bg-gray-800 h-12 font-black tracking-wide">
                        UPDATE PASSWORD
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="neomorphism border-0 animate-minimal-slide stagger-2">
                    <CardHeader className="border-b border-gray-100 pb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-1 h-8 bg-black"></div>
                        <div>
                          <CardTitle className="text-2xl font-black tracking-tight flex items-center">
                            <Shield className="h-6 w-6 mr-3" />
                            TWO-FACTOR AUTHENTICATION
                          </CardTitle>
                          <CardDescription className="font-medium">Add an extra layer of security to your account</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                      <div className="p-6 bg-black text-white rounded-2xl neomorphism-dark">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-black text-white">2FA ENABLED</p>
                            <p className="text-sm text-gray-300 font-medium">Your account is protected</p>
                          </div>
                          <Badge className="bg-white/20 text-white hover:bg-white/20 font-black">
                            ACTIVE
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full h-12 border-2 border-black text-black hover:bg-black hover:text-white font-black tracking-wide">
                          VIEW RECOVERY CODES
                        </Button>
                        <Button variant="outline" className="w-full h-12 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-black tracking-wide">
                          DISABLE 2FA
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Appearance Tab */}
              <TabsContent value="appearance" className="space-y-8">
                <Card className="neomorphism border-0 animate-minimal-slide">
                  <CardHeader className="border-b border-gray-100 pb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-1 h-8 bg-black"></div>
                      <div>
                        <CardTitle className="text-2xl font-black tracking-tight flex items-center">
                          <Palette className="h-6 w-6 mr-3" />
                          THEME & DISPLAY
                        </CardTitle>
                        <CardDescription className="font-medium">Customize the look and feel of your dashboard</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      {[
                        {
                          icon: Sun,
                          title: "LIGHT MODE",
                          description: "Clean and bright interface",
                          active: true,
                          bg: "bg-white border-black"
                        },
                        {
                          icon: Moon,
                          title: "DARK MODE",
                          description: "Easy on the eyes",
                          active: false,
                          bg: "bg-black text-white border-gray-600"
                        },
                        {
                          icon: Monitor,
                          title: "AUTO",
                          description: "Follows system preference",
                          active: false,
                          bg: "bg-gray-100 border-gray-300"
                        }
                      ].map((theme, index) => (
                        <div key={index} className={`p-8 border-4 rounded-2xl cursor-pointer hover-lift-bw transition-all ${theme.bg} ${theme.active ? 'border-black' : 'border-gray-200'}`}>
                          <div className="flex items-center justify-between mb-4">
                            <theme.icon className="h-8 w-8" />
                            <div className={`w-4 h-4 rounded-full ${theme.active ? 'bg-black' : 'bg-gray-400'}`}></div>
                          </div>
                          <p className="font-black text-lg mb-2">{theme.title}</p>
                          <p className="text-sm opacity-70 font-medium">{theme.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Save Button */}
              <div className="flex justify-center pt-12 animate-minimal-scale">
                <Button 
                  onClick={handleSave}
                  className="bg-black text-white hover:bg-gray-800 px-16 py-6 text-xl font-black tracking-widest neomorphism hover-lift-bw"
                >
                  <Save className="h-6 w-6 mr-3" />
                  SAVE ALL CHANGES
                </Button>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}