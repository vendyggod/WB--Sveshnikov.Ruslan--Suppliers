import { Fragment, ReactNode } from "react";
import { Menu, MenuItem, Transition } from "@headlessui/react";
import styled from "styled-components";
import { MenuButton, MenuItems } from "@headlessui/react/";

type Props = {
  icon: ReactNode;
  options: Array<{ id: string | number; label: string }>;
  onSelect: (id: string | number) => void;
};

const StyledMenuButton = styled(MenuButton)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greyLight};
  }

  &:focus {
    outline: none;
    ring: 2px solid ${({ theme }) => theme.colors.indigo500};
  }
`;

const StyledMenuItems = styled(MenuItems)`
  position: absolute;
  right: 0;
  width: 224px;
  margin-top: 8px;
  background: white;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
  z-index: 50;
`;

const MenuItemButton = styled.button<{ active: boolean }>`
  background: ${({ active, theme }) => (active ? "#ff0000" : "transparent")};
  transition: background-color 0.2s;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;

export const SelectButton = ({ icon, options, onSelect }: Props) => {
  return (
    <Menu as="div" style={{ position: "relative", display: "inline-block" }}>
      <div>
        <StyledMenuButton>{icon}</StyledMenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <StyledMenuItems>
          <div style={{ padding: "4px 0" }}>
            {options.map((option) => (
              <MenuItem key={option.id}>
                {({ focus }) => (
                  <MenuItemButton
                    active={focus}
                    onClick={() => onSelect(option.id)}
                  >
                    {option.label}
                  </MenuItemButton>
                )}
              </MenuItem>
            ))}
          </div>
        </StyledMenuItems>
      </Transition>
    </Menu>
  );
};
