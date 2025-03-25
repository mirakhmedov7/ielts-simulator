import Image from 'next/image'
import React from 'react'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="">
      <nav className="flex justify-between border-b-[1px] border-grey-border">
        <div className="flex items-center p-4">
          <Image
            src="/assets/header-logo.svg"
            alt="image"
            width={93}
            height={27}
          />
          <h3 className="text-2xl font-bold pl-4">60 minutes</h3>
        </div>
        <button
          type="button"
          className="p-4 hover:bg-grey-hover cursor-pointer"
        >
          <FaBars className="text-3xl text-grey" />
        </button>
      </nav>
      <div className="m-4 p-4 bg-[#f1f2ec] rounded-sm border-[1px] border-grey-border">
        <h1 className="font-bold text-base">READING PASSAGE 1</h1>
        <p className="text-base">
          You should spend about 20 minutes on <b>Questions 1-13</b>, which are
          based on Reading Passage 1 below.
        </p>
      </div>
    </header>
  )
}

export default Header
