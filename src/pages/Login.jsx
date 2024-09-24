// import { useState } from "react";

// function Login() {
//   const [currentState, setCurrentState] = useState("Sign Up");
//   function onsubmithandler(e) {
//     e.prventDefault();
//   }
//   return (
//     <form
//       onSubmit={onsubmithandler()}
//       className="flex felx-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gary-800"
//     >
//       <div className="inline-flex items-center gap-2 mb-2 mt-10">
//         <p className="prata-regular text-3xl">{currentState}</p>
//         <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
//       </div>
//       {currentState === "Login" ? (
//         ""
//       ) : (
//         <input
//           type="text"
//           className="w-full px-3 py-2 border border-gray-800"
//           placeholder="Name"
//           required
//         />
//       )}
//       <input
//         type="email"
//         className="w-full px-3 py-2 border border-gray-800"
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         className="w-full px-3 py-2 border border-gray-800"
//         placeholder="Password"
//         required
//       />
//       <div className="w-full flex justify-between text-sm mt-[-mpx]">
//         <p className="cursor-pointer">Forget your password</p>
//         {currentState === "Login" ? (
//           <p
//             onClick={() => setCurrentState("Sign Up")}
//             className="cursor-pointer"
//           >
//             Create account
//           </p>
//         ) : (
//           <p
//             className="cursor-pointer"
//             onClick={() => setCurrentState("Login")}
//           >
//             Login here
//           </p>
//         )}
//       </div>
//       <button className="bg-black text-white font-light px-8 py-2 mt-4">
//         {currentState === "Login" ? "Sign In " : "Sign Up"}
//       </button>
//     </form>
//   );
// }

// export default Login;
import { useState } from "react";

function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");

  // Form submit handler
  function onsubmithandler(e) {
    e.preventDefault();
    // Handle form submission logic
    console.log(`Submitted: ${currentState}`);
  }

  return (
    <form
      onSubmit={onsubmithandler}
      className="flex flex-col items-center w-[90%] sm:max-w-md m-auto mt-14 gap-4 text-gray-800"
    >
      {/* Title and underline */}
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl font-medium">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Name input - only visible during Sign Up */}
      {currentState === "Sign Up" && (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800 rounded-md"
          placeholder="Name"
          required
        />
      )}

      {/* Email input */}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800 rounded-md"
        placeholder="Email"
        required
      />

      {/* Password input */}
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800 rounded-md"
        placeholder="Password"
        required
      />

      {/* Links and state toggle */}
      <div className="w-full flex justify-between text-sm mt-[-5px]">
        <p className="cursor-pointer text-gray-500">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer text-blue-600"
          >
            Create account
          </p>
        ) : (
          <p
            className="cursor-pointer text-blue-600"
            onClick={() => setCurrentState("Login")}
          >
            Login here
          </p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4 rounded-md"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}

export default Login;
