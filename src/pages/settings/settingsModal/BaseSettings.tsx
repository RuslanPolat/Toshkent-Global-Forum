import React from "react";
import SettingsModal from "./SettingsModal"

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const BaseSettings: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible}) => {
    if(!isModalVisible) {
        return null
    }

    return (<SettingsModal onBackdropClick={ onBackdropClick}/>)
}
export default BaseSettings;