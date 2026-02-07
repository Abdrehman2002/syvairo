import {
  HiOutlineChatBubbleLeftRight,
  HiOutlinePhone,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineBanknotes,
  HiOutlineRocketLaunch,
  HiOutlineShare,
  HiOutlineStar,
  HiOutlineExclamationTriangle,
  HiOutlineCalendarDays,
  HiOutlineIdentification,
  HiOutlineUserPlus,
  HiOutlineClock,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentText,
  HiOutlineTruck,
  HiOutlineArchiveBox,
  HiOutlineMicrophone,
  HiOutlineBuildingOffice2,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlinePresentationChartLine,
  HiOutlineLanguage,
  HiOutlineCog,
  HiOutlineSquares2X2,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineScale,
} from "react-icons/hi2";

export const TIERS = [
  {
    id: "tier1",
    title: "TIER-1 · SMB Ready-to-Launch",
    subtitle: "Quick-to-deploy solutions for small & medium businesses.",
    color: "cyan",
    sections: [
      {
        title: "Communication & Support",
        agents: [
          {
            name: "WhatsApp AI Receptionist",
            desc: "24/7 chat handling, bookings, reminders & instant answers",
            icon: HiOutlineChatBubbleLeftRight,
            badge: "Top Seller",
          },
          {
            name: "AI Voice Call Center",
            desc: "Automated inbound & outbound calls with reminders",
            icon: HiOutlinePhone,
          },
          {
            name: "Website RAG Knowledge Bot",
            desc: "Instant answers using company documents",
            icon: HiOutlineBuildingOffice2,
          },
          {
            name: "Multi-Language Chatbots",
            desc: "Arabic, English & other languages",
            icon: HiOutlineGlobeAlt,
          },
        ],
      },

      {
        title: "Sales & Marketing Automation",
        agents: [
          {
            name: "Lead Qualification Agent",
            desc: "Scores, prioritizes & follows up leads",
            icon: HiOutlineBriefcase,
          },
          {
            name: "Automated Quote / Pricing Agent",
            desc: "Instant quotes & PDFs",
            icon: HiOutlineBanknotes,
          },
          {
            name: "Sales Follow-Up & Re-Activation",
            desc: "Re-engages dormant leads",
            icon: HiOutlineRocketLaunch,
          },
          {
            name: "Abandoned Lead Recovery Agent",
            desc: "Recovers lost inquiries",
            icon: HiOutlineShare,
          },
          {
            name: "Social Media Posting Agent",
            desc: "Schedules & posts content automatically",
            icon: HiOutlineStar,
          },
        ],
      },

      {
        title: "Customer Experience",
        agents: [
          {
            name: "Review & Promotion Agent",
            desc: "Collects reviews & sends coupons",
            icon: HiOutlineStar,
            badge: "Reward",
          },
          {
            name: "Complaint & Return Assistance",
            desc: "Handles complaints & follow-ups",
            icon: HiOutlineExclamationTriangle,
          },
          {
            name: "Booking & Appointment Management",
            desc: "Schedules & sends reminders",
            icon: HiOutlineCalendarDays,
          },
        ],
      },

      {
        title: "HR & Internal Workflow",
        agents: [
          {
            name: "Resume Screening AI",
            desc: "Auto shortlisting of candidates",
            icon: HiOutlineIdentification,
          },
          {
            name: "Employee Onboarding Bot",
            desc: "Step-by-step onboarding",
            icon: HiOutlineUserPlus,
          },
          {
            name: "Attendance & Shift Automation",
            desc: "Tracks attendance & shifts",
            icon: HiOutlineClock,
          },
          {
            name: "HR FAQ / Policy Bot",
            desc: "Instant HR answers",
            icon: HiOutlineClipboardDocumentList,
          },
        ],
      },

      {
        title: "Operations & Efficiency",
        agents: [
          {
            name: "Internal RAG Assistant",
            desc: "Answers SOP & workflow questions",
            icon: HiOutlineDocumentText,
          },
          {
            name: "Invoice Reading & Processing",
            desc: "Automated approvals",
            icon: HiOutlineDocumentMagnifyingGlass,
          },
          {
            name: "Order & Delivery Management",
            desc: "Tracks orders & deliveries",
            icon: HiOutlineTruck,
          },
          {
            name: "Inventory Alerts",
            desc: "Low-stock alerts & reorders",
            icon: HiOutlineArchiveBox,
          },
          {
            name: "AI Meeting Notes",
            desc: "Turns meetings into tasks",
            icon: HiOutlineMicrophone,
          },
        ],
      },

      {
        title: "Industry-Specific Solutions",
        agents: [
          {
            name: "Real Estate Lead Bot",
            desc: "Matches buyers with listings",
            icon: HiOutlineBuildingOffice2,
          },
          {
            name: "Clinic Patient Appointment AI",
            desc: "Manages patient bookings",
            icon: HiOutlineHeart,
          },
          {
            name: "Restaurant Order & Menu Bot",
            desc: "Orders & menu updates",
            icon: HiOutlineShoppingCart,
          },
          {
            name: "Insurance / Finance Quote AI",
            desc: "Policy & finance quotes",
            icon: HiOutlineShieldCheck,
          },
        ],
      },

      {
        title: "Data & Analytics",
        agents: [
          {
            name: "Data Analyst Bot",
            desc: "Generates insights",
            icon: HiOutlineChartBar,
          },
          {
            name: "Automated Dashboard Generator",
            desc: "Creates KPI dashboards",
            icon: HiOutlinePresentationChartLine,
          },
          {
            name: "Language Translation Agent",
            desc: "Instant multi-language translation",
            icon: HiOutlineLanguage,
          },
          {
            name: "Build Custom Agent",
          },
        ],
      },
    ],
  },

  {
    id: "tier2",
    title: "TIER-2 · Mid-to-Large Enterprise",
    subtitle: "Scalable automation for growing businesses.",
    color: "green",
    sections: [
      {
        agents: [
          {
            name: "Multi-Agent Business Assistant",
            desc: "Manages multiple workflows",
            icon: HiOutlineSquares2X2,
          },
          {
            name: "Department Automation Suite",
            desc: "HR / Finance / Sales bots",
            icon: HiOutlineCog,
          },
          {
            name: "AI Back-Office Workflows",
            desc: "Approvals & documents",
            icon: HiOutlineDocumentText,
          },
          {
            name: "Automated Power BI Reporting",
            desc: "Live dashboards",
            icon: HiOutlineChartBar,
          },
          {
            name: "Financial Forecasting AI",
            desc: "Predicts sales & trends",
            icon: HiOutlineBanknotes,
          },
          {
            name: "Enterprise CRM AI Pipeline",
            desc: "Lead & customer automation",
            icon: HiOutlineBriefcase,
          },
          {
            name: "Contract & OCR Extraction AI",
            desc: "Reads & extracts documents",
            icon: HiOutlineDocumentMagnifyingGlass,
          },
          {
            name: "Build Custom Agent",
          },
        ],
      },
    ],
  },

  {
    id: "tier3",
    title: "TIER-3 · Enterprise Custom Intelligence",
    subtitle: "Executive-level AI orchestration & control.",
    color: "orange",
    sections: [
      {
        agents: [
          {
            name: "Enterprise AI Brain",
            desc: "Central intelligence hub",
            icon: HiOutlineBuildingOffice2,
          },
          {
            name: "AI COO Decision Engine",
            desc: "Executive KPI monitoring",
            icon: HiOutlinePresentationChartLine,
          },
          {
            name: "Audit & Compliance Automation",
            desc: "Tracks compliance gaps",
            icon: HiOutlineScale,
          },
          {
            name: "Legal / Contract Understanding AI",
            desc: "Reads legal documents",
            icon: HiOutlineDocumentMagnifyingGlass,
          },
          {
            name: "Inter-Department Orchestration",
            desc: "Coordinates all agents",
            icon: HiOutlineSquares2X2,
          },
          {
            name: "Autonomous AI Control Tower",
            desc: "Enterprise-wide supervision",
            icon: HiOutlineCog,
          },
          {
            name: "Build Custom Agent",
          },
        ],
      },
    ],
  },
];
