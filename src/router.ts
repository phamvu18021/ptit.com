export const menus = [
  {
    path: "/", // the url
    title: "TRANG CHỦ",
  },

  {
    path: "#", // the url
    title: "NGÀNH HỌC",
    childs: [
      {
        path: "/nganh-cong-nghe-thong-tin",
        title: "Công nghệ thông tin",
      },
      {
        path: "/nganh-dien-tu-vien-thong",
        title: "Điện tử viễn thông",
      },
      {
        path: "/nganh-quan-tri-kinh-doanh",
        title: "Quản trị kinh doanh",
      },
    ],
  },

  {
    path: "/Tuyen-sinh", // the url
    title: "TUYỂN SINH",
  },
  {
    path: "/tin-tuc", // the url
    title: "TIN TỨC & SỰ KIỆN", // view rendered
  },

];
