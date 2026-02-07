import React from 'react';
import {
    LayoutDashboard,
    Database,
    Calendar,
    Building2,
    Headset,
    LogOut,
    Phone,
    CheckCircle2,
    DollarSign,
    Users,
    ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
    // Mock Data for Highlights
    const highlights = [
        { title: 'Total Calls', value: '33', sub: 'Every call captured', icon: <Phone size={20} />, color: 'text-purple-400', bg: 'bg-purple-900/20' },
        { title: 'Answered Calls', value: '33', sub: '100.0% answer rate', icon: <CheckCircle2 size={20} />, color: 'text-blue-400', bg: 'bg-blue-900/20' },
        { title: 'Revenue Saved', value: '$1,200', sub: 'From 4 booked appointments', icon: <DollarSign size={20} />, color: 'text-emerald-400', bg: 'bg-emerald-900/20' },
        { title: 'Missed Revenue', value: '$9,900', sub: 'Opportunities to capture', icon: <Users size={20} />, color: 'text-orange-400', bg: 'bg-orange-900/20' },
    ];

    return (
        <div className=" flex min-h-screen bgGradientOutPadding text-gray-300 font-sans ">

            {/* Sidebar */}
            <aside className="w-64 border-r border-gray-800 flex flex-col p-4 space-y-8">
                <div className="flex items-center space-x-3 p-2 bg-[#1a0b2e] rounded-lg border border-purple-900/30">
                    <div className=" relative rounded  items-center justify-center text-white font-bold">
                        <img src="/SYVAIRO_logo.png" alt="" />
                        <p className="text-[10px] text-gray-400 text-end absolute bottom-0 right-0">Admin Panel</p>
                    </div>

                    <ChevronDown size={14} className='shrink-0' />
                </div>

                <nav className="flex-1 space-y-1">
                    <NavItem icon={<LayoutDashboard size={18} />} label="Overview" active />
                    <NavItem icon={<Database size={18} />} label="Data" />
                    <NavItem icon={<Calendar size={18} />} label="Appointments" />
                    <NavItem icon={<Building2 size={18} />} label="Business Info" />
                    <NavItem icon={<Headset size={18} />} label="Agent Selector" />
                </nav>

                <div className="pt-4 border-t border-gray-800">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-4 px-3">Account</p>
                    <NavItem icon={<LogOut size={18} />} label="Log Out" />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">

                {/* Header */}
                <header className="flex justify-between items-start mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-300">
                            Syvairo Dashboard
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">Last 30 days • 33 calls • 100% answer rate</p>
                    </div>

                    <div className="flex items-center space-x-3 bg-[#130b21] border border-gray-800 rounded-full px-4 py-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium">Online · Responding in &lt;5 sec</span>
                        <div className="w-8 h-4 bg-gray-700 rounded-full relative">
                            <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div>
                        </div>
                    </div>
                </header>

                {/* Highlights Section */}
                <section className="mb-10">
                    <h3 className="text-lg font-semibold mb-4 text-white">Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#120d1d] border border-gray-800 p-5 rounded-xl hover:border-purple-500/50 transition-colors"
                            >
                                <div className={`${item.bg} ${item.color} w-10 h-10 rounded-lg flex items-center justify-center mb-4`}>
                                    {item.icon}
                                </div>
                                <p className="text-xs text-gray-400">{item.title}</p>
                                <p className="text-2xl font-bold text-white my-1">{item.value}</p>
                                <p className={`text-[10px] ${item.title === 'Missed Revenue' ? 'text-orange-400' : 'text-gray-500'}`}>
                                    {item.sub}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Trends Section */}
                <section>
                    <h3 className="text-lg font-semibold mb-4 text-white">Trends</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Call Activity Chart Placeholder */}
                        <div className="bg-[#120d1d] border border-gray-800 p-6 rounded-xl">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h4 className="font-semibold text-white">Call Activity</h4>
                                    <p className="text-xs text-emerald-400 mt-1 flex items-center">
                                        ↑ Up 12% vs previous period
                                    </p>
                                </div>
                                <span className="text-[10px] text-gray-500 uppercase">Last 30 days</span>
                            </div>
                            <div className="h-48 flex items-end justify-between px-2 relative border-b border-gray-800">
                                {/* Simple SVG Area Chart Representation */}
                                <svg className="absolute inset-0 w-full h-full px-2" preserveAspectRatio="none">
                                    <path d="M0,192 Q50,50 100,100 T200,150 T300,180 T400,192" fill="none" stroke="#6b21a8" strokeWidth="2" />
                                    <path d="M0,192 Q50,50 100,100 T200,150 T300,180 T400,192 V192 H0 Z" fill="url(#grad1)" />
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: 'rgb(107, 33, 168)', stopOpacity: 0.3 }} />
                                            <stop offset="100%" style={{ stopColor: 'rgb(107, 33, 168)', stopOpacity: 0 }} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="w-full flex justify-between text-[10px] text-gray-600 mt-2 absolute -bottom-6">
                                    <span>12/1</span><span>12/3</span><span>12/5</span><span>12/7</span><span>12/9</span>
                                </div>
                            </div>
                        </div>

                        {/* Revenue Generated Chart Placeholder */}
                        <div className="bg-[#120d1d] border border-gray-800 p-6 rounded-xl">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h4 className="font-semibold text-white">Revenue Generated</h4>
                                    <p className="text-xs text-emerald-400 mt-1">↑ Up 8% vs previous period</p>
                                </div>
                                <span className="text-[10px] text-gray-500 uppercase">Last 30 days</span>
                            </div>
                            <div className="h-48 flex items-end space-x-2">
                                {[40, 80, 100, 30, 10, 5, 20, 15, 30, 5].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ duration: 0.8, delay: i * 0.05 }}
                                        className="flex-1 bg-black rounded-t-sm"
                                    />
                                ))}
                            </div>
                            <div className="flex justify-between text-[10px] text-gray-600 mt-2">
                                <span>12/1</span><span>12/3</span><span>12/5</span><span>12/7</span><span>12/9</span>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
};

// Sub-component for Sidebar Items
const NavItem = ({ icon, label, active = false }) => (
    <div className={`
    flex items-center space-x-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all
    ${active ? 'bg-purple-900/30 text-purple-400' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}
  `}>
        {icon}
        <span className="text-sm font-medium">{label}</span>
    </div>
);

export default Dashboard;