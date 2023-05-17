import { useAtomValue } from "jotai";
import type { NextPage } from "next";
import { activeChatAtom } from "../state/common.state";

const Home: NextPage = () => {
  const activeChat = useAtomValue(activeChatAtom);
  return (
    <main>
      Main conent
      {activeChat ?? ""}
    </main>
  );
};

export default Home;
