import React, { useState } from 'react';
const dummyClaimers = [
    {
        walletAddress: '0x1234567890abcdef',
        totalRewardsClaimed: 5000,
        lockedPoolRewardsClaimed: 3000,
        unlockedPoolRewardsClaimed: 2000,
    },
    {
        walletAddress: '0xfedcba0987654321',
        totalRewardsClaimed: 7500,
        lockedPoolRewardsClaimed: 5000,
        unlockedPoolRewardsClaimed: 2500,
    },
    {
        walletAddress: '0x9876543210abcdef',
        totalRewardsClaimed: 4200,
        lockedPoolRewardsClaimed: 2500,
        unlockedPoolRewardsClaimed: 1700,
    },
    // Add more dummy data as needed
];
const TopRewardClaimers = () => {
    const [dateRange, setDateRange] = useState({ start: '', end: '' });
    const [numWallets, setNumWallets] = useState('');
    const [claimers, setClaimers] = useState(dummyClaimers);

    const handleDateRangeChange = (e, field) => {
        setDateRange((prevState) => ({
            ...prevState,
            [field]: e.target.value,
        }));
    };

    const handleNumWalletsChange = (e) => {
        setNumWallets(e.target.value);
    };

    const filterClaimers = () => {
        // Implement logic to filter claimers based on date range and number of wallets
        // Fetch data from an API or data source
        const filteredClaimers = dummyClaimers.slice(0, numWallets);
        setClaimers(filteredClaimers);
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
                    onClick={filterClaimers}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                >
                    Filter
                </button>
            </div>

            <div className="mt-8 w-full overflow-x-scroll">
                <h2 className="text-2xl font-bold mb-4">Top Reward Claimers</h2>
                <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-scroll">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Wallet Address</th>
                            <th className="px-4 py-2">Total Rewards Claimed</th>
                            <th className="px-4 py-2">Locked Pool Rewards</th>
                            <th className="px-4 py-2">Unlocked Pool Rewards</th>
                        </tr>
                    </thead>
                    <tbody>
                        {claimers.map((claimer) => (
                            <tr key={claimer.walletAddress} className="hover:bg-gray-100 transition-colors duration-300">
                                <td className="border px-4 py-2">{claimer.walletAddress}</td>
                                <td className="border px-4 py-2">{claimer.totalRewardsClaimed}</td>
                                <td className="border px-4 py-2">{claimer.lockedPoolRewardsClaimed}</td>
                                <td className="border px-4 py-2">{claimer.unlockedPoolRewardsClaimed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TopRewardClaimers;