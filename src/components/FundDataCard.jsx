import React from 'react'

const FundDataCard = ({imgurl,title}) => {
  return (
    <div className="" >
        <img src={imgurl} alt="icon" width={80} height={80} className="mb-4" />

        <h2 className="font-semibold text-base leading-normal text-black font-poppins">
            {title}
        </h2>

    </div>
  )
}

// flex-col border border-[#DBDBE6] ms-4 hover:bg-gray-200

export default FundDataCard