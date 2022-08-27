import React from "react";
import TicketModal from './TicketModal'

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
    editInfo: any;
    user: any;
}

const BaseTicket: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible, editInfo, user}) => {
    if(!isModalVisible) {
        return null
    }

    return (<TicketModal onBackdropClick={ onBackdropClick} editInfo={editInfo} user={user}/>)
}
export default BaseTicket;