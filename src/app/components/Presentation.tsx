import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Brain,
  Bell,
  TrendingUp,
  Zap,
  Target,
  Activity,
  Lock,
  AlertTriangle,
  CheckCircle,
  Eye,
  Network,
  BarChart3,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      type: "title",
      title: "AI-Driven Cyber Attack Detection",
      subtitle: "& Attacker Behavior Prediction System",
      description: "Next-Generation Threat Intelligence Platform",
      icon: Shield,
    },

    // Slide 2: Problem Statement
    {
      type: "content",
      title: "The Challenge",
      icon: AlertTriangle,
      points: [
        {
          title: "Evolving Threat Landscape",
          description: "Cyber attacks are becoming more sophisticated and harder to detect",
          icon: TrendingUp,
        },
        {
          title: "Reactive Defense",
          description: "Traditional systems only respond after attacks have begun",
          icon: Shield,
        },
        {
          title: "Zero-Day Vulnerabilities",
          description: "Unknown threats bypass signature-based detection",
          icon: Target,
        },
        {
          title: "Manual Analysis Limitations",
          description: "Human analysts cannot process millions of events in real-time",
          icon: Activity,
        },
      ],
    },

    // Slide 3: Solution Overview
    {
      type: "solution",
      title: "Our AI-Powered Solution",
      icon: Brain,
      features: [
        {
          title: "Real-Time Detection",
          description: "Instant identification of attack patterns",
          icon: Zap,
          color: "blue",
        },
        {
          title: "Predictive Analytics",
          description: "Forecast attacks before they happen",
          icon: Bell,
          color: "purple",
        },
        {
          title: "Continuous Learning",
          description: "AI adapts to new attack vectors",
          icon: Brain,
          color: "green",
        },
        {
          title: "Automated Response",
          description: "Instant mitigation without human intervention",
          icon: Lock,
          color: "orange",
        },
      ],
    },

    // Slide 4: System Architecture
    {
      type: "architecture",
      title: "System Architecture",
      icon: Network,
      layers: [
        {
          name: "Data Collection Layer",
          description: "1.2M events/sec from network, endpoints, and applications",
          color: "blue",
        },
        {
          name: "Processing & Analysis",
          description: "Real-time feature extraction and pattern recognition",
          color: "purple",
        },
        {
          name: "AI/ML Engine",
          description: "Deep learning models with 98.2% accuracy",
          color: "green",
        },
        {
          name: "Prediction & Alert System",
          description: "Behavioral analysis and threat forecasting",
          color: "orange",
        },
        {
          name: "Response & Mitigation",
          description: "Automated defense deployment in < 100ms",
          color: "red",
        },
      ],
    },

    // Slide 5: Key Features - Attack Timeline
    {
      type: "feature",
      title: "Feature 1: Attack Timeline Visualization",
      icon: Activity,
      description: "Step-by-step visualization of attack progression through the cyber kill chain",
      highlights: [
        "Real-time attack phase tracking",
        "Detailed detection methodology for each step",
        "AI response documentation",
        "100% detection rate across all phases",
      ],
      demo: "Demonstrates complete attack lifecycle from reconnaissance to mitigation",
    },

    // Slide 6: Key Features - Pattern Learning
    {
      type: "feature",
      title: "Feature 2: AI Pattern Learning Engine",
      icon: Brain,
      description: "Continuous learning from attack patterns and behavioral anomalies",
      highlights: [
        "847 attack patterns learned and validated",
        "Real-time model training with 98.2% accuracy",
        "Behavioral feature analysis across 6 dimensions",
        "Automatic pattern validation and deployment",
      ],
      demo: "Shows ML pipeline from data collection to model deployment",
    },

    // Slide 7: Key Features - Predictive Alerts
    {
      type: "feature",
      title: "Feature 3: Predictive Threat Alerts",
      icon: Bell,
      description: "AI-powered prediction of future attacks before they occur",
      highlights: [
        "8+ minutes average early warning time",
        "94.7% prediction accuracy",
        "Probability scoring with confidence levels",
        "Actionable recommendations for prevention",
      ],
      demo: "Predicts attacks based on behavioral patterns and historical data",
    },

    // Slide 8: AI Capabilities
    {
      type: "capabilities",
      title: "Advanced AI Capabilities",
      icon: Brain,
      capabilities: [
        {
          name: "Anomaly Detection",
          accuracy: "97.8%",
          description: "Identifies deviations from normal behavior",
        },
        {
          name: "Behavioral Analysis",
          accuracy: "95.3%",
          description: "Understands attacker tactics and patterns",
        },
        {
          name: "Pattern Recognition",
          accuracy: "98.1%",
          description: "Matches known and unknown attack signatures",
        },
        {
          name: "Threat Classification",
          accuracy: "96.5%",
          description: "Categorizes attacks by type and severity",
        },
      ],
    },

    // Slide 9: Results & Metrics
    {
      type: "metrics",
      title: "Proven Results",
      icon: BarChart3,
      metrics: [
        {
          value: "99.2%",
          label: "Defense Success Rate",
          trend: "+0.3%",
          icon: Shield,
          color: "green",
        },
        {
          value: "1,487",
          label: "Attacks Blocked (7 days)",
          trend: "-12%",
          icon: Lock,
          color: "blue",
        },
        {
          value: "8m 23s",
          label: "Average Early Warning",
          trend: "Industry leading",
          icon: Bell,
          color: "purple",
        },
        {
          value: "<100ms",
          label: "Response Time",
          trend: "Real-time",
          icon: Zap,
          color: "orange",
        },
      ],
    },

    // Slide 10: Learning & Adaptation
    {
      type: "learning",
      title: "Continuous Learning & Adaptation",
      icon: TrendingUp,
      points: [
        {
          title: "Zero-Day Protection",
          description: "AI detects unknown threats through behavioral analysis",
          stat: "23 zero-day exploits identified",
        },
        {
          title: "Automatic Pattern Updates",
          description: "New attack patterns learned and deployed in real-time",
          stat: "76 new patterns this week",
        },
        {
          title: "Model Improvement",
          description: "Accuracy continuously improves with more data",
          stat: "98.2% current accuracy",
        },
        {
          title: "Threat Intelligence",
          description: "Integration with global threat feeds",
          stat: "Updated every 60 seconds",
        },
      ],
    },

    // Slide 11: Attack Prevention Process
    {
      type: "process",
      title: "Attack Prevention Process",
      icon: Shield,
      steps: [
        {
          number: "1",
          title: "Reconnaissance Detection",
          description: "Identify suspicious probing and scanning activity",
          action: "Log and analyze behavioral patterns",
        },
        {
          number: "2",
          title: "Threat Prediction",
          description: "AI forecasts potential attack based on patterns",
          action: "Generate predictive alerts with probability scores",
        },
        {
          number: "3",
          title: "Proactive Defense",
          description: "Deploy countermeasures before attack execution",
          action: "Activate defenses and isolate targets",
        },
        {
          number: "4",
          title: "Real-Time Blocking",
          description: "Stop attack attempts at multiple layers",
          action: "Block malicious traffic and payloads",
        },
        {
          number: "5",
          title: "Pattern Learning",
          description: "Extract and validate new attack signatures",
          action: "Update ML models and deploy globally",
        },
      ],
    },

    // Slide 12: Competitive Advantages
    {
      type: "comparison",
      title: "Why Our System Stands Out",
      icon: Target,
      advantages: [
        {
          feature: "Prediction Capability",
          traditional: "❌ Reactive only",
          ours: "✅ 8+ min early warning",
        },
        {
          feature: "Zero-Day Detection",
          traditional: "❌ Signature-based",
          ours: "✅ Behavioral analysis",
        },
        {
          feature: "Learning Speed",
          traditional: "❌ Manual updates",
          ours: "✅ Real-time adaptation",
        },
        {
          feature: "Response Time",
          traditional: "❌ Minutes to hours",
          ours: "✅ < 100 milliseconds",
        },
        {
          feature: "Accuracy",
          traditional: "❌ 85-90%",
          ours: "✅ 99.2% success rate",
        },
      ],
    },

    // Slide 13: Use Cases
    {
      type: "usecases",
      title: "Real-World Applications",
      icon: Eye,
      cases: [
        {
          industry: "Financial Services",
          threat: "DDoS & Credential Stuffing",
          result: "100% uptime maintained, 342 attacks blocked",
          icon: TrendingUp,
        },
        {
          industry: "Healthcare",
          threat: "Ransomware & Data Exfiltration",
          result: "Zero successful breaches, 167 malware attempts stopped",
          icon: Shield,
        },
        {
          industry: "E-Commerce",
          threat: "SQL Injection & XSS",
          result: "Customer data protected, 256 injection attempts blocked",
          icon: Lock,
        },
        {
          industry: "Government",
          threat: "APT & Zero-Day Exploits",
          result: "Critical infrastructure secured, 45 zero-days detected",
          icon: AlertTriangle,
        },
      ],
    },

    // Slide 14: Implementation
    {
      type: "implementation",
      title: "Easy Implementation",
      icon: Zap,
      phases: [
        {
          phase: "Phase 1: Setup",
          duration: "1-2 weeks",
          tasks: ["Deploy sensors", "Configure data collection", "Baseline establishment"],
        },
        {
          phase: "Phase 2: Training",
          duration: "2-4 weeks",
          tasks: ["Model training on historical data", "Pattern validation", "Threshold tuning"],
        },
        {
          phase: "Phase 3: Production",
          duration: "Ongoing",
          tasks: ["Full deployment", "Continuous monitoring", "Automatic learning"],
        },
      ],
    },

    // Slide 15: ROI
    {
      type: "roi",
      title: "Return on Investment",
      icon: TrendingUp,
      benefits: [
        {
          category: "Cost Savings",
          items: [
            "Reduce security team workload by 70%",
            "Prevent average breach cost of $4.5M",
            "Eliminate false positive investigation time",
          ],
        },
        {
          category: "Operational Benefits",
          items: [
            "24/7 automated protection",
            "Faster incident response (< 100ms)",
            "Reduced downtime and business disruption",
          ],
        },
        {
          category: "Strategic Advantages",
          items: [
            "Proactive security posture",
            "Regulatory compliance assurance",
            "Competitive differentiation",
          ],
        },
      ],
    },

    // Slide 16: Call to Action
    {
      type: "cta",
      title: "Ready to Transform Your Security?",
      icon: Shield,
      subtitle: "Join organizations already protected by AI-driven threat intelligence",
      stats: [
        { value: "99.2%", label: "Success Rate" },
        { value: "1,487", label: "Threats Blocked" },
        { value: "8min", label: "Early Warning" },
      ],
      action: "Schedule a Live Demo Today",
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderSlide = (slide: any) => {
    switch (slide.type) {
      case "title":
        return <TitleSlide slide={slide} />;
      case "content":
        return <ContentSlide slide={slide} />;
      case "solution":
        return <SolutionSlide slide={slide} />;
      case "architecture":
        return <ArchitectureSlide slide={slide} />;
      case "feature":
        return <FeatureSlide slide={slide} />;
      case "capabilities":
        return <CapabilitiesSlide slide={slide} />;
      case "metrics":
        return <MetricsSlide slide={slide} />;
      case "learning":
        return <LearningSlide slide={slide} />;
      case "process":
        return <ProcessSlide slide={slide} />;
      case "comparison":
        return <ComparisonSlide slide={slide} />;
      case "usecases":
        return <UseCasesSlide slide={slide} />;
      case "implementation":
        return <ImplementationSlide slide={slide} />;
      case "roi":
        return <ROISlide slide={slide} />;
      case "cta":
        return <CTASlide slide={slide} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Main Slide Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl aspect-[16/9] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full p-12 flex flex-col"
            >
              {renderSlide(slides[currentSlide])}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-slate-900 border-t border-slate-800 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="outline"
            className="border-slate-700"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-blue-500 w-8"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm">
              {currentSlide + 1} / {slides.length}
            </span>
            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide Components
function TitleSlide({ slide }: any) {
  const Icon = slide.icon;
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-3xl mb-8"
      >
        <Icon className="w-24 h-24 text-white" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-6xl text-white mb-4"
      >
        {slide.title}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-3xl text-blue-400 mb-6"
      >
        {slide.subtitle}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-xl text-slate-400"
      >
        {slide.description}
      </motion.p>
    </div>
  );
}

function ContentSlide({ slide }: any) {
  const HeaderIcon = slide.icon;
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-blue-500/10 p-3 rounded-lg">
          <HeaderIcon className="w-8 h-8 text-blue-400" />
        </div>
        <h2 className="text-4xl text-white">{slide.title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 flex-1">
        {slide.points.map((point: any, index: number) => {
          const Icon = point.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
            >
              <div className="bg-red-500/10 p-3 rounded-lg w-fit mb-4">
                <Icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl text-white mb-2">{point.title}</h3>
              <p className="text-slate-400">{point.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function SolutionSlide({ slide }: any) {
  const HeaderIcon = slide.icon;
  const colors: any = {
    blue: "blue",
    purple: "purple",
    green: "green",
    orange: "orange",
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-green-500/10 p-3 rounded-lg">
          <HeaderIcon className="w-8 h-8 text-green-400" />
        </div>
        <h2 className="text-4xl text-white">{slide.title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 flex-1">
        {slide.features.map((feature: any, index: number) => {
          const Icon = feature.icon;
          const colorClass = `${colors[feature.color]}-500`;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`bg-${feature.color}-500/10 rounded-xl p-6 border border-${feature.color}-500/30`}
            >
              <div className={`bg-${feature.color}-500/20 p-3 rounded-lg w-fit mb-4`}>
                <Icon className={`w-8 h-8 text-${feature.color}-400`} />
              </div>
              <h3 className="text-2xl text-white mb-2">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ArchitectureSlide({ slide }: any) {
  const HeaderIcon = slide.icon;
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-purple-500/10 p-3 rounded-lg">
          <HeaderIcon className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-4xl text-white">{slide.title}</h2>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-4">
        {slide.layers.map((layer: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
            className="relative"
          >
            <div className={`bg-${layer.color}-500/10 border border-${layer.color}-500/30 rounded-xl p-4 flex items-center gap-4`}>
              <div className="flex items-center justify-center w-12 h-12 bg-slate-800 rounded-lg">
                <span className="text-2xl text-white">{index + 1}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-white mb-1">{layer.name}</h3>
                <p className="text-slate-400 text-sm">{layer.description}</p>
              </div>
              <ChevronRight className={`w-6 h-6 text-${layer.color}-400`} />
            </div>
            {index < slide.layers.length - 1 && (
              <div className="absolute left-6 top-full w-0.5 h-4 bg-slate-700"></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FeatureSlide({ slide }: any) {
  const HeaderIcon = slide.icon;
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-blue-500/10 p-3 rounded-lg">
          <HeaderIcon className="w-8 h-8 text-blue-400" />
        </div>
        <h2 className="text-4xl text-white">{slide.title}</h2>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-slate-300 mb-6"
      >
        {slide.description}
      </motion.p>
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-6">
        <h3 className="text-xl text-white mb-4">Key Highlights</h3>
        <div className="grid grid-cols-2 gap-4">
          {slide.highlights.map((highlight: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-300">{highlight}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4"
      >
        <p className="text-blue-300">
          <strong>Demo:</strong> {slide.demo}
        </p>
      </motion.div>
    </div>
  );
}

function CapabilitiesSlide({ slide }: any) {
  const HeaderIcon = slide.icon;
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-purple-500/10 p-3 rounded-lg">
          <HeaderIcon className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-4xl text-white">{slide.title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 flex-1">
        {slide.capabilities.map((cap: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl text-white">{cap.name}</h3>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-lg px-3 py-1">
                {cap.accuracy}
              </Badge>
            </div>
            <p className="text-slate-400 mb-4">{cap.description}</p>
            <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: cap.accuracy }}
                transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                className="bg-gradient-to-r from-green-500 to-blue-500 h-full"
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MetricsSlide({ slide }: any) {
  const HeaderIcon = slide.icon;
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-12">
        <div className="bg-green-500/10 p-3 rounded-lg">
          <HeaderIcon className="w-8 h-8 text-green-400" />
        </div>
        <h2 className="text-4xl text-white">{slide.title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-8 flex-1">
        {slide.metrics.map((metric: any, index: number) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              className={`bg-${metric.color}-500/10 border border-${metric.color}-500/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center`}
            >
              <div className={`bg-${metric.color}-500/20 p-4 rounded-2xl mb-4`}>
                <Icon className={`w-12 h-12 text-${metric.color}-400`} />
              </div>
              <div className="text-6xl text-white mb-2">{metric.value}</div>
              <div className="text-xl text-slate-300 mb-2">{metric.label}</div>
              <Badge className={`bg-${metric.color}-500/20 text-${metric.color}-400 border-${metric.color}-500/30`}>
                {metric.trend}
              </Badge>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function LearningSlide({ slide }: any) {
  const HeaderIcon = slide.icon;
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-blue-500/10 p-3 rounded-lg">
          <HeaderIcon className="w-8 h-8 text-blue-400" />
        </div>
        <h2 className="text-4xl text-white">{slide.title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 flex-1">
        {slide.points.map((point: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
          >
            <h3 className="text-2xl text-white mb-3">{point.title}</h3>
            <p className="text-slate-400 mb-4">{point.description}</p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
              <div className="text-3xl text-blue-400">{point.stat}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProcessSlide({ slide }: any) {
  const HeaderIcon = slide.icon;
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-green-500/10 p-3 rounded-lg">
          <HeaderIcon className="w-8 h-8 text-green-400" />
        </div>
        <h2 className="text-4xl text-white">{slide.title}</h2>
      </div>
      <div className="flex-1 space-y-3">
        {slide.steps.map((step: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex items-center gap-4"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-3xl text-white">{step.number}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl text-white mb-1">{step.title}</h3>
              <p className="text-slate-400 text-sm mb-2">{step.description}</p>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                {step.action}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ComparisonSlide({ slide }: any) {
  const HeaderIcon = slide.icon;
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-purple-500/10 p-3 rounded-lg">
          <HeaderIcon className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-4xl text-white">{slide.title}</h2>
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-slate-400"></div>
          <div className="text-center">
            <Badge className="bg-slate-700 text-slate-300">Traditional Systems</Badge>
          </div>
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              Our AI System
            </Badge>
          </div>
        </div>
        {slide.advantages.map((adv: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="grid grid-cols-3 gap-4 mb-3 bg-slate-800/50 rounded-xl p-4 border border-slate-700"
          >
            <div className="text-white flex items-center">{adv.feature}</div>
            <div className="text-slate-400 flex items-center justify-center">
              {adv.traditional}
            </div>
            <div className="text-green-400 flex items-center justify-center font-semibold">
              {adv.ours}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function UseCasesSlide({ slide }: any) {
  const HeaderIcon = slide.icon;
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-blue-500/10 p-3 rounded-lg">
          <HeaderIcon className="w-8 h-8 text-blue-400" />
        </div>
        <h2 className="text-4xl text-white">{slide.title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 flex-1">
        {slide.cases.map((useCase: any, index: number) => {
          const Icon = useCase.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
            >
              <div className="bg-blue-500/10 p-3 rounded-lg w-fit mb-4">
                <Icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl text-white mb-2">{useCase.industry}</h3>
              <p className="text-slate-400 text-sm mb-3">
                <strong>Threat:</strong> {useCase.threat}
              </p>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <p className="text-green-400 text-sm">
                  <strong>Result:</strong> {useCase.result}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ImplementationSlide({ slide }: any) {
  const HeaderIcon = slide.icon;
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-orange-500/10 p-3 rounded-lg">
          <HeaderIcon className="w-8 h-8 text-orange-400" />
        </div>
        <h2 className="text-4xl text-white">{slide.title}</h2>
      </div>
      <div className="flex-1 space-y-6">
        {slide.phases.map((phase: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl text-white">{phase.phase}</h3>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                {phase.duration}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              {phase.tasks.map((task: string, idx: number) => (
                <Badge
                  key={idx}
                  className="bg-slate-700 text-slate-300 border-slate-600"
                >
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {task}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ROISlide({ slide }: any) {
  const HeaderIcon = slide.icon;
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-green-500/10 p-3 rounded-lg">
          <HeaderIcon className="w-8 h-8 text-green-400" />
        </div>
        <h2 className="text-4xl text-white">{slide.title}</h2>
      </div>
      <div className="grid grid-cols-3 gap-6 flex-1">
        {slide.benefits.map((benefit: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
          >
            <h3 className="text-xl text-white mb-4 pb-3 border-b border-slate-700">
              {benefit.category}
            </h3>
            <ul className="space-y-3">
              {benefit.items.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CTASlide({ slide }: any) {
  const HeaderIcon = slide.icon;
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
        className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-3xl mb-8"
      >
        <HeaderIcon className="w-24 h-24 text-white" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-5xl text-white mb-4"
      >
        {slide.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-2xl text-slate-400 mb-12"
      >
        {slide.subtitle}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex gap-8 mb-12"
      >
        {slide.stats.map((stat: any, index: number) => (
          <div key={index} className="text-center">
            <div className="text-5xl text-blue-400 mb-2">{stat.value}</div>
            <div className="text-slate-400">{stat.label}</div>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-2xl rounded-xl">
          {slide.action}
        </Button>
      </motion.div>
    </div>
  );
}
