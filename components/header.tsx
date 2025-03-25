import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between p-4 bg-red ">
      <div>
        <Image
          src="/assets/header-logo.svg"
          alt="image"
          width={93}
          height={27}
        />
      </div>
    </header>
  )
}

export default Header
