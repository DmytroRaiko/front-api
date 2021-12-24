import React from "react";

const SiteHeader = ({ blocks, onSetViewBLock }) => {

    const headerButton = blocks.map((block) => {
        return (
            <p
                key={block.value}
                onClick={() => onSetViewBLock(block.value)}
            >
                {block.title}
            </p>
        );
    })

    return (
        <div className={"header-button-block"}>
            {headerButton}
        </div>
    );
}

export default SiteHeader;