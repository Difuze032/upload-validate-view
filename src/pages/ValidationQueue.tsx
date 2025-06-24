
import React from 'react';
import Header from '@/components/Header';
import ValidationQueue from '@/components/ValidationQueue';

const ValidationQueuePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-6">
        <ValidationQueue />
      </main>
    </div>
  );
};

export default ValidationQueuePage;
