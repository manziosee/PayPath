export interface Client {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  address: string;
  createdAt: string;
}

export interface Invoice {
  id: string;
  client: string;
  clientEmail: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  dueDate: string;
  createdAt: string;
  description?: string;
}

export const mockClients: Client[] = [
  {
    id: 'client-1',
    name: 'Sarah Johnson',
    email: 'sarah@techcorp.com',
    company: 'TechCorp Solutions',
    phone: '+1 (555) 123-4567',
    address: '123 Business Ave, Suite 100, New York, NY 10001',
    createdAt: '2025-01-01T00:00:00Z',
  },
  {
    id: 'client-2',
    name: 'Michael Chen',
    email: 'michael@designstudio.com',
    company: 'Creative Design Studio',
    phone: '+1 (555) 987-6543',
    address: '456 Creative Lane, Los Angeles, CA 90210',
    createdAt: '2025-01-02T00:00:00Z',
  },
  {
    id: 'client-3',
    name: 'Emily Rodriguez',
    email: 'emily@startupventures.com',
    company: 'Startup Ventures Inc.',
    phone: '+1 (555) 456-7890',
    address: '789 Innovation Blvd, Austin, TX 78701',
    createdAt: '2025-01-03T00:00:00Z',
  },
  {
    id: 'client-4',
    name: 'David Wilson',
    email: 'david@retailplus.com',
    company: 'RetailPlus Marketing',
    phone: '+1 (555) 321-9876',
    address: '321 Commerce St, Chicago, IL 60601',
    createdAt: '2025-01-04T00:00:00Z',
  },
];

export const mockInvoices: Invoice[] = [
  {
    id: 'INV-2025-001',
    client: 'TechCorp Solutions',
    clientEmail: 'sarah@techcorp.com',
    amount: 2500,
    status: 'paid',
    dueDate: '2025-01-15',
    createdAt: '2025-01-01T00:00:00Z',
    description: 'Website Development - Phase 1',
  },
  {
    id: 'INV-2025-002',
    client: 'Creative Design Studio',
    clientEmail: 'michael@designstudio.com',
    amount: 1800,
    status: 'pending',
    dueDate: '2025-01-25',
    createdAt: '2025-01-05T00:00:00Z',
    description: 'Brand Identity Design Package',
  },
  {
    id: 'INV-2025-003',
    client: 'Startup Ventures Inc.',
    clientEmail: 'emily@startupventures.com',
    amount: 3200,
    status: 'overdue',
    dueDate: '2025-01-10',
    createdAt: '2024-12-20T00:00:00Z',
    description: 'MVP Development Services',
  },
  {
    id: 'INV-2025-004',
    client: 'RetailPlus Marketing',
    clientEmail: 'david@retailplus.com',
    amount: 1500,
    status: 'pending',
    dueDate: '2025-02-01',
    createdAt: '2025-01-10T00:00:00Z',
    description: 'E-commerce Platform Setup',
  },
  {
    id: 'INV-2025-005',
    client: 'TechCorp Solutions',
    clientEmail: 'sarah@techcorp.com',
    amount: 2200,
    status: 'paid',
    dueDate: '2025-01-20',
    createdAt: '2025-01-08T00:00:00Z',
    description: 'Mobile App Development',
  },
];