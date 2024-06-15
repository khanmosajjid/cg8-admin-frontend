import React, { useState } from 'react';

const TopCG8Holders = () => {
    const [threshold, setThreshold] = useState('');

    const dummyTopHolders = [
        {
            walletAddress: '0x1234567890abcdef',
            totalCG8: 1000000,
            cg8InWallet: 500000,
            cg8Staked: 500000,
        },
        {
            walletAddress: '0xfedcba0987654321',
            totalCG8: 750000,
            cg8InWallet: 250000,
            cg8Staked: 500000,
        },
        {
            walletAddress: '0x9876543210abcdef',
            totalCG8: 500000,
            cg8InWallet: 200000,
            cg8Staked: 300000,
        },
        {
            walletAddress: '0xefcdab8967452301',
            totalCG8: 250000,
            cg8InWallet: 100000,
            cg8Staked: 150000,
        },
    ];

    const [topHolders, setTopHolders] = useState(dummyTopHolders);

    const filterTopHolders = () => {
        if (threshold) {
            return topHolders.filter(
                (holder) => holder.totalCG8 >= parseFloat(threshold)
            );
        }
        return topHolders;
    };

    const filteredTopHolders = filterTopHolders();

    return (
        <div className="container mx-auto my-8 w-full overflow-scroll">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Enter threshold"
                    value={threshold}
                    onChange={(e) => setThreshold(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded"
                />
            </div>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Wallet Address</th>
                        <th className="px-4 py-2">Total CG8</th>
                        <th className="px-4 py-2">CG8 in Wallet</th>
                        <th className="px-4 py-2">CG8 Staked</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTopHolders.map((holder) => (
                        <tr key={holder.walletAddress}>
                            <td className="border px-4 py-2">{holder.walletAddress}</td>
                            <td className="border px-4 py-2">{holder.totalCG8}</td>
                            <td className="border px-4 py-2">{holder.cg8InWallet}</td>
                            <td className="border px-4 py-2">{holder.cg8Staked}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopCG8Holders;