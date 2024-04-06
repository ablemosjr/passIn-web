import Logo from '../assets/logo.svg';
import { NavLink } from './Nav-link';

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={Logo} />

      <nav className="flex items-center gap-5">
        <NavLink href="">Eventos</NavLink>
        <NavLink href="">Participantes</NavLink>
      </nav>
    </div>
  );
}
