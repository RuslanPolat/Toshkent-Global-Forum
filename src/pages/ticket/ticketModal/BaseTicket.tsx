import React from "react";
import TicketModal from './TicketModal'

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const BaseTicket: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible}) => {
    if(!isModalVisible) {
        return null
    }

    return (<TicketModal onBackdropClick={ onBackdropClick}/>)
}
export default BaseTicket;