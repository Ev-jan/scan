import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from './../theme.tsx';
import GlobalStyle from './../globalstyle.ts';
import store, { persistor } from "./store";
import { PersistGate } from 'redux-persist/integration/react';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                <GlobalStyle />
                    {children}
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}
