import React from "react";
import SpicersModal from "./SpicersModal"

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
    user: any;
}

const BaseSpicers: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible, user}) => {
    if(!isModalVisible) {
        return null
    }

    return (<SpicersModal onBackdropClick={ onBackdropClick}  user={user}/>)
}
export default BaseSpicers;