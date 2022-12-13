import React from "react";

export default function WalletDetails(props) {
    const info = [
        {
            title: "Wallet Address",
            icon: "https://cdn-icons-png.flaticon.com/512/855/855279.png",
            content: props.address,
        },
        {
            title: "Network Connected",
            icon: "https://cdn-icons-png.flaticon.com/512/364/364089.png",
            content: props.network,
        },
        {
            title: "Wallet's Balance",
            icon: "https://cdn-icons-png.flaticon.com/512/2953/2953536.png",
            content: props.balance
        }
    ];
    return (
        <div>
          {info.map((item, i) => (
            <WalletDetail content={item.content} title={item.title} icon={item.icon} key={i}/>
          ))}
        </div>
      );
}

function WalletDetail(props) {
  const styles = {
    parent: {
      backgroundColor: "#043871",
      color: "#EBEBEB",
      display: "flex",
      borderRadius: "10px",
      height: "70px",
      padding: "10px",
      alignItems: "center",
      gap: "20px",
      marginBottom: "40px"
    },
    smalltext: {
      padding: "0",
      margin: "0",
      fontSize: "1rem",
    },
    content: {
      padding: "0",
      margin: "0",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
  };
  return (
    <div style={styles.parent}>
      <img
        src={props.icon}
        alt="wallet"
        width={"100px"}
      />
      <div>
        <p style={styles.smalltext}>{props.title}</p>
        <p style={styles.content}>{props.content}</p>
      </div>
    </div>
  );
}
