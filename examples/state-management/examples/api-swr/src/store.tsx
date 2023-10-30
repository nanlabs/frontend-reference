import React, { useState, createContext, useContext } from "react";
import { useInterval } from "react-use";
import useSWR from "swr";

interface ApplicationState {
  seconds: number;
  running: boolean;
  names?: string[];
  onToggle: () => void;
}

const ApplicationContext = createContext<ApplicationState>({
  seconds: 0,
  running: false,
  onToggle: () => {},
});

export const fetcher = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      "Common-header": "this is an example"
    },
  });
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    // Attach extra info to the error object.
    throw new Error(res.statusText, { cause: await res.json() })
  }
  return res.json();
};

const useApplicationState = (): ApplicationState => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const { data } = useSWR<{names:string[]}>("names.json", fetcher);

  useInterval(
    () => setSeconds((seconds) => seconds + 0.1),
    running ? 100 : null
  );

  return {
    seconds,
    running,
    onToggle: () => setRunning((running) => !running),
    names: data?.names,
  };
};

const StopwatchContextProvider: React.FunctionComponent = ({ children }) => (
  <ApplicationContext.Provider value={useApplicationState()}>
    {children}
  </ApplicationContext.Provider>
);

export const ApplicationContextProvider: React.FunctionComponent = ({
  children,
}) => (
    <StopwatchContextProvider>{children}</StopwatchContextProvider>
);

export const useApplicationContext = () => useContext(ApplicationContext);
