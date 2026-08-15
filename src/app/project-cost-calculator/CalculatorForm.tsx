"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Sparkles, Download, MessageSquare, RefreshCw } from "lucide-react";
import { jsPDF } from "jspdf";
import {
  projectTypes,
  features,
  scales,
  users as usersOptions,
  timelines,
  designs,
  ProjectTypeOption,
  FeatureOption,
  ScaleOption,
  UserOption,
  TimelineOption,
  DesignOption
} from "./calculatorConfig";

export default function CalculatorForm() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<ProjectTypeOption | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<FeatureOption[]>([]);
  const [selectedScale, setSelectedScale] = useState<ScaleOption | null>(null);
  const [selectedUsers, setSelectedUsers] = useState<UserOption | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<TimelineOption | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<DesignOption | null>(null);

  // Lead Form state
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Error validation
  const [formError, setFormError] = useState("");

  const resetCalculator = () => {
    setSelectedType(null);
    setSelectedFeatures([]);
    setSelectedScale(null);
    setSelectedUsers(null);
    setSelectedTimeline(null);
    setSelectedDesign(null);
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setDescription("");
    setFormSubmitted(false);
    setFormError("");
    setStep(1);
  };

  // Calculation logic
  const calculateEstimate = () => {
    if (!selectedType || !selectedScale || !selectedUsers || !selectedTimeline || !selectedDesign) {
      return { minCost: 0, maxCost: 0, minWeeks: 0, maxMaxWeeks: 0, complexity: "Low" };
    }

    let minCost = selectedType.baseMinCost;
    let maxCost = selectedType.baseMaxCost;
    let weeks = selectedType.baseMinWeeks;

    // Add features costs
    selectedFeatures.forEach((feat) => {
      minCost += feat.addedMinCost;
      maxCost += feat.addedMaxCost;
      weeks += feat.addedWeeks;
    });

    // Multipliers
    const scaleMult = selectedScale.multiplier;
    const userMult = selectedUsers.multiplier;
    const timelineMult = selectedTimeline.multiplier;
    const designMult = selectedDesign.multiplier;

    const finalMultiplier = scaleMult * userMult * timelineMult * designMult;

    minCost = Math.round(minCost * finalMultiplier);
    maxCost = Math.round(maxCost * finalMultiplier);
    
    // Round to nearest hundred for cleaner representation
    minCost = Math.ceil(minCost / 100) * 100;
    maxCost = Math.ceil(maxCost / 100) * 100;

    const minWeeks = Math.max(3, Math.round(weeks * timelineMult * designMult));
    const maxWeeks = Math.round(minWeeks * 1.3);

    // Determine complexity rating
    let complexity = "Moderate";
    const rawCost = maxCost;
    if (rawCost < 15000) {
      complexity = "Low";
    } else if (rawCost > 80000) {
      complexity = "Advanced";
    } else if (rawCost > 45000) {
      complexity = "High";
    }

    return { minCost, maxCost, minWeeks, maxWeeks, complexity };
  };

  const { minCost, maxCost, minWeeks, maxWeeks, complexity } = calculateEstimate();

  // Validate current step before proceeding
  const canContinue = () => {
    if (step === 1 && !selectedType) return false;
    if (step === 2 && selectedFeatures.length === 0) return false;
    if (step === 3 && (!selectedScale || !selectedUsers)) return false;
    if (step === 4 && (!selectedTimeline || !selectedDesign)) return false;
    return true;
  };

  const handleFeatureToggle = (feat: FeatureOption) => {
    if (feat.id === "not-sure") {
      setSelectedFeatures([feat]);
      return;
    }
    const cleanFeatures = selectedFeatures.filter(f => f.id !== "not-sure");
    if (cleanFeatures.find((f) => f.id === feat.id)) {
      setSelectedFeatures(cleanFeatures.filter((f) => f.id !== feat.id));
    } else {
      setSelectedFeatures([...cleanFeatures, feat]);
    }
  };

  // Submit Lead with Web3Forms
  const handleSubmitLead = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");

    if (!name.trim() || !company.trim() || !email.trim()) {
      setFormError("Please fill out all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError("Please enter a valid work email address.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "9d711988-0631-4518-aba1-4cb9aab6a4fe");
    formData.append("subject", `New Lead: Software Estimate for ${company}`);
    formData.append("from_name", "Edura Technologies Calculator");
    formData.append("Project Type", selectedType?.label || "Not specified");
    formData.append("Scale Option", selectedScale?.label || "Not specified");
    formData.append("Expected Users", selectedUsers?.label || "Not specified");
    formData.append("Launch Timeline", selectedTimeline?.label || "Not specified");
    formData.append("Design Readiness", selectedDesign?.label || "Not specified");
    formData.append("Selected Features", selectedFeatures.map(f => f.label).join(", ") || "None");
    formData.append("Calculated Cost Range", `$${minCost.toLocaleString()} - $${maxCost.toLocaleString()}`);
    formData.append("Calculated Duration", `${minWeeks} - ${maxWeeks} weeks`);
    formData.append("Complexity Level", complexity);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await res.json();
      if (result.success) {
        setFormSubmitted(true);
      } else {
        setFormError("Submission failed: " + (result.message || "Please check your network connection."));
      }
    } catch (err) {
      setFormError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Download appraisal PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Set colors
    const primaryBlue = "#3b82f6";
    const darkGray = "#1f2937";
    const textGray = "#4b5563";
    const cardBg = "#f3f4f6";

    // 1. Header background and title
    doc.setFillColor(31, 41, 55); // darkGray
    doc.rect(0, 0, 210, 45, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("EDURATECH", 15, 20);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Custom AI Systems & Premium Software", 15, 27);
    doc.text("https://www.eduratech.com | support@eduratech.com", 15, 34);

    // Document info
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("PROJECT ESTIMATE SUMMARY", 130, 20);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 130, 27);
    doc.text(`Ref ID: ET-CALC-${Math.floor(1000 + Math.random() * 9000)}`, 130, 34);

    // 2. Client Details Section
    doc.setTextColor(darkGray);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("1. CLIENT PROFILE", 15, 60);
    doc.setDrawColor(229, 231, 235);
    doc.line(15, 63, 195, 63);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(textGray);
    doc.text(`Client Name: ${name}`, 15, 71);
    doc.text(`Company: ${company}`, 15, 78);
    doc.text(`Work Email: ${email}`, 110, 71);
    doc.text(`Phone: ${phone || "Not provided"}`, 110, 78);

    // 3. Estimate Summary Card
    doc.setFillColor(243, 244, 246); // cardBg
    doc.rect(15, 90, 180, 35, "F");
    
    // Glowing borders
    doc.setDrawColor(59, 130, 246); // primaryBlue
    doc.setLineWidth(1);
    doc.rect(15, 90, 180, 35, "D");

    doc.setTextColor(59, 130, 246);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("ESTIMATED BUDGET RANGE", 25, 100);
    doc.setFontSize(22);
    doc.text(`$${minCost.toLocaleString()} - $${maxCost.toLocaleString()} USD`, 25, 112);

    doc.setTextColor(darkGray);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("ESTIMATED TIMELINE", 125, 100);
    doc.setFontSize(14);
    doc.text(`${minWeeks} - ${maxWeeks} Weeks`, 125, 108);
    
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(textGray);
    doc.text(`Complexity Level: ${complexity}`, 125, 116);

    // 4. Requirements Specification
    doc.setTextColor(darkGray);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("2. SPECIFICATIONS SUMMARY", 15, 140);
    doc.setDrawColor(229, 231, 235);
    doc.line(15, 143, 195, 143);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(darkGray);
    doc.text("Parameter", 15, 151);
    doc.text("Selected Option", 95, 151);
    doc.line(15, 154, 195, 154);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(textGray);
    doc.text("Project Type", 15, 161);
    doc.text(selectedType?.label || "", 95, 161);

    doc.text("Target System Scale", 15, 168);
    doc.text(selectedScale?.label || "", 95, 168);

    doc.text("Initial User Volume", 15, 175);
    doc.text(selectedUsers?.label || "", 95, 175);

    doc.text("Expected Launch Timeline", 15, 182);
    doc.text(selectedTimeline?.label || "", 95, 182);

    doc.text("Design Readiness", 15, 189);
    doc.text(selectedDesign?.label || "", 95, 189);

    // Features Section
    doc.setTextColor(darkGray);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("3. CHOSEN CAPABILITIES", 15, 205);
    doc.setDrawColor(229, 231, 235);
    doc.line(15, 208, 195, 208);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(textGray);
    const chosenFeaturesStr = selectedFeatures.map(f => f.label).join(", ");
    const splitFeatures = doc.splitTextToSize(chosenFeaturesStr, 175);
    doc.text(splitFeatures, 15, 215);

    // 5. Disclaimer & Contact info
    doc.setTextColor(darkGray);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("4. METHODOLOGY ASSUMPTIONS & NEXT STEPS", 15, 235);
    doc.setDrawColor(229, 231, 235);
    doc.line(15, 238, 195, 238);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(textGray);
    const assumptionText = "Disclaimer: This report is a calculated rough estimation model based on average software development engineering weights in the US. It is not an official proposal or binding quote. Actual costs vary based on integrations, final security requirements, dynamic database scopes, and post-launch maintenance strategies. We highly recommend a 30-minute discovery session with our senior engineers to define your specifications.";
    const splitAssumption = doc.splitTextToSize(assumptionText, 180);
    doc.text(splitAssumption, 15, 244);

    // Contact Box
    doc.setFillColor(243, 244, 246);
    doc.rect(15, 258, 180, 20, "F");
    doc.setTextColor(darkGray);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.text("Schedule Your Free Strategy Audit:", 20, 267);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text("Connect directly via hello@eduratech.com or book online at https://www.eduratech.com/contact.", 20, 273);

    doc.save(`EduraTech_Estimate_${company.replace(/\s+/g, "_")}.pdf`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl border border-white/5 bg-[#0a0a0c]/80 backdrop-blur-2xl p-6 md:p-12 relative overflow-hidden shadow-[0_30px_100px_-20px_rgba(59,130,246,0.15)]">
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/5 blur-3xl pointer-events-none" />

      {/* Progress Bar */}
      <div className="mb-10 relative">
        <div className="flex justify-between items-center text-xs font-mono tracking-widest text-zinc-500 uppercase mb-4">
          <span>Progress</span>
          <span>Step {step} of 4</span>
        </div>
        <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: "25%" }}
            animate={{ width: `${(step / 4) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Project Type */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-3">
                What are you looking to build?
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                Select the primary model or system that best matches your target project intent.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectTypes.map((type) => {
                const isSelected = selectedType?.id === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type)}
                    className={`p-6 text-left rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                      isSelected
                        ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                        : "border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                        Option
                      </span>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                      {type.label}
                    </h3>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Step 2: Complexity / Features */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-3">
                What capabilities will your project need?
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                Select all features that apply to your product. You can choose multiple options.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feat) => {
                const isSelected = !!selectedFeatures.find((f) => f.id === feat.id);
                return (
                  <button
                    key={feat.id}
                    onClick={() => handleFeatureToggle(feat)}
                    className={`p-5 text-left rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                      isSelected
                        ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                        : "border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                        Feature
                      </span>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors">
                      {feat.label}
                    </h3>
                  </button>
                );
              })}
              {/* Not Sure option */}
              <button
                onClick={() => setSelectedFeatures([{ id: "not-sure", label: "Not sure", addedMinCost: 0, addedMaxCost: 0, addedWeeks: 0 }])}
                className={`p-5 text-left rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  selectedFeatures.find(f => f.id === "not-sure")
                    ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                    : "border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                    Unsure
                  </span>
                </div>
                <h3 className="text-base font-semibold text-zinc-400 group-hover:text-white transition-colors">
                  Not Sure
                </h3>
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Scale */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-10"
          >
            {/* Scale Options */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-semibold tracking-tighter text-white mb-2">
                  What level of scale are you expecting?
                </h2>
                <p className="text-zinc-400 font-light text-sm">
                  Choose the category that matches your deployment scope.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {scales.map((sc) => {
                  const isSelected = selectedScale?.id === sc.id;
                  return (
                    <button
                      key={sc.id}
                      onClick={() => setSelectedScale(sc)}
                      className={`p-5 text-left rounded-xl border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-white/5 bg-white/[0.02] hover:border-white/10"
                      }`}
                    >
                      <h3 className="text-sm font-semibold text-white">{sc.label}</h3>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Users Options */}
            <div className="space-y-6 pt-6 border-t border-white/5">
              <div>
                <h2 className="text-3xl font-semibold tracking-tighter text-white mb-2">
                  How many users do you expect initially?
                </h2>
                <p className="text-zinc-400 font-light text-sm">
                  Estimate the volume of concurrent sessions or users.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {usersOptions.map((us) => {
                  const isSelected = selectedUsers?.id === us.id;
                  return (
                    <button
                      key={us.id}
                      onClick={() => setSelectedUsers(us)}
                      className={`p-5 text-left rounded-xl border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-white/5 bg-white/[0.02] hover:border-white/10"
                      }`}
                    >
                      <h3 className="text-sm font-semibold text-white">{us.label}</h3>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 4: Timeline */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-10"
          >
            {/* Launch Timeline */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-semibold tracking-tighter text-white mb-2">
                  When would you like to launch?
                </h2>
                <p className="text-zinc-400 font-light text-sm">
                  Rushed timelines require heavier development resources.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {timelines.map((tm) => {
                  const isSelected = selectedTimeline?.id === tm.id;
                  return (
                    <button
                      key={tm.id}
                      onClick={() => setSelectedTimeline(tm)}
                      className={`p-5 text-left rounded-xl border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-white/5 bg-white/[0.02] hover:border-white/10"
                      }`}
                    >
                      <h3 className="text-sm font-semibold text-white">{tm.label}</h3>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Design Spec */}
            <div className="space-y-6 pt-6 border-t border-white/5">
              <div>
                <h2 className="text-3xl font-semibold tracking-tighter text-white mb-2">
                  Do you already have a design/specification?
                </h2>
                <p className="text-zinc-400 font-light text-sm">
                  Complete specs and wireframes accelerate the process.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {designs.map((ds) => {
                  const isSelected = selectedDesign?.id === ds.id;
                  return (
                    <button
                      key={ds.id}
                      onClick={() => setSelectedDesign(ds)}
                      className={`p-5 text-left rounded-xl border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-white/5 bg-white/[0.02] hover:border-white/10"
                      }`}
                    >
                      <h3 className="text-sm font-semibold text-white">{ds.label}</h3>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* Results / Lead Capture Step */}
        {step === 5 && (
          <motion.div
            key="step5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Estimate Summary card */}
            <div className="p-8 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/15 blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-primary mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold tracking-wider uppercase">Calculated Project Estimate</span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">Estimated Project Range</h3>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                    ${minCost.toLocaleString()} – ${maxCost.toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 md:border-l md:border-white/10 md:pl-8">
                  <div>
                    <h4 className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Timeline</h4>
                    <p className="text-xl font-bold text-white">{minWeeks}–{maxWeeks} weeks</p>
                  </div>
                  <div>
                    <h4 className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Complexity</h4>
                    <p className="text-xl font-bold text-white">{complexity}</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-500 font-light mt-8 leading-relaxed">
                *This is an approximate valuation model based on project configurations. Actual timeline and final project complexity may adjust after a full technical specification discovery.
              </p>
            </div>

            {/* Lead Capture Form */}
            {!formSubmitted ? (
              <div className="space-y-8 pt-8 border-t border-white/5">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                    Want the detailed breakdown?
                  </h2>
                  <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                    Get a detailed estimate report with your estimated budget, timeline, project complexity and recommended next steps.
                  </p>
                </div>

                <form onSubmit={handleSubmitLead} className="space-y-6">
                  {formError && (
                    <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-sm font-medium">
                      {formError}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-zinc-400">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-5 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-white focus:outline-none focus:border-primary transition-colors font-light text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-xs font-mono uppercase tracking-widest text-zinc-400">Business / Company Name *</label>
                      <input
                        type="text"
                        id="company"
                        name="Company"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Acme Corp"
                        className="w-full px-5 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-white focus:outline-none focus:border-primary transition-colors font-light text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-zinc-400">Work Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full px-5 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-white focus:outline-none focus:border-primary transition-colors font-light text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-mono uppercase tracking-widest text-zinc-400">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-5 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-white focus:outline-none focus:border-primary transition-colors font-light text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="description" className="text-xs font-mono uppercase tracking-widest text-zinc-400">Additional Project Details (Optional)</label>
                    <textarea
                      id="description"
                      name="Message"
                      rows={3}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Briefly tell us about your goals, features, or integrations..."
                      className="w-full px-5 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-white focus:outline-none focus:border-primary transition-colors font-light text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_30px_rgba(59,130,246,0.3)] disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Get My Detailed Estimate"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 rounded-3xl border border-green-500/20 bg-green-500/5 backdrop-blur-xl text-center space-y-6"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto text-green-400">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Your Request Has Been Received!</h3>
                  <p className="text-zinc-400 font-light text-sm max-w-md mx-auto">
                    We have successfully cataloged your estimate requirements. You can now download your professional assessment report below.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <button
                    onClick={handleDownloadPDF}
                    className="px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF Report
                  </button>
                  
                  <a
                    href="/contact"
                    className="px-6 py-3.5 border border-white/10 text-white font-semibold rounded-xl hover:border-primary/50 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Discuss Your Project
                  </a>

                  <button
                    onClick={resetCalculator}
                    className="px-6 py-3.5 border border-white/5 text-zinc-400 font-medium rounded-xl hover:border-white/15 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Recalculate
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back / Continue Buttons */}
      {step < 5 && (
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/5">
          <button
            onClick={() => setStep(prev => Math.max(1, prev - 1))}
            disabled={step === 1}
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors disabled:opacity-30 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={() => setStep(prev => Math.min(5, prev + 1))}
            disabled={!canContinue()}
            className="px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-40 flex items-center gap-2 cursor-pointer"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
