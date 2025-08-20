import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Users, ClipboardList, PieChart, LogOut, Wallet } from "lucide-react";

const data = [
  { name: "Jan", bookings: 30, revenue: 24000 },
  { name: "Feb", bookings: 20, revenue: 22100 },
  { name: "Mar", bookings: 27, revenue: 22900 },
  { name: "Apr", bookings: 18, revenue: 20000 },
  { name: "May", bookings: 23, revenue: 21800 },
];

function Dashboard() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="text-gray-500">Total Users</h3>
          <p className="text-2xl font-bold text-blue-600">1,245</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="text-gray-500">Total Bookings</h3>
          <p className="text-2xl font-bold text-green-600">842</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="text-gray-500">Revenue</h3>
          <p className="text-2xl font-bold text-yellow-600">₹ 2,40,000</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-gray-700 mb-4">Monthly Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bookings" fill="#3b82f6" />
            <Bar dataKey="revenue" fill="#facc15" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function UsersPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <div className="bg-white shadow rounded-2xl p-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Name</th>
              <th className="border-b p-2">Role</th>
              <th className="border-b p-2">Experience</th>
              <th className="border-b p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b p-2">Ramesh Kumar</td>
              <td className="border-b p-2">Contractor</td>
              <td className="border-b p-2">5 years</td>
              <td className="border-b p-2 text-blue-600">Edit | Delete</td>
            </tr>
            <tr>
              <td className="border-b p-2">Suresh Sharma</td>
              <td className="border-b p-2">Painter</td>
              <td className="border-b p-2">3 years</td>
              <td className="border-b p-2 text-blue-600">Edit | Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BookingsPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Booking Management</h2>
      <div className="bg-white shadow rounded-2xl p-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Booking ID</th>
              <th className="border-b p-2">Customer</th>
              <th className="border-b p-2">Service</th>
              <th className="border-b p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b p-2">B001</td>
              <td className="border-b p-2">Anil Verma</td>
              <td className="border-b p-2">Waterproofing</td>
              <td className="border-b p-2 text-green-600">Completed</td>
            </tr>
            <tr>
              <td className="border-b p-2">B002</td>
              <td className="border-b p-2">Neha Singh</td>
              <td className="border-b p-2">Painting</td>
              <td className="border-b p-2 text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PaymentsPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Payments & Revenue</h2>
      <div className="bg-white shadow rounded-2xl p-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Transaction ID</th>
              <th className="border-b p-2">Customer</th>
              <th className="border-b p-2">Amount</th>
              <th className="border-b p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b p-2">TXN1234</td>
              <td className="border-b p-2">Ravi Kumar</td>
              <td className="border-b p-2">₹ 5,000</td>
              <td className="border-b p-2 text-green-600">Success</td>
            </tr>
            <tr>
              <td className="border-b p-2">TXN1235</td>
              <td className="border-b p-2">Anita Sharma</td>
              <td className="border-b p-2">₹ 3,000</td>
              <td className="border-b p-2 text-red-600">Failed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AdminPanel() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl p-4 flex flex-col">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">BUNIYAAD Admin</h1>
        <nav className="flex flex-col gap-4 flex-1">
          <button onClick={() => setPage("dashboard")} className={`flex items-center gap-2 ${page === "dashboard" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}>
            <PieChart size={20} /> Dashboard
          </button>
          <button onClick={() => setPage("users")} className={`flex items-center gap-2 ${page === "users" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}>
            <Users size={20} /> Users
          </button>
          <button onClick={() => setPage("bookings")} className={`flex items-center gap-2 ${page === "bookings" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}>
            <ClipboardList size={20} /> Bookings
          </button>
          <button onClick={() => setPage("payments")} className={`flex items-center gap-2 ${page === "payments" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}>
            <Wallet size={20} /> Payments
          </button>
        </nav>
        <button className="flex items-center gap-2 text-red-500 hover:text-red-700">
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {page === "dashboard" && <Dashboard />}
        {page === "users" && <UsersPage />}
        {page === "bookings" && <BookingsPage />}
        {page === "payments" && <PaymentsPage />}
      </main>
    </div>
  );
}
