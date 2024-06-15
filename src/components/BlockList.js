import React, { useState } from 'react';

const dummyWallets = [
    {
        walletAddress: '0x1234567890abcdef',
        type: 'blacklisted',
    },
    {
        walletAddress: '0xfedcba0987654321',
        type: 'whitelisted',
    },
    {
        walletAddress: '0x9876543210abcdef',
        type: 'blacklisted',
    },
    // Add more dummy data as needed
];
const BlacklistWhitelistWallets = () => {
    const [wallets, setWallets] = useState(dummyWallets);


    return (
        <div className="container mx-auto my-8">
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Blacklisted/Whitelisted Wallets</h2>
                <table className="table-auto w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Wallet Address</th>
                            <th className="px-4 py-2">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wallets.map((wallet) => (
                            <tr key={wallet.walletAddress} className="hover:bg-gray-100 transition-colors duration-300">
                                <td className="border px-4 py-2">{wallet.walletAddress}</td>
                                <td className="border px-4 py-2">
                                    <span
                                        className={`px-2 py-1 rounded-full ${wallet.type === 'blacklisted' ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'
                                            }`}
                                    >
                                        {wallet.type}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BlacklistWhitelistWallets;