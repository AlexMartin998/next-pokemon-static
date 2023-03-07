import { Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
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
      </div>

      <Text size="19px">Favorites</Text>
    </div>
  );
};

export default Navbar;
