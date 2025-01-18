import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "../libs/utils";

export default function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {/* Services Menu */}
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/calculate-emissions">Calculate Emissions</HoveredLink>
            <HoveredLink href="/optimization-tips">Optimization Tips</HoveredLink>
            <HoveredLink href="/reports">Generate Reports</HoveredLink>
            <HoveredLink href="/consultation">Consultation Services</HoveredLink>
          </div>
        </MenuItem>

        {/* Tools Menu */}
        <MenuItem setActive={setActive} active={active} item="Tools">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Bandwidth Calculator"
              href="/bandwidth-calculator"
              src="https://via.placeholder.com/140x70.png?text=Bandwidth+Calculator"
              description="Estimate your bandwidth-related emissions."
            />
            <ProductItem
              title="Energy Consumption Tool"
              href="/energy-consumption"
              src="https://via.placeholder.com/140x70.png?text=Energy+Tool"
              description="Analyze energy usage for your internet activities."
            />
            <ProductItem
              title="Carbon Footprint Tracker"
              href="/carbon-tracker"
              src="https://via.placeholder.com/140x70.png?text=Carbon+Tracker"
              description="Track your overall carbon footprint online."
            />
            <ProductItem
              title="Offset Suggestions"
              href="/offset-suggestions"
              src="https://via.placeholder.com/140x70.png?text=Offset+Suggestions"
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
