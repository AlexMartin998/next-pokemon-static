import Image from 'next/image';
import NextLink from 'next/link';
import { Link, Text, useTheme } from '@nextui-org/react';

import styles from './styles/Navbar.module.css';

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles['navbar-container']}`}
      style={{ backgroundColor: theme?.colors.gray50.value }}
    >
      <div className={`${styles['navbar-container__left']}`}>
        <Link href="/" as={NextLink}>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="dito_image"
            width={70}
            height={70}
          />

          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </Link>
      </div>

      <Link href="/favorites" as={NextLink}>
        <Text size="19px">Favorites</Text>
      </Link>
    </div>
  );
};

export default Navbar;
