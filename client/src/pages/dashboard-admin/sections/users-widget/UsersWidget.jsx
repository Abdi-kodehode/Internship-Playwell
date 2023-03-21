import React from "react";

const UsersWidget = () => {
  return (
    <div className=" mx-5 my-2  text-white/80 relative">
      <div className="flex gap-2 mobile:flex-col">
        <div className="w-3/5 bg-black/20 rounded-xl pt-4 h-full px-5 tablet:px-2 tablet:w-1/2 mobile:w-full">
          <h2 className="text-4xl font-bold laptop:text-3xl tablet:text-2xl mobile:text-xl mobile:font-semibold">
            New Users
          </h2>
          <div className="pt-2">
            <div className="flex justify-between text-xl font-bold screen:text-sm">
              <span>Username</span>
              <span>E-mail:</span>
            </div>
            <ul>
              <li className="flex justify-between w-full py-2 text-xl laptop:text-lg tablet:text-sm">
                <span>Wojciech Pachocki</span>
                <span>pachocki175@gmail.com</span>
              </li>
              <li className="flex justify-between w-full py-2 text-xl laptop:text-lg  tablet:text-sm">
                <span>Wojciech Pachocki</span>
                <span>pachocki175@gmail.com</span>
              </li>
              <li className="flex justify-between w-full py-2 text-xl laptop:text-lg tablet:text-sm">
                <span>Wojciech Pachocki</span>
                <span>pachocki175@gmail.com</span>
              </li>
              <li className="flex justify-between w-full py-2 text-xl laptop:text-lg tablet:text-sm">
                <span>Wojciech Pachocki</span>
                <span>pachocki175@gmail.com</span>
              </li>
              <li className="flex justify-between w-full py-2 text-xl laptop:text-lg tablet:text-sm">
                <span>Wojciech Pachocki</span>
                <span>pachocki175@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/3 bg-black/20 rounded-xl pt-4 h-full px-5 tablet:px-2 mobile:w-full ">
          <h2 className="text-4xl text-white/80 font-bold laptop:text-3xl tablet:text-2xl mobile:text-xl mobile:font-semibold">
            Latest Transactions
          </h2>
          <table className="w-full flex flex-col gap-2">
            <tr className="grid grid-cols-4  text-left w-full pt-2 text-xl  screen:text-sm">
              <th>Customer :</th>
              <th>Date :</th>
              <th>Price :</th>
              <th>Course :</th>
            </tr>
            <tr className="grid grid-cols-4  w-full text-xl laptop:text-lg tablet:text-sm ">
              <td>
                <span>Susan Carol</span>
              </td>
              <td>2 Jun 2021</td>
              <td>190.00 KR</td>
              <td>
                <span className="px-2 bg-green-500 rounded-xl laptop:text-lg tablet:text-sm">
                  Basic
                </span>
              </td>
            </tr>
            <tr className="grid grid-cols-4  w-full text-xl laptop:text-lg tablet:text-sm ">
              <td>
                <span>Susan Carol</span>
              </td>
              <td>2 Jun 2021</td>
              <td>190.00 KR</td>
              <td>
                <span className="px-2 bg-green-500 rounded-xl laptop:text-lg tablet:text-sm">
                  Basic
                </span>
              </td>
            </tr>
            <tr className="grid grid-cols-4  w-full text-xl laptop:text-lg tablet:text-sm">
              <td>
                <span>Susan Carol</span>
              </td>
              <td>2 Jun 2021</td>
              <td>190.00 KR</td>
              <td>
                <span className="px-2 bg-green-500 rounded-xl laptop:text-lg tablet:text-sm">
                  Basic
                </span>
              </td>
            </tr>
            <tr className="grid grid-cols-4 w-full text-xl laptop:text-lg tablet:text-sm">
              <td>
                <span>Susan Carol</span>
              </td>
              <td>2 Jun 2021</td>
              <td>390.00 KR</td>
              <td>
                <span className="px-2 bg-red-500 rounded-xl laptop:text-lg tablet:text-sm">
                  Premium
                </span>
              </td>
            </tr>
            <tr className="grid grid-cols-4  w-full text-xl laptop:text-lg tablet:text-sm ">
              <td>
                <span>Susan Carol</span>
              </td>
              <td>2 Jun 2021</td>
              <td>190.00 KR</td>
              <td>
                <span className="px-2 bg-green-500 rounded-xl tablet:text-sm">
                  Basic
                </span>
              </td>
            </tr>
            <tr className="grid grid-cols-4  w-full text-xl laptop:text-lg tablet:text-sm">
              <td>
                <span>Susan Carol</span>
              </td>
              <td>2 Jun 2021</td>
              <td>190.00 KR</td>
              <td>
                <span className="px-2 bg-green-500 rounded-xl laptop:text-lg tablet:text-sm">
                  Basic
                </span>
              </td>
            </tr>
          </table>
          <div className="py-5">
            <span className="underline underline-offset-4  text-xl hover:text-red-500 transition-all delay-150 cursor-pointer laptop:text-lg tablet:text-sm ">
              View more Transactions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersWidget;
