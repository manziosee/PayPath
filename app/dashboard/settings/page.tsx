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
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useTheme } from "next-themes";
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
  const { theme, setTheme } = useTheme();

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background text-foreground">
        <div className="relative space-y-16">
          {/* Artistic Header */}
          <div className="relative overflow-hidden mesh-gradient rounded-3xl">
            <div className="relative">
              <div className="text-center py-20 px-4">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full shadow-2xl mb-8 animate-fade-in-up">
                  <Crown className="h-6 w-6" />
                  <span className="text-sm font-black tracking-widest">PREMIUM SETTINGS</span>
                </div>
                
                <div className="animate-fade-in-scale">
                  <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none mb-6">
                    <span className="block gradient-text">CUSTOMIZE</span>
                    <span className="block text-foreground">YOUR</span>
                    <span className="block text-outline">EXPERIENCE</span>
                  </h1>
                </div>
                
                <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light animate-fade-in-up stagger-1">
                  Personalize PayPath to match your workflow and preferences
                </p>
              </div>
            </div>
          </div>

          {/* Settings Content */}
          <div className="max-w-6xl mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">
              {/* Floating Tab Navigation */}
              <div className="flex justify-center animate-fade-in-up">
                <TabsList className="neomorphism p-2 rounded-3xl border-0 glass">
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
                      className="flex items-center space-x-3 px-8 py-4 rounded-2xl font-black tracking-wide data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
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
                    <Card className="neomorphism border-0 animate-fade-in-up">
                      <CardHeader className="border-b border-border pb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                          <div>
                            <CardTitle className="text-2xl font-black tracking-tight flex items-center">
                              <User className="h-6 w-6 mr-3 text-indigo-600" />
                              PERSONAL INFORMATION
                            </CardTitle>
                            <CardDescription className="font-medium">Update your personal details and contact information</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-8 space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <Label htmlFor="firstName" className="text-sm font-black tracking-widest text-indigo-700 dark:text-indigo-300">FIRST NAME</Label>
                            <Input id="firstName" defaultValue="John" className="h-12 border-2 border-indigo-200 focus:border-indigo-500 dark:border-indigo-800 dark:focus:border-indigo-400 font-medium" />
                          </div>
                          <div className="space-y-3">
                            <Label htmlFor="lastName" className="text-sm font-black tracking-widest text-indigo-700 dark:text-indigo-300">LAST NAME</Label>
                            <Input id="lastName" defaultValue="Doe" className="h-12 border-2 border-indigo-200 focus:border-indigo-500 dark:border-indigo-800 dark:focus:border-indigo-400 font-medium" />
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <Label htmlFor="email" className="text-sm font-black tracking-widest text-indigo-700 dark:text-indigo-300">EMAIL ADDRESS</Label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-500" />
                            <Input id="email" type="email" defaultValue="john@example.com" className="pl-12 h-12 border-2 border-indigo-200 focus:border-indigo-500 dark:border-indigo-800 dark:focus:border-indigo-400 font-medium" />
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <Label htmlFor="phone" className="text-sm font-black tracking-widest text-indigo-700 dark:text-indigo-300">PHONE NUMBER</Label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-500" />
                            <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="pl-12 h-12 border-2 border-indigo-200 focus:border-indigo-500 dark:border-indigo-800 dark:focus:border-indigo-400 font-medium" />
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <Label htmlFor="address" className="text-sm font-black tracking-widest text-indigo-700 dark:text-indigo-300">ADDRESS</Label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-4 h-5 w-5 text-indigo-500" />
                            <Textarea id="address" defaultValue="123 Business Street, Suite 100, New York, NY 10001" className="pl-12 border-2 border-indigo-200 focus:border-indigo-500 dark:border-indigo-800 dark:focus:border-indigo-400 font-medium" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Profile Sidebar */}
                  <div className="space-y-8">
                    <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 glass animate-fade-in-scale">
                      <CardContent className="p-8 text-center">
                        <div className="relative inline-block mb-6">
                          <Avatar className="h-32 w-32 border-4 border-white/20">
                            <AvatarImage src="/avatars/01.png" />
                            <AvatarFallback className="text-3xl bg-white/20 font-black">JD</AvatarFallback>
                          </Avatar>
                          <Button size="sm" className="absolute -bottom-2 -right-2 h-10 w-10 rounded-full bg-white text-indigo-600 hover:bg-white/90">
                            <Camera className="h-5 w-5" />
                          </Button>
                        </div>
                        <h3 className="text-2xl font-black mb-2">John Doe</h3>
                        <p className="text-white/80 mb-6 font-medium">Premium Member</p>
                        <Badge className="bg-white/20 text-white hover:bg-white/20 font-black">
                          <Star className="h-4 w-4 mr-2" />
                          PRO PLAN
                        </Badge>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Appearance Tab */}
              <TabsContent value="appearance" className="space-y-8">
                <Card className="neomorphism border-0 animate-fade-in-up">
                  <CardHeader className="border-b border-border pb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                        <div>
                          <CardTitle className="text-2xl font-black tracking-tight flex items-center">
                            <Palette className="h-6 w-6 mr-3 text-indigo-600" />
                            THEME & DISPLAY
                          </CardTitle>
                          <CardDescription className="font-medium">Customize the look and feel of your dashboard</CardDescription>
                        </div>
                      </div>
                      <ThemeToggle />
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      {[
                        {
                          icon: Sun,
                          title: "LIGHT MODE",
                          description: "Clean and bright interface",
                          value: "light",
                          bg: "bg-white border-indigo-300 text-gray-900"
                        },
                        {
                          icon: Moon,
                          title: "DARK MODE",
                          description: "Easy on the eyes",
                          value: "dark",
                          bg: "bg-gray-900 text-white border-indigo-600"
                        },
                        {
                          icon: Monitor,
                          title: "AUTO",
                          description: "Follows system preference",
                          value: "system",
                          bg: "bg-gradient-to-br from-white to-gray-900 text-gray-900 border-indigo-400"
                        }
                      ].map((themeOption, index) => (
                        <div 
                          key={index} 
                          className={`p-8 border-4 rounded-2xl cursor-pointer hover-lift transition-all ${themeOption.bg} ${theme === themeOption.value ? 'border-indigo-500 ring-4 ring-indigo-500/20 shadow-lg' : 'border-border'}`}
                          onClick={() => setTheme(themeOption.value)}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <themeOption.icon className="h-8 w-8" />
                            <div className={`w-4 h-4 rounded-full ${theme === themeOption.value ? 'bg-indigo-500' : 'bg-muted-foreground'}`}></div>
                          </div>
                          <p className="font-black text-lg mb-2">{themeOption.title}</p>
                          <p className="text-sm opacity-70 font-medium">{themeOption.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Save Button */}
              <div className="flex justify-center pt-12 animate-fade-in-scale">
                <Button 
                  onClick={handleSave}
                  className="btn-gradient text-white px-16 py-6 text-xl font-black tracking-widest hover-lift"
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