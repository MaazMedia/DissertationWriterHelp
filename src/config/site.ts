import { type NavItem, type NavItemFooter } from "@/types"

const links = {
  github: "",
  twitter: "",
  linkedin: "",
  contact: "",
  Whatsapp: "https://wa.me/+923311400974",
  openGraphImage: "https://saasyland.com/images/opengraph-image.png",
}

export const siteConfig = {
  name: "Dissertation Writer Help",
  description:
    "Get expert Dissertation Writer Help in the UK! Our professional team provides comprehensive dissertation assistance, from topic selection to editing. Specializing in law, business, nursing, and more, we offer personalized support for academic success. Affordable and trusted by students across the UK.",
  links,
  url: "https://dissertationwriterhelp.co.uk",
  ogImage: links.openGraphImage,
  author: "Maria",
  hostingRegion: "lhr1",
  keywords: [
    // Dissertation Keywords
    "Dissertation Writer Help",
    "Buy Dissertation UK",
    "Law Dissertation Writing",
    "Dissertation Methodology Help",
    "Dissertation Proposal Writing",
    "Dissertation Statistics Help",
    "Pay For Dissertation",
    "Qualitative Data Dissertation",
    "Write My Dissertation UK",
    "Dissertation Abstract Writing",
    "Dissertation Literature Review Help",
    "Dissertation Discussion Writing",
    "Dissertation Writing Service in London",
    "Cheap Dissertation Writing Services",
    "Dissertation Assistance UK",
    "Professional Dissertation Help",
    "Top Dissertation Writers UK",
    "Dissertation Help in Law, Business, Nursing",
    "Custom Dissertation Writing Services UK",
    // Assignment Keywords
    "Assignment Writing Service London",
    "UK Assignment Help",
    "Professional Assignment Writers UK",
    "London Academic Writing Services",
    "Best Assignment Help London",
    "Custom Assignment Writing UK",
    "Affordable Assignment Writers London",
    "Top Assignment Writing Services UK",
    "Expert Assignment Assistance London",
    "Online Assignment Help UK",
    "Law Assignment Writing Service UK",
    "Business Assignment Help London",
    "Nursing Assignment Writers UK",
    "Engineering Assignment Help London",
    "Psychology Assignment Assistance UK",
    "Finance Assignment Writers London",
    "Economics Assignment Help UK",
    "Computer Science Assignment Writing London",
    "Marketing Assignment Help UK",
    "History Assignment Writing Service London",
  ],
  seoTitle:
    "Dissertation Writer Help - Expert Dissertation Assistance & Writing Services UK",
  seoMetaDescription:
    "Looking for reliable Dissertation Writer Help in the UK? Our expert writers offer full-service dissertation assistance, including topic selection, proposal writing, methodology, and editing. Trusted by UK students for quality, affordability, and expertise in law, business, nursing, and more.",
  socialMetaTitle:
    "Get Dissertation Writer Help from UK Experts - Trusted Dissertation Assistance",
  socialMetaDescription:
    "Need help with your dissertation? Contact our UK-based team for personalized support at every stage. Trusted by students in law, business, nursing, and more. Affordable, expert help is just a click away.",
  ogTitle:
    "Dissertation Writer Help - Professional Assistance for Academic Success in the UK",
  ogDescription:
    "Our Dissertation Writer Help service provides expert guidance for UK students. Get professional assistance in topic selection, proposal writing, and editing. Trusted by students across the UK for affordable and high-quality support.",
  navItems: [
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Features",
      href: "/features", // This page should further link to dissertation and assignment services.
    },

    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ] satisfies NavItem[],
  navItemsMobile: [
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Features",
      href: "/features", // This page should further link to dissertation and assignment services.
    },

    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ] satisfies NavItem[],
  navItemsFooter: [
    {
      title: "Company",
      items: [
        {
          title: "About Us",
          href: "/about",
          external: false,
        },
        {
          title: "Privacy Policy",
          href: "/privacy",
          external: false,
        },
        {
          title: "Terms of Service",
          href: "/tos",
          external: false,
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "FAQ",
          href: "/faq",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
      ],
    },
    {
      title: "Resources",
      items: [
        {
          title: "Blog",
          href: "/blog",
          external: false,
        },
      ],
    },
  ] satisfies NavItemFooter[],
}
