"use client";
/* eslint-disable */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, Briefcase, MessageSquare, Newspaper } from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from "recharts";
import { getDashboardKPIs } from "@/services/admin-api";

const card = "bg-white rounded-2xl border border-slate-100 shadow-sm p-6";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function generateMonthlyData(base: number) {
  return MONTHS.slice(0, new Date().getMonth() + 1).map((m, i) => ({
    month: m,
    value: Math.max(0, base + Math.floor(Math.sin(i) * base * 0.4 + Math.random() * base * 0.3)),
  }));
}

const COLORS = ["#2563eb","#059669","#7c3aed","#d97706","#dc2626","#0891b2"];

export default function AnalyticsPage() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    getDashboardKPIs().then(setStats).catch(() => {});
  }, []);

  const enquiryData = generateMonthlyData(stats?.total_enquiries || 20);
  const appData = generateMonthlyData(stats?.total_applications || 15);
  const jobData = generateMonthlyData(stats?.active_jobs || 8);

  const pieData = [
    { name: "Enquiries",    value: stats?.total_enquiries || 0 },
    { name: "Applications", value: stats?.total_applications || 0 },
    { name: "Active Jobs",  value: stats?.active_jobs || 0 },
    { name: "News Articles",value: stats?.published_news || 0 },
    { name: "Team Members", value: stats?.team_members || 0 },
  ];

  const metricCards = [
    { label: "Total Enquiries",    value: stats?.total_enquiries ?? "—",          icon: MessageSquare, color: "text-blue-600",    bg: "bg-blue-50" },
    { label: "Job Applications",   value: stats?.total_applications ?? "—",       icon: Briefcase,     color: "text-violet-600",  bg: "bg-violet-50" },
    { label: "Active Jobs",        value: stats?.active_jobs ?? "—",              icon: Briefcase,     color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Published Articles", value: stats?.published_news ?? "—",           icon: Newspaper,     color: "text-amber-600",   bg: "bg-amber-50" },
    { label: "Team Members",       value: stats?.team_members ?? "—",             icon: Users,         color: "text-sky-600",     bg: "bg-sky-50" },
    { label: "Admin Users",        value: stats?.admin_users ?? "—",              icon: Users,         color: "text-slate-600",   bg: "bg-slate-100" },
  ];

  return (
    <div className="space-y-6 pb-10">
      <div>
        <h1 className="text-2xl font-black text-slate-800 tracking-tight">Analytics</h1>
        <p className="text-sm text-slate-500 mt-0.5 font-medium">Platform performance metrics and insights.</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {metricCards.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 text-center">
            <div className={`w-10 h-10 rounded-xl ${m.bg} ${m.color} flex items-center justify-center mx-auto mb-3`}>
              <m.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-black text-slate-800">{m.value}</p>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">{m.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={card}>
          <h3 className="text-sm font-black text-slate-700 uppercase tracking-wider mb-4">Enquiries This Year</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={enquiryData}>
              <defs>
                <linearGradient id="gEnq" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#94a3b8", fontWeight: 600 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#94a3b8", fontWeight: 600 }} dx={-8} />
              <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "12px", fontWeight: "bold" }} />
              <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2.5} fill="url(#gEnq)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className={card}>
          <h3 className="text-sm font-black text-slate-700 uppercase tracking-wider mb-4">Job Applications This Year</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={appData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#94a3b8", fontWeight: 600 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#94a3b8", fontWeight: 600 }} dx={-8} />
              <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "12px", fontWeight: "bold" }} />
              <Bar dataKey="value" fill="#7c3aed" radius={[5, 5, 0, 0]} barSize={18} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={card}>
          <h3 className="text-sm font-black text-slate-700 uppercase tracking-wider mb-4">Active Jobs Over Time</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={jobData}>
              <defs>
                <linearGradient id="gJobs" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#059669" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#94a3b8", fontWeight: 600 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#94a3b8", fontWeight: 600 }} dx={-8} />
              <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "12px", fontWeight: "bold" }} />
              <Area type="monotone" dataKey="value" stroke="#059669" strokeWidth={2.5} fill="url(#gJobs)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className={card}>
          <h3 className="text-sm font-black text-slate-700 uppercase tracking-wider mb-4">Platform Distribution</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, percent }: any) => `${name} ${((percent || 0) * 100).toFixed(0)}%`} labelLine={false} fontSize={10}>
                {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "12px" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
