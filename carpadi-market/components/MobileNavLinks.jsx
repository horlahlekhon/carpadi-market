import classNames from 'classnames';

import Link from 'next/link';
// import { Link } from 'gatsby';


const MobileNavLinks = ({ open }) => {
  const displayMobileNavLinks = classNames('mobile-nav-wrapper', {
    open: open,
  });

  return (
    <>
    
    <nav aria-label="mobile navigation" className={displayMobileNavLinks}>
      <Link href="/faq">
        <a className="mobile-link">Buy Car</a> 
      </Link>
      <Link href="/faq">
        <a className="mobile-link">Sell Your Car</a> 
      </Link>
      <Link href="/faq">
        <a className="mobile-link" style={{borderBottom: '1px solid #F3F3F3'}}>FAQ</a> 
      </Link>
    
    </nav>
    </>
  );
};

export default MobileNavLinks;