import React from "react";
import SpicersModal from "./SpicersModal"

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
    editInfo: any
    user: any
}

const BaseSpicers: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible, editInfo, user}) => {
    if(!isModalVisible) {
        return null
    }

    return (<SpicersModal onBackdropClick={ onBackdropClick} editInfo={editInfo} user={user}/>)
}
export default BaseSpicers;