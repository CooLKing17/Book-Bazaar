import React, { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { getProfile } from "./Logic and Connection/Logic";

const userID = localStorage.getItem("UserId");
console.log(userID);

const navigation = [
  {
    name: "",
    to: "/",
    current: true,
    icon: "https://cdn-icons-png.flaticon.com/128/11422/11422050.png",
  },
  {
    name: "Donate your Book",
    to: "/donate=page",
    current: false,
    icon: "https://cdn-icons-png.flaticon.com/128/10292/10292239.png",
  },
  {
    name: "Sell your Book",
    to: "/sell=page",
    current: false,
    icon: "https://cdn-icons-png.flaticon.com/128/1992/1992622.png",
  },
  {
    name: "Categories",
    to: "/",
    current: false,
    icon: "https://cdn-icons-png.flaticon.com/128/3986/3986107.png",
    Types: [
      { cata: "Biography/Autobiography/Memoir", to: "/biography" },
      { cata: "Self-Help", to: "/self-help" },
      { cata: "Travel", to: "/travel" },
      { cata: "Cookbooks", to: "/cookbooks" },
      { cata: "Health/Wellness", to: "/health-wellness" },
      { cata: "History", to: "/history" },
      { cata: "Science/Nature", to: "/science-nature" },
      { cata: "True Crime", to: "/true-crime" },
      { cata: "Educational", to: "/educational" },
      { cata: "Literary Fiction", to: "/literary-fiction" },
      { cata: "Mystery/Thriller/Crime", to: "/mystery-thriller-crime" },
      { cata: "Science Fiction", to: "/science-fiction" },
      { cata: "Fantasy", to: "/fantasy" },
      { cata: "Historical Fiction", to: "/historical-fiction" },
      { cata: "Romance", to: "/romance" },
      { cata: "Horror", to: "/horror" },
      { cata: "Reference", to: "/reference" },
      { cata: "Poetry", to: "/poetry" },
      { cata: "Religious/Spiritual", to: "/religious-spiritual" },
      { cata: "Magazines", to: "/magazines" },
      { cata: "Zines", to: "/zines" },
      { cata: "Journal/Notebook", to: "/journal-notebook" },
      { cata: "Comic Book", to: "/comic-book" },
      { cata: "Graphic Novel", to: "/graphic-novel" },
      { cata: "Logic", to: "/logic" },
    ],
  },
  {
    name: "Cart",
    to: "/cart=page",
    current: false,
    icon: "https://cdn-icons-png.flaticon.com/128/3145/3145827.png",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  const SignOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  const [isSold, setIssold] = useState(true);
  const [profile,setprofile]=useState();
  const profileData = useSelector((store) => store.profile.profileData);

  useEffect(()=>{
    // if(userID && profileData){
      const fetch = async ()=>{
        const data = await getProfile(userID);
        setprofile(data);
        
      }
      setprofile(profileData);
      fetch();
    
    //}
  },[profileData])
  return (
    <Disclosure
      as="nav"
      className="bg-gray-400 z-50 fixed top-0 left-0 right-0 justify-between  p-2"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <img
                    alt="more"
                    src="https://cdn-icons-png.flaticon.com/128/14849/14849048.png"
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                  <img
                    alt="cancel"
                    src="https://cdn-icons-png.flaticon.com/128/16083/16083469.png"
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex py-4 space-x-2">
                    {navigation.map((item) =>
                      item.name !== "Categories" ? (
                        <Link
                          key={item.name}
                          to={item.to}
                          aria-current={item.current ? "page" : undefined}
                          className={classNames(
                            item.current
                              ? "bg-gray-400 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 truncate"
                              : "text-white hover:bg-gray-50 hover:text-red-500 ",
                            "rounded-md px-3 py-1 text-sm font-medium flex items-center "
                          )}
                        >
                          <img
                            className="w-9 pr-1 "
                            alt="icon"
                            src={item.icon}
                          />{" "}
                          {item.name}
                        </Link>
                      ) : (
                        <Menu key={item.name} as="div" className="relative">
                          <MenuButton className="text-white hover:bg-gray-50 hover:text-red-500 rounded-md px-3 py-2 text-sm font-medium flex items-center">
                            <img
                              className="w-6 h-6 mr-1"
                              alt="categories"
                              src={item.icon}
                            />
                            {item.name}
                          </MenuButton>
                          <MenuItems className="absolute left-0 z-10 mt-2 w-64 origin-top-right rounded-md shadow-lg bg-gray-400 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="max-h-64 overflow-y-auto custom-scrollbar">
                              {item.Types.map((type) => (
                                <MenuItem key={type.cata}>
                                  <Link
                                    to={type.to}
                                    className="block px-4 py-2 text-sm hover:text-red-500 hover:bg-gray-50 "
                                  >
                                    {type.cata}
                                  </Link>
                                </MenuItem>
                              ))}
                            </div>
                          </MenuItems>
                        </Menu>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <input
                  type="text"
                  className="rounded-s-full w-60 h-9 smx:w-40 smx:h-6"
                />
                <button
                  type="button"
                  className="relative w-14 rounded-e-full smx:w-10"
                >
                  <img
                    alt="Search"
                    src="https://cdn-icons-png.flaticon.com/128/6983/6983319.png"
                    className="bg-white rounded-e-full hover:bg-blue-400 w-14 p-1 h-9 smx:w-10 smx:h-6"
                  />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4">
                  <div className="ml-3">
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src={
                          profile?.profileimage
                            ? `data:image/jpeg;base64,${profile.profileimage}`
                            : "https://cdn-icons-png.flaticon.com/128/1177/1177568.png"
                        }
                        className="h-10 w-10 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <Link
                        to="/profile=page"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Your Profile
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/donatesell=page"
                        state={{ isSold }}
                        onClick={() => setIssold(false)}
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Your Book Details
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/donatesell=page"
                        state={{ isSold }}
                        onClick={() => setIssold(true)}
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Donate Book Details
                      </Link>
                    </MenuItem>

                    {!userID ? (
                      <MenuItem>
                        <Link
                          to="/signin=signup"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                        >
                          Sign in
                        </Link>
                      </MenuItem>
                    ) : (
                      <MenuItem>
                        <Link
                          to="/"
                          onClick={SignOut}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                        >
                          Sign out
                        </Link>
                      </MenuItem>
                    )}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) =>
                item.name !== "Buy Now" ? (
                  <Link
                    key={item.name}
                    to={item.to}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-300 text-white"
                        : "text-white hover:bg-gray-50 hover:text-red-500",
                      "rounded-md px-3 py-2 text-base font-medium flex items-center"
                    )}
                  >
                    <img className="w-9 pr-1" alt="icon" src={item.icon} />{" "}
                    {item.name}
                  </Link>
                ) : (
                  <Menu key={item.name} as="div" className="relative">
                    <MenuButton
                      className={classNames(
                        "text-white hover:bg-gray-50 hover:text-red-500 rounded-md px-3 py-2 text-base font-medium flex items-center"
                      )}
                    >
                      <img className="w-9 pr-1" alt="buy now" src={item.icon} />
                      {item.name}
                    </MenuButton>
                    <MenuItems
                      transition
                      className="absolute left-32 z-10  w-48 origin-top-right rounded-lg bg-gray-400 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {item.Types.map((type) => (
                        <MenuItem key={type.cata}>
                          <Link
                            to={type.to}
                            className={classNames(
                              "block px-4 py-2 text-sm rounded-md text-white font-bold hover:text-red-500 data-[focus]:bg-gray-100"
                            )}
                          >
                            {type.cata}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                )
              )}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
