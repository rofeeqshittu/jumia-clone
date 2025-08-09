import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-8">
          <FooterSection 
            title="NEED HELP?"
            links={[
              { to: "/help", label: "Chat with us" },
              { to: "/help", label: "Help Center" },
              { to: "/help", label: "Contact Us" }
            ]}
          />
          <FooterSection 
            title="ABOUT JUMIA"
            links={[
              { href: "#", label: "About us" },
              { href: "#", label: "Jumia careers" },
              { href: "#", label: "Terms and Conditions" }
            ]}
          />
          <FooterSection 
            title="MAKE MONEY WITH JUMIA"
            links={[
              { href: "#", label: "Sell on Jumia" },
              { href: "#", label: "Vendor hub" },
              { href: "#", label: "Become a Sales Consultant" }
            ]}
          />
          <FooterSection 
            title="JUMIA INTERNATIONAL"
            links={[
              { href: "#", label: "Algeria" },
              { href: "#", label: "Egypt" },
              { href: "#", label: "Ghana" },
              { href: "#", label: "Kenya" }
            ]}
          />
        </div>
      </div>
    </footer>
  )
}

function FooterSection({ title, links }) {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            {link.to ? (
              <Link to={link.to} className="hover:text-orange-500">
                {link.label}
              </Link>
            ) : (
              <a href={link.href} className="hover:text-orange-500">
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
