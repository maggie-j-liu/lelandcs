import useUser from "@/utils/useUser";
import firebase from "@/utils/firebase";
import { ReactNode } from "react";
const SignInButton = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { signInWithGoogle } = useUser();
  return (
    <button
      className={className}
      onClick={() =>
        signInWithGoogle(
          async (userCredential: firebase.auth.UserCredential) => {
            const user = userCredential.user;
            if (!user) return;
            if (userCredential.additionalUserInfo?.isNewUser) {
              const { token } = await user.getIdTokenResult();
              if (!user.photoURL) {
                await user.updateProfile({
                  photoURL: `https://robohash.org/${user.uid}?set=set4`,
                });
              }
              await fetch("/api/initUser", {
                method: "POST",
                body: JSON.stringify({
                  idToken: token,
                  name: user.displayName,
                  email: user.email,
                  photo: user.photoURL,
                }),
              });
            }
          }
        )
      }
    >
      {children}
    </button>
  );
};

export default SignInButton;
