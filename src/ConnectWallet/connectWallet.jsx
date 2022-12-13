import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ethers } from "ethers";
import WalletDetails from "./walletDetails";

export default function ConnectWallet() {
  const [Web3Provider, setWeb3Provider] = useState({
    address: "",
    network: "",
  });

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    provider.on("network", (newNetwork, oldNetwork) => {
      // When a Provider makes its initial connection, it emits a "network"
      // event with a null oldNetwork along with the newNetwork. So, if the
      // oldNetwork exists, it represents a changing network
      if (oldNetwork) {
        connectWallet();
      }
    });
  }, []);

  const connectWallet = async () => {
    //Get the providers (Checking whether can connect the Metamask in any network)
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    //Get the provider and use afterwards
    //Provider = read-only abstraction to access the blockchain data

    //Get all the accounts and select the first accounr
    let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];

    // Get signer
    // Signer = used to sign messages and transcations
    //        = send signed transctions to ETH Network to execute state changing operations
    const signer = provider.getSigner();

    //Get address for the account
    const address = await signer.getAddress();
    setWeb3Provider((previousState) => {
      return { ...previousState, address: address };
    });
    console.log("Address is " + address);

    //Get the network connected to Mainnet/Goerli/Sepolia Test Network
    const network = await provider.getNetwork();
    setWeb3Provider((previousState) => {
      return { ...previousState, network: network.name };
    });
    console.log("Connected to " + network.name + " test network");

    //Get the balance for the account using address
    const balance = await provider.getBalance(address);
    const test_balance = ethers.utils.formatEther(balance)
    setBalance(test_balance);
    console.log("Balance remaining: +ETH " + test_balance);
  };

  const styles = {
    text: {
      fontFamily: "Spicy Rice",
      color: "#043871",
      fontSize: "1.3rem",
    },
    dflex: {
      display: "flex",
      justifyContent: "center",
    },
    connect: {
      border: "3px solid #043871",
      color: "#043871",
      marginLeft: "20px",
      padding: "0 40px",
      fontWeight: "bold",
    },
  };

  return (
    <Grid container spacing={4} sx={{ marginBottom: "10px" }}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        {Web3Provider.address ? (
          <WalletDetails address={Web3Provider.address} balance={balance} network={Web3Provider.network}/>
        ) : (
          <Container style={styles.dflex}>
            <Typography variant="p" style={styles.text}>
              Hi,do you mind to connect your wallet?
            </Typography>
            <Button
              variant="outlined"
              style={styles.connect}
              onClick={connectWallet}
            >
              Connect
            </Button>
          </Container>
        )}
        {/*  */}
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
}
