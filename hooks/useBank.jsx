import { get_bank_account_api, get_create_bank_info_api } from "../api/bankApi";
import { useDeleteAuth, usePostAuth, useUpdateWithAuth } from "./api-hooks";
import { useQueryClient } from "@tanstack/react-query";
import useNavigation from "./useNavigation";

function useBank() {

  const queryClient = useQueryClient();

  const {go_to_bank_account} = useNavigation();
  
  const { mutate: createBankAccount } = usePostAuth(
    get_create_bank_info_api(),
    undefined,
    () => {
      queryClient.invalidateQueries(get_bank_account_api());
      go_to_bank_account();
      console.warn("Add bank account successfully")
    },
    () => {
      console.warn("thất bại")
    },
  );

  const { mutate: updateBankAccount } = useUpdateWithAuth(
    get_create_bank_info_api(),
    undefined,
    () => {
      queryClient.invalidateQueries(get_bank_account_api());
      console.warn("Set default successfully")
    },
    () => {
      console.warn("thất bại")
    },
  );

  const { mutate: remove } = useDeleteAuth(
    get_create_bank_info_api(),
    undefined,
    () => {
      queryClient.invalidateQueries(get_bank_account_api());
      console.warn("Delete bank account successfully")
    },
    () => {
      console.warn("thất bại")
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

  return { addBankAccount, setDefault, removeBankAccount };
}

export default useBank;
