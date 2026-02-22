import { useState } from "react";
import { motion } from "motion/react";
import {
  History,
  TrendingDown,
  Shield,
  AlertTriangle,
  Calendar,
  Filter,
  Download,
  BarChart3,
  PieChart as PieChartIcon,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
  AreaChart,
} from "recharts";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function HistoricalAnalysis() {
  const [timeRange, setTimeRange] = useState("7d");

  const attackTrendsData = [
    { date: "Feb 13", attacks: 42, blocked: 40, learned: 8 },
    { date: "Feb 14", attacks: 38, blocked: 36, learned: 6 },
    { date: "Feb 15", attacks: 55, blocked: 52, learned: 12 },
    { date: "Feb 16", attacks: 47, blocked: 45, learned: 9 },
    { date: "Feb 17", attacks: 63, blocked: 61, learned: 15 },
    { date: "Feb 18", attacks: 51, blocked: 49, learned: 11 },
    { date: "Feb 19", attacks: 45, blocked: 44, learned: 8 },
    { date: "Feb 20", attacks: 39, blocked: 38, learned: 7 },
  ];

  const attackTypeDistribution = [
    { name: "DDoS", value: 342, color: "#ef4444" },
    { name: "SQL Injection", value: 256, color: "#f59e0b" },
    { name: "XSS", value: 189, color: "#eab308" },
    { name: "Brute Force", value: 423, color: "#3b82f6" },
    { name: "Malware", value: 167, color: "#8b5cf6" },
    { name: "Phishing", value: 98, color: "#ec4899" },
    { name: "Zero-Day", value: 45, color: "#06b6d4" },
  ];

  const hourlyPatterns = [
    { hour: "00", attacks: 12 },
    { hour: "02", attacks: 8 },
    { hour: "04", attacks: 5 },
    { hour: "06", attacks: 9 },
    { hour: "08", attacks: 18 },
    { hour: "10", attacks: 24 },
    { hour: "12", attacks: 31 },
    { hour: "14", attacks: 28 },
    { hour: "16", attacks: 35 },
    { hour: "18", attacks: 29 },
    { hour: "20", attacks: 22 },
    { hour: "22", attacks: 16 },
  ];

  const geographicData = [
    { country: "Russia", attacks: 342, threat: "High" },
    { country: "China", attacks: 298, threat: "High" },
    { country: "USA", attacks: 187, threat: "Medium" },
    { country: "North Korea", attacks: 156, threat: "Critical" },
    { country: "Iran", attacks: 134, threat: "High" },
    { country: "Ukraine", attacks: 89, threat: "Medium" },
    { country: "Brazil", attacks: 76, threat: "Medium" },
    { country: "India", attacks: 67, threat: "Low" },
  ];

  const aiLearningProgress = [
    { month: "Aug", patterns: 234, accuracy: 89.2 },
    { month: "Sep", patterns: 312, accuracy: 91.5 },
    { month: "Oct", patterns: 398, accuracy: 93.8 },
    { month: "Nov", patterns: 487, accuracy: 95.4 },
    { month: "Dec", patterns: 576, accuracy: 96.7 },
    { month: "Jan", patterns: 689, accuracy: 97.5 },
    { month: "Feb", patterns: 847, accuracy: 98.2 },
  ];

  const topAttackers = [
    { ip: "185.220.101.45", attacks: 127, blocked: 127, country: "RU", lastSeen: "2 min ago" },
    { ip: "91.219.237.244", attacks: 98, blocked: 98, country: "CN", lastSeen: "15 min ago" },
    { ip: "103.152.220.68", attacks: 84, blocked: 84, country: "KP", lastSeen: "32 min ago" },
    { ip: "45.142.212.61", attacks: 76, blocked: 76, country: "IR", lastSeen: "1 hour ago" },
    { ip: "194.165.16.77", attacks: 69, blocked: 69, country: "UA", lastSeen: "2 hours ago" },
  ];

  const attackSuccess = [
    { name: "Blocked", value: 1487, color: "#10b981" },
    { name: "Detected & Stopped", value: 33, color: "#3b82f6" },
    { name: "Failed Attempts", value: 12, color: "#f59e0b" },
  ];

  const getThreatColor = (threat: string) => {
    switch (threat) {
      case "Critical":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "High":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Low":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl text-white mb-2">Historical Attack Analysis</h2>
          <p className="text-slate-400">
            Comprehensive analysis of past attacks and AI learning progress
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-1">
            {["24h", "7d", "30d", "90d"].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  timeRange === range
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          <Button variant="outline" className="border-slate-700 text-slate-300">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="bg-red-500/10 p-3 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <TrendingDown className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-3xl text-white mb-1">1,532</div>
            <p className="text-slate-400 text-sm">Total Attacks (7 days)</p>
            <div className="mt-2 text-xs text-green-400">-12% from last week</div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="bg-green-500/10 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
            </div>
            <div className="text-3xl text-white mb-1">99.2%</div>
            <p className="text-slate-400 text-sm">Defense Success Rate</p>
            <div className="mt-2 text-xs text-green-400">+0.3% improvement</div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            <div className="text-3xl text-white mb-1">847</div>
            <p className="text-slate-400 text-sm">Attack Patterns Learned</p>
            <div className="mt-2 text-xs text-blue-400">+76 this week</div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="bg-purple-500/10 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <div className="text-3xl text-white mb-1">3.2h</div>
            <p className="text-slate-400 text-sm">Avg. Time to Neutralize</p>
            <div className="mt-2 text-xs text-green-400">-45min improvement</div>
          </Card>
        </motion.div>
      </div>

      {/* Attack Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="bg-slate-900 border-slate-800 p-6">
          <h3 className="text-lg text-white mb-4">Attack Trends & Defense Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={attackTrendsData}>
              <defs>
                <linearGradient id="colorAttacks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorBlocked" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorLearned" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="attacks"
                stroke="#ef4444"
                fillOpacity={1}
                fill="url(#colorAttacks)"
                strokeWidth={2}
                name="Total Attacks"
              />
              <Area
                type="monotone"
                dataKey="blocked"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorBlocked)"
                strokeWidth={2}
                name="Blocked"
              />
              <Area
                type="monotone"
                dataKey="learned"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorLearned)"
                strokeWidth={2}
                name="Patterns Learned"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      {/* Attack Distribution & Hourly Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-white">Attack Type Distribution</h3>
              <PieChartIcon className="w-5 h-5 text-slate-400" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={attackTypeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {attackTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-white">Attack Patterns by Hour</h3>
              <BarChart3 className="w-5 h-5 text-slate-400" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={hourlyPatterns}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="hour" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Bar dataKey="attacks" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* AI Learning Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="bg-slate-900 border-slate-800 p-6">
          <h3 className="text-lg text-white mb-4">AI Learning Progress Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={aiLearningProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
              <YAxis yAxisId="left" stroke="#64748b" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="#64748b" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="patterns"
                stroke="#8b5cf6"
                strokeWidth={3}
                name="Patterns Learned"
                dot={{ fill: "#8b5cf6", r: 5 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="accuracy"
                stroke="#10b981"
                strokeWidth={3}
                name="Accuracy (%)"
                dot={{ fill: "#10b981", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      {/* Geographic Data & Top Attackers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Geographic Distribution */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <h3 className="text-lg text-white mb-4">Geographic Attack Distribution</h3>
            <div className="space-y-3">
              {geographicData.map((item, index) => (
                <motion.div
                  key={item.country}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + index * 0.05 }}
                  className="bg-slate-800/50 rounded-lg p-3 border border-slate-700"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">{item.country}</span>
                    <Badge className={getThreatColor(item.threat)}>{item.threat}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-slate-400">Attacks</span>
                    <span className="text-red-400">{item.attacks}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-red-500 to-orange-500 h-full"
                      style={{ width: `${(item.attacks / 342) * 100}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Top Attackers & Success Rate */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Card className="bg-slate-900 border-slate-800 p-6">
              <h3 className="text-lg text-white mb-4">Top Attacking IPs</h3>
              <div className="space-y-2">
                {topAttackers.map((attacker, index) => (
                  <motion.div
                    key={attacker.ip}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + index * 0.05 }}
                    className="bg-slate-800/50 rounded p-3 border border-slate-700 text-sm"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-mono text-xs">{attacker.ip}</span>
                      <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                        {attacker.country}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">{attacker.attacks} attempts • All blocked</span>
                      <span className="text-slate-500">{attacker.lastSeen}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Card className="bg-slate-900 border-slate-800 p-6">
              <h3 className="text-lg text-white mb-4">Defense Success Rate</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={attackSuccess}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(1)}%`
                    }
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {attackSuccess.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
