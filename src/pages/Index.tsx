
import React from 'react';
import Header from '@/components/Header';
import PdfUpload from '@/components/PdfUpload';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Upload and validate your invoice documents</p>
        </div>
        <PdfUpload />
      </main>
    </div>
  );
};

export default Index;
