import { AsideStore } from 'store/aside';

import { ToggleButton, TopHeader } from './Header.styled';

interface IProps { };

const Header = () => {
  const { isOpen, setStore } = AsideStore();

  const onClickToggleButtonHandler = () => {
    setStore({ isOpen: !isOpen });
  }

  return (<TopHeader>
    <ToggleButton onClick={onClickToggleButtonHandler} />
    해더 입니다.
  </TopHeader>)
};
export default Header;