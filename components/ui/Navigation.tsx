import { Navbar, Text, useTheme } from "@nextui-org/react";
import Link from "next/link";

export const Navigation = () => {
  const { isDark } = useTheme();
  return (
    <Navbar isBordered={isDark} variant="sticky">
      <Navbar.Brand>
        <Link href="/">
          <Text b color="inherit" hideIn="xs">
            Pokemon App
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <Navbar.Link href="/favoritos">Favoritos</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};
