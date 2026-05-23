import { ClipboardCheck, Droplets, Leaf, Microscope, Package, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  details: string[];
  color: string;
}

export const services: ServiceData[] = [
  {
    slug: 'wastewater-management',
    icon: Droplets,
    title: 'Sustainable Water Management',
    description: 'End-to-end turnkey solutions for industrial and municipal wastewater treatment — from ETP/STP design and installation to ZLD systems, RO/UF plants, rainwater harvesting, and long-term AMC services.',
    features: ['ETP & STP Systems', 'Zero Liquid Discharge (ZLD)', 'RO & UF Plants', 'Annual Maintenance (AMC)'],
    details: [
      'Effluent Treatment Plant (ETP): We design and implement efficient Effluent Treatment Plants (ETP) to treat industrial wastewater, ensuring compliance with environmental regulations while enabling safe discharge or reuse. Our solutions focus on optimizing treatment performance, reducing operational costs, and supporting sustainable industrial practices.',
      'Sewage Treatment Plant (STP): Our Sewage Treatment Plant (STP) solutions are designed to effectively treat domestic wastewater using advanced and reliable technologies. We help organizations achieve regulatory compliance while promoting water reuse for landscaping, flushing, and other non-potable applications.',
      'Zero Liquid Discharge (ZLD): We provide comprehensive Zero Liquid Discharge (ZLD) systems that eliminate wastewater discharge by recovering and reusing water within the process. Our solutions help industries achieve maximum water efficiency, minimize environmental impact, and meet stringent regulatory standards.',
      'DM Plant (Demineralization Plant): Our Demineralization (DM) Plants are engineered to remove dissolved salts and impurities, delivering high-purity water for industrial applications. We ensure consistent performance, operational efficiency, and long-term reliability for critical processes.',
      'RO & UF Plant (Reverse Osmosis & Ultrafiltration): We offer advanced Reverse Osmosis (RO) and Ultrafiltration (UF) systems for effective water purification and treatment. These technologies help remove contaminants, improve water quality, and enable reuse across various industrial and commercial applications.',
      'Rainwater Harvesting: Our rainwater harvesting solutions are designed to capture, store, and recharge groundwater, helping organizations reduce dependency on external water sources. We promote sustainable water conservation practices that contribute to long-term water security.',
      'Annual Maintenance Contracts (AMC): We provide comprehensive AMC services for all water treatment systems, ensuring smooth operation, regular monitoring, and timely maintenance. Our support helps enhance system efficiency, extend equipment life, and ensure uninterrupted compliance and performance.'
    ],
    color: 'var(--color-secondary)',
  },
  {
    slug: 'compliance-approvals',
    icon: ClipboardCheck,
    title: 'MPCB Consent & Environmental Compliance',
    description: 'We provide end-to-end support for MPCB consents and environmental compliance, ensuring smooth approvals and full regulatory adherence. Our expertise covers a wide range of authorizations, enabling businesses to navigate complex regulations with ease.',
    features: ['CTE / CTO / CTR Consents', 'Waste Authorizations', 'EPR Registration & Trading', 'Regulatory Returns Filing'],
    details: [
      'MPCB Consents: Expert assistance for Consent to Establish (CTE), Consent to Operate (CTO), and seamless Consent Renewal services for all industrial categories.',
      'Waste Authorizations: Comprehensive authorizations for E-Waste, Hazardous Waste, Bio-medical Waste, Plastic Waste, and Battery Recyclers.',
      'Regulatory Returns: Timely filing of E-Waste Return (Form 3), Hazardous Waste Annual Return (Form 4), and Environmental Status Reports (Form 5).',
      'Specialized Compliance: End-to-end support for Extended Producer Responsibility (EPR) registration, Online Logbook Systems, and Battery Return services.',
      'Compliance Assurance: Accurate documentation, Online Manifest Submission (Form 10), and complete regulatory adherence to streamline your business operations.'
    ],
    color: 'var(--color-primary)',
  },
  {
    slug: 'esg-sustainability',
    icon: Leaf,
    title: 'ESG & Sustainability Services',
    description: 'Comprehensive ESG and sustainability solutions — from GHG accounting, gap analysis, and materiality assessments to BRSR/GRI reporting, net-zero strategy, and regulatory compliance integration.',
    features: ['ESG Assessment & Gap Analysis', 'GHG Accounting (Scope 1, 2, 3)', 'Net Zero & Decarbonization', 'BRSR / GRI Reporting'],
    details: [
      'Assessment: We begin by evaluating your current environmental and sustainability performance to identify gaps, risks, and opportunities for improvement. Includes ESG Assessment & Gap Analysis, GHG Emissions Assessment, Resource & Energy Efficiency Analysis, Regulatory Compliance Review, and Materiality Assessment.',
      'Reporting & Strategy: We support organizations in developing robust sustainability frameworks and reports aligned with global standards and regulatory requirements. Includes ESG Strategy & Framework Development, Sustainability Reporting (BRSR, GRI, etc.), Net Zero & Decarbonization Strategy, Policy Development & Implementation, and Environmental Compliance Integration.'
    ],
    color: 'var(--color-primary)',
  },
  {
    slug: 'carbon-sustainability',
    icon: TrendingUp,
    title: 'Encash your Carbon',
    description: 'Convert your sustainability commitments into measurable financial value — through carbon project development, carbon credit lifecycle management, circular economy solutions, and IREC services.',
    features: ['Carbon Project Development', 'Carbon Credit Management', 'Circular Economy & EPR', 'IREC Services'],
    details: [
      'Carbon Project Development: We design, develop, and implement high-integrity carbon credit projects across nature-based and technology-driven solutions. Includes Feasibility Studies & Baseline Assessment, Project Design & Methodology Selection, Regulatory Approvals & Government Liaisoning, and Community Engagement & Implementation.',
      'Carbon Credit Management & Monetization: We provide end-to-end carbon credit lifecycle management, enabling organizations to transform sustainability initiatives into tradable financial assets. Includes Monitoring, Reporting & Verification (MRV), Certification & Issuance, Carbon Credit Trading & Sales Strategy, and Global Buyer Access.',
      'Circular Economy & Environmental Compliance: We help organizations navigate complex environmental regulations while unlocking value through circular economy solutions. Includes Plastic Credit Solutions and Extended Producer Responsibility (EPR) Advisory & Trading.',
      'Renewable Energy Certificate (IREC) Services: We support renewable energy producers and organizations in registering and trading International Renewable Energy Certificates (IRECs). Includes IREC Registration & Documentation, Compliance & Verification Support, and IREC Trading & Monetization.'
    ],
    color: 'var(--color-primary)',
  },
  {
    slug: 'environmental-monitoring',
    icon: Microscope,
    title: 'Environmental Monitoring',
    description: 'We provide comprehensive environmental monitoring solutions to help organizations track, manage, and comply with regulatory standards while ensuring environmental protection and operational efficiency.',
    features: ['Air Quality Monitoring', 'Water & Wastewater Analysis', 'Noise Level Monitoring', 'Soil & Groundwater Testing'],
    details: [
      'Air Quality Monitoring: We offer comprehensive Ambient Air Quality (AAQ) and Stack Emission Monitoring to help industries ensure compliance with regulatory standards and minimize environmental impact.',
      'Water & Wastewater Analysis: Our precise testing and analysis of water and wastewater help organizations monitor effluent quality, ensure safe discharge, and optimize treatment plant performance.',
      'Noise Level Monitoring: We conduct ambient noise level monitoring and occupational health noise assessments to maintain safe working environments and regulatory compliance.',
      'Soil & Groundwater Testing: We provide detailed soil quality testing and groundwater analysis to detect contamination, assess environmental risks, and ensure safe industrial operations.',
      'Emission & Effluent Monitoring: Continuous and periodic monitoring of emissions and effluents, combined with advanced data-driven insights, to help businesses proactively manage their environmental footprint.',
      'Holistic Approach: Our approach combines advanced monitoring techniques with regulatory expertise to ensure precise assessments and timely compliance, improving overall sustainability performance.'
    ],
    color: 'var(--color-secondary)',
  },
  {
    slug: 'industrial-trading',
    icon: Package,
    title: 'Industrial Chemicals & Equipment',
    description: 'Supply of high-quality water treatment chemicals, laboratory equipment, industrial safety products, CEMS systems, and environmental display boards for treatment plants and industries.',
    features: ['Water Treatment Chemicals', 'Laboratory Equipment', 'Safety Products & PPE', 'CEMS & Display Boards'],
    details: [
      'Treatment Chemicals: Supply of high-quality RO Chemicals (Antiscalants, Membrane Cleaners) and ETP/STP Chemicals (Coagulants, Flocculants, pH Adjusters).',
      'Industrial Chemicals: Specialized Boiler and Softener treatment chemicals designed for optimal performance, efficiency, and equipment longevity.',
      'Laboratory & Safety: Comprehensive range of Laboratory Testing Equipment, Instruments, and Industrial Safety Products (PPE) for industrial use.',
      'Plant Consumables: Reliable supply of spare parts, consumables, and CEMS systems for all types of water and wastewater treatment plants.'
    ],
    color: 'var(--color-primary)',
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}
