import {Nav, NavItem, NavLink} from "reactstrap";
import React from "react";

interface HDCNaviHeaderProps {
    title: string
}
const HDCNaviHeader: React.FC<HDCNaviHeaderProps> = (props: HDCNaviHeaderProps) => {
    return (
        <Nav>
            <NavItem>
                <NavLink>{props.title}</NavLink>
            </NavItem>
        </Nav>
    )
}

export default HDCNaviHeader;
