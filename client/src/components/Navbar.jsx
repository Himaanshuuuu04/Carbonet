import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { Link } from "react-router-dom";
import { cn } from "../libs/utils";

export default function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {/* Services Menu */}
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/"><Link to ="/">Home</Link></HoveredLink>
            <HoveredLink href="/Login"><Link to ="/Login">Login</Link></HoveredLink>
            <HoveredLink href="/Signup"><Link to ="/SignUp">Signup</Link></HoveredLink>
           <HoveredLink href="/Logout"><Link to ="/Logout">Logout</Link></HoveredLink>
            
          </div>
        </MenuItem>

        {/* Tools Menu */}
        <MenuItem setActive={setActive} active={active} item="Dashboard">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Dashboard"
              href="/dashboard"
              src="https://measure.galleryclimatecoalition.org/static/dashboard.png"
              description="Track your carbon footprint and learn how to reduce it."
            />
           
          </div>
        </MenuItem>

        {/* Resources Menu */}
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/"><a href="https://foundation.mozilla.org/en/blog/ai-internet-carbon-footprint/" target="_top">Blog</a></HoveredLink>
            <HoveredLink href="/faqs">FAQs</HoveredLink>
            <HoveredLink href="/contact">Contact Us</HoveredLink>
            <HoveredLink href="/about"><Link to ="/about">About Us</Link></HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
