import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const CardContainer = styled.div`
    min-height: 4.3em;
     box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
    ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9
    `};

`

export function BookCard(){

return(<CardContainer/>)

}