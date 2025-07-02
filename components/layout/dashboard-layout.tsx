"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { PayPathLogo } from "@/components/ui/paypath-logo";
import { 
  BarChart3, 
  FileText, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  Bell,
  Home,
  CreditCard,
  PieChart,
  Zap
} from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Invoices', href: '/dashboard/invoices', icon: FileText },
  { name: 'Clients', href: '/dashboard/clients', icon: Users },
  { name: 'Payments', href: '/dashboard/payments', icon: CreditCard },
  { name: 'Reports', href: '/dashboard/reports', icon: PieChart },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    router.push('/');
  };

  const NavigationItems = () => (
    <nav className="space-y-3">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`
              flex items-center px-4 py-4 rounded-2xl text-sm font-black tracking-wide transition-all duration-300 group
              ${isActive 
                ? 'bg-black text-white shadow-lg' 
                : 'text-gray-700 hover:text-black hover:bg-gray-100'
              }
            `}
            onClick={() => setSidebarOpen(false)}
          >
            <item.icon className={`mr-4 h-6 w-6 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-black'}`} />
            {item.name.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-80 lg:flex-col">
        <div className="flex grow flex-col gap-y-8 overflow-y-auto bg-white px-8 py-8 border-r-2 border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <PayPathLogo className="h-12 w-12 text-black" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full"></div>
            </div>
            <span className="text-2xl font-black tracking-tight">PayPath</span>
          </div>
          
          <NavigationItems />
          
          {/* Upgrade Banner */}
          <div className="mt-auto">
            <div className="bg-black text-white rounded-3xl p-8 neomorphism-dark">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-black tracking-widest">FREE PLAN</span>
                <Badge variant="secondary" className="bg-white/20 text-white font-black">
                  TRIAL
                </Badge>
              </div>
              <p className="text-xs text-gray-300 mb-6 font-medium">
                Upgrade to unlock unlimited invoices and advanced features.
              </p>
              <Button size="sm" className="w-full bg-white text-black hover:bg-gray-100 font-black tracking-wide">
                <Zap className="h-4 w-4 mr-2" />
                UPGRADE NOW
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-80 p-0">
          <div className="flex grow flex-col gap-y-8 overflow-y-auto bg-white px-8 py-8">
            <div className="flex items-center space-x-3">
              <PayPathLogo className="h-12 w-12 text-black" />
              <span className="text-2xl font-black tracking-tight">PayPath</span>
            </div>
            <NavigationItems />
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="lg:pl-80">
        {/* Top Navigation */}
        <div className="sticky top-0 z-40 flex h-20 shrink-0 items-center gap-x-6 border-b-2 border-gray-100 bg-white/80 backdrop-blur-xl px-4 shadow-sm sm:gap-x-8 sm:px-6 lg:px-8">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden hover:bg-black hover:text-white"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open sidebar</span>
              </Button>
            </SheetTrigger>
          </Sheet>

          <div className="flex flex-1 gap-x-6 self-stretch lg:gap-x-8">
            <div className="flex flex-1"></div>
            <div className="flex items-center gap-x-6 lg:gap-x-8">
              <Button variant="ghost" size="sm" className="relative hover:bg-black hover:text-white">
                <Bell className="h-6 w-6" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-black text-white text-xs font-black">
                  3
                </Badge>
              </Button>

              <div className="hidden lg:block lg:h-8 lg:w-px lg:bg-gray-200" />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full hover:bg-black hover:text-white">
                    <Avatar className="h-10 w-10 border-2 border-gray-200">
                      <AvatarImage src="/avatars/01.png" alt="User" />
                      <AvatarFallback className="font-black bg-black text-white">JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 border-2 border-gray-200" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm font-black leading-none">John Doe</p>
                      <p className="text-xs leading-none text-muted-foreground font-medium">
                        john@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="font-bold">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="font-bold">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="py-12 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}