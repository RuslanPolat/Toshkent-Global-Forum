import React from "react";
import UsersModal from "../usersModal/UsersModal"

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const BaseUsers: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible}) => {
    if(!isModalVisible) {
        return null
    }

    return (<UsersModal onBackdropClick={ onBackdropClick}/>)
}
export default BaseUsers;