import React from 'react'
//import './contact.css'

const Contact = () => {
  return (
  <div className="rounded-4xl relative  min-h-[690px] overflow-hidden px-3 py-5 md:px-[40px] lg:md-[690px]lg:block lg:pb-2  lg:pt-8 xl:px-[67px] mt-10 m-3" style={{backgroundColor :"#444444 " ,borderRadius:'32px',color:'white'}}>
<section className="">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <div className=' justify-center items-center '>
        <p className="max-w-xl text-lg uppercase">
          Let's Connect
        </p>
       
</div>

        <div className="mt-8">
          <a href="#" className="text-xl font-bold "> 0151 475 4450 </a>

          <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 ">
        <form action="#" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            

            

            </div>

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto outline"
            >
              SUBMIT
            </button>
          </div>
       
        </form>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default Contact