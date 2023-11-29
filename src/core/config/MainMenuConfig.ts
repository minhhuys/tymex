export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  pages?: Array<MenuItem>;
  keenthemesIcon?: string;
  bootstrapIcon?: string;
  sub?: Array<MenuItem>;
}

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "Home",
        route: "/",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "About Us",
        route: "/",
        keenthemesIcon: "switch",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Our Team",
        route: "/",
      },
      {
        heading: "Marketplace",
        route: "/marketplace",
      },
      {
        heading: "Roadmap",
        route: "/",
      },
      {
        heading: "Whitepaper",
        route: "/",
      },
    ],
  },
];

export default MainMenuConfig;
