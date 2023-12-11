import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { useUser } from "../features/authentication/hooks/useUser";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  const { isAdmin } = useUser();

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/app/dashboard">
            <HiOutlineHome />
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/app/bookings">
            <HiOutlineCalendarDays />
            Bookings
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/app/cabins">
            <HiOutlineHomeModern />
            Cabins
          </StyledNavLink>
        </li>
        {isAdmin && (
          <>
            <li>
              <StyledNavLink to="/app/users">
                <HiOutlineUsers />
                Users
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/app/settings">
                <HiOutlineCog6Tooth />
                Settings
              </StyledNavLink>
            </li>
          </>
        )}
      </NavList>
    </nav>
  );
}

export default MainNav;
