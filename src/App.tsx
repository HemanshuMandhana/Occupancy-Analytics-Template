import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import Index from './pages/Index';
import Comparison from './pages/Comparison';
import DataReports from './pages/DataReports';
import MyAccount from './pages/MyAccount';
import UserMaster from './pages/UserMaster';
import NotFound from './pages/NotFound';
import AppLayout from './layout/AppLayout';
import OccupancyTrend from './pages/OccupancyTrend';
import OccupancyComparison from './pages/OccupancyComparison';
import VisitorCount from './pages/VisitorCount';
import VisitorComparison from './pages/VisitorComparison';
import CapacityMaster from './pages/CapacityMaster';
import EmailConfig from './pages/EmailConfig';
import LoginHistory from './pages/LoginHistory';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Index />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/data-reports" element={<DataReports />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/user-master" element={<UserMaster />} />
            <Route path="/occupancy-trend" element={<OccupancyTrend />} />
            <Route path="/occupancy-comparison" element={<OccupancyComparison />} />
            <Route path="/visitor-count" element={<VisitorCount />} />
            <Route path="/visitor-comparison" element={<VisitorComparison />} />
            <Route path="/capacity-master" element={<CapacityMaster />} />
            <Route path="/email-config" element={<EmailConfig />} />
            <Route path="/login-history" element={<LoginHistory />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
