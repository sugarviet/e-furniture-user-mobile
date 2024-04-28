
import { cancel_order_by_id, get_order_by_state } from "../api/orderHistoryApi";
import { useQueryClient } from "@tanstack/react-query";

import { useState } from "react";
import { useUpdateWithAuth } from "./api-hooks";
import useNotification from "./useNotification";
import useNavigation from "./useNavigation";

const useCancelOrder = (id) => {
    const queryClient = useQueryClient();

    const {go_to_order} = useNavigation();
    const { error_message, success_message } = useNotification();

    const { mutate: cancelOrderMutation } = useUpdateWithAuth(
        cancel_order_by_id(id),
        undefined,
        () => {
            queryClient.invalidateQueries(get_order_by_state("Processing"));
            success_message(null, null, "Cancel order successfully");
            go_to_order();
        },
        (error) => {
            error_message(null, null, error.message);
        }
    );

    const cancelOrder = (note) => {
        cancelOrderMutation(note);
    };


    return {
        cancelOrder,
    };
};

export default useCancelOrder;
