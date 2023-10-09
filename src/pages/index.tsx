import ErrorBoundary from "@/components/ErrorBoundary";
import { Loading } from "@/components/Loading";
import { Home } from "@/features/home";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const api_url = process.env.API_URL || "";
    const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";
    if (hasSSL === "false") process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

    //get all categories
    // const resCats = await fetch(`${api_url}/categories`, {
    //   next: { revalidate: 3 },
    // });
    // const cats: any[] = (await resCats.json()) || [];
    // const newCat = cats?.find((cat) => cat.name === "Tin Tức");
    const idNew = 216;
    // const notifiCat = cats?.find((cat) => cat.name === "Thông báo");
    const idNotifi = 219;

    //get posts category==='tin-tuc'
    const resNews = await fetch(
      `${api_url}/posts?_embed&per_page=2&status=publish&page=${1}&categories=${idNew}`,
      {
        next: { revalidate: 3 },
      }
    );
    const totalNews = resNews.headers.get("X-WP-Total");
    const news: any[] = (await resNews?.json()) || [];
    const newsWithFeaturedImages: any[] =
      news?.length > 0
        ? news?.map((post: any) => {
            const featured_image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

            return {
              ...post,
              featured_image,
            };
          })
        : [];

    //get posts category==='thong-bao'
    const resNotifis = await fetch(
      `${api_url}/posts?_embed&per_page=2&status=publish&page=${1}&categories=${idNotifi}`,
      {
        next: { revalidate: 3 },
      }
    );
    const totalNotifis = resNotifis.headers.get("X-WP-Total");
    const notifis: any[] = (await resNotifis?.json()) || [];
    const notifisWithFeaturedImages: any[] =
      notifis?.length > 0
        ? notifis?.map((notifi: any) => {
            const featured_image =
              notifi._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

            return {
              ...notifi,
              featured_image,
            };
          })
        : [];
    return {
      props: {
        news: newsWithFeaturedImages || [],
        notifis: notifisWithFeaturedImages || [],
        totalNews: totalNews || "0",
        totalNotifis: totalNotifis || "0",
      },
      revalidate: 3,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        news: [],
        notifis: [],
        totalNews: "0",
        totalNotifis: "0",
      },
    };
  }
};

interface IHomepage {
  news: any[];
  totalNews: string;
  notifis: any[];
  totalNotifis: string;
}

const Page = (props: IHomepage) => {
  const { news, notifis } = props;
  return (
    <>
      <ErrorBoundary fallback={<Loading />}>
        <Home news={news || []} notifis={notifis || []} />
      </ErrorBoundary>
    </>
  );
};

export default Page;
