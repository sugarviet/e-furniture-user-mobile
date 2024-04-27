import { get_bank_account_api, get_create_bank_info_api } from "../api/bankApi";
import { useDeleteAuth, usePostAuth, useUpdateWithAuth } from "./api-hooks";
import { useQueryClient } from "@tanstack/react-query";
import useNavigation from "./useNavigation";
import useNotification from "./useNotification";

function useBank() {

  const queryClient = useQueryClient();

  const { go_back } = useNavigation();

  const { success_message, error_message } = useNotification();

  const { mutate: createBankAccount,isLoading:isCreateBankLoading } = usePostAuth(
    get_create_bank_info_api(),
    undefined,
    () => {
      queryClient.invalidateQueries(get_bank_account_api());
      go_back();
      go_back();
      success_message("bank", "add");
    },
    () => {
      error_message("bank", "add");
    },
  );

  const { mutate: updateBankAccount } = useUpdateWithAuth(
    get_create_bank_info_api(),
    undefined,
    () => {
      queryClient.invalidateQueries(get_bank_account_api());
      success_message("bank", "set_default");
    },
    () => {
      error_message("bank", "set_default");
    },
  );

  const { mutate: remove, isLoading:isRemoveBankLoading } = useDeleteAuth(
    get_create_bank_info_api(),
    undefined,
    () => {
      queryClient.invalidateQueries(get_bank_account_api());
      success_message("bank", "delete");
    },
    () => {
      error_message("bank", "delete");
    },
  );

  const addBankAccount = (data) => {
    const { code, accountNumber, accountName, logo, name } = data;

    const body = {
      bank_code: code,
      account_number: accountNumber,
      bank_logo: logo,
      bank_name: name,
      bank_account_name: "DOAN GIA BAO",
    };

    createBankAccount(body);
  };

  const setDefault = (id) => {
    const body = { bankInfor_id: id };
    updateBankAccount(body);
  };

  const removeBankAccount = (id) => {
    const body = { bankInfor_id: id };
    remove(body);
  };

  return { addBankAccount, setDefault, removeBankAccount,isRemoveBankLoading,isCreateBankLoading };
}

export default useBank;
