import React from 'react';
import { Outlet, createFileRoute } from '@tanstack/react-router';
import Navbar from '../components/Navbar';

export const Route = createFileRoute('/$username/$repo/dashboard')({
  component: () => (
    <>
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <div className="flex items-center justify-center pt-6">
          <Outlet />
        </div>
      </div>
    </>
  ),
});
