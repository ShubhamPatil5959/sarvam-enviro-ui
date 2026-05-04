import { ClipboardCheck, Droplets, Leaf, Microscope, Package } from 'lucide-react';
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
    title: 'Wastewater Management',
    description: 'End-to-end turnkey solutions for industrial and municipal wastewater treatment — from design and installation to commissioning and long-term maintenance.',
    features: ['ETP & STP Systems', 'Zero Liquid Discharge (ZLD)', 'Rainwater Harvesting', 'DM & RO Plants'],
    details: [
      'Effluent Treatment Plant (ETP) — Design, Installation & Commissioning',
      'Sewage Treatment Plant (STP) for residential, commercial & industrial use',
      'Zero Liquid Discharge (ZLD) Systems',
      'Demineralization (DM) Plant Solutions',
      'Condensate Polishing Unit (CPU)',
      'Common Effluent Treatment Plant (CETP)',
      'Rainwater Harvesting System Design & Installation',
      'Operation & Maintenance (O&M) of Water Treatment Plants',
      'Water Audit & Conservation Planning'
    ],
    color: 'var(--color-secondary)',
  },
  {
    slug: 'compliance-approvals',
    icon: ClipboardCheck,
    title: 'Compliance & Approvals',
    description: 'Complete documentation and regulatory approval support to help industries maintain full compliance with state and central environmental authorities.',
    features: ['CTE / CTO / CTR Consents', 'Environmental Authorizations', 'EPR Registration', 'E-Waste & Battery Returns'],
    details: [
      'Consent to Establish (CTE) from State Pollution Control Board',
      'Consent to Operate (CTO) & Consent to Renewal (CTR)',
      'Environmental Clearance (EC) from MoEFCC / SEIAA',
      'Hazardous Waste Management Authorization',
      'Bio-Medical Waste Authorization',
      'Extended Producer Responsibility (EPR) Registration',
      'E-Waste and Battery Return Filings',
      'Annual Environmental Statement & Returns Filing',
      'CPCB / SPCB Online Portal Compliance'
    ],
    color: 'var(--color-primary)',
  },
  {
    slug: 'esg-sustainability',
    icon: Leaf,
    title: 'ESG & Sustainability Services',
    description: 'Comprehensive ESG and sustainability solutions — from carbon footprint assessments and GHG accounting to BRSR reporting and net-zero strategy development.',
    features: ['GHG Accounting (Scope 1, 2, 3)', 'ESG & Net-Zero Strategy', 'BRSR / GRI / CBAM Reporting', 'Life Cycle Assessment'],
    details: [
      'Life Cycle Assessment (LCA) & Product Carbon Footprint (PCF)',
      'GHG Accounting — Scope 1, Scope 2, Scope 3',
      'Water Audits & Resource Efficiency',
      'ESG Strategy Design & Implementation',
      'Net-Zero Strategy & Roadmap Development',
      'Sustainability Reporting — BRSR, GRI, CBAM',
      'Science Based Targets initiative (SBTi) Alignment',
      'Double Materiality Assessments',
      'Climate Action Planning for Industries'
    ],
    color: 'var(--color-primary)',
  },
  {
    slug: 'environmental-monitoring',
    icon: Microscope,
    title: 'Environmental Monitoring',
    description: 'Precise monitoring and testing of environmental parameters — water, air, soil, and noise — to ensure regulatory standards and proactive environmental management.',
    features: ['Air & Water Quality Testing', 'Stack Emission Monitoring', 'Noise Level Monitoring', 'Soil Testing & Analysis'],
    details: [
      'Ambient Air Quality Monitoring (AAQ)',
      'Stack Emission Monitoring & Analysis',
      'Water & Wastewater Quality Testing',
      'Ambient Noise Level Monitoring',
      'Soil Quality Testing & Analysis',
      'Occupational Health & Work Zone Monitoring',
      'DG Set Emission Testing',
      'Continuous Emission Monitoring Systems (CEMS) Support'
    ],
    color: 'var(--color-secondary)',
  },
  {
    slug: 'industrial-trading',
    icon: Package,
    title: 'Industrial Chemicals & Equipment',
    description: 'Supply of high-quality water treatment chemicals, laboratory equipment, industrial safety products, CEMS systems, and environmental display boards.',
    features: ['Water Treatment Chemicals', 'Laboratory Equipment', 'Safety Products & PPE', 'CEMS & Display Boards'],
    details: [
      'RO Chemicals — Antiscalants, Membrane Cleaners',
      'ETP & STP Chemicals — Coagulants, Flocculants, pH Adjusters',
      'Boiler & Softener Treatment Chemicals',
      'Laboratory Testing Equipment & Instruments',
      'Industrial Safety Products & Personal Protective Equipment (PPE)',
      'Continuous Emission Monitoring Systems (CEMS)',
      'Environmental Display Boards (LED)',
      'Spare Parts & Consumables for Treatment Plants'
    ],
    color: 'var(--color-primary)',
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}
