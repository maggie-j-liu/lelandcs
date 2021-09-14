import useUser from "@/utils/useUser";
import firebase from "@/utils/firebase";
import Image from "next/image";
const Auth = () => {
  const { user, logout, signInWithGoogle } = useUser();
  if (!user) {
    return (
      <button
        onClick={() =>
          signInWithGoogle(
            async (userCredential: firebase.auth.UserCredential) => {
              const user = userCredential.user;
              if (!user) return;
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
          )
        }
      >
        Sign in with Google
      </button>
    );
  } else {
    return (
      <div>
        <div className={"w-6 h-6 relative inline-block"}>
          <Image
            src={user.photoURL as string}
            layout="fill"
            objectFit="contain"
          />
        </div>
        {user.displayName}
        {" | "}
        <button onClick={() => logout()}>Sign Out</button>
      </div>
    );
  }
};

export default Auth;
