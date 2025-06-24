
import React, { useState } from 'react';
import { Eye, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface Invoice {
  id: string;
  vendor: string;
  amount: string;
  date: string;
  status: 'Ready' | 'Needs Review' | 'Error';
}

const ValidationQueue = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const invoices: Invoice[] = [
    {
      id: 'INV-2023-001',
      vendor: 'Tech Solutions Inc.',
      amount: '$1,250.00',
      date: '2023-08-15',
      status: 'Ready'
    },
    {
      id: 'INV-2023-002',
      vendor: 'Office Supplies Co.',
      amount: '$375.40',
      date: '2023-08-16',
      status: 'Needs Review'
    },
    {
      id: 'INV-2023-003',
      vendor: 'Marketing Agency Ltd.',
      amount: '$2,500.00',
      date: '2023-08-17',
      status: 'Ready'
    },
    {
      id: 'INV-2023-004',
      vendor: 'Software Dev LLC',
      amount: '$890.75',
      date: '2023-08-18',
      status: 'Error'
    },
    {
      id: 'INV-2023-005',
      vendor: 'Consulting Group',
      amount: '$1,500.00',
      date: '2023-08-19',
      status: 'Ready'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Ready':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Needs Review':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'Error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ready':
        return 'bg-green-100 text-green-800';
      case 'Needs Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Invoice Validation Interface</h2>
        </div>
        
        <div className="flex">
          {/* Invoice List */}
          <div className="w-1/2 border-r border-gray-200">
            <div className="p-4">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Invoice #
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Vendor
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {invoices.map((invoice) => (
                      <tr
                        key={invoice.id}
                        className={`hover:bg-gray-50 cursor-pointer transition-colors ${
                          selectedInvoice?.id === invoice.id ? 'bg-blue-50' : ''
                        }`}
                        onClick={() => setSelectedInvoice(invoice)}
                      >
                        <td className="px-4 py-3 text-sm font-medium text-blue-600">
                          {invoice.id}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {invoice.vendor}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {invoice.amount}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">
                          {invoice.date}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(invoice.status)}
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(invoice.status)}`}>
                              {invoice.status}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Invoice Preview */}
          <div className="w-1/2">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Invoice Preview</h3>
              
              {selectedInvoice ? (
                <div>
                  {/* Invoice Document Preview */}
                  <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-8 mb-6 text-center">
                    <div className="bg-white rounded-lg shadow-sm p-6 max-w-sm mx-auto">
                      <div className="border-b border-gray-200 pb-4 mb-4">
                        <h4 className="font-bold text-gray-900">INVOICE</h4>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>Invoice #: {selectedInvoice.id}</div>
                        <div>Date: {selectedInvoice.date}</div>
                        <div>From: {selectedInvoice.vendor}</div>
                        <div className="pt-4 border-t border-gray-200">
                          <div className="font-semibold">Amount: {selectedInvoice.amount}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Invoice Details Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Invoice Number
                      </label>
                      <input
                        type="text"
                        value={selectedInvoice.id}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Vendor
                      </label>
                      <input
                        type="text"
                        value={selectedInvoice.vendor}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Amount
                      </label>
                      <input
                        type="text"
                        value={selectedInvoice.amount}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date
                      </label>
                      <input
                        type="text"
                        value={selectedInvoice.date}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                      Confirm & Send to ERP
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-12">
                  <Eye className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p>Select an invoice to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidationQueue;
