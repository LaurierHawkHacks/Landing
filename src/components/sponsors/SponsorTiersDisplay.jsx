import React from "react";
import Styled from "styled-components";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";

import sponsorData from "../../data/sponsorData.json";
import placeholder from "../../assets/placeholder_image.svg";
import * as SponsorImages from "../../assets/sponsors/";
function SponsorTiersDisplay() {
    return (
        <h1>test</h1>
    );
}

const handleClick = (url) => {
    window.open(url, "_blank");
};

export default SponsorTiersDisplay;
