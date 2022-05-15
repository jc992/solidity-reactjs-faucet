import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  useEffect(() => {
    const loadProvider = async () => {
      // with metamask we have an access to window.ethereum & window.web3
      // metamask injects a global API into app
      // this API allows app to request users, accounts, read data to blockchain
      // sign messages and trxs
      console.log(window.web3);
      console.log(window.ethereum);
    };

    loadProvider();
  }, []);

  return (
    <>
      <Wrapper>
        <div className="faucet">
          <div className="balance-view is-size-2">
            Current Balance: <strong>10</strong> ETH
          </div>
          <button
            onClick={async () => {
              const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
              });
              console.log({ accounts });
            }}
            className="btn mr-2"
          >
            Enable Ethereum
          </button>
          <button className="btn mr-2">Donate</button>
          <button className="btn">Withdraw</button>
        </div>
      </Wrapper>
    </>
  );
}

export default App;
