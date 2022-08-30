import React from "react";
import AgendaModal from "../agendaModal/AgendaModal"

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
    user: any;
}

const BaseAgenda: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible, user}) => {
    if(!isModalVisible) {
        return null
    }

    return (<AgendaModal onBackdropClick={ onBackdropClick} user={user} />)
}
export default BaseAgenda;