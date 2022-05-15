import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });

  useEffect(() => {
    const loadProvider = async () => {
      // with metamask we have an access to window.ethereum & window.web3
      // metamask injects a global API into app
      // this API allows app to request users, accounts, read data to blockchain
      // sign messages and trxs
      console.log(window.web3);
      console.log(window.ethereum);

      let provider = null;

      if (window.ethereum) {
        provider = window.ethereum;
        try {
          await provider.enable();
        } catch {
          console.error('User denied account access!');
        }
      } else if (window.web3) {
        provider = window.web3.currentProvider;
      } else if (!process.env.production) {
        provider = new Web3.providers.HttpProvider('http://localhost:7545');
      }

      setWeb3Api({
        web3: new Web3(provider),
        provider,
      });
    };

    loadProvider();
  }, []);

  console.log({ web3Api: web3Api.web3 });

  return (
    <>
      <Wrapper>
        <div className="faucet">
          <div className="balance-view is-size-2">
            Current Balance: <strong>10</strong> ETH
          </div>
          {/* Button to manually request access to account */}
          {/* <button
            onClick={async () => {
              const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
              });
              console.log({ accounts });
            }}
            className="btn mr-2"
          >
            Enable Ethereum
          </button> */}
          <button className="btn mr-2">Donate</button>
          <button className="btn">Withdraw</button>
        </div>
      </Wrapper>
    </>
  );
}

export default App;
