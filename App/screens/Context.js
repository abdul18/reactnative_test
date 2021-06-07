import { createContext } from "react";

const defaultValue = {
    baseCurrency: "USD",
    quoteCurrency: "HKD",
    conversionRate: "9.1324",
    setBaseCurrencyValue: () => {},
    setQuoteCurrencyValue: () => {},
    setConversionRateValue: () => {}
};

const RateContext = createContext(defaultValue);
export const RateProvider = RateContext.Provider;
export const RateConsumer = RateContext.Consumer;

export default RateContext;
