import { showMessage, hideMessage } from "react-native-flash-message";

const type = {
    address: {
        success: {
            add: "Successfully added address",
            edit: "Successfully edited address",
            delete: "Successfully deleted delete",
            set_default: "Successfully set default address",
        },
        fail: {
            add: "Failed added address",
            edit: "Failed edited address",
            delete: "Failed deleted delete",
            set_default: "Failed set default address",
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
