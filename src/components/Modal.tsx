type Props = {
  open: boolean;
  onClose: () => void;
};

const Modal = ({ open, onClose }: Props) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="fixed w-full h-full z-50">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="max-w-[900px] w-full fixed top-[40%] left-[50%] flex bg-white rounded-[8px]"
        style={{ transform: "translate(-50%, -50%)", boxShadow: "0px 0px 18px 0px rgba(0, 0, 0, 0.75)" }}
      >
        <div className="flex" style={{ flexFlow: "row wrap" }}>
          <div className="bg-primary-color p-6 hidden sm:block" style={{ flexBasis: "41.6667%" }}>
            <div className="text-[30px] font-medium leading-[45px]">Get Started</div>
            <div className="text-[18px] font-medium leading-7">Connect your wallet</div>
            <p className="text-[14px]">Connecting your wallet is like “logging in” to Web3. Select your wallet from the options to get started.</p>
            <div className="mt-8">
              <div className="flex flex-row items-start">
                <div className="px-2 relative" style={{ flex: "1 1 0%" }}>
                  <span className="flex-col flex items-center">
                    <span className="pr-0 flex-shrink-0 flex">
                      <div className="text-white flex h-[22px] items-center">
                        <div className="w-[10px] h-[10px] rounded-[50%] bg-white"></div>
                      </div>
                    </span>
                    <span className="text-center w-full text-[rgb(53, 52, 63)]">
                      <span
                        className="mt-4 text-[rgb(12, 12, 12)] font-medium text-[0.875rem]"
                        style={{ transition: "color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" }}
                      >
                        1
                      </span>
                    </span>
                  </span>
                </div>
                <div className="px-2 relative" style={{ flex: "1 1 0%" }}>
                  <div className="top-[10px] absolute" style={{ left: "calc(-50% + 5px)", right: "calc(50% + 5px)" }}>
                    <span className="border-white border-t-[3px] rounded-[1px] block border-solid"></span>
                  </div>
                  <span className="flex-col flex items-center">
                    <span className="pr-0 flex-shrink-0 flex">
                      <div className="text-white flex h-[22px] items-center">
                        <div className="w-[10px] h-[10px] rounded-[50%] bg-black"></div>
                      </div>
                    </span>
                    <span className="text-center w-full text-[rgb(53, 52, 63)]">
                      <span
                        className="mt-4 text-[rgb(12, 12, 12)] font-medium text-[0.875rem]"
                        style={{ transition: "color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" }}
                      >
                        2
                      </span>
                    </span>
                  </span>
                </div>
                <div className="px-2 relative" style={{ flex: "1 1 0%" }}>
                  <div className="top-[10px] absolute" style={{ left: "calc(-50% + 5px)", right: "calc(50% + 5px)" }}>
                    <span className="border-white border-t-[3px] rounded-[1px] block border-solid"></span>
                  </div>
                  <span className="flex-col flex items-center">
                    <span className="pr-0 flex-shrink-0 flex">
                      <div className="text-white flex h-[22px] items-center">
                        <div className="w-[10px] h-[10px] rounded-[50%] bg-black"></div>
                      </div>
                    </span>
                    <span className="text-center w-full text-[rgb(53, 52, 63)]">
                      <span
                        className="mt-4 text-[rgb(12, 12, 12)] font-medium text-[0.875rem]"
                        style={{ transition: "color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" }}
                      >
                        3
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flexGrow: 0, borderLeft: "1px solid green " }} className="basis-[100%] max-w-full sm:max-w-[58.3333%] sm:basis-[58.3333%]">
            <div className="w-full">
              <div className="flex justify-between items-center py-4 px-3">
                <div className="text-[18px] font-semibold">Available Wallets</div>
                <p className="cursor-pointer" onClick={onClose}>
                  X
                </p>
              </div>
              <hr className="h-[1px] m-0 border-[rgba(0, 0, 0, 0.12)] border-solid bg-black" style={{ borderWidth: "0px 0px thin" }} />
              <div>
                <div className="mt-4 flex justify-center items-center" style={{ flexFlow: "row wrap" }}>
                  <div className="transform-none text-[18px] mt-2 mb-2 mr-4 w-full max-w-[220px] p-4 bg-white rounded-[18px] flex items-center font-bold border border-solid border-primary-color cursor-pointer hover:bg-primary-color">
                    <div className="w-[48px] h-[48px] border border-solid border-black rounded-[12px] flex items-center justify-center mr-4">
                      <img
                        src="data:image/png;base64,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"
                        width="30"
                        alt="logo"
                      />
                    </div>
                    <h1 className="text-[18px] text-center font-normal">MetaMask</h1>
                  </div>
                  <div className="transform-none text-[18px] mt-2 mb-2 mr-4 w-full max-w-[220px] p-4 bg-white rounded-[18px] flex items-center font-bold border border-solid border-primary-color cursor-pointer hover:bg-primary-color">
                    <div className="w-[48px] h-[48px] border border-solid border-black rounded-[12px] flex items-center justify-center mr-4">
                      <img src="https://shop.sniser.com/assets/coinbase-7e6e093e.png" width="30" alt="logo" />
                    </div>
                    <h1 className="text-[18px] text-center font-normal">Coinbase Wallet</h1>
                  </div>
                  <div className="transform-none text-[18px] mt-2 mb-2 mr-4 w-full max-w-[220px] p-4 bg-white rounded-[18px] flex items-center font-bold border border-solid border-primary-color cursor-pointer hover:bg-primary-color">
                    <div className="w-[48px] h-[48px] border border-solid border-black rounded-[12px] flex items-center justify-center mr-4">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAAXNSR0IArs4c6QAABTVJREFUWEe9WH9MG2UYft+7a0sJtEMyYMxsWQgE45AtoC6wCWzGP9TFzJhFkmkynfyQzWUDhWQmQvwHCMrALbMuRhPNwBjRDMSFKbLEDTa3IRmYIW7KIDAwRFuwpe3dfeYr+0p77fVaVvz+Ktz7Pu/zPn3fp3eHsILT/APZ+ZddKrc5yGbrIpc0Ny+ZZhZQSI4jYmI8bzPHyDMmI44km/jmwwV4KdISGFZCLdEfy5EP2hzyi7fmyJYZG+rCygOA9WZwmozY/esUOXHdKfwEtejSytUk9eYVkiJNSu0Df5ACp6gFp37dwBPISIEvPp3V7Yej6AiFFIIU4So7JMvgJHnF6gBu5XT8MxOM4JyzY8lgDf85AMrBcFVJ1ZwVLb03SYlEokVnGYdHAF4gh/qP6k+ESYpwB78UR/pvQ2b06fgjPhCLbecP8fuUigUodazLdebcCBavNiGGLwIpH6rWf+hbz49UYw858NWQeFoM+k2vDk2eQyITsuPqW7qLrIKX1Nsd5KFLd8RhqzN6Qx1uGyYDyHansPFyNU7SHC+pyg6xv2+MbAsXKNpxj6zHs5/sE57zkmruJc+0XRe7JGllpdaZANaZEaatBKZtK8PgeYC1sULat6/jbY9SFe3u0YFxyIgE7tnNCIXpHBSmB7pK3xiBvjEZuoYj85O8TTD6wV5dpgfxqVaXNOfAsAwyIwmgaY8AqWbtFqasAFVfi/DbrHYsjUiIA+n7Cp2ATT3igbZBcjqcNKpO7dN8QCgtOu8kEG9AoKSVp7ZbClu14q34GlZ2uPv7xkBzwFNMAF1lgrfeghPAclGGzhsy0M/sxBkAdmdxUJrPAf3MTlGLCPM+cWoiFKbDAL76mTj9yxRJiUQpqkxpW+gilNBHxYJHuUiU2pKKd/F5i9s+/g8Y1UjRzaIbxUa2KB3h2h0S0DVVksb5jj0llrsB4cexpWx6jcbdDbGhG9eAA59scUt/LwY3zOJcDip3ct5OGTFWmP29+96sUUU6h4kfMUqGxtEcNpOhlEuIARkfa3KTYP5EV71pz/JQqxVkxJnSLM7PmX0IsbjSNgmuTQRaBvUrVaV8Z0KtIN1E2r3ynLkqw3u9yz+gTEkWR2eypE30WxB2zaNUqJmKNwBY7g0rS2IF6xSE6DzR+WOn8waBuu8kj4X4EqfqVHVIqpvomalQ20fFpcSqdvkDU1P0NU/q3O90S6AkqhYX6h7cs33h+pTaV8UIMYWUxNj/WZzWQ4HHpyJxdCUxX0K0GBtbJTFlXChP9Dg6DXjiuFv+1xmwyX65yoJqhdj6swYiIZRoJHLPG3p6Cw9Q3u76/co4pmm5uq/fUD9Srr0ynw44JcXytPDz07jh1hf4LA+pnHqygRfEPyUptFrMCBm41nxokfC9Tv0pJ1nIPPUSjnpxt7dIx+2L8uFoFoqE1LZN2Htyr7DLX/1WYtouihN2N5j+b2LmGHD3LgqJUI3zASOR2+jOB4ALhEDgTVMkbUcQiwgyyrDj5xqd90VIgCjZDa4yAfBUBLj3Far53MfQtza46xGgerW/xsQ4ztJTwZcpu1Ktm13vKtVz3EmJkCXfiOJBAFkCLBmsFj4OBhuy3qP17jyjHs4tuCE+WsQSY8FltZOCy9X6AbU+tWu9T4yFgviu04lHXDIJ64knWDGjAYhRgMbzLqHuPt5P+UPnN5DUx9PFb27NkuwJK+q1u1nKf9BMXGlJOJSVILy8vwhvhjMF4WL7YbVcIHkzNumIzUEeti5yyUHeec6uMeLQWhPfupJ3nv8BhOtLNlD0U5kAAAAASUVORK5CYII="
                        width="30"
                        alt="logo"
                      />
                    </div>
                    <h1 className="text-[18px] text-center font-normal">Wallet Connect</h1>
                  </div>
                  <div className="transform-none text-[18px] mt-2 mb-2 mr-4 w-full max-w-[220px] p-4 bg-white rounded-[18px] flex items-center font-bold border border-solid border-primary-color cursor-pointer hover:bg-primary-color">
                    <div className="w-[48px] h-[48px] border border-solid border-black rounded-[12px] flex items-center justify-center mr-4">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAABMJJREFUWEftl0tsG1UUhs+5Dk49bjv2CgkJEYkdG4KQqIQqYQOKXdSWCLHh2WwQbFBdIWWRTexKSC0I6ixYABFJCYIlYUPtCGi7YAEsSgUbXiKFFSywE/AEG2cO50x8J+OR7bE9jqhELFVJxvfxzf//595ThJv8gzc5H+wDhnXo/6Ng5TIkVMM4TQDT/K+QzFirYdWT+SNRsFI2ppHgAiBOuFAEV0jBmeRU7eswoKEAK2vxSbQFDFLdIHiDoh2tFZJpqA4DOhTgjp3xebYy592UiG6wKasMPMMLm57vqkh23sxuLQwKOTCgqAZsnxeAQTcAqMi5ywtA5dKBCVAqj4Cn2l4A4CpEa9ODqNk3oKimF2aAFKgIA8ADBHQRolbO/W6Icb1UDQQUNVCpC2zdtD9PoqYuAmccRpYkjwiUt6PWggvdedwkj+N87o7rBNoT0KlOwCWemNCTJWfJrLVbrS1LUUV+breTrrPlk95nTlERXGsDIVonstPJY3+vDwMoOZp34YAKbGexmzKAqoiIj7LtvcepyLLEw13X3hbAK6EAZVNPEaRatrMitGyTXdAK+LPaNm7cOuO+XDkuheZA0igB2aYZtkls936qkiczYxV0FStU84Q44x9HCGnJbWUUgM5mZYOPDuTzbucYkb+9tvvzxBav8rEjYG5u27LZUksAgWiC5ZvpZq/MC6xirQj/nJCFegJ2CpHvmbZTCrCf+7on4GbZOAH29veHj9W/0/uEBkS4x3s/V8uxx5Vtf+Pdw/tOQceMHMZzYq/Z2MrjCbAcRTmHfJsUfddZT/3Y9qv8snltZ/XT8TuhOfYWT3qQr8EjfA1+GaqKGfL5RMaSBZ2PVCs0jFzXPLbGOdcgQo5VW/YCVErGR5zXk07ORgkolsCYfS3xUP0nN59KrTLo3X4FiGABxmt5fbRwZI4jNNcPZRrf7hlgpRRna+kFVuaVxD/WObG9Wy51QYid1IzwPDzuFsmeKViKnecbY3bHGnjWzNZWAgFL8ffZ5idkzp4DbpTiz/Ctssjdc5QBTzHgu0GAfOatcEE9zXy/ITWPmtn6jyO3mNB+KTm19bqooCuQb4UVCX8QYLVsLAJh1bRrZ/ER2HTWKMc/4x9px4kI3Wc+bH0Vroq55WCb3qSoNadDTx/DYdkwCJAuw0FMw18C8Ocn0bua22Nvcx7v10DDV/Gl2GOg8D1eLOa+HcEfHL5Zc8p6B7lanErmW4F1kA7FbfOd9p/slG4i5GWqKn6Wp7zI8VB6PY7LL+NAR43M1q8DKygTamvGbQ3C860MedagL2Bs+6m244bbLd48JQe7ty3bXDNO2oRyht7qghFZvObLpm29xi7UO8E59nf7wv+cc3QvP3uDpxzZVZOeS2StRe9Yb7uln/PcD6Ujd/7eicpSBKy5Qxn4PWj/vgH1Qhul2JM24jm2/XbezAGslGI5hWj62y3uEy/K1aYB5bq7heD0wWztehCYm89+B3rHcegPbNaNWVD0gzm19YFbJNy+e9st96Aux1/lrH3eT/fi5xlYwU4vFFTFw4gQSkH/hs5/Q1Ets3p37Fan071IM7r+nwMKgO5u+FcphvwwdnZ6kZFYHEahoLn7gEEKBX2/r2CQQkHf/wtnhtRHq6EwZwAAAABJRU5ErkJggg=="
                        width="30"
                        alt="logo"
                      />
                    </div>
                    <h1 className="text-[18px] text-center font-normal">Injected</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
