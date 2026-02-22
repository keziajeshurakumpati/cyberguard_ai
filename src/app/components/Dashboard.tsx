import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Shield,
  AlertTriangle,
  Activity,
  TrendingUp,
  Eye,
  Zap,
  Lock,
  Unlock,
  Brain,
} from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Dashboard() {
  const [realTimeData, setRealTimeData] = useState<any[]>([]);
  const [activeThreats, setActiveThreats] = useState(0);
  const [blockedAttacks, setBlockedAttacks] = useState(0);
  const [threatLevel, setThreatLevel] = useState("Medium");

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newDataPoint = {
        time: new Date().toLocaleTimeString(),
        traffic: Math.floor(Math.random() * 100) + 50,
        threats: Math.floor(Math.random() * 20),
        normal: Math.floor(Math.random() * 80) + 20,
      };

      setRealTimeData((prev) => {
        const updated = [...prev, newDataPoint];
        return updated.slice(-20);
      });

      setActiveThreats(Math.floor(Math.random() * 15) + 5);
      setBlockedAttacks((prev) => prev + Math.floor(Math.random() * 3));
      
      const levels = ["Low", "Medium", "High", "Critical"];
      setThreatLevel(levels[Math.floor(Math.random() * levels.length)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const attackTypes = [
    { name: "DDoS", value: 35, color: "#ef4444" },
    { name: "SQL Injection", value: 25, color: "#f59e0b" },
    { name: "XSS", value: 20, color: "#eab308" },
    { name: "Brute Force", value: 15, color: "#3b82f6" },
    { name: "Phishing", value: 5, color: "#8b5cf6" },
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "SQL Injection Attempt",
      severity: "High",
      source: "192.168.1.45",
      time: "2 min ago",
      status: "Blocked",
    },
    {
      id: 2,
      type: "Suspicious Login Pattern",
      severity: "Medium",
      source: "10.0.0.23",
      time: "5 min ago",
      status: "Monitoring",
    },
    {
      id: 3,
      type: "DDoS Attack Detected",
      severity: "Critical",
      source: "Multiple IPs",
      time: "8 min ago",
      status: "Mitigating",
    },
    {
      id: 4,
      type: "Port Scanning",
      severity: "Low",
      source: "172.16.0.100",
      time: "12 min ago",
      status: "Logged",
    },
  ];

  const mlModels = [
    { name: "Anomaly Detection", accuracy: 97.8, status: "Active" },
    { name: "Behavioral Analysis", accuracy: 95.3, status: "Active" },
    { name: "Pattern Recognition", accuracy: 98.1, status: "Active" },
    { name: "Threat Classification", accuracy: 96.5, status: "Training" },
  ];

  const getThreatLevelColor = (level: string) => {
    switch (level) {
      case "Low":
        return "bg-green-500";
      case "Medium":
        return "bg-yellow-500";
      case "High":
        return "bg-orange-500";
      case "Critical":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Low":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Medium":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "High":
        return "bg-orange-500/10 text-orange-400 border-orange-500/20";
      case "Critical":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Status */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl text-white mb-2">Live Threat Monitoring</h2>
          <p className="text-slate-400">
            Real-time AI-powered attack detection and system protection
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${getThreatLevelColor(threatLevel)} animate-pulse`}></div>
            <span className="text-slate-300 text-sm">Threat Level: {threatLevel}</span>
          </div>
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
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                Live
              </Badge>
            </div>
            <div className="text-3xl text-white mb-1">{activeThreats}</div>
            <p className="text-slate-400 text-sm">Active Threats</p>
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
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-3xl text-white mb-1">{blockedAttacks}</div>
            <p className="text-slate-400 text-sm">Attacks Blocked Today</p>
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
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <Activity className="w-5 h-5 text-blue-400 animate-pulse" />
            </div>
            <div className="text-3xl text-white mb-1">98.2%</div>
            <p className="text-slate-400 text-sm">AI Model Accuracy</p>
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
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <Eye className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-3xl text-white mb-1">847</div>
            <p className="text-slate-400 text-sm">Patterns Learned</p>
          </Card>
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Real-time Traffic & Threats */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-white">Real-Time Traffic Analysis</h3>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                <Activity className="w-3 h-3 mr-1" />
                Monitoring
              </Badge>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={realTimeData}>
                <defs>
                  <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="traffic"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorTraffic)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="threats"
                  stroke="#ef4444"
                  fillOpacity={1}
                  fill="url(#colorThreats)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Attack Types Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <h3 className="text-lg text-white mb-4">Attack Types Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={attackTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {attackTypes.map((entry, index) => (
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

      {/* Recent Alerts & ML Models */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-white">Recent Security Alerts</h3>
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                {recentAlerts.length} Active
              </Badge>
            </div>
            <div className="space-y-3">
              {recentAlerts.map((alert, index) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle className="w-4 h-4 text-orange-400" />
                        <span className="text-white text-sm">{alert.type}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span>Source: {alert.source}</span>
                        <span>•</span>
                        <span>{alert.time}</span>
                      </div>
                    </div>
                    <Badge className={getSeverityColor(alert.severity)}>
                      {alert.severity}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <Badge
                      className={
                        alert.status === "Blocked"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : alert.status === "Mitigating"
                          ? "bg-orange-500/20 text-orange-400 border-orange-500/30"
                          : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                      }
                    >
                      {alert.status === "Blocked" ? (
                        <Lock className="w-3 h-3 mr-1" />
                      ) : (
                        <Unlock className="w-3 h-3 mr-1" />
                      )}
                      {alert.status}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* ML Models Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-white">AI/ML Models Status</h3>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                <Brain className="w-3 h-3 mr-1" />
                Active
              </Badge>
            </div>
            <div className="space-y-4">
              {mlModels.map((model, index) => (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm">{model.name}</span>
                    <Badge
                      className={
                        model.status === "Active"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }
                    >
                      {model.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Accuracy</span>
                      <span className="text-blue-400">{model.accuracy}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${model.accuracy}%` }}
                        transition={{ delay: 1 + index * 0.1, duration: 1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}