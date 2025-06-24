
import React from 'react';
import Header from '@/components/Header';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Settings</h2>
            <p className="text-gray-600">Application settings coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
