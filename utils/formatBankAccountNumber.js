export default function formatBankAccountNumber(accountNumber) {
    return accountNumber.replace(/.(?=.{4})/g, '*')
}