import { loadStripe } from "@stripe/stripe-js";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

// add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    return (
        <div>
            <SectionTittle heading={'Payment'} subHeading={'Please pay to eat'}></SectionTittle>
            <div className="px-10">
                <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;