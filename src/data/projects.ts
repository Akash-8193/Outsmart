export const projectsData = [
  {
    slug: "inventory-management",
    title: "Inventory Management Software",
    category: "Logistics & Operations",
    overview: "Outsmart Technology's Inventory Management Software helps businesses track, manage, and optimize inventory operations with real-time visibility, automated workflows, and accurate stock control across multiple locations.",
    image: "/project_inventory.png",
    whyWeBuilt: [
      { title: "Stock Discrepancies", desc: "Manual counting leads to mismatch between physical and digital records.", num: "1" },
      { title: "Slow Order Fulfillment", desc: "Lack of real-time visibility delays processing and shipping times.", num: "2" },
      { title: "Overstocking & Wastage", desc: "Poor forecasting results in tied-up capital and expired goods.", num: "3" },
      { title: "Supplier Miscommunication", desc: "Disconnected communication channels cause delays in procurement.", num: "4" }
    ],
    coreModules: [
      { title: "Stock Management", icon: "box", desc: "Real-time tracking of all inbound and outbound stock movements." },
      { title: "Purchase & Supplier Management", icon: "banknote", desc: "Automate purchase orders and manage supplier communications." },
      { title: "Warehouse Tracking", icon: "warehouse", desc: "Multi-location warehouse visibility with bin-level tracking." },
      { title: "Barcode & SKU Management", icon: "barcode", desc: "Generate and scan barcodes for lightning-fast inventory counts." },
      { title: "Reports & Analytics", icon: "line-chart", desc: "Detailed insights into stock levels, valuations, and trends." },
      { title: "Alerts & Notifications", icon: "bell", desc: "Instant low-stock alerts to prevent fulfillment delays." }
    ]
  },
  {
    slug: "nbcc-complaint",
    title: "Complaint Management Software",
    category: "Custom Software",
    overview: "Outsmart Technology developed a custom Complaint Management Software for NBCC to streamline complaint registration, tracking, escalation, and resolution across departments with improved transparency and faster response times.",
    image: "/project_complaint.png",
    whyWeBuilt: [
      { title: "Lost Complaints", desc: "Paper-based and email complaints were frequently lost or ignored.", num: "1" },
      { title: "No Accountability", desc: "Without tracking, there was no way to hold specific departments accountable.", num: "2" },
      { title: "Slow Resolution Times", desc: "Manual routing of complaints caused severe bottlenecks.", num: "3" },
      { title: "Poor Citizen Experience", desc: "Lack of transparency left citizens frustrated and uninformed.", num: "4" }
    ],
    coreModules: [
      { title: "Complaint Registration", icon: "file-text", desc: "Multi-channel intake forms for citizens and staff." },
      { title: "Ticket Tracking", icon: "ticket", desc: "End-to-end visibility of complaint status and history." },
      { title: "Escalation Management", icon: "arrow-up-right", desc: "Auto-routing of overdue tickets to senior officials." },
      { title: "User Dashboard", icon: "layout-dashboard", desc: "Personalized views for administrators, agents, and users." },
      { title: "Reports & Analytics", icon: "pie-chart", desc: "Identify recurring issues and measure resolution times." },
      { title: "Notifications & Alerts", icon: "bell-ring", desc: "Automated SMS and email updates on ticket progress." }
    ]
  },
  {
    slug: "fovestta",
    title: "FOVESTTA HRMS",
    category: "Enterprise HRMS",
    overview: "Outsmart Technology's advanced human resource management platform designed to simplify workforce operations through automation, analytics, and employee engagement tools.",
    image: "/project_hrms.png",
    whyWeBuilt: [
      {
        title: "Manual Data Entry and Errors",
        desc: "Manual attendance, leave, and payroll management lead to mistakes and inefficiency.",
        num: "1"
      },
      {
        title: "Compliance Challenges",
        desc: "Keeping up with changing tax and labour regulations is difficult and risky.",
        num: "2"
      },
      {
        title: "Time-Consuming HR Processes",
        desc: "Routine administrative tasks consume valuable HR time and reduce productivity.",
        num: "3"
      },
      {
        title: "Lack of Transparency",
        desc: "Employees rely on HR for basic information, causing delays and dissatisfaction.",
        num: "4"
      },
      {
        title: "Data Silos & Reporting Issues",
        desc: "Scattered data makes reporting, analytics, and decision-making difficult.",
        num: "5"
      },
      {
        title: "Biometric Machine Reliability Issues",
        desc: "Biometric devices often face breakdowns, maintenance problems, and attendance tracking disruptions over time.",
        num: "6"
      }
    ],
    coreModules: [
      { title: "Attendance & Leave", icon: "calendar-clock", desc: "Biometric integration with automated leave calculations." },
      { title: "Payroll", icon: "coins", desc: "One-click payroll processing with automated tax compliance." },
      { title: "Recruitment", icon: "user-plus", desc: "Applicant tracking system from job posting to onboarding." },
      { title: "Employee Self-Service", icon: "user-cog", desc: "Mobile-friendly portal for pay slips, requests, and updates." },
      { title: "Performance Tracking", icon: "trending-up", desc: "KPI tracking, goal setting, and 360-degree reviews." },
      { title: "Reports & Analytics", icon: "bar-chart-3", desc: "Visual dashboards for attrition, headcount, and expenses." }
    ]
  },
  {
    slug: "supply-chain-erp",
    title: "Global Supply Chain ERP",
    category: "Custom Software",
    overview: "Outsmart Technology developed a comprehensive ERP solution for global logistics, featuring automated workflows and accurate stock control across multiple warehouse locations.",
    image: "/project_erp.png",
    whyWeBuilt: [
      { title: "Fragmented Systems", desc: "Using different software for warehousing, logistics, and finance created data silos.", num: "1" },
      { title: "Inefficient Routing", desc: "Manual route planning increased fuel costs and delivery times.", num: "2" },
      { title: "Lack of Tracking", desc: "Clients had no visibility into where their shipments were located.", num: "3" },
      { title: "Complex Vendor Management", desc: "Managing hundreds of third-party vendors manually was unsustainable.", num: "4" }
    ],
    coreModules: [
      { title: "Warehouse Operations", icon: "warehouse", desc: "Centralized control over cross-docking and storage." },
      { title: "Inventory Forecasting", icon: "trending-up", desc: "AI-driven demand prediction to optimize stock levels." },
      { title: "Supplier Portal", icon: "users", desc: "Secure access for vendors to update shipment status." },
      { title: "Route Optimization", icon: "map", desc: "Dynamic route planning to minimize fuel and transit time." },
      { title: "Order Fulfillment", icon: "package-check", desc: "Automated pick, pack, and ship workflows." },
      { title: "Real-time Tracking", icon: "truck", desc: "Live GPS integration for fleet and cargo monitoring." }
    ]
  },
  {
    slug: "multi-vendor-ecommerce",
    title: "Multi-Vendor E-Commerce",
    category: "Web Apps",
    overview: "Scalable digital platform built by Outsmart Technology that accelerates growth and modernizes retail operations with multi-vendor support, secure payments, and dynamic inventory.",
    image: "/project_ecommerce.png",
    whyWeBuilt: [
      { title: "Scalability Limits", desc: "Off-the-shelf platforms crashed during high-traffic sales events.", num: "1" },
      { title: "Vendor Onboarding Friction", desc: "Complex seller dashboards discouraged new merchants from joining.", num: "2" },
      { title: "Payment Nightmares", desc: "Splitting payments between the platform and vendors manually caused errors.", num: "3" },
      { title: "Poor Discovery", desc: "Customers couldn't easily find products across thousands of categories.", num: "4" }
    ],
    coreModules: [
      { title: "Vendor Dashboard", icon: "store", desc: "Independent portals for sellers to manage products and orders." },
      { title: "Order Management", icon: "shopping-cart", desc: "Centralized system to track split orders and fulfillment." },
      { title: "Payment Gateway Integration", icon: "credit-card", desc: "Secure, automated payout splitting and commission tracking." },
      { title: "Product Catalog", icon: "layout-grid", desc: "Infinite category depth with advanced search and filtering." },
      { title: "Reviews & Ratings", icon: "star", desc: "Verified customer feedback system for vendor accountability." },
      { title: "Analytics & Sales", icon: "bar-chart-4", desc: "Sales reports and conversion tracking for administrators." }
    ]
  },
  {
    slug: "patient-data-saas",
    title: "Patient Data Management SaaS",
    category: "Enterprise SaaS",
    overview: "A HIPAA-compliant patient data management and predictive analytics dashboard designed by Outsmart Technology to help healthcare providers streamline medical records and improve patient outcomes.",
    image: "/project_health.png",
    whyWeBuilt: [
      { title: "Data Security Risks", desc: "Legacy systems were vulnerable to breaches and failed HIPAA compliance.", num: "1" },
      { title: "Scattered Patient Histories", desc: "Doctors had to navigate fragmented systems to see full patient records.", num: "2" },
      { title: "High Admin Burden", desc: "Nurses spent more time doing paperwork than attending to patients.", num: "3" },
      { title: "Lack of Predictive Care", desc: "Hospitals couldn't proactively identify at-risk patients.", num: "4" }
    ],
    coreModules: [
      { title: "Electronic Health Records", icon: "file-heart", desc: "Secure, digitized patient histories accessible instantly." },
      { title: "Appointment Scheduling", icon: "calendar", desc: "Automated booking, reminders, and calendar sync." },
      { title: "Predictive Analytics", icon: "activity", desc: "AI models identifying patients at risk of readmission." },
      { title: "Billing & Invoicing", icon: "receipt", desc: "Integrated insurance claims and patient billing workflows." },
      { title: "Patient Portal", icon: "user-round", desc: "Secure access for patients to view labs and message doctors." },
      { title: "Compliance & Security", icon: "shield-check", desc: "End-to-end encryption ensuring strict HIPAA compliance." }
    ]
  }
];
