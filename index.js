import axios from "axios";

const CLAIM_URL = "https://faucet.testnet.humanity.org/api/claim";

const walletAddress = "0xF99F7B3724046FB7276eCC28FEd824EC8E1C15b9"; // Ganti dengan alamat wallet yang valid

// Fungsi untuk validasi alamat wallet
const isValidAddress = (address) => /^0x[a-fA-F0-9]{40}$/.test(address);

if (!isValidAddress(walletAddress)) {
    console.error("Alamat wallet tidak valid!");
    process.exit(1);
}

const claimFaucet = async () => {
    try {
        const response = await axios.post(CLAIM_URL, {
            address: walletAddress
        }, {
            headers: {
                "Content-Type": "application/json",
                "Origin": "https://faucet.testnet.humanity.org",
                "Referer": "https://faucet.testnet.humanity.org/",
            }
        });

        console.log("Klaim berhasil:", response.data);
    } catch (error) {
        console.error("Terjadi kesalahan:", error.response?.data || error.message);
    }
};

claimFaucet();
