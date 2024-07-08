import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faRightToBracket,
  faEnvelope,
  faAddressCard,
  faEllipsisH,
  faTimes,
 
} from "@fortawesome/free-solid-svg-icons";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  
} from "@headlessui/react";

const navigation = [
  {
    name: "About us",
    href: "/",
    current: true,
    icon: <FontAwesomeIcon icon={faAddressCard} />,
  },
  {
    name: "Contact us",
    href: "/",
    current: false,
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
  {
    name: "Login",
    href: "/",
    current: false,
    icon: <FontAwesomeIcon icon={faRightToBracket} />,
  },
  {
    name: "Cart",
    href: "/",
    current: false,
    icon: <FontAwesomeIcon icon={faCartShopping} />,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 smx:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center smx:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon
                icon={faEllipsisH}
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <FontAwesomeIcon
                icon={faTimes}
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center smx:items-stretch smx:justify-start">
            <div className="flex flex-shrink-0 items-center">
            <a href="/">
              <img
                alt="Your Company"
                src="https://png.pngtree.com/png-vector/20221030/ourmid/pngtree-book-logo-template-vector-illustration-studying-sign-page-vector-png-image_39898376.png"
                className="w-16 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-150 duration-500"
              />
              </a>
            </div>
            <div className="hidden smx:ml-6 smx:block">
              <div className="flex py-4  space-x-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white hover:bg-neutral-100 hover:text-red-500"
                        : "text-gray-300 hover:bg-neutral-100 hover:text-red-500",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.icon} {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 smx:static smx:inset-auto smx:ml-6 smx:pr-0">
          <input type="text " className="rounded-s-full "/>
            <button
              type="button"
              className="relative w-10  rounded-e-full mt-1 "
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="bg-white p-1 rounded-e-full hover:bg-blue-400 w-10" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full  bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s"
                      className="h-10 w-10 rounded-full "
                    />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="smx:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
            {item.icon} {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NavBar;

