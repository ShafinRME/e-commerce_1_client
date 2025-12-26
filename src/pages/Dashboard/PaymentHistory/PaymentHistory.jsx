import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loader from '../../../shared/Loader/Loader';

const formatDate = (iso) => new Date(iso).toLocaleString();

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { isPending, data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`);
            return res.data;
        }
    })

    if (isPending) {
        return <Loader></Loader>
    }

    return (
        <div className="overflow-x-auto shadow-md ">
            <table className="table table-zebra w-full">
                <thead className="bg-base-200 text-white font-semibold">
                    <tr>
                        <th>#</th>
                        <th>Parcel ID</th>
                        <th>Amount</th>
                        <th>Transaction</th>
                        <th>Paid At</th>
                    </tr>
                </thead>
                <tbody>
                    {payments?.length > 0 ? (
                        payments.map((p, index) => (
                            <tr key={p.transactionId} className={index % 2 === 0 ? "bg-slate-200" : "bg-slate-300"}>
                                <td>{index + 1}</td>
                                <td className="truncate" title={p.parcelId}>
                                    {p.parcelId}...
                                </td>
                                <td>৳{p.amount}</td>
                                <td className="font-mono text-sm">
                                    <span title={p.transactionId}>
                                        {p.transactionId}...
                                    </span>
                                </td>
                                <td>{formatDate(p.paid_at_string)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center text-gray-500 py-6">
                                No payment history found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;