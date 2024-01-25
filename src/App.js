import { useEffect, useState } from "react";

function App() {
  const [isBannerShown, setIsBannerShown] = useState(false);

  const handleCloseBanner = () => {
    localStorage.setItem("banner", "false");
    setIsBannerShown(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 125) {
        if (localStorage.getItem("banner", "false") != "false") {
          setIsBannerShown(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="img__cont">
          <img src="assets/img-1.png" alt="gift" />
        </div>
        <div className="App-descr">
          <p>
            Black Friday <span className="coma">, </span>{" "}
            <span className="november">, 24-27 Nov</span>{" "}
            <span className="App-nov yellow"> 10%OFF</span>{" "}
            <span className="code">Use code</span>{" "}
            <span className="yellow day">10FRIDAY</span>{" "}
            <span className="date">at checkout</span>
          </p>
          <img src="assets/menu-icon.png" alt="arrow" className="arrow" />
        </div>
        <div className="btn__wrapper">
          <button className="btn-shop">Shop now</button>
          <img src="assets/сlose.svg" alt="close" className="close-btn" />
        </div>
      </header>

      <div className={`banner ${isBannerShown ? "active" : ""}`}>
        <div className="banner__inner">
          <div className="banner__close" onClick={handleCloseBanner}>
            <img src="assets/сlose.svg" alt="close" className="close-btn" />
          </div>
          <div className="banner__wrapper">
            <img src="assets/img.png" alt="close" className="baloons" />

            <div className="banner__descr">
              <div className="friday">Black Friday</div>
              <div className="off">10%OFF</div>
              <div className="use">
                Use code <span>10FRIDAY</span> at checkout
              </div>
              <button className="shop-now">
                Shop now <span>through Monday</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
