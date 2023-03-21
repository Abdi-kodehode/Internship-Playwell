import React from 'react'

const TeamCard = (props) => {
  return (
    <div className={"w-full h-full bg-zinc-900/30   rounded-xl border p-3 my-8 " + props.border}>
              <div className={" flex justify-center items-center rounded-xl border" + props.background}>
                <img
                  src={props.image}
                  alt="instructor"
                  className="!h-[400px] !object-contain laptop:!h-[340px] tablet:!h-[300px] mobile:!h-[230px] "
                />
              </div>
              <div className="flex flex-col pt-4 pb-10 gap-3  tablet:pt-1 tablet:pb-5 mobile:gap-1">
                <span className="text-5xl font-bold laptop:text-4xl screen:text-3xl mobile:text-2xl">{props.name}</span>
                <span className="text-5xl font-semibold laptop:text-4xl screen:text-3xl mobile:text-2xl">
                  {props.game}<br /> {props.position}
                </span>
              </div>
            </div>
  )
}

export default TeamCard