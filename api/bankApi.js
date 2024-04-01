const BANK_URL = '/bankInfor/user'

export const get_banks_api = () => "https://api.vietqr.io/v2/banks";
export const get_create_bank_info_api = () => BANK_URL
export const get_bank_account_api = () => BANK_URL + '/byAccount'
export const get_delete_bank_api = (id) => BANK_URL + '/' + id