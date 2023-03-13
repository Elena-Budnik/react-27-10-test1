import { Button } from '@mui/material'
import "../../Test/center.scss"

type Props = {
    onChangeCurrencyToUsd: any
    onChangeCurrencyToUan: any
    onChangeCurrencyToEur: any
}
const Currency = ({
    onChangeCurrencyToUsd,
    onChangeCurrencyToUan,
    onChangeCurrencyToEur,
}: Props) => {
    return (
        <div className='center'>
            <Button variant="outlined" onClick={onChangeCurrencyToUsd}>
                USD
            </Button>
            <Button variant="outlined" onClick={onChangeCurrencyToUan}>
                UAN
            </Button>
            <Button variant="outlined" onClick={onChangeCurrencyToEur}>
                EUR
            </Button>
        </div>
    )
}
export default Currency
