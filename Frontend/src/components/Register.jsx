import React from 'react'

function Register() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-start p-12">
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
            
            <div className="mb-5">
                <label for="phone" className="mb-3 block text-base font-medium text-[#ffffff]">
                    Telefonszám
                </label>
                <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label for="email" className="mb-3 block text-base font-medium text-[#ffffff]">
                    Email cím
                </label>
                <input type="email" name="email" id="email" placeholder="Enter your email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-6 sm:w-1/2">
                    <div className="mb-5">
                        <label for="date" className="mb-5 block text-base font-medium text-[#ffffff]">
                            Születési dátum
                        </label>
                        <input type="date" name="date" id="date"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ffffff] focus:shadow-md" />
                    </div>
                </div>
               
            </div>

            <div className="mb-5 pt-3">
                <label className="mb-5 block text-base font-semibold text-[#ffffff] sm:text-xl">
                    Lakcím
                </label>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="" name="area" id="area" placeholder="Enter area"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="city" id="city" placeholder="Enter city"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="state" id="state" placeholder="Enter state"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="post-code" id="post-code" placeholder="Post Code"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button
                    className="hover:shadow-form w-full rounded-md bg-gray-800 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Regisztrálás
                </button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Register