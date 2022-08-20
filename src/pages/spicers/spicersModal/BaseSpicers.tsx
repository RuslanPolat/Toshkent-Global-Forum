import React from "react";
import SpicersModal from "./SpicersModal"

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const BaseSpicers: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible}) => {
    if(!isModalVisible) {
        return null
    }

    return (<SpicersModal onBackdropClick={ onBackdropClick}/>)
}
export default BaseSpicers;