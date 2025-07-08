"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Eye, Download, Mail, Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";

interface Invoice {
  id: string;
  client: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  dueDate: string;
  createdAt: string;
}

interface InvoiceListProps {
  invoices: Invoice[];
  showActions?: boolean;
}

const statusConfig = {
  paid: { label: 'Paid', className: 'bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-300' },
  pending: { label: 'Pending', className: 'bg-orange-100 text-orange-800 hover:bg-orange-100 dark:bg-orange-900/30 dark:text-orange-300' },
  overdue: { label: 'Overdue', className: 'bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-300' },
};

export function InvoiceList({ invoices, showActions = true }: InvoiceListProps) {
  const handleAction = (action: string, invoice: Invoice) => {
    console.log(`${action} action for invoice:`, invoice.id);
    // Here you would implement the actual actions
  };

  if (invoices.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground mb-2 font-medium">No invoices found</div>
        <p className="text-sm text-muted-foreground">Create your first invoice to get started</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {invoices.map((invoice) => (
        <Card key={invoice.id} className="hover:shadow-md transition-all duration-300 neomorphism border-0 hover-lift">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex-1 min-w-0 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0 mb-2">
                      <h3 className="invoice-id text-base sm:text-lg font-bold tracking-wide truncate">
                        {invoice.id}
                      </h3>
                      <Badge 
                        variant="secondary"
                        className={`${statusConfig[invoice.status].className} font-bold text-xs px-3 py-1 w-fit`}
                      >
                        {statusConfig[invoice.status].label}
                      </Badge>
                    </div>
                    <p className="invoice-client text-sm sm:text-base font-semibold truncate mb-2">
                      {invoice.client}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-1 sm:space-y-0">
                      <span className="invoice-meta text-xs sm:text-sm font-medium">
                        Due: {format(new Date(invoice.dueDate), 'MMM dd, yyyy')}
                      </span>
                      <span className="invoice-meta text-xs sm:text-sm font-medium">
                        Created: {format(new Date(invoice.createdAt), 'MMM dd, yyyy')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between sm:justify-end sm:space-x-4">
                <div className="text-right">
                  <div className="invoice-amount text-lg sm:text-xl lg:text-2xl font-black gradient-text">
                    ${invoice.amount.toLocaleString()}
                  </div>
                </div>
                
                {showActions && (
                  <div className="ml-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400 transition-colors"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="border-2 border-indigo-200 dark:border-indigo-800 glass">
                        <DropdownMenuItem 
                          onClick={() => handleAction('view', invoice)}
                          className="font-semibold hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400"
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleAction('download', invoice)}
                          className="font-semibold hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleAction('email', invoice)}
                          className="font-semibold hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Send Email
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleAction('edit', invoice)}
                          className="font-semibold hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400"
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleAction('delete', invoice)}
                          className="text-red-600 dark:text-red-400 font-semibold hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-900/20 dark:hover:text-red-300"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}