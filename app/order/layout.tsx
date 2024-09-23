

//children sera el contenido de cada una de las paginas hijo

import OrderSideBar from "@/components/order/OrderSideBar";
import OrderSummary from "@/components/order/OrderSummary";
import ToastNotification from "@/components/ui/ToastNotification";

//indica cada uno de los segmentos hijos que se va a inyectar a traves de children
export default function RootLayout({children, }: Readonly<{children: React.ReactNode}>) {
    return (
        <>
            <div className="md:flex">
                <OrderSideBar />

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
                    {children}
                </main>

                <OrderSummary />
            </div>

            <ToastNotification />
        </>
    )
}