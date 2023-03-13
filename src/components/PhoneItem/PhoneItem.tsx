import { Button, Card, CardActions, CardContent } from '@mui/material'

type Props = {
    totalAdd: (price: number) => any
    exchangeRate: number
    currencyType: string
    id: number
    title: string
    description: string
    price: number
}

const PhoneItem = ({
    totalAdd,
    exchangeRate,
    currencyType,
    id,
    title,
    description,
    price,
}: Props) => {
    const newPrice = price * exchangeRate

    return (
        <>
            <Card variant="outlined" className="product">
                <CardContent>
                    <div className="title">Title: {title}</div>
                    <div className="description">
                        Description: {description}
                    </div>
                    <div className="price">
                        Price: {newPrice} {currencyType}
                    </div>
                </CardContent>

                <CardActions className="btn-buy">
                    <Button variant="outlined" onClick={() => totalAdd(price)}>
                        Buy
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default PhoneItem
