import { useState, useEffect } from "react";

const LanguageSelector = () => {
  // Set up state for the selected language (abbreviation)
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "EN",
    icon: "us",
  });
  const [isOpen, setIsOpen] = useState(false);

  // Define language options with abbreviations and icons
  const languageOptions = [
    { label: "Hindi", code: "HI", icon: "in" },
    { label: "English", code: "EN", icon: "us" },
    { label: "Spanish", code: "ES", icon: "es" },
    { label: "French", code: "FR", icon: "fr" },
    { label: "German", code: "DE", icon: "de" },
  ];

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to update the selected language and store it in localStorage
  const handleLanguageSelect = ({ code, icon }) => {
    // console.log(code, icon);
    setSelectedLanguage({ code, icon });
    localStorage.setItem("selectedLanguage", { code, icon });
    setIsOpen(false);
  };

  // On component mount, check if there's a language stored in localStorage
  //   useEffect(() => {
  //     const storedLanguage = localStorage.getItem("selectedLanguage");
  //     if (storedLanguage) {
  //       console.log(storedLanguage);
  //       setSelectedLanguage(storedLanguage);
  //     }
  //   }, []);

  console.log(selectedLanguage);

  return (
    <div className="relative ml-2 z-40 inline-block text-left">
      {/* Display the selected language abbreviation */}
      <button
        onClick={toggleDropdown}
        className="btn btn-light items-center inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className="mr-2">{selectedLanguage.code + " "} </span>
        <span className={`fi fi-${selectedLanguage.icon} fis`}></span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {/* Language options */}
            {languageOptions.map(({ label, code, icon }) => (
              <button
                key={code}
                onClick={() => handleLanguageSelect({ code, icon })}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100"
              >
                {/* <span className="mr-2">{icon}</span> Icon */}
                <span className="mr-2">{code + " "} </span>
                <span class={`fi fi-${icon} fis`}></span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
