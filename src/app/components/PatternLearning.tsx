import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Brain,
  TrendingUp,
  Network,
  Zap,
  Target,
  GitBranch,
  Activity,
  CheckCircle,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export default function PatternLearning() {
  const [learningProgress, setLearningProgress] = useState(0);
  const [newPatternsLearned, setNewPatternsLearned] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLearningProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      if (learningProgress === 0) {
        setNewPatternsLearned((prev) => prev + Math.floor(Math.random() * 3) + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [learningProgress]);

  const accuracyData = [
    { epoch: "1", accuracy: 78.2, loss: 0.45 },
    { epoch: "5", accuracy: 85.6, loss: 0.32 },
    { epoch: "10", accuracy: 90.3, loss: 0.24 },
    { epoch: "15", accuracy: 93.8, loss: 0.18 },
    { epoch: "20", accuracy: 95.7, loss: 0.13 },
    { epoch: "25", accuracy: 97.2, loss: 0.09 },
    { epoch: "30", accuracy: 98.1, loss: 0.06 },
    { epoch: "35", accuracy: 98.5, loss: 0.04 },
  ];

  const patternCategories = [
    { category: "DDoS Patterns", learned: 142, accuracy: 98.5, color: "#ef4444" },
    { category: "SQL Injection", learned: 98, accuracy: 97.2, color: "#f59e0b" },
    { category: "XSS Attacks", learned: 76, accuracy: 96.8, color: "#eab308" },
    { category: "Brute Force", learned: 124, accuracy: 99.1, color: "#3b82f6" },
    { category: "Zero-Day", learned: 23, accuracy: 94.3, color: "#8b5cf6" },
    { category: "Malware Signatures", learned: 189, accuracy: 98.9, color: "#ec4899" },
  ];

  const behavioralFeatures = [
    { feature: "Request Frequency", current: 95, baseline: 60 },
    { feature: "Payload Size", current: 88, baseline: 50 },
    { feature: "IP Reputation", current: 92, baseline: 70 },
    { feature: "Time Patterns", current: 85, baseline: 65 },
    { feature: "User Agent", current: 78, baseline: 55 },
    { feature: "Geolocation", current: 90, baseline: 60 },
  ];

  const recentLearnings = [
    {
      id: 1,
      pattern: "New DDoS amplification technique",
      confidence: 96.8,
      samples: 1247,
      timestamp: "2 hours ago",
      status: "validated",
    },
    {
      id: 2,
      pattern: "Novel SQL injection bypass method",
      confidence: 94.2,
      samples: 523,
      timestamp: "4 hours ago",
      status: "validated",
    },
    {
      id: 3,
      pattern: "Polymorphic malware variant",
      confidence: 97.5,
      samples: 892,
      timestamp: "6 hours ago",
      status: "validated",
    },
    {
      id: 4,
      pattern: "Credential stuffing pattern",
      confidence: 91.3,
      samples: 1856,
      timestamp: "8 hours ago",
      status: "training",
    },
    {
      id: 5,
      pattern: "API abuse pattern",
      confidence: 89.7,
      samples: 634,
      timestamp: "10 hours ago",
      status: "training",
    },
  ];

  const mlPipeline = [
    {
      stage: "Data Collection",
      status: "active",
      throughput: "1.2M events/sec",
      icon: Network,
    },
    {
      stage: "Feature Extraction",
      status: "active",
      throughput: "850K features/sec",
      icon: GitBranch,
    },
    {
      stage: "Pattern Analysis",
      status: "active",
      throughput: "500K patterns/sec",
      icon: Brain,
    },
    {
      stage: "Model Training",
      status: "active",
      throughput: "Real-time updates",
      icon: TrendingUp,
    },
    {
      stage: "Validation",
      status: "active",
      throughput: "99.2% accuracy",
      icon: CheckCircle,
    },
    {
      stage: "Deployment",
      status: "active",
      throughput: "< 100ms latency",
      icon: Zap,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl text-white mb-2">AI Pattern Learning Engine</h2>
          <p className="text-slate-400">
            Continuous learning from attack patterns and behavioral anomalies
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
            <Brain className="w-3 h-3 mr-1" />
            Learning Active
          </Badge>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            {newPatternsLearned} New Patterns
          </Badge>
        </div>
      </div>

      {/* Real-time Learning Progress */}
      <Card className="bg-slate-900 border-slate-800 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg text-white">Real-Time Learning Progress</h3>
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
            <Activity className="w-3 h-3 mr-1 animate-pulse" />
            Training
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">Current Batch Processing</span>
            <span className="text-blue-400">{learningProgress}%</span>
          </div>
          <Progress value={learningProgress} className="h-3" />
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Analyzing 50,000 events</span>
            <span>ETA: {Math.floor((100 - learningProgress) / 10)}s</span>
          </div>
        </div>
      </Card>

      {/* Model Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <h3 className="text-lg text-white mb-4">Model Training Progress</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={accuracyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis
                  dataKey="epoch"
                  stroke="#64748b"
                  fontSize={12}
                  label={{ value: "Epoch", position: "insideBottom", offset: -5 }}
                />
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
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  name="Accuracy (%)"
                  dot={{ fill: "#3b82f6", r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="loss"
                  stroke="#ef4444"
                  strokeWidth={3}
                  name="Loss"
                  dot={{ fill: "#ef4444", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-slate-900 border-slate-800 p-6">
            <h3 className="text-lg text-white mb-4">Behavioral Feature Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={behavioralFeatures}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="feature" stroke="#64748b" fontSize={11} />
                <PolarRadiusAxis stroke="#64748b" fontSize={12} />
                <Radar
                  name="Current Detection"
                  dataKey="current"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Radar
                  name="Baseline"
                  dataKey="baseline"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
                <Legend />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Pattern Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-slate-900 border-slate-800 p-6">
          <h3 className="text-lg text-white mb-4">Learned Attack Pattern Categories</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={patternCategories}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="category" stroke="#64748b" fontSize={11} angle={-15} textAnchor="end" height={80} />
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
              <Bar dataKey="learned" fill="#3b82f6" name="Patterns Learned" radius={[8, 8, 0, 0]} />
              <Bar dataKey="accuracy" fill="#8b5cf6" name="Accuracy %" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      {/* ML Pipeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="bg-slate-900 border-slate-800 p-6">
          <h3 className="text-lg text-white mb-4 flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-purple-400" />
            Machine Learning Pipeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mlPipeline.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-blue-500/10 p-2 rounded-lg">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-1"></div>
                      {stage.status}
                    </Badge>
                  </div>
                  <h4 className="text-white mb-1">{stage.stage}</h4>
                  <p className="text-slate-400 text-sm">{stage.throughput}</p>
                </motion.div>
              );
            })}
          </div>
        </Card>
      </motion.div>

      {/* Recent Learnings */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="bg-slate-900 border-slate-800 p-6">
              <h3 className="text-lg text-white mb-4">Recently Learned Patterns</h3>
              <div className="space-y-3">
                {recentLearnings.map((learning, index) => (
                  <motion.div
                    key={learning.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Target className="w-4 h-4 text-purple-400" />
                          <span className="text-white">{learning.pattern}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-slate-400">
                          <span>{learning.samples.toLocaleString()} samples</span>
                          <span>•</span>
                          <span>{learning.timestamp}</span>
                        </div>
                      </div>
                      <Badge
                        className={
                          learning.status === "validated"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        }
                      >
                        {learning.status}
                      </Badge>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-slate-400">Confidence Level</span>
                        <span className="text-blue-400">{learning.confidence}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${learning.confidence}%` }}
                          transition={{ delay: 0.9 + index * 0.1, duration: 0.8 }}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-full"
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="bg-slate-900 border-slate-800 p-6">
              <h3 className="text-lg text-white mb-4">Learning Statistics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400 text-sm">Total Patterns</span>
                    <span className="text-white text-lg">847</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-full rounded-full w-[85%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400 text-sm">Validated Patterns</span>
                    <span className="text-white text-lg">723</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-green-500 h-full rounded-full w-[72%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400 text-sm">In Training</span>
                    <span className="text-white text-lg">124</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-full rounded-full w-[13%]"></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="text-slate-400 text-xs mb-2">Model Performance</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Precision</span>
                      <span className="text-blue-400">98.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Recall</span>
                      <span className="text-purple-400">97.8%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">F1 Score</span>
                      <span className="text-green-400">98.0%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white">Continuous Learning</h4>
                  <p className="text-slate-400 text-xs">Active 24/7</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm">
                The AI engine continuously learns from new attack patterns, adapting defenses in real-time without manual intervention.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
