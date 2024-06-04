import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [paymentsValue, setPaymentsValue] = useState(null);
    const [versioningValue, setVersioningValue] = useState(null);

    const fetchPaymentsData = async () => {
        try {
            const response = await fetch("http://34.218.248.98:30449/api/payments", {
                headers: {
                    Accept: "application/json",
                },
            });
            const data = await response.json();
            if (response.ok) {
                setPaymentsValue(data);
            } else {
                setPaymentsValue(null);
            }
        } catch (error) {
            setPaymentsValue(null);
        }
    };

    const fetchVersioningData = async () => {
        try {
            const response = await fetch(
                "http://34.218.248.98:30449/api/versioning", 
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            const data = await response.json();
            if (response.ok) {
                setVersioningValue(data);
            } else {
                setVersioningValue(null);
            }
        } catch (error) {
            setVersioningValue(null);
        }
    };

    useEffect(() => {
        fetchPaymentsData();
        fetchVersioningData();
    }, []);

    return (
        <div className="api-call">
            <header className="api-call__header">
                <h1 className="api-call__title">API Call Example</h1>
            </header>
            <main className="api-call__main">
                <div>
                    <p className="api-call__message">
                        Payments Status:{" "}
                        <span
                            className={`${
                                paymentsValue !== null
                                    ? "api-call__message--success"
                                    : "api-call__message--error"
                            }`}
                        >
                            {paymentsValue !== null ? (
                                <>
                                    <span>Successfully connected to API </span>
                                    <br />
                                    <span>{paymentsValue.responseDate}</span>
                                </>
                            ) : (
                                "Failed to connect to API"
                            )}
                        </span>
                    </p>
                </div>

                <div>
                    <p className="api-call__message">
                        Versioning Status:{" "}
                        <span
                            className={`${
                                versioningValue !== null
                                    ? "api-call__message--success"
                                    : "api-call__message--error"
                            }`}
                        >
                            {versioningValue !== null ? (
                                <>
                                           
                                    <span>
                                        Successfully connected to API{" "}
                                        {versioningValue.version}
                                    </span>
                                    
                               
                                </>
                            ) : (
                                "Failed to connect to API"
                            )}
                        </span>
                    </p>
                </div>
            </main>
            <footer className="api-call__footer">
                <p className="api-call__copyright"></p>
            </footer>
        </div>
    );
}

export default App;
