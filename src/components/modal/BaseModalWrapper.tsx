import React from "react";
import Modal from "./Modal";

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
    editInfo: any;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible, editInfo}) => {
    if(!isModalVisible) {
        return null
    }

    return (<Modal onBackdropClick={onBackdropClick} editInfo={editInfo}/>)
}
export default BaseModalWrapper;