import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function login(e:any){

      e.preventDefault();

      try{

          await signInWithEmailAndPassword(
              auth,
              email,
              password
          );

          navigate("/dashboard");

      }

      catch{

          alert("Invalid Email or Password");

      }

  }

  return(

<div className="min-h-screen flex justify-center items-center bg-gray-100">

<form
onSubmit={login}
className="bg-white p-8 rounded-xl shadow-xl w-96 space-y-4"
>

<h1 className="text-3xl font-bold">
Admin Login
</h1>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="border w-full p-3 rounded"

/>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="border w-full p-3 rounded"

/>

<button

className="bg-black text-white w-full p-3 rounded"

>

Login

</button>

</form>

</div>

)

}