import React, { useState } from 'react';
const dummyStakers = [
    {
        walletAddress: '0x1234567890abcdef',
        netCG8Staked: 50000,
        cg8Staked: 75000,
        cg8Unstaked: 25000,
    },
    {
        walletAddress: '0xfedcba0987654321',
        netCG8Staked: 80000,
        cg8Staked: 100000,
        cg8Unstaked: 20000,
    },
    {
        walletAddress: '0x9876543210abcdef',
        netCG8Staked: 35000,
        cg8Staked: 60000,
        cg8Unstaked: 25000,
    },
];
const TopCG8Stakers = () => {
    const [dateRange, setDateRange] = useState({ start: '', end: '' });
    const [numWallets, setNumWallets] = useState('');
    const [stakers, setStakers] = useState(dummyStakers);

    const handleDateRangeChange = (e, field) => {
        setDateRange((prevState) => ({
            ...prevState,
            [field]: e.target.value,
        }));
    };

    const handleNumWalletsChange = (e) => {
        setNumWallets(e.target.value);
    };

    const filterStakers = () => {
        const filteredStakers = dummyStakers.slice(0, numWallets);
        setStakers(filteredStakers);
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
                    onClick={filterStakers}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                >
                    Filter
                </button>
            </div>

            <div className="mt-8 w-full overflow-x-auto">
                <h2 className="text-2xl font-bold mb-4">Top CG8 Stakers</h2>
                <table className="table-auto w-full overflow-scroll bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Wallet Address</th>
                            <th className="px-4 py-2">Net CG8 Staked</th>
                            <th className="px-4 py-2">CG8 Staked</th>
                            <th className="px-4 py-2">CG8 Unstaked</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stakers.map((staker) => (
                            <tr key={staker.walletAddress} className="hover:bg-gray-100 transition-colors duration-300">
                                <td className="border px-4 py-2">{staker.walletAddress}</td>
                                <td className="border px-4 py-2">{staker.netCG8Staked}</td>
                                <td className="border px-4 py-2">{staker.cg8Staked}</td>
                                <td className="border px-4 py-2">{staker.cg8Unstaked}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TopCG8Stakers;