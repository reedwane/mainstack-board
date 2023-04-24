export type NavItem = {
  label: string;
  icon: string;
  url: string;
};
export type NavCategory = {
  label: string;
  links: [NavItem];
};

export const navConfig = [
  {
    label: "",
    links: [
      {
        label: "Dashboard",
        icon: "/icons/dashboard.svg",
        url: "#!",
      },
      {
        label: "Item 1",
        icon: "/icons/edit.svg",
        url: "#!",
      },
      {
        label: "Item 2",
        icon: "/icons/group.svg",
        url: "#!",
      },
      {
        label: "Item 3",
        icon: "/icons/hourglass.svg",
        url: "#!",
      },
    ],
  },
  {
    label: "OTHERS 1",
    links: [
      {
        label: "Item 4",
        icon: "/icons/photo.svg",
        url: "#!",
      },
      {
        label: "Item 5",
        icon: "/icons/delete.svg",
        url: "#!",
      },
    ],
  },
  {
    label: "OTHERS 2",
    links: [
      {
        label: "Item 6",
        icon: "/icons/subs.svg",
        url: "#!",
      },
      {
        label: "Item 7",
        icon: "/icons/file.svg",
        url: "#!",
      },
      {
        label: "Item 8",
        icon: "/icons/alarm.svg",
        url: "#!",
      },
    ],
  },
];
