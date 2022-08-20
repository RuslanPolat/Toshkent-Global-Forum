import React from "react";
import AgendaModal from "../agendaModal/AgendaModal"

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const BaseAgenda: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible}) => {
    if(!isModalVisible) {
        return null
    }

    return (<AgendaModal onBackdropClick={ onBackdropClick}/>)
}
export default BaseAgenda;