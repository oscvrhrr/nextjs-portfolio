"use client";
import { Container, Flex, Box, Text, Link } from "@radix-ui/themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import * as Toggle from "@radix-ui/react-toggle";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <Container size={{ initial: "1", md: "3"}} className="py-6">
      <Flex justify="between" align="center" className="">
        <Text ml={{ initial: "5", md: "0"}}>Oscar Herrera</Text>
        <Box mr={{ initial: "5" }} display={{ initial: "block", md: "none"}}>
          <label>
            <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
              <input className="hidden peer" type="checkbox" />
              <div className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
              <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
              <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
            </div>
          </label>
        </Box>

        {/* Desktop */}
        <Box display={{ initial: "none", md: "block"}}>
          <Flex gap="3" width="w-1/4">
            <Box>
              <Link size="2" className="" href={"/"}>
                About
              </Link>
            </Box>
            <Box>
              <Link size="2" className="" href={"/"}>
                Works
              </Link>
            </Box>
            <Box>
              <Link
                size="2"
                className=""
                target="_blank"
                href={"https://blog-api-six-orpin.vercel.app/"}
              >
                Blog
              </Link>
            </Box>
            <Toggle.Root
              onClick={toggleTheme}
              aria-label="Toggle italic"
              className="flex size-[25px] items-center justify-center rounded bg-transparent leading-4 text-mauve11 hover:bg-[rgba(255, 255, 255, 0.6)]  hover:bg-violet3 data-[state=on]:bg-violet6 data-[state=on]:text-violet12"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </Toggle.Root>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};
// hover:bg-[#EFF0F3]
export default Navbar;
