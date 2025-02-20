import React from 'react'

function Login() {
  return (
    <div className="flex items-center justify-center p-12">
    <div className="mx-auto w-full max-w-[550px]">
        <form>
            <div className="mb-5">
                <label for="name" className="mb-3 block text-base font-medium text-[#ffffff]">
                    Teljes név
                </label>
                <input type="text" name="name" id="name" placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="w-full flex flex-col gap-2">
            <label for="name" className="mb-3 block text-base font-medium text-[#ffffff]">
                    Jelszó
                </label>
                <input type="password" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" placeholder="••••••••" /> <br />

            </div>
              
                <div class="flex justify-center items-center mt-4">
                    <p class="inline-flex items-center text-white font-medium text-xs text-center">
                        <span class="ml-2">Nem regisztráltál még?<a href="/Register" class="text-xs ml-2 text-blue-500 font-semibold">Regisztrálj most&rarr;</a> <br/>
                        </span>
                    </p>
                </div>
            
            <br /><div>
                <button
                    className="hover:shadow-form w-full rounded-md bg-gray-800 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Belépés
                </button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Login

