import { useState, useRef } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';
import styles from '@/styles/Header.module.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();

  useOnClickOutside(ref, dropdown, () => setDropdown(false));

  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };

  return (
    <header style={headerStyle} className={styles.header}>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li ref={ref}>
            <button type="button" onClick={() => setDropdown(!dropdown)}>
              Services
              {' '}
              <span>&#8595;</span>
            </button>
            {dropdown && (
            <ul className={styles.dd}>
              <li>Design</li>
              <li>Development</li>
            </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
