import { useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import { notificationsAtom, totalNotificationAtomSelector } from "./atoms";

function App() {
  const [networkCount, setnetworkCount] = useRecoilState(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationAtomSelector);

  // fetch
  // axios.get("https://sum-server.100xdevs.com/notifications")

  return (
    <>
      <button>Home</button>

      <button>
        My network ({networkCount.network >= 100 ? "99+" : networkCount.network}
        )
      </button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
