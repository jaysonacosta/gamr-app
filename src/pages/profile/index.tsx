import { useEffect, useState } from "react";

import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";

import Layout from "../../components/Layout";
import ProfileNav from "../../components/ProfileNav";
import { trpc } from "../../utils/trpc";

const Profile: NextPage = () => {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const mutation = trpc.message.updateMessage.useMutation();
  const { data: currentStatus, refetch } = trpc.message.getMessage.useQuery();

  const handleMessageUpdate = () => {
    mutation.mutate({ text: input });
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      refetch();
    }
  }, [mutation.isSuccess, refetch]);

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
            <div className="col-span-2 col-start-2">
              <ProfileNav />
            </div>
            <div className="col-span-1 flex flex-col p-2">
              <div className="max-h-[200px] max-w-[200px]">
                <Image
                  src={session.user?.image ? session.user.image : ""}
                  height={128}
                  width={128}
                  alt={`${session.user?.name} profile picture.`}
                  className="rounded-full"
                  layout="responsive"
                />
              </div>
              <span className="text-3xl font-extrabold leading-normal">
                {session.user?.name}
              </span>
            </div>
            <div className="col-span-2 rounded border-2 border-neutral-800 p-2">
              <p className="text-2xl font-bold leading-normal">Status</p>
              <p className="break-normal font-medium">
                {currentStatus && currentStatus}
              </p>
              <br />
              <div className="flex flex-col items-start">
                <input
                  className="rounded p-1 text-neutral-900"
                  type="text"
                  onChange={(e) => setInput(e.target.value)}
                />
                <br />
                <button
                  className="rounded bg-gray-700 p-2"
                  onClick={handleMessageUpdate}
                >
                  Enter
                </button>
              </div>
            </div>
          </main>
        )}

        {!session && <main></main>}
      </Layout>
    </>
  );
};

export default Profile;
