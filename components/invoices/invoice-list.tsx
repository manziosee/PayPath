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
  paid: { label: 'Paid', className: 'bg-green-100 text-green-800 hover:bg-green-100' },
  pending: { label: 'Pending', className: 'bg-orange-100 text-orange-800 hover:bg-orange-100' },
  overdue: { label: 'Overdue', className: 'bg-red-100 text-red-800 hover:bg-red-100' },
};

export function InvoiceList({ invoices, showActions = true }: InvoiceListProps) {
  const handleAction = (action: string, invoice: Invoice) => {
    console.log(`${action} action for invoice:`, invoice.id);
    // Here you would implement the actual actions
  };

  if (invoices.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 mb-2">No invoices found</div>
        <p className="text-sm text-gray-400">Create your first invoice to get started</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {invoices.map((invoice) => (
        <Card key={invoice.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-medium text-gray-900 truncate">
                        {invoice.id}
                      </h3>
                      <Badge 
                        variant="secondary"
                        className={statusConfig[invoice.status].className}
                      >
                        {statusConfig[invoice.status].label}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 truncate mb-1">
                      {invoice.client}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>Due: {format(new Date(invoice.dueDate), 'MMM dd, yyyy')}</span>
                      <span>Created: {format(new Date(invoice.createdAt), 'MMM dd, yyyy')}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">
                      ${invoice.amount.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
              
              {showActions && (
                <div className="ml-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleAction('view', invoice)}>
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleAction('download', invoice)}>
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleAction('email', invoice)}>
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleAction('edit', invoice)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => handleAction('delete', invoice)}
                        className="text-red-600"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}