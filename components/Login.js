import React from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className='relative bg-black'>
      <h1>I am the Login Screen</h1>
      <div className='absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-4'>
        {/* <Image
          className='rounded-full object-cover'
          src='https://links.papareact.com/3pi'
          height={200}
          width={200}
        /> */}
        <button
          className='animate-pulse rounded-full border-4 border-blue-400 bg-black p-5 text-white'
          onClick={authenticate}
        >
          Login to the Metaverse
        </button>
      </div>
      <div className='h-screen w-full'>
        <Image
          src='https://links.papareact.com/55n'
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  );
}

export default Login;
