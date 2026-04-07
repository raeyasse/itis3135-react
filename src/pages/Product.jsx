export default function Product() {
    return <>
        <h2>Product</h2>
        <main>
            <div id="top-bar">
                <div id="header-title">
                    <img id="header-img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1V7mS6z-HFMuJEmxY8IaG261Hb81Ba1Vbw&s"
                        alt="ipod" width="35" />
                    <h1>Blackwell Retro</h1>
                </div>

                <nav id="nav-bar">
                    <ul>
                        <li><a className="nav-link" href="#products">Products</a></li>
                        <li><a className="nav-link" href="#features">Features</a></li>
                        <li><a className="nav-link" href="#pricing">Pricing</a></li>
                    </ul>
                </nav>
            </div>

            <h2>Take Ownership of your music, get an iPod</h2>
            <form id="form" action="https://www.freecodecamp.org/email-submit">
                <input name="email" type="email" id="email" placeholder="Enter your email address" required />
                <input type="submit" id="submit" value="Submit" />
            </form>

            <section id="products">
                <div className="products-container">
                    <div className="product">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/6G_iPod.svg" alt="iPod Classic" width="120" />
                        <h3>iPod Classic</h3>
                        <p>Iconic click wheel and massive storage for thousands of songs.</p>
                        <button>Buy Now</button>
                    </div>

                    <div className="product">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/IPod_Shuffle_4G.svg" alt="iPod Shuffle" width="120" />
                        <h3>iPod Shuffle</h3>
                        <p>Ultra-portable and lightweight, perfect for on-the-go music.</p>
                        <button>Buy Now</button>
                    </div>

                    <div className="product">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/5th_Generation_iPod_Touch.svg" alt="iPod Touch" width="120" />
                        <h3>iPod Touch</h3>
                        <p>Music, apps, and games in one sleek touchscreen device.</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </section>

            <section id="features">
                <div className="features-container">
                    <div className="feature">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/IPod_wheel.svg" alt="iPod Wheel" width="60" />
                        <div className="feature-text">
                            <h3>Classic Design</h3>
                            <p>Iconic click wheel and compact design that changed music forever.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src="https://openclipart.org/image/800px/172047" alt="Shuffle Icon" width="60" />
                        <div className="feature-text">
                            <h3>Portable &amp; Lightweight</h3>
                            <p>Take thousands of songs wherever you go with ultra-lightweight models.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/alan-ui/ios-battery-full-3.png" alt="Battery" width="60" />
                        <div className="feature-text">
                            <h3>Long Battery Life</h3>
                            <p>Enjoy up to 40 hours of music playback without worrying about charging.</p>
                        </div>
                    </div>
                </div>

                <iframe id="video" width="560" height="560"
                    src="https://www.youtube.com/embed/00lLrwHQPns?si=ddKUtGIJzZLxRU47"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </section>

            <section id="pricing">
                <div className="pricing-container">
                    <div className="pricing-card">
                        <h3>iPod Classic</h3>
                        <p className="price">$149</p>
                        <ul>
                            <li>160 GB Storage</li>
                            <li>Click Wheel Interface</li>
                            <li>Up to 36 hours Battery Life</li>
                        </ul>
                        <button>Buy Now</button>
                    </div>

                    <div className="pricing-card">
                        <h3>iPod Shuffle</h3>
                        <p className="price">$49</p>
                        <ul>
                            <li>2 GB Storage</li>
                            <li>Ultra-lightweight &amp; Portable</li>
                            <li>Up to 15 hours Battery Life</li>
                        </ul>
                        <button>Buy Now</button>
                    </div>

                    <div className="pricing-card">
                        <h3>iPod Touch</h3>
                        <p className="price">$199</p>
                        <ul>
                            <li>32 GB Storage</li>
                            <li>Touchscreen Interface</li>
                            <li>Apps, Games &amp; Music</li>
                        </ul>
                        <button>Buy Now</button>
                    </div>
                </div>
            </section>
        </main>
    </>;
}
