import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import firebase from "./firebase";
import { useRouter } from "next/router";

const useAuth = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const handleUser = (rawUser: firebase.User | null) => {
    if (rawUser) {
      setUser(rawUser);
      setLoading(false);
    } else {
      setUser(null);
      setLoading(false);
    }
  };
  const signInWithGoogle = (fn: Function) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(async (response) => {
        handleUser(response.user);
        if (fn) {
          await fn(response);
        }
        router.back();
      });
  };
  const createUserWithEmail = (
    email: string,
    password: string,
    username: string,
    fn: Function
  ) => {
    setLoading(true);
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (response) => {
        handleUser(response.user);
        if (fn) {
          await fn(response, username);
        }
        router.back();
      });
  };

  const signInWithEmail = (email: string, password: string) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user);
        router.back();
      });
  };
  const logout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(null));
  };
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);
    return () => {
      unsubscribe();
    };
  }, []);
  return {
    user,
    logout,
    loading,
    signInWithGoogle,
    signInWithEmail,
    createUserWithEmail,
  };
};
const UserContext = createContext<{
  user: firebase.User | null;
  logout: Function;
}>({ user: null, logout: () => {} });
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};
const useUser = () => useContext(UserContext);
export default useUser;
