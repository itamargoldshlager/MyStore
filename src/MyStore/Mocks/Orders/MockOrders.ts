import {OrderProps, OrderState} from '../../Components/Orders/SingleOrderRow'

const data: OrderProps[] = [
    {
        id: 1,
        date: new Date(),
        status: OrderState.Open,
        totalPrice: 30,
        imageSrc: ""
    }, 
    {
        id: 2,
        date: new Date(),
        status: OrderState.Done,
        totalPrice: 40,
        imageSrc: ""
    },
    {
        id: 3,
        date: new Date(),
        status: OrderState.Canceled,
        totalPrice: 150,
        imageSrc: ""
    }
]

export default data;