
const Footer = ({ lists = [] }) => {
    const footerLists = [...lists, ...Array(5 - lists.length).fill({ title: '', items: [] })].slice(0, 5);

    return (
        <footer className="custom-footer">
            <div className="footer-content">

                <div className="footer-main-columns">
                    {footerLists.slice(0, 3).map((list, index) => (
                        <div key={index} className="footer-column">
                            {list.title && <h3 className="column-title">{list.title}</h3>}
                            <ul className="column-list">
                                {list.items && list.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="list-item">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="footer-side-columns">
                    {footerLists.slice(3, 5).map((list, index) => (
                        <div key={index + 3} className="footer-column">
                            {list.title && <h3 className="column-title">{list.title}</h3>}
                            <ul className="column-list">
                                {list.items && list.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="list-item">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-copyright">
                    <div className="copyright-text">
                        <p>Copyright © 1995-2026 eBay Inc. Tutti i diritti riservati.</p>
                        <div className="legal-links">
                            <a>Accessibilità</a>,
                            <a>Accordo per gli utenti</a>,
                            <a>Privacy</a>,
                            <a>Condizioni di utilizzo dei servizi di pagamento</a>,
                            <a>Cookie e AdChoice</a>
                        </div>
                    </div>
                </div>

                <div className="ebay-sites">
                    <span>Siti eBay</span>
                    <div className="country-selector">
                        <span className="country-text">Italia</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;