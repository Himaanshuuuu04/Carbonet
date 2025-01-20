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
            <HoveredLink href="/Login"><Link to ="/Login">Login</Link></HoveredLink>
            <HoveredLink href="/Signup"><Link to ="/SignUp">Signup</Link></HoveredLink>
            <HoveredLink href="/Dashboard"><Link to ="/Dashboard">Dashboard</Link> </HoveredLink>
            <HoveredLink href="https://foundation.mozilla.org/en/blog/ai-internet-carbon-footprint/">
              <Link to="https://foundation.mozilla.org/en/blog/ai-internet-carbon-footprint/">Carbon Footprint Report</Link></HoveredLink>
          </div>
        </MenuItem>

        {/* Tools Menu */}
        <MenuItem setActive={setActive} active={active} item="Tools">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Bandwidth Calculator"
              href="/bandwidth-calculator"
              src="https://www.bobcloud.net/wp-content/uploads/2020/07/Azure-UK-speedtest-result-for-cloud-backup.jpg"
              description="Estimate your bandwidth-related emissions."
            />
            <ProductItem
              title="Energy Consumption Tool"
              href="/energy-consumption"
              src="https://www.constructionworld.in/assets/uploads/4cedb8ae579c8b6711c873fcddff639d.jpg"
              description="Analyze energy usage for your internet activities."
            />
            <ProductItem
              title="Carbon Footprint Tracker"
              href="/carbon-tracker"
              src="https://www.samuchit.com/images/carbon-footprint-calculator-1.jpg"
              description="Track your overall carbon footprint online."
            />
            <ProductItem
              title="Offset Suggestions"
              href="/offset-suggestions"
              src="https://media.greenmatters.com/brand-img/bPhIjl_kL/0x0/air-pollution-carbon-emissions-1585588214294.jpg"
              description="Find ways to offset your emissions effectively."
            />
          </div>
        </MenuItem>

        {/* Resources Menu */}
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/blog">Blog</HoveredLink>
            <HoveredLink href="/case-studies">Case Studies</HoveredLink>
            <HoveredLink href="/faqs">FAQs</HoveredLink>
            <HoveredLink href="/contact">Contact Us</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
