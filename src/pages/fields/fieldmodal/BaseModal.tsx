import React from "react";
import FieldModal from './FieldModal'

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
    editInfo: any
    user: any
}

const BaseModal: React.FC<BaseModalWrapperProps> = ({onBackdropClick,editInfo, isModalVisible, user}) => {
    if(!isModalVisible) {
        return null
    }

    return (<FieldModal onBackdropClick={ onBackdropClick}  editInfo={editInfo} user={user} />)
}
export default BaseModal;