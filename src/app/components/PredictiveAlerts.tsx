import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Bell,
  AlertTriangle,
  TrendingUp,
  Clock,
  Shield,
  Target,
  Zap,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Eye,
} from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface PredictiveAlert {
  id: number;
  title: string;
  description: string;
  probability: number;
  severity: "low" | "medium" | "high" | "critical";
  timeframe: string;
  predictedTarget: string;
  attackType: string;
  confidence: number;
  basedOn: string[];
  recommendation: string;
  status: "pending" | "monitoring" | "mitigated" | "false_positive";
  timestamp: string;
}

export default function PredictiveAlerts() {
  const [alerts, setAlerts] = useState<PredictiveAlert[]>([]);
  const [selectedAlert, setSelectedAlert] = useState<PredictiveAlert | null>(null);
  const [newAlertAnimation, setNewAlertAnimation] = useState(false);

  // Initialize alerts
  useEffect(() => {
    const initialAlerts: PredictiveAlert[] = [
      {
        id: 1,
        title: "Potential DDoS Attack Incoming",
        description: "Abnormal traffic pattern detected similar to previous DDoS campaigns",
        probability: 87.5,
        severity: "critical",
        timeframe: "Next 15-20 minutes",
        predictedTarget: "Web Server Cluster (10.0.1.0/24)",
        attackType: "DDoS - SYN Flood",
        confidence: 92.3,
        basedOn: [
          "Similar traffic patterns from same IP ranges",
          "Historical attack data correlation",
          "Botnet C2 communication detected",
          "Timing matches previous attack windows",
        ],
        recommendation: "Activate DDoS mitigation, increase rate limiting, alert ISP",
        status: "pending",
        timestamp: "Just now",
      },
      {
        id: 2,
        title: "SQL Injection Campaign Expected",
        description: "Reconnaissance activity suggests imminent SQL injection attempts",
        probability: 78.2,
        severity: "high",
        timeframe: "Within 1 hour",
        predictedTarget: "Customer Portal Database",
        attackType: "SQL Injection",
        confidence: 85.7,
        basedOn: [
          "Systematic database enumeration detected",
          "Known attacker fingerprint identified",
          "Similar pre-attack patterns observed",
          "Vulnerable endpoint scanning activity",
        ],
        recommendation: "Enable WAF strict mode, review database permissions, monitor query logs",
        status: "monitoring",
        timestamp: "2 min ago",
      },
      {
        id: 3,
        title: "Brute Force Attack Likely",
        description: "Pattern analysis suggests coordinated brute force attack preparation",
        probability: 72.8,
        severity: "high",
        timeframe: "Next 30-45 minutes",
        predictedTarget: "Admin Login Portal",
        attackType: "Credential Stuffing",
        confidence: 80.4,
        basedOn: [
          "Multiple IPs probing authentication endpoints",
          "Credential list acquisition detected on dark web",
          "Historical attack pattern match (83%)",
          "Botnet activity increase in region",
        ],
        recommendation: "Implement CAPTCHA, enable MFA enforcement, reduce login attempt threshold",
        status: "monitoring",
        timestamp: "5 min ago",
      },
      {
        id: 4,
        title: "Zero-Day Exploit Possibility",
        description: "Unusual probing behavior suggests potential zero-day exploitation attempt",
        probability: 64.3,
        severity: "critical",
        timeframe: "Within 2-3 hours",
        predictedTarget: "Application Server",
        attackType: "Unknown - Zero-Day",
        confidence: 71.2,
        basedOn: [
          "Novel attack vector observed",
          "Targeting recently patched components",
          "Advanced persistent threat (APT) tactics",
          "Correlation with underground exploit chatter",
        ],
        recommendation: "Increase monitoring, isolate critical assets, prepare incident response",
        status: "monitoring",
        timestamp: "12 min ago",
      },
      {
        id: 5,
        title: "Ransomware Deployment Risk",
        description: "Behavioral patterns indicate ransomware deployment preparation",
        probability: 69.5,
        severity: "critical",
        timeframe: "Next 4-6 hours",
        predictedTarget: "File Servers",
        attackType: "Ransomware",
        confidence: 76.8,
        basedOn: [
          "Lateral movement detected",
          "File system enumeration activity",
          "Known ransomware group TTPs identified",
          "Cryptocurrency wallet setup detected",
        ],
        recommendation: "Isolate affected systems, backup critical data, disable unnecessary file shares",
        status: "pending",
        timestamp: "18 min ago",
      },
    ];

    setAlerts(initialAlerts);
    setSelectedAlert(initialAlerts[0]);
  }, []);

  // Simulate new alerts
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newAlert: PredictiveAlert = {
          id: Date.now(),
          title: "New Threat Predicted",
          description: "AI model detected emerging attack pattern",
          probability: Math.floor(Math.random() * 30) + 60,
          severity: ["low", "medium", "high", "critical"][Math.floor(Math.random() * 4)] as any,
          timeframe: "Next 30 minutes",
          predictedTarget: "System Infrastructure",
          attackType: "Unknown",
          confidence: Math.floor(Math.random() * 20) + 70,
          basedOn: ["Pattern analysis", "Historical data"],
          recommendation: "Monitor closely and prepare defenses",
          status: "pending",
          timestamp: "Just now",
        };

        setAlerts((prev) => [newAlert, ...prev.slice(0, 7)]);
        setNewAlertAnimation(true);
        setTimeout(() => setNewAlertAnimation(false), 1000);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const predictionAccuracyData = [
    { time: "00:00", predicted: 12, actual: 11 },
    { time: "04:00", predicted: 8, actual: 9 },
    { time: "08:00", predicted: 15, actual: 14 },
    { time: "12:00", predicted: 22, actual: 21 },
    { time: "16:00", predicted: 18, actual: 19 },
    { time: "20:00", predicted: 14, actual: 13 },
    { time: "24:00", predicted: 10, actual: 10 },
  ];

  const threatProbabilityData = alerts.map((alert) => ({
    name: alert.attackType,
    probability: alert.probability,
    confidence: alert.confidence,
  }));

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "high":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "critical":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "monitoring":
        return <Eye className="w-4 h-4" />;
      case "mitigated":
        return <CheckCircle2 className="w-4 h-4" />;
      case "false_positive":
        return <XCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "monitoring":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "mitigated":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "false_positive":
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  const handleStatusChange = (alertId: number, newStatus: string) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === alertId ? { ...alert, status: newStatus as any } : alert
      )
    );
    if (selectedAlert?.id === alertId) {
      setSelectedAlert({ ...selectedAlert, status: newStatus as any });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl text-white mb-2">Predictive Threat Alerts</h2>
          <p className="text-slate-400">
            AI-powered prediction of future attacks based on behavioral analysis
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
            <Bell className={`w-3 h-3 mr-1 ${newAlertAnimation ? "animate-bounce" : ""}`} />
            {alerts.filter((a) => a.status === "pending").length} Active Predictions
          </Badge>
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
            Accuracy: 94.7%
          </Badge>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-red-500/10 p-3 rounded-lg">
                <Bell className="w-6 h-6 text-red-400" />
              </div>
              <TrendingUp className="w-5 h-5 text-red-400" />
            </div>
            <div className="text-3xl text-white mb-1">{alerts.length}</div>
            <p className="text-slate-400 text-sm">Active Predictions</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-500/10 p-3 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
            </div>
            <div className="text-3xl text-white mb-1">147</div>
            <p className="text-slate-400 text-sm">Prevented This Week</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            <div className="text-3xl text-white mb-1">94.7%</div>
            <p className="text-slate-400 text-sm">Prediction Accuracy</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-purple-500/10 p-3 rounded-lg">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <div className="text-3xl text-white mb-1">8m 23s</div>
            <p className="text-slate-400 text-sm">Avg. Early Warning</p>
          </Card>
        </motion.div>
      </div>

      {/* Prediction Accuracy Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <h3 className="text-lg text-white mb-4">Prediction vs Actual Attacks (24h)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={predictionAccuracyData}>
                <defs>
                  <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
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
                  dataKey="predicted"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorPredicted)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="actual"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#colorActual)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <h3 className="text-lg text-white mb-4">Threat Probability vs Confidence</h3>
            <ResponsiveContainer width="100%" height={250}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis
                  type="number"
                  dataKey="probability"
                  name="Probability"
                  stroke="#64748b"
                  fontSize={12}
                  label={{ value: "Probability (%)", position: "insideBottom", offset: -5 }}
                />
                <YAxis
                  type="number"
                  dataKey="confidence"
                  name="Confidence"
                  stroke="#64748b"
                  fontSize={12}
                  label={{ value: "Confidence (%)", angle: -90, position: "insideLeft" }}
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Scatter data={threatProbabilityData} fill="#8b5cf6" />
              </ScatterChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Alerts List and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alerts List */}
        <div className="lg:col-span-2 space-y-3">
          <AnimatePresence>
            {alerts.map((alert, index) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className={`bg-slate-900 border-slate-800 p-6 cursor-pointer transition-all hover:border-slate-700 ${
                    selectedAlert?.id === alert.id ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setSelectedAlert(alert)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-red-500/10 p-3 rounded-lg">
                        <AlertTriangle className="w-6 h-6 text-red-400" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="text-white mb-1">{alert.title}</h4>
                          <p className="text-slate-400 text-sm">{alert.description}</p>
                        </div>
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{alert.timeframe}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          <span>{alert.attackType}</span>
                        </div>
                        <span>•</span>
                        <span>{alert.timestamp}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex-1 mr-4">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-slate-400">Probability</span>
                            <span className="text-red-400">{alert.probability}%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${alert.probability}%` }}
                              transition={{ delay: 0.7 + index * 0.05, duration: 0.8 }}
                              className="bg-gradient-to-r from-orange-500 to-red-500 h-full"
                            ></motion.div>
                          </div>
                        </div>
                        <Badge className={getStatusColor(alert.status)}>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(alert.status)}
                            <span className="capitalize">{alert.status.replace("_", " ")}</span>
                          </div>
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Alert Details */}
        <div className="space-y-4">
          {selectedAlert && (
            <>
              <motion.div
                key={selectedAlert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="bg-slate-900 border-slate-800 p-6">
                  <h3 className="text-lg text-white mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-400" />
                    Alert Details
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <div className="text-slate-400 text-xs mb-1">Predicted Target</div>
                      <div className="text-white text-sm">{selectedAlert.predictedTarget}</div>
                    </div>

                    <div>
                      <div className="text-slate-400 text-xs mb-1">Attack Type</div>
                      <div className="text-white text-sm">{selectedAlert.attackType}</div>
                    </div>

                    <div>
                      <div className="text-slate-400 text-xs mb-1">Confidence Level</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-slate-700 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-blue-500 h-full"
                            style={{ width: `${selectedAlert.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-blue-400 text-sm">{selectedAlert.confidence}%</span>
                      </div>
                    </div>

                    <div>
                      <div className="text-slate-400 text-xs mb-2">Prediction Based On:</div>
                      <ul className="space-y-1">
                        {selectedAlert.basedOn.map((reason, idx) => (
                          <li key={idx} className="text-white text-xs flex items-start gap-2">
                            <CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                      <div className="text-slate-400 text-xs mb-2">Recommended Action:</div>
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                        <p className="text-slate-300 text-xs">{selectedAlert.recommendation}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                      <div className="text-slate-400 text-xs mb-2">Update Status:</div>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                          onClick={() => handleStatusChange(selectedAlert.id, "monitoring")}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          Monitor
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                          onClick={() => handleStatusChange(selectedAlert.id, "mitigated")}
                        >
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Mitigated
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-red-500/20 p-2 rounded-lg">
                      <Zap className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-white">Early Warning Active</h4>
                      <p className="text-slate-400 text-xs">{selectedAlert.timeframe}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm">
                    The AI system has provided early warning, giving you time to prepare and deploy countermeasures before the attack occurs.
                  </p>
                </Card>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
