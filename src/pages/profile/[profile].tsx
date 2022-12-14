import { useEffect } from "react";

import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import { trpc } from "../../utils/trpc";

const UserProfile: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const {
    data: { name, image, status } = {},
    refetch,
    isFetched,
  } = trpc.user.getUserById.useQuery(
    {
      userId: router.query.profile as string,
    },
    { enabled: false }
  );

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    refetch();
  }, [router.isReady, refetch]);

  return (
    <>
      <Head>
        <title>Gamr.app | Profile</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {session && (
          <main className="container mx-auto grid grid-cols-3 gap-y-2 p-4">
            {isFetched && (
              <>
                <div className="col-span-1 flex flex-col p-2">
                  <div className="max-h-[200px] max-w-[200px]">
                    <Image
                      src={image ? image : ""}
                      height={128}
                      width={128}
                      alt={`${name} profile picture.`}
                      className="rounded-full"
                      layout="responsive"
                    />
                  </div>
                  <span className="text-3xl font-extrabold leading-normal">
                    {name}
                  </span>
                </div>
                <div className="col-span-2 rounded border-2 border-neutral-800 p-2">
                  <p className="text-2xl font-bold leading-normal">Status</p>
                  <p className="break-normal font-medium">{status}</p>
                </div>
              </>
            )}
          </main>
        )}

        {!session && <main></main>}
      </Layout>
    </>
  );
};

export default UserProfile;
