import React, { useState } from 'react';
const dummyWallets = [
    {
        walletAddress: '0x1234567890abcdef',
        referralFees: 1000,
    },
    {
        walletAddress: '0xfedcba0987654321',
        referralFees: 2500,
    },
    {
        walletAddress: '0x9876543210abcdef',
        referralFees: 1800,
    },
    // Add more dummy data as needed
];
const TopReferralFeeWallets = () => {
    const [dateRange, setDateRange] = useState({ start: '', end: '' });
    const [numWallets, setNumWallets] = useState('');
    const [wallets, setWallets] = useState(dummyWallets);

    const handleDateRangeChange = (e, field) => {
        setDateRange((prevState) => ({
            ...prevState,
            [field]: e.target.value,
        }));
    };

    const handleNumWalletsChange = (e) => {
        setNumWallets(e.target.value);
    };

    const filterWallets = () => {
        // Implement logic to filter wallets based on date range and number of wallets
        // Fetch data from an API or data source
        const filteredWallets = dummyWallets.slice(0, numWallets);
        setWallets(filteredWallets);
    };

 

    return (
        <div className="container mx-auto my-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4 md:flex space-x-4">
                    <div>
                        <label htmlFor="startDate" className="block font-medium mb-1">
                            Start Date:
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            value={dateRange.start}
                            onChange={(e) => handleDateRangeChange(e, 'start')}
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="endDate" className="block font-medium mb-1">
                            End Date:
                        </label>
                        <input
                            type="date"
                            id="endDate"
                            value={dateRange.end}
                            onChange={(e) => handleDateRangeChange(e, 'end')}
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="numWallets" className="block font-medium mb-1">
                            Number of Wallets:
                        </label>
                        <input
                            type="number"
                            id="numWallets"
                            value={numWallets}
                            onChange={handleNumWalletsChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                    </div>
                </div>
                <button
                    onClick={filterWallets}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                >
                    Filter
                </button>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Top Referral Fee Wallets</h2>
                <table className="table-auto w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Wallet Address</th>
                            <th className="px-4 py-2">Referral Fees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wallets.map((wallet) => (
                            <tr key={wallet.walletAddress} className="hover:bg-gray-100 transition-colors duration-300">
                                <td className="border px-4 py-2">{wallet.walletAddress}</td>
                                <td className="border px-4 py-2">{wallet.referralFees}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TopReferralFeeWallets;