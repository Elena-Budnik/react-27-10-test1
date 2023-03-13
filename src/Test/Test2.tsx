import { Typography, Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import PhoneItem from 'components/PhoneItem/PhoneItem'
import PhoneArray from 'utils/phoneArray'
import { Container } from '@mui/system'
import './Test2.scss'
import Total from 'components/Total/Total'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Currency from 'components/Currency/Currency'

type Props = {
    currencyType:string
    totalAdd: (price: number) => any
    total: number
    exchangeRate: number
    onChangeCurrencyToUsd: () => void
    onChangeCurrencyToUan: () => void
    onChangeCurrencyToEur: () => void
}

const Test2 = ({
    currencyType,
    totalAdd,
    total,
    exchangeRate,
    onChangeCurrencyToUsd,
    onChangeCurrencyToUan,
    onChangeCurrencyToEur,
}: Props) => {
  
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <div className="form">
                <Container>
                    <Typography variant="h4" align="center" component="h2">
                        Our shop-page
                    </Typography>


                    <Currency
                     onChangeCurrencyToUsd={onChangeCurrencyToUsd}
                     onChangeCurrencyToUan={onChangeCurrencyToUan}
                     onChangeCurrencyToEur={onChangeCurrencyToEur}
                    />
                        
                 

                    <Grid container spacing={3}>
                        {PhoneArray.map(({ id, title, description, price }) => (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <PhoneItem
                                    totalAdd={totalAdd}
                                    exchangeRate={exchangeRate}
                                    currencyType={currencyType}
                                    id={id}
                                    title={title}
                                    description={description}
                                    price={price}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <div className="totalPrice">
                        <Total 
                         exchangeRate={exchangeRate}
                         total={total}
                         currencyType={currencyType}
                        />
                    </div>
                </Container>
            </div>
        </StyledEngineProvider>
    )
}
export default Test2
