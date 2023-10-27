export type TMenus = {
  path: string;
  title: string;
  childs?: {
    path: string;
    title: string;
  }[];
}[];
export const menus = [
  {
    path: "/", // the url
    title: "TRANG CHỦ",
  },

  {
    path: "/nganh-hoc", // the url
    title: "NGÀNH HỌC",
  },

  {
    path: "/tuyen-sinh", // the url
    title: "TUYỂN SINH",
  },
  {
    path: "/tin-tuc", // the url
    title: "TIN TỨC & SỰ KIỆN", // view rendered
  },
];
