import "../../Test/center.scss"
type Props = {
    exchangeRate: number
    total: number
    currencyType: string
}
const Total = ({ exchangeRate, total, currencyType }: Props) => {
    return (
        <div className="center">
            Total: {total * exchangeRate} {currencyType}
        </div>
    )
}
export default Total
