import { ChangeEvent, FormEvent, useState } from "react";
import BkashLogo from "../BkashLogo";
import { useRegistration } from "../../contexts/RegistrationContext";
import { ApiResponse, RegistrationProps } from "../../libs/types";
import { NOT_PHONE_NO_REGEX, PHONE_NO_REGEX } from "../../libs/utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { EVENT_URL_PATH } from "../../libs/urlPaths";

const initialValues = {
    payment_phone_number: '',
    trxId: '',
}

export default function StepThree({regFee}:{regFee:number | string}) {
    const [transactionInfo, setTransactionInfo] = useState<Partial<RegistrationProps>>(initialValues);
    const { formData, prev, setPaymentPhoneNo, setTrxId, registerForEvent } = useRegistration();

    const navigate = useNavigate();

    async function onSubmit(e:FormEvent) {
        e.preventDefault();
        console.log(formData.data);
        try {
            const res = await registerForEvent() as ApiResponse;
            if (res.error) {
                console.log(res);
                toast.error(res.message);
            } else {
                toast.success(res.message);
                navigate(EVENT_URL_PATH.home);
            }
        } catch (error) {
            const err = error as Error;
            console.log(error);
            toast.error(err.message);
        }
    }
    function onChange(e:ChangeEvent<HTMLInputElement>) {
        const k = e.target.name as keyof Partial<RegistrationProps>;
        if(e.target.type == 'tel') {
            setTransactionInfo(v => {
                return {...v, [k]: e.target.value.replace(NOT_PHONE_NO_REGEX, '')}
            })
            // Refactoring needed
            setPaymentPhoneNo(e.target.value.replace(NOT_PHONE_NO_REGEX, ''));
        } else {
            setTransactionInfo(v => ({...v, [k]: e.target.value}) );
            // Refactoring needed
            setTrxId(e.target.value);
        }
    }

    return (
        <form onSubmit={onSubmit} className="pt-12 mx-auto max-w-lg w-full">
                {
                    regFee == 'N/A' || !regFee ? 
                    <p className="text-center">Registration for this event is Free</p>
                    :
                    <>
                    <div className="pl-4">
                        <p className="py-4">Registration Fee: <span className="font-bold">{regFee}/- BDT</span></p>
                        <div className="shadow shadow-black my-4 px-4 bg-[#e2136e] p-1 w-fit">
                            <BkashLogo/>
                        </div>
                        <label className="text-sm" htmlFor="payment_phone_number">Your Bkash Phone Number:</label>
                        <div className="flex items-center">
                            <span className="pr-1">+880</span>
                            <input
                                onChange={onChange}
                                className="my-2 w-full p-2 rounded outline-none bg-primary-800 shadow shadow-black"
                                type="tel"
                                value={transactionInfo.payment_phone_number}
                                pattern={PHONE_NO_REGEX}
                                name="payment_phone_number"
                                id="payment_phone_number"
                            />
                        </div>
                        <label className="text-sm" htmlFor="trxId">Transaction ID:</label>
                        <input
                            onChange={onChange}
                            className="my-2 w-full p-2 rounded outline-none bg-primary-800 shadow shadow-black"
                            type="text"
                            value={transactionInfo.trxId}
                            name="trxId"
                            id="trxId"
                        />
                    </div>
                    </>
                }
                    
        <div className="py-8 flex justify-between items-center">
        <button
            className="px-4 py-1 rounded-md bg-blue-600 disabled:brightness-50"
            type="button"
            onClick={prev}
        >Prev</button>
            <button
                disabled={!(transactionInfo.payment_phone_number && transactionInfo.trxId || (!regFee || regFee == 'N/A'))}
                className="px-4 py-1 rounded-md bg-blue-600 disabled:brightness-50"
                type="submit"
            >
            Submit
            </button>
          </div>
        </form>
    )
}
