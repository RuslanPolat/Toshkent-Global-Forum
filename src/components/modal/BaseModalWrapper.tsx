import React from "react";
import Modal from "./Modal";

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
    editInfo: any;
    user: any;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible, editInfo, user}) => {
    if(!isModalVisible) {
        return null
    }

    return (<Modal onBackdropClick={onBackdropClick} editInfo={editInfo} user={user}/>)
}
export default BaseModalWrapper;