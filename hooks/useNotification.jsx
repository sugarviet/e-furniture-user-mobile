import { showMessage, hideMessage } from "react-native-flash-message";

const type = {
    address: {
        success: {
            add: "Successfully added address",
            edit: "Successfully edited address",
            delete: "Successfully deleted address",
            set_default: "Successfully set default address",
        },
        fail: {
            add: "Failed added address",
            edit: "Failed edited address",
            delete: "Failed deleted address",
            set_default: "Failed set default address",
        },
    },
    bank: {
        success: {
            add: "Successfully added bank",
            edit: "Successfully edited bank",
            delete: "Successfully deleted bank",
            set_default: "Successfully set default bank",
        },
        fail: {
            add: "Failed added bank",
            edit: "Failed edited bank",
            delete: "Failed deleted bank",
            set_default: "Failed set default bank",
        },
    },
    profile: {
        success: {
            update: "Successfully update profile",
        },
        fail: {
            update: "Failed update profile",
        },
    },
};

function useNotification() {
    const success_message = (msg, action, custom) => {
        showMessage({
            message: "Success",
            description: custom ? custom : type[msg].success[action],
            type: "success",
        });
    };
    const error_message = (msg, action, custom) => {
        showMessage({
            message: "Failed",
            description: custom ? custom : type[msg].fail[action],
            type: "danger",
        });
    };
    return {
        success_message,
        error_message,
    };
}

export default useNotification;
