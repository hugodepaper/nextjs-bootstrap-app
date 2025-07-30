(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/coinmarketcap.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// API key from the user
__turbopack_context__.s({
    "fetchCryptocurrencyData": (()=>fetchCryptocurrencyData),
    "fetchMultipleCryptocurrencies": (()=>fetchMultipleCryptocurrencies)
});
const API_KEY = "92fe215e-edac-4a39-9b6c-f4bb30805ec4";
const BASE_URL = "https://pro-api.coinmarketcap.com/v1";
const fetchCryptocurrencyData = async (symbol)=>{
    try {
        const response = await fetch(`${BASE_URL}/cryptocurrency/quotes/latest?symbol=${symbol}&convert=USD`, {
            headers: {
                "X-CMC_PRO_API_KEY": API_KEY
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.status.error_code !== 0) {
            throw new Error(data.status.error_message);
        }
        // Return the first cryptocurrency in the response
        const cryptoKey = Object.keys(data.data)[0];
        return data.data[cryptoKey];
    } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
        return null;
    }
};
const fetchMultipleCryptocurrencies = async (symbols)=>{
    try {
        const response = await fetch(`${BASE_URL}/cryptocurrency/quotes/latest?symbol=${symbols.join(",")}&convert=USD`, {
            headers: {
                "X-CMC_PRO_API_KEY": API_KEY
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.status.error_code !== 0) {
            throw new Error(data.status.error_message);
        }
        // Convert the data object to an array of cryptocurrencies
        const cryptocurrencies = [];
        for(const key in data.data){
            cryptocurrencies.push(data.data[key]);
        }
        return cryptocurrencies;
    } catch (error) {
        console.error("Error fetching multiple cryptocurrencies:", error);
        return null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/api-test/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ApiTest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$coinmarketcap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/coinmarketcap.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ApiTest() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ApiTest.useEffect": ()=>{
            const fetchData = {
                "ApiTest.useEffect.fetchData": async ()=>{
                    try {
                        setLoading(true);
                        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$coinmarketcap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCryptocurrencyData"])("BTC");
                        setData(result);
                    } catch (err) {
                        setError(err instanceof Error ? err.message : "An unknown error occurred");
                        console.error("Error fetching data:", err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["ApiTest.useEffect.fetchData"];
            fetchData();
        }
    }["ApiTest.useEffect"], []);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/app/api-test/page.tsx",
        lineNumber: 28,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 text-red-500",
        children: [
            "Error: ",
            error
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/api-test/page.tsx",
        lineNumber: 29,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "API Test Results"
            }, void 0, false, {
                fileName: "[project]/src/app/api-test/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold",
                        children: [
                            data.name,
                            " (",
                            data.symbol,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/api-test/page.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Price: $",
                            data.quote.USD.price.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/api-test/page.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "24h Change: ",
                            data.quote.USD.percent_change_24h.toFixed(2),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/api-test/page.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Market Cap: $",
                            data.quote.USD.market_cap.toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/api-test/page.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Volume 24h: $",
                            data.quote.USD.volume_24h.toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/api-test/page.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/api-test/page.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No data available"
            }, void 0, false, {
                fileName: "[project]/src/app/api-test/page.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/api-test/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(ApiTest, "RiL7vLwmC7ZWXKL/bXt2EIBjBYk=");
_c = ApiTest;
var _c;
__turbopack_context__.k.register(_c, "ApiTest");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_2c3031c9._.js.map