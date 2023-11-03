import { useNavigate } from "react-router-dom";
import { useRef } from "react";
export default function SignIn() {
  const navigate = useNavigate();
  const inputRef = useRef();
  const handleSignin = (e) => {
    e.preventDefault();
    if (inputRef.current.value) {
      window.localStorage.setItem("gmail", inputRef.current.value);
      navigate("/");
    }
    console.log(inputRef.current.value);
  };
  return (
    <div className="w-screen h-full flex justify-center items-center">
      <form
        className=" w-5/12 border border-black-600 rounded-lg p-10 flex flex-col gap-5 justify-center items-center"
        onSubmit={handleSignin}
      >
        <h1 className="text-3xl decoration-4">Signin</h1>
        <input
          ref={inputRef}
          className="w-full rounded-3xl p-4 border border-black-400 border-[3]"
          type="text"
          placeholder="Enter your email"
        />
        <div className="flex gap-3">
          <button
            className=" rounded-3xl py-2 px-5  border border-blue-400 hover:bg-blue-600 hover:text-white"
            onClick={() => navigate(-1)}
          >
            back
          </button>
          <button
            className=" rounded-3xl py-2 px-5  border border-blue-400 bg-blue-600 text-white  hover:bg-white hover:text-black"
            type="submit"
          >
            Signin
          </button>
        </div>
      </form>
    </div>
  );
}
