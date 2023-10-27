"use client";

import { Loading } from "@/components/Loading";
import { useModal } from "@/components/ModalContext";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Banner = dynamic(() => import("./Banner").then((mod) => mod.Banner), {
  loading: () => <Loading />,
});

const Introduce = dynamic(
  () => import("./Introduce").then((mod) => mod.Introduce),
  {
    loading: () => <Loading />,
  }
);
const Different = dynamic(
  () => import("./Different").then((mod) => mod.Different),
  {
    loading: () => <Loading />,
  }
);
const Register = dynamic(
  () => import("./Register").then((mod) => mod.Register),
  {
    loading: () => <Loading />,
  }
);
const Procedure = dynamic(
  () => import("./Procedure").then((mod) => mod.Procedure),
  {
    loading: () => <Loading />,
  }
);
const Method = dynamic(() => import("./Method").then((mod) => mod.MethodDk), {
  loading: () => <Loading />,
});

const Event = dynamic(() => import("./Event").then((mod) => mod.Event), {
  loading: () => <Loading />,
});

export const Home = () => {
  const { isOpen, onOpen } = useModal();
  const [news, setNews] = useState<any[]>([]);
  const [notifis, setNotifis] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?type=news&page=1`, {
          next: { revalidate: 3 },
        });

        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts } = data;
        posts?.length && setNews([posts[0], posts[1], posts[2], posts[4]]);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?type=notifis&page=1`, {
          next: { revalidate: 3 },
        });

        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts } = data;
        posts?.length && setNotifis([posts[0], posts[1], posts[2], posts[4]]);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isOpen && onOpen) onOpen();
    }, 6000);

    return () => window.clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Banner />
      <Introduce />
      <Different />
      <Register />
      <Procedure />
      <Method />
      {isLoading && <Loading />}
      {!isLoading && <Event news={news} notifis={notifis} />}
      <Box
        pos={"fixed"}
        top={"50%"}
        right={"0"}
        transform={"translateY(-50%)"}
        className="CTA"
        zIndex={5}
      />
    </>
  );
};
