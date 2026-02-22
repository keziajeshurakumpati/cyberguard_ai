import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Activity,
  Clock,
  MapPin,
  Server,
  Database,
  Lock,
  ChevronRight,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface AttackStep {
  id: number;
  phase: string;
  action: string;
  timestamp: string;
  status: "completed" | "active" | "pending" | "blocked";
  severity: "low" | "medium" | "high" | "critical";
  details: string;
  ipAddress: string;
  target: string;
  detection: string;
  aiResponse: string;
}

export default function AttackTimeline() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const attackSteps: AttackStep[] = [
    {
      id: 1,
      phase: "Reconnaissance",
      action: "Port Scanning Initiated",
      timestamp: "14:23:15",
      status: "completed",
      severity: "low",
      details: "Attacker performing systematic port scan on target infrastructure",
      ipAddress: "185.220.101.45",
      target: "Web Server (10.0.1.50)",
      detection: "Anomaly detection identified unusual network probing pattern",
      aiResponse: "Pattern logged for behavioral analysis. Low threat classification.",
    },
    {
      id: 2,
      phase: "Reconnaissance",
      action: "Service Enumeration",
      timestamp: "14:24:32",
      status: "completed",
      severity: "low",
      details: "Identifying running services and their versions",
      ipAddress: "185.220.101.45",
      target: "Multiple Servers",
      detection: "ML model detected fingerprinting techniques",
      aiResponse: "Attack pattern similarity: 87% match with known APT28 tactics",
    },
    {
      id: 3,
      phase: "Weaponization",
      action: "Exploit Preparation",
      timestamp: "14:26:48",
      status: "completed",
      severity: "medium",
      details: "Attacker preparing SQL injection payload",
      ipAddress: "185.220.101.45",
      target: "Login Portal (10.0.1.50:443)",
      detection: "Deep packet inspection identified malicious payload patterns",
      aiResponse: "Threat escalated. Similar payload detected in 15 previous attacks.",
    },
    {
      id: 4,
      phase: "Delivery",
      action: "SQL Injection Attempt",
      timestamp: "14:28:12",
      status: "blocked",
      severity: "high",
      details: "Malicious SQL query injection in login form",
      ipAddress: "185.220.101.45",
      target: "Database Server",
      detection: "WAF + AI model blocked malicious query in real-time",
      aiResponse: "Attack blocked. Pattern added to threat database. Accuracy: 99.2%",
    },
    {
      id: 5,
      phase: "Exploitation",
      action: "Brute Force Attack",
      timestamp: "14:30:05",
      status: "blocked",
      severity: "high",
      details: "Multiple failed login attempts detected",
      ipAddress: "185.220.101.45",
      target: "Admin Panel",
      detection: "Behavioral analysis flagged abnormal login frequency",
      aiResponse: "IP automatically blacklisted. Rate limiting applied.",
    },
    {
      id: 6,
      phase: "Exploitation",
      action: "Zero-Day Exploit Attempt",
      timestamp: "14:32:18",
      status: "blocked",
      severity: "critical",
      details: "Unknown exploit pattern targeting application vulnerability",
      ipAddress: "185.220.101.45",
      target: "Application Server",
      detection: "AI model detected zero-day exploit through behavioral anomaly",
      aiResponse: "CRITICAL: New attack pattern learned. System adapted defenses in real-time.",
    },
    {
      id: 7,
      phase: "Installation",
      action: "Malware Deployment Blocked",
      timestamp: "14:33:45",
      status: "blocked",
      severity: "critical",
      details: "Attempted to establish persistent backdoor",
      ipAddress: "185.220.101.45",
      target: "System Files",
      detection: "Endpoint protection + AI detected malicious file signatures",
      aiResponse: "Malware signature extracted. Updated all endpoints with new detection rules.",
    },
    {
      id: 8,
      phase: "Command & Control",
      action: "C2 Communication Blocked",
      timestamp: "14:35:22",
      status: "blocked",
      severity: "critical",
      details: "Blocked connection to known C2 infrastructure",
      ipAddress: "185.220.101.45 → 91.219.237.244",
      target: "External C2 Server",
      detection: "Network behavior analysis identified C2 beacon pattern",
      aiResponse: "C2 infrastructure identified. Coordinated with threat intelligence feeds.",
    },
    {
      id: 9,
      phase: "Actions on Objectives",
      action: "Data Exfiltration Prevented",
      timestamp: "14:36:40",
      status: "blocked",
      severity: "critical",
      details: "Large data transfer attempt blocked",
      ipAddress: "185.220.101.45",
      target: "Database",
      detection: "DLP + AI detected abnormal data access patterns",
      aiResponse: "Attack completely neutralized. All systems secure. New patterns learned.",
    },
  ];

  useEffect(() => {
    if (isPlaying && currentStep < attackSteps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 3000);
      return () => clearTimeout(timer);
    } else if (currentStep >= attackSteps.length - 1) {
      setIsPlaying(false);
    }
  }, [currentStep, isPlaying, attackSteps.length]);

  const handlePlay = () => {
    if (currentStep >= attackSteps.length - 1) {
      setCurrentStep(0);
    }
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-orange-400" />;
      case "active":
        return <Activity className="w-5 h-5 text-blue-400 animate-pulse" />;
      case "blocked":
        return <Shield className="w-5 h-5 text-green-400" />;
      case "pending":
        return <Clock className="w-5 h-5 text-slate-400" />;
      default:
        return <XCircle className="w-5 h-5 text-red-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "active":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "blocked":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "pending":
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
      default:
        return "bg-red-500/20 text-red-400 border-red-500/30";
    }
  };

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl text-white mb-2">Attack Timeline Visualization</h2>
          <p className="text-slate-400">
            Step-by-step breakdown of attack progression and AI-powered defense responses
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={isPlaying ? handlePause : handlePlay}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isPlaying ? "Pause" : "Play"}
          </Button>
          <Button onClick={handleReset} variant="outline" className="border-slate-700 text-slate-300">
            Reset
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <Card className="bg-slate-900 border-slate-800 p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-400 text-sm">Attack Progress</span>
          <span className="text-slate-400 text-sm">
            Step {currentStep + 1} of {attackSteps.length}
          </span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / attackSteps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 h-full"
          ></motion.div>
        </div>
      </Card>

      {/* Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Timeline Steps */}
        <div className="lg:col-span-2 space-y-4">
          {attackSteps.map((step, index) => {
            const isActive = index === currentStep;
            const isPast = index < currentStep;
            const isFuture = index > currentStep;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: isFuture ? 0.3 : 1,
                  x: 0,
                  scale: isActive ? 1.02 : 1,
                }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`bg-slate-900 border-slate-800 p-6 relative ${
                    isActive ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : ""
                  }`}
                >
                  {/* Timeline connector */}
                  {index < attackSteps.length - 1 && (
                    <div className="absolute left-[34px] top-[70px] w-0.5 h-8 bg-slate-700"></div>
                  )}

                  <div className="flex gap-4">
                    {/* Status Icon */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        isActive ? "bg-blue-500/20" : "bg-slate-800"
                      }`}
                    >
                      {getStatusIcon(isPast || isActive ? step.status : "pending")}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                              {step.phase}
                            </Badge>
                            <span className="text-slate-400 text-xs">{step.timestamp}</span>
                          </div>
                          <h4 className="text-white text-lg">{step.action}</h4>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge className={getStatusColor(isPast || isActive ? step.status : "pending")}>
                            {isPast || isActive ? step.status : "pending"}
                          </Badge>
                          <Badge className={getSeverityColor(step.severity)}>
                            {step.severity}
                          </Badge>
                        </div>
                      </div>

                      {(isActive || isPast) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ delay: 0.2 }}
                          className="space-y-3 mt-4"
                        >
                          <p className="text-slate-300 text-sm">{step.details}</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                            <div className="bg-slate-800/50 rounded p-3">
                              <div className="flex items-center gap-2 mb-1">
                                <MapPin className="w-3 h-3 text-blue-400" />
                                <span className="text-slate-400">Source IP</span>
                              </div>
                              <span className="text-white">{step.ipAddress}</span>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <div className="flex items-center gap-2 mb-1">
                                <Server className="w-3 h-3 text-purple-400" />
                                <span className="text-slate-400">Target</span>
                              </div>
                              <span className="text-white">{step.target}</span>
                            </div>
                          </div>

                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <AlertTriangle className="w-4 h-4 text-blue-400" />
                              <span className="text-blue-400 text-sm">Detection Method</span>
                            </div>
                            <p className="text-slate-300 text-sm">{step.detection}</p>
                          </div>

                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Shield className="w-4 h-4 text-green-400" />
                              <span className="text-green-400 text-sm">AI Response</span>
                            </div>
                            <p className="text-slate-300 text-sm">{step.aiResponse}</p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Current Step Details */}
        <div className="space-y-4">
          <Card className="bg-slate-900 border-slate-800 p-6 sticky top-24">
            <h3 className="text-lg text-white mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-400" />
              Current Step Details
            </h3>

            {attackSteps[currentStep] && (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div>
                  <div className="text-slate-400 text-xs mb-1">Phase</div>
                  <div className="text-white">{attackSteps[currentStep].phase}</div>
                </div>

                <div>
                  <div className="text-slate-400 text-xs mb-1">Action</div>
                  <div className="text-white">{attackSteps[currentStep].action}</div>
                </div>

                <div>
                  <div className="text-slate-400 text-xs mb-1">Timestamp</div>
                  <div className="text-white flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {attackSteps[currentStep].timestamp}
                  </div>
                </div>

                <div>
                  <div className="text-slate-400 text-xs mb-1">Status</div>
                  <Badge className={getStatusColor(attackSteps[currentStep].status)}>
                    {attackSteps[currentStep].status}
                  </Badge>
                </div>

                <div>
                  <div className="text-slate-400 text-xs mb-1">Severity Level</div>
                  <Badge className={getSeverityColor(attackSteps[currentStep].severity)}>
                    {attackSteps[currentStep].severity}
                  </Badge>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="text-slate-400 text-xs mb-2">Attack Kill Chain Progress</div>
                  <div className="space-y-2">
                    {["Reconnaissance", "Weaponization", "Delivery", "Exploitation", "Installation", "C&C", "Actions"].map(
                      (phase, idx) => {
                        const phaseStep = attackSteps.findIndex((s) => s.phase === phase);
                        const isPhaseActive = phaseStep <= currentStep;
                        return (
                          <div key={phase} className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                isPhaseActive ? "bg-blue-500" : "bg-slate-700"
                              }`}
                            ></div>
                            <span
                              className={`text-xs ${
                                isPhaseActive ? "text-white" : "text-slate-600"
                              }`}
                            >
                              {phase}
                            </span>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </Card>

          {/* Attack Summary */}
          <Card className="bg-slate-900 border-slate-800 p-6">
            <h3 className="text-lg text-white mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-400" />
              Defense Summary
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Total Steps</span>
                <span className="text-white">{attackSteps.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Blocked</span>
                <span className="text-green-400">
                  {attackSteps.filter((s) => s.status === "blocked").length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Detection Rate</span>
                <span className="text-blue-400">100%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Response Time</span>
                <span className="text-purple-400">&lt; 50ms</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
