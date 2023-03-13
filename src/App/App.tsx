import Test1 from 'Test/Test1'
import Test2 from 'Test/Test2'
import { useState } from 'react'
type Props = {

}
const App = (props: Props) => {

const [currencyType, setCurencyType] = useState<string>('USD')
const [exchangeRate, setExchangeRate] = useState<number>(1)
const [total,setTotal] = useState<number>(0)
const totalAdd = (price:number) => {
    setTotal(total + price)
}
const onChangeCurrencyToUsd = () => {
    setCurencyType(() => 'USD')
    setExchangeRate(1)
}
const onChangeCurrencyToUan = () => {
    setCurencyType(() => 'UAN')
    setExchangeRate(40)
}
const onChangeCurrencyToEur = () => {
    setCurencyType(() => 'EUR')
    setExchangeRate(0.94)
}


    return (

        <>

            <Test1/>
            <Test2 
                total={total}
                totalAdd={totalAdd}
                exchangeRate={exchangeRate}
                currencyType={currencyType}
                onChangeCurrencyToUsd={onChangeCurrencyToUsd}
                onChangeCurrencyToUan={onChangeCurrencyToUan}
                onChangeCurrencyToEur={onChangeCurrencyToEur}
                />
        </>
    )
}
export default App
