import React from "react";
import UsersModal from "../usersModal/UsersModal"

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
    editInfo: any;
    user: any;
}

const BaseUsers: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible, editInfo, user}) => {
    if(!isModalVisible) {
        return null
    }

    return (<UsersModal onBackdropClick={ onBackdropClick} editInfo={editInfo} user={user}/>)
}
export default BaseUsers;