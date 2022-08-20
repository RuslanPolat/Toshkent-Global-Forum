import React from "react";
import FieldModal from './FieldModal'

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
    editInfo: any
}

const BaseModal: React.FC<BaseModalWrapperProps> = ({onBackdropClick,editInfo, isModalVisible}) => {
    if(!isModalVisible) {
        return null
    }

    return (<FieldModal onBackdropClick={ onBackdropClick}  editInfo={editInfo} />)
}
export default BaseModal;