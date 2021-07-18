import Review from './Review';

export default function PaymentForm({ checkoutToken }) {
    return (
        <>
            <Review checkoutToken={checkoutToken} />
        </>
    )
}