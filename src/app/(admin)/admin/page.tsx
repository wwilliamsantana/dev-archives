import Image from "next/image";


export default function admin() {
  return (
    <main className="h-screen w-full grid grid-cols-2 ">
      <div className="w-full h-1/2 flex items-center justify-center">
        <Image src={"/paste.png"} width={50} height={50} alt="" />
        <h1 className="font-bold text-2xl">ArchivesDevs</h1>
      </div>
      <div className="w-full h-full flex items-center justify-center flex-col bg-black/90 text-white">
        <form action="" className="flex flex-col w-1/2 gap-5">
          <span className="flex flex-col gap-3">
            <label htmlFor="" className="text-xs">Login</label>
            <input type="text" className="bg-white rounded px-2  text-black" />
          </span>
          <span className="flex flex-col gap-3">
            <label htmlFor="" className="text-xs">Password</label>
            <input type="password" className="bg-white rounded px-2  text-black" />
          </span>
          <button className="bg-white text-black py-1 rounded mt-4 ">Sign in</button>
        </form>
      </div>
    </main>
  )
}