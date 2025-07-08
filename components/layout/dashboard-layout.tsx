"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { PayPathLogo } from "@/components/ui/paypath-logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
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
    <nav className="space-y-2">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`
              flex items-center px-3 sm:px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 group
              ${isActive 
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg' 
                : 'text-foreground hover:text-foreground hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
              }
            `}
            onClick={() => setSidebarOpen(false)}
          >
            <item.icon className={`mr-3 sm:mr-4 h-5 w-5 sm:h-6 sm:w-6 ${isActive ? 'text-white' : 'text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400'}`} />
            <span className="text-xs sm:text-sm">{item.name.toUpperCase()}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 xl:w-80 lg:flex-col">
        <div className="flex grow flex-col gap-y-6 lg:gap-y-8 overflow-y-auto bg-background px-4 lg:px-6 xl:px-8 py-6 lg:py-8 border-r-2 border-border">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <PayPathLogo className="h-10 w-10 lg:h-12 lg:w-12 text-indigo-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl lg:text-2xl font-black tracking-tight gradient-text">PayPath</span>
          </div>
          
          <NavigationItems />
          
          {/* Upgrade Banner */}
          <div className="mt-auto">
            <div className="upgrade-banner text-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 glass">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs lg:text-sm font-black tracking-widest upgrade-text">FREE PLAN</span>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/20 font-black text-xs">
                  TRIAL
                </Badge>
              </div>
              <p className="text-xs upgrade-text-muted mb-4 lg:mb-6 font-medium">
                Upgrade to unlock unlimited invoices and advanced features.
              </p>
              <Button size="sm" className="w-full bg-white text-indigo-600 hover:bg-white/90 font-black tracking-wide text-xs lg:text-sm">
                <Zap className="h-3 w-3 lg:h-4 lg:w-4 mr-2" />
                UPGRADE NOW
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-72 sm:w-80 p-0">
          <div className="flex grow flex-col gap-y-6 overflow-y-auto bg-background px-6 py-6">
            <div className="flex items-center space-x-3">
              <PayPathLogo className="h-10 w-10 text-indigo-600" />
              <span className="text-xl font-black tracking-tight gradient-text">PayPath</span>
            </div>
            <NavigationItems />
            
            {/* Mobile Upgrade Banner */}
            <div className="mt-auto">
              <div className="upgrade-banner text-white rounded-2xl p-6 glass">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black tracking-widest upgrade-text">FREE PLAN</span>
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/20 font-black text-xs">
                    TRIAL
                  </Badge>
                </div>
                <p className="text-xs upgrade-text-muted mb-4 font-medium">
                  Upgrade to unlock unlimited invoices.
                </p>
                <Button size="sm" className="w-full bg-white text-indigo-600 hover:bg-white/90 font-black tracking-wide text-xs">
                  <Zap className="h-3 w-3 mr-2" />
                  UPGRADE
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="lg:pl-72 xl:pl-80">
        {/* Top Navigation */}
        <div className="sticky top-0 z-40 flex h-16 sm:h-20 shrink-0 items-center gap-x-4 sm:gap-x-6 border-b-2 border-border bg-background/80 backdrop-blur-xl px-4 shadow-sm sm:gap-x-8 sm:px-6 lg:px-8">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Open sidebar</span>
              </Button>
            </SheetTrigger>
          </Sheet>

          <div className="flex flex-1 gap-x-4 sm:gap-x-6 self-stretch lg:gap-x-8">
            <div className="flex flex-1"></div>
            <div className="flex items-center gap-x-4 sm:gap-x-6 lg:gap-x-8">
              <ThemeToggle />
              
              <Button variant="ghost" size="sm" className="relative hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400">
                <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 p-0 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-black">
                  3
                </Badge>
              </Button>

              <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-border" />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400">
                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10 border-2 border-indigo-200 dark:border-indigo-800">
                      <AvatarImage src="/avatars/01.png" alt="User" />
                      <AvatarFallback className="font-black bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs sm:text-sm">JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 sm:w-64 border-2 border-indigo-200 dark:border-indigo-800 glass" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1 sm:space-y-2">
                      <p className="text-sm font-black leading-none text-foreground">John Doe</p>
                      <p className="text-xs leading-none text-muted-foreground font-medium">
                        john@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="font-bold text-foreground hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="font-bold text-foreground hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}