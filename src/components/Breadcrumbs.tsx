import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  // Format paths to readable text
  const formatName = (name: string) => {
    return name
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <nav 
      aria-label="Breadcrumbs" 
      className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16 pt-3 select-none font-sans text-[11px]"
      id="breadcrumbs-nav"
    >
      <ol className="flex items-center flex-wrap gap-1.5 text-brand-charcoal/50">
        <li className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center gap-1 hover:text-brand-emerald transition-colors font-semibold"
          >
            <Home className="h-3 w-3" />
            <span>Home</span>
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const formattedName = formatName(value);

          return (
            <li key={to} className="flex items-center">
              <ChevronRight className="h-3 w-3 text-[#E3B777]" />
              {last ? (
                <span className="font-bold text-brand-emerald ml-1.5" aria-current="page">
                  {formattedName}
                </span>
              ) : (
                <Link 
                  to={to} 
                  className="font-semibold text-brand-charcoal/50 hover:text-brand-emerald ml-1.5 transition-colors"
                >
                  {formattedName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
